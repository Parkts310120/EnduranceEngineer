# PROJECT CONTEXT — ENDURANCE ENGINEER

## Função deste documento

Este arquivo é a memória oficial do projeto Endurance Engineer.

Sempre que um novo chat for iniciado, este documento deve ser usado como contexto principal para continuar o desenvolvimento sem perder decisões, arquitetura, roadmap, padrões de código e visão de produto.

---

# Visão do produto

Endurance Engineer é uma plataforma SaaS para equipes de endurance racing.

O objetivo não é criar apenas um planner, dashboard ou frontend bonito.

O objetivo é construir um sistema operacional para equipes de endurance.

A frase-guia do produto é:

The operating system for endurance racing teams.

O software deve substituir ferramentas espalhadas como:

- Excel
- Google Sheets
- Google Docs
- Notion
- Discord
- WhatsApp
- calculadoras de stint
- documentos de setup
- anotações de estratégia
- planilhas de combustível
- relatórios manuais

A longo prazo, o Endurance Engineer deve centralizar:

- preparação da corrida
- escala de pilotos
- Race Book
- planos de stint
- combustível
- pneus
- garagem
- membros da equipe
- live race mode
- telemetria
- relatórios
- IA
- integrações com simuladores
- Discord Bot
- backend SaaS
- permissões
- múltiplas equipes
- múltiplos workspaces

---

# Filosofia do projeto

Sempre pensar como produto comercial.

Nunca implementar apenas para funcionar.

Sempre preservar arquitetura.

Sempre evitar atalhos que gerem retrabalho.

Sempre separar regra de negócio da UI.

Sempre usar dados mockados enquanto o backend não existir.

Sempre construir de forma modular.

Sempre pensar em escalabilidade.

Sempre tratar cada módulo como parte de um SaaS real.

---

# Estado atual do projeto

Stack atual:

- React
- Vite
- JavaScript
- CSS modular/global dentro da estrutura atual
- Dados mockados
- Sem backend ainda
- Sem banco ainda
- Sem autenticação ainda

O frontend já possui arquitetura reorganizada baseada em Workspace.

---

# Arquitetura atual

O projeto segue arquitetura Feature First.

Padrão principal:

- screens renderizam telas
- services concentram dados mockados e lógica derivada
- components renderizam partes específicas de cada módulo
- shared/ui concentra componentes genéricos
- domain concentra constantes e mocks globais
- app concentra app, router e estilos principais

Regra:

A UI não deve conter regra de negócio pesada.

A UI deve consumir services.

Exemplo correto:

screen -> service -> dados derivados -> components

Exemplo errado:

screen com mocks, cálculo e regra de negócio embutidos.

---

# Estrutura conceitual do produto

Organization
  -> Team
    -> Workspace
      -> Mission Control
      -> Members
      -> Cars / Garage
      -> Documents / Race Book
      -> Plans / Planner
      -> Live Race
      -> Files
      -> Reports
      -> Settings

Workspace é o objeto principal do produto.

Event não deve ser o centro da arquitetura.

Um Workspace pode futuramente ser:

- Race
- Championship
- Training
- Test Day
- Season

---

# Rotas principais

As rotas seguem o padrão:

/workspaces/:workspaceId/...

Exemplos:

/workspaces/spa-24h
/workspaces/spa-24h/plans
/workspaces/spa-24h/documents
/workspaces/spa-24h/live
/workspaces/spa-24h/cars
/workspaces/spa-24h/members

---

# Módulos já implementados

Já existem:

- Workspace Foundation
- Mission Control
- Race Book
- Planner Engine MVP
- Planner integrado ao Workspace Plans
- Live Race Mode
- Garage Module MVP

Último módulo confirmado no repositório:

Garage Module MVP

Último commit conhecido:

ab24d56 Add Garage Module MVP

---

# Próximo módulo planejado

Workspace Members Module MVP

Objetivo:

Criar a tela Members dentro do Workspace.

A tela deve conter:

- Hero
- Summary Cards
- lista de membros
- Availability Panel
- Upcoming Assignments
- Recent Activity

Cada membro deve ter:

- nome
- função
- status
- disponibilidade
- próximo stint
- licença
- última atividade

Funções possíveis:

- Driver
- Race Engineer
- Strategist
- Spotter
- Team Manager
- Analyst

A tela deve consumir apenas membersService.js.

Não colocar lógica dentro da UI.

---

# Módulos futuros próximos

Após Members:

1. Documents refinado
2. Files
3. Reports
4. Settings
5. Race Mode completo
6. Backend
7. Supabase
8. Auth
9. WebSocket
10. Discord Bot
11. ACC Connector
12. iRacing Connector
13. Telemetry Hub
14. AI Race Engineer
15. Billing
16. Multi-team SaaS

---

# Ideias futuras registradas

## Produto

- Race Workspace como centro de operação
- Mission Control como tela que responde "o que preciso fazer agora?"
- Race Book como substituto de Google Docs/Notion
- Planner como substituto de Excel/Sheets
- Live Race Mode como tela aberta durante corridas de 6h, 12h, 24h
- Garage para carros, setup, pneus, combustível e manutenção
- Members para pilotos, engenheiros, spotters e managers
- Reports para pós-corrida
- Settings para configurar workspace
- Files para setups, PDFs e imagens
- AI Engineer para recomendações futuras
- Discord Bot para alertas
- Telemetry Hub para análise
- Race Control para operação em tempo real

