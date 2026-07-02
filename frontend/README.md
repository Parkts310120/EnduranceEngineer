# Endurance Engineer Frontend

React + Vite frontend for the Endurance Engineer MVP.

## Architecture

```text
src/
  app/        App bootstrap, router and global styles
  domain/     Small mocked domain layer
  features/   Product features and workspace screens
  shared/     Shared layout and UI primitives
  services/   Reserved for future integrations
  hooks/      Reserved for shared React hooks
  utils/      Reserved for shared utilities
```

## Commands

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Mission Control

The workspace overview renders Mission Control from mocked workspace services and reusable workspace cards. The UI consumes derived data for progress, checklist, next action, countdown and team status.
