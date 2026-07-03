# Coding Standards

Sempre:

- Componentes pequenos
- Services separados
- Código legível
- Sem duplicação

Nunca:

- Colocar mocks na UI
- Misturar regra de negócio com JSX
- Criar componentes gigantes

---

# Commits

Commits pequenos.

Um módulo por commit.

Mensagem clara.

Exemplo:

Add Members Module MVP

---

# Testes

Sempre executar:

npm run build

npm run lint

Antes de qualquer commit.

---

# Organização

Feature First.

Nada de componentes globais sem necessidade.

Sempre reutilizar shared/ui.