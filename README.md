# Endurance Engineer

Endurance Engineer is a workspace-centered operating system for endurance racing teams.

The product is not just a stint planner. It is designed around organizations, teams, members, squads, cars and operational workspaces.

## Current stack

- Frontend: React + Vite + React Router
- Data: mocked frontend data
- Python: temporary root-level `stint_planner.py` script
- Backend web/API: not implemented yet
- Database: not implemented yet

## Domain hierarchy

```text
Organization
  -> Team
    -> Member
    -> Squad
    -> Car
    -> Workspace
      -> Plans
      -> Documents
      -> Files
      -> Reports
      -> Settings
```

Driver is a role of Member, not a primary entity.

## Run the frontend

```bash
cd frontend
npm install
npm run dev
```

## Build the frontend

```bash
cd frontend
npm run build
```

## Lint the frontend

```bash
cd frontend
npm run lint
```

## Run the temporary stint planner

```bash
python stint_planner.py
```

The planner currently reads `config.json` from the repository root. It remains temporary and will be revisited in a future backend integration Sprint.

## Milestone 2 — Mission Control

The Workspace Overview now acts as Mission Control: a card-based operational summary for race preparation.

Mission Control remains frontend-only and uses mocked data. It surfaces workspace status, next action, countdown, preparation progress, module readiness, team status and upcoming schedule without adding backend, database, authentication, AI or telemetry.
