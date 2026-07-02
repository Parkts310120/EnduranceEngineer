# Endurance Engineer - Architecture

## Architecture principle

Endurance Engineer is a long-term SaaS product for endurance teams.

The codebase should favor clear domain language, feature ownership and replaceable integration boundaries over short-term screen-specific implementations.

---

## Frontend architecture

The frontend uses React, Vite and React Router.

The current target structure is:

```text
frontend/src/
  app/
    App.jsx
    router/AppRouter.jsx
    styles.css
  domain/
    mockData.js
    constants.js
    types.js
  features/
    organization/
    team/
    members/
    cars/
    workspace/
      WorkspaceLayout.jsx
      WorkspaceScreenRouter.jsx
      components/
      screens/
  shared/
    layout/
    ui/
  services/
  hooks/
  utils/
```

---

## Domain folder

The domain folder is intentionally small:

- `mockData.js` stores MVP mock data.
- `constants.js` stores shared enum-like domain constants.
- `types.js` stores lightweight JSDoc typedefs.

Do not create one file per entity until the domain grows enough to justify it.

---

## Feature-based structure

Each product area should live in `features/`.

A feature can own:
- screens/pages;
- local components;
- feature-specific composition.

Shared UI components should not know about domain concepts like Workspace, Member or Squad.

---

## Shared UI

Reusable visual primitives live in:

```text
frontend/src/shared/ui
```

Current primitives:
- Button
- Card
- Badge
- Input
- Progress
- Avatar

These components are intentionally small and framework-local. This is not a published design system package yet.

---

## Workspace architecture

Workspace is the central product object.

Workspace routing uses nested React Router routes:

```text
/workspaces/:workspaceId
/workspaces/:workspaceId/members
/workspaces/:workspaceId/documents
/workspaces/:workspaceId/plans
/workspaces/:workspaceId/files
/workspaces/:workspaceId/reports
/workspaces/:workspaceId/settings
```

Workspace screens live in:

```text
frontend/src/features/workspace/screens
```

Current screens:
- OverviewScreen
- MembersScreen
- DocumentsScreen
- PlansScreen
- FilesScreen
- ReportsScreen
- SettingsScreen

The workspace sidebar is navigation-aware and should use router links instead of static buttons.

---

## Reserved folders

The following folders exist as architectural placeholders:

- `services/`: future API clients and integration adapters.
- `hooks/`: shared React hooks.
- `utils/`: framework-agnostic helpers.

They should stay small until real use cases appear.

---

## Python scripts

`stint_planner.py` remains at the repository root for this Sprint.

It is a temporary planning script, not the application backend and not the product core. A future Sprint will decide how it integrates with backend services.

No backend web service, database, authentication, telemetry or AI is implemented in this Sprint.