## UX

- Visual inspirado em Linear, GitHub, Vercel e Notion
- Dark UI
- Cards grandes
- Pouca poluição visual
- leitura rápida
- dashboard operacional
- nenhum estado vazio sem ação
- botão deve levar para próxima ação
- módulos devem parecer vivos, não apenas cards estáticos

## Arquitetura futura

- Design System mais forte
- Theme tokens
- Components: Button, Card, Badge, Input, Progress, Avatar, Modal, Tabs, Dropdown
- Layout components: Container, Stack, Grid, Section
- Toast global
- Error Boundary
- Loading skeletons
- Zustand ou Context para estado global
- TanStack Query quando houver API
- React Hook Form
- Zod
- Testes
- Storybook
- CI/CD
- Docker
- Supabase
- WebSocket
- Permissions
- Feature Flags
- Audit Log
- Billing
- Multi-tenant architecture

---

# Fluxo de desenvolvimento atual

A partir deste ponto, NÃO usar Codex como desenvolvedor principal para módulos pequenos e médios.

Não usar mais:

- patch
- base64
- git apply
- fluxo complexo de Codex

Fluxo atual preferido:

1. ChatGPT atua como arquiteto e tech lead.
2. Usuário copia e cola código diretamente nos arquivos.
3. Alterações são feitas incrementalmente.
4. Um arquivo por vez quando possível.
5. Testar com npm run build e npm run lint.
6. Commit e push manualmente.

Comandos padrão após alterações:

cd /workspaces/EnduranceEngineer/frontend
npm run build
npm run lint

cd ..
git status
git add .
git commit -m "mensagem"
git push

---

# Estilo obrigatório das respostas

Responder sempre em português.

Sempre ser incremental.

Não mandar 20 arquivos de uma vez.

Sempre informar:

- arquivo
- local exato
- código completo ou trecho exato
- comando de terminal quando necessário
- aguardar confirmação do usuário

Formato ideal:

PASSO 1
Arquivo:
caminho/do/arquivo.jsx

Ação:
substituir/criar/editar

Código:
...

Depois pedir:
"Depois me fala foi."

---

# Preferência do usuário

O usuário prefere desenvolvimento passo a passo.

Ele gosta de comandos prontos.

Ele não quer explicações gigantes durante execução prática.

Ele prefere que eu diga exatamente o que colar e onde.

Ele costuma responder "foi", "bora", "ok".

Quando ele disser "bora", continuar o próximo passo.

---

# Regras técnicas

Nunca quebrar módulos existentes.

Sempre rodar build e lint antes de commit.

Não commitar arquivos temporários.

Nunca commitar:

- .patch
- .patch.gz.b64
- arquivos de teste temporários
- lixo de Codex

Se aparecerem arquivos temporários, remover antes do commit:

rm -f *.patch *.patch.gz.b64

---

# Comandos úteis para novo chat

Sempre que iniciar um novo chat, o usuário deve mandar:

git log --oneline -10
git status
tree -L 3 frontend/src

Se tree não existir:

find frontend/src -maxdepth 3 -type d | sort

Também pode mandar:

find frontend/src/features -maxdepth 3 -type f | sort

Esses comandos ajudam a reconstruir o estado real do projeto.

---

# Regra obrigatória de troca de chat

Quando o chat ficar grande, com muitas mensagens ou várias milestones concluídas, avisar explicitamente:

"Chegou a hora de abrir um novo chat."

Nesse momento, perguntar:

"Quer que eu gere o Prompt Mestre atualizado para o novo chat?"

O Prompt Mestre deve conter:

- visão do produto
- arquitetura atual
- módulos implementados
- roadmap
- decisões tomadas
- regras de desenvolvimento
- próximos passos
- comandos para capturar árvore do projeto
- estado atual do Git
- ideias futuras
- estilo de resposta esperado

---

# Prompt inicial recomendado para novo chat

Continuando o projeto Endurance Engineer.

Leia e siga o conteúdo do PROJECT_CONTEXT.md como memória oficial do projeto.

O projeto é um SaaS para equipes de endurance racing.

Já temos Workspace Foundation, Mission Control, Race Book, Planner, Live Race e Garage.

A partir de agora NÃO vamos usar Codex como desenvolvedor principal para módulos pequenos/médios.

Você deve atuar como arquiteto e tech lead.

Me guie arquivo por arquivo, de forma incremental.

Sempre informe:

- arquivo
- local
- código
- comando
- aguarde confirmação

Próximo módulo: Workspace Members Module MVP.

Antes de começar, peça para eu mandar:

git log --oneline -10
git status
tree -L 3 frontend/src

---

# Decisão atual

Continuar o desenvolvimento no próximo chat implementando:

Workspace Members Module MVP

Sem Codex.

Sem patch.

Sem base64.

Arquivo por arquivo.
