import json
from datetime import datetime, timedelta


def to_minutes(hora):
    h, m = map(int, hora.split(":"))
    return h * 60 + m


def in_window(minuto, inicio, fim):
    ini = to_minutes(inicio)
    end = to_minutes(fim)

    minuto = minuto % 1440

    if ini <= end:
        return ini <= minuto < end

    return minuto >= ini or minuto < end


def gerar_stints(corrida, regras):
    inicio_min = to_minutes(corrida["inicio"])
    duracao_total_min = corrida["duracao_horas"] * 60
    stint_min = corrida["duracao_stint_min"]
    min_stint_final = regras.get("min_stint_final_min", 25)

    stints = []
    atual = 0
    numero = 1

    while atual < duracao_total_min:
        fim = min(atual + stint_min, duracao_total_min)

        tempo_restante = duracao_total_min - fim

        if 0 < tempo_restante < min_stint_final:
            fim = duracao_total_min

        stints.append({
            "numero": numero,
            "inicio_abs": atual,
            "fim_abs": fim,
            "inicio_clock": (inicio_min + atual) % 1440,
            "fim_clock": (inicio_min + fim) % 1440
        })

        atual = fim
        numero += 1

    return stints


def fmt(minuto):
    minuto = minuto % 1440
    return f"{minuto // 60:02d}:{minuto % 60:02d}"


def bloco_do_stint(stint, blocos):
    inicio = stint["inicio_clock"]

    for bloco in blocos:
        if in_window(inicio, bloco["inicio"], bloco["fim"]):
            return bloco

    return None


def piloto_disponivel(piloto, stint):
    inicio = stint["inicio_clock"]

    for janela in piloto["disponivel"]:
        if in_window(inicio, janela[0], janela[1]):
            return True

    return False


def periodo_do_dia(minuto):
    h = (minuto % 1440) // 60

    if 0 <= h < 6:
        return "madrugada"
    if 6 <= h < 18:
        return "dia"
    return "noite"


def pode_correr(piloto, stint, estado, regras):
    nome = piloto["nome"]
    duracao_stint_horas = (stint["fim_abs"] - stint["inicio_abs"]) / 60

    if not piloto_disponivel(piloto, stint):
        return False, "indisponivel"

    if estado[nome]["horas"] + duracao_stint_horas > piloto["max_horas"]:
        return False, "limite de horas"

    if estado[nome]["seguidos"] >= piloto["max_stints_seguidos"]:
        return False, "max stints seguidos"

    ultimo_fim = estado[nome]["ultimo_fim"]
    ultimos_seguidos = estado[nome]["ultimo_bloco_seguidos"]

    if ultimo_fim is not None and estado[nome]["seguidos"] == 0:
        descanso = stint["inicio_abs"] - ultimo_fim

        descanso_min = regras["descanso_min_apos_1_stint"]

        if ultimos_seguidos >= 2:
            descanso_min = regras["descanso_min_apos_2_stints"]

        if descanso < descanso_min:
            return False, "descanso insuficiente"

    return True, ""


def score_piloto(piloto, stint, bloco, estado, piloto_anterior, regras):
    nome = piloto["nome"]
    periodo = periodo_do_dia(stint["inicio_clock"])

    score = 0

    score += piloto["preferencias"].get(periodo, 5) * 10
    score += piloto["preferencias"].get("consistencia", 5) * 3
    score += piloto["preferencias"].get("fuel_saving", 5) * 2
    score += piloto["preferencias"].get("pneus", 5) * 2

    score -= estado[nome]["horas"] * 8
    score -= estado[nome]["fadiga"] * 5

    if bloco:
        if nome in bloco["pilotos_preferidos"]:
            score += 30
        elif nome in bloco["reservas"]:
            score += 5
        else:
            score -= 25

    if regras.get("preferir_alternancia", False) and piloto_anterior == nome:
        score -= regras.get("penalidade_stint_seguido", 40)

        blocos_double = regras.get("double_stint_apenas_em_blocos", [])
        nome_bloco = bloco["nome"] if bloco else ""

        if regras.get("permitir_double_stint", True) and nome_bloco in blocos_double:
            score += 25

    if stint["numero"] == 1 and piloto["pode_largada"]:
        score += 50

    return score


def gerar_escala(config):
    corrida = config["corrida"]
    regras = config["regras"]
    pilotos = config["pilotos"]
    blocos = config["blocos"]

    stints = gerar_stints(corrida, regras)

    estado = {
        p["nome"]: {
            "horas": 0,
            "stints": 0,
            "seguidos": 0,
            "ultimo_fim": None,
            "ultimo_bloco_seguidos": 0,
            "fadiga": 0
        }
        for p in pilotos
    }

    escala = []
    piloto_anterior = None

    for stint in stints:
        bloco = bloco_do_stint(stint, blocos)
        candidatos = []

        for piloto in pilotos:
            ok, motivo = pode_correr(piloto, stint, estado, regras)

            if ok:
                candidatos.append((score_piloto(piloto, stint, bloco, estado, piloto_anterior, regras), piloto))

        if not candidatos:
            escala.append({
                "stint": stint,
                "piloto": "SEM PILOTO",
                "bloco": bloco["nome"] if bloco else "Sem bloco"
            })
            piloto_anterior = None
            continue

        candidatos.sort(key=lambda x: x[0], reverse=True)
        escolhido = candidatos[0][1]
        nome = escolhido["nome"]

        duracao_horas = (stint["fim_abs"] - stint["inicio_abs"]) / 60

        for p in estado:
            if p == nome:
                if piloto_anterior == nome:
                    estado[p]["seguidos"] += 1
                else:
                    estado[p]["seguidos"] = 1

                estado[p]["ultimo_bloco_seguidos"] = estado[p]["seguidos"]
                estado[p]["ultimo_fim"] = stint["fim_abs"]
                estado[p]["horas"] += duracao_horas
                estado[p]["stints"] += 1
                estado[p]["fadiga"] += 1
            else:
                estado[p]["seguidos"] = 0
                estado[p]["fadiga"] = max(0, estado[p]["fadiga"] - 0.5)

        escala.append({
            "stint": stint,
            "piloto": nome,
            "bloco": bloco["nome"] if bloco else "Sem bloco"
        })

        piloto_anterior = nome

    return escala, estado


def imprimir(escala, estado, config):
    print(f"\n{config['corrida']['nome']} - Planejamento de Stints\n")

    for item in escala:
        stint = item["stint"]

        print(
            f"Stint {stint['numero']:02d} | "
            f"{fmt(stint['inicio_clock'])} - {fmt(stint['fim_clock'])} | "
            f"{item['piloto']} | "
            f"{item['bloco']}"
        )

    print("\nResumo por piloto\n")

    for nome, dados in estado.items():
        print(
            f"{nome}: "
            f"{dados['stints']} stints | "
            f"{dados['horas']:.2f}h | "
            f"fadiga final {dados['fadiga']:.1f}"
        )


if __name__ == "__main__":
    with open("config.json", "r", encoding="utf-8") as file:
        config = json.load(file)

    escala, estado = gerar_escala(config)
    imprimir(escala, estado, config)
