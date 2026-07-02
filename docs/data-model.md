# Endurance Engineer - Data Model

## Core idea

Endurance Engineer is built around teams and workspaces.

A team owns members, squads, cars and workspaces. A workspace owns the operational modules needed for a race, championship, training session or test day.

---

## Current MVP data strategy

The current MVP does not use a database or backend web service.

Frontend data is centralized in:

```text
frontend/src/domain/mockData.js
frontend/src/domain/constants.js
frontend/src/domain/types.js
```

The domain folder is intentionally small during this Sprint.

---

## Entities

### Organization

Fields:
- id
- name
- country
- timezone

Relations:
- has many teams

---

### Team

Fields:
- id
- organization_id
- name
- category
- status

Relations:
- belongs to organization
- has many members
- has many squads
- has many cars
- has many workspaces

---

### Member

Fields:
- id
- team_id
- name
- timezone
- roles
- strengths
- status
- avatar
- notes

Role values:
- driver
- race_engineer
- strategist
- spotter
- team_manager
- analyst

Driver-specific optional fields:
- irating
- license_class
- max_total_hours
- max_consecutive_stints
- minimum_rest_minutes
- can_start_race
- can_finish_race
- pace_rating
- consistency_rating
- fuel_saving_rating
- tyre_management_rating
- night_rating
- rain_rating
- traffic_rating
- pressure_rating

Important rule:
- Driver is not a primary entity. It is a role on Member.

---

### Squad

Fields:
- id
- team_id
- name
- member_ids
- reserve_member_ids
- notes

Relations:
- belongs to team
- has many members
- can be selected by many workspaces over time

---

### Car

Fields:
- id
- team_id
- simulator
- name
- class
- fuel_tank_liters
- status
- notes

Relations:
- belongs to team
- can be selected by a workspace

---

### Workspace

Fields:
- id
- team_id
- type
- name
- status
- car_id
- squad_id
- track_name
- duration_hours
- timezone
- phase_progress
- summary

Type values:
- race
- championship
- training
- test_day

Status values:
- planning
- ready
- active
- finished
- archived

Relations:
- belongs to team
- references one primary squad
- references one primary car when relevant
- has many plans, documents, files and reports

---

### WorkspaceDocument

Fields:
- id
- workspace_id
- title
- status
- owner

---

### WorkspacePlan

Fields:
- id
- workspace_id
- title
- status
- progress
- type

Plan types:
- stint
- fuel
- tires
- strategy
- contingency

---

### WorkspaceFile

Fields:
- id
- workspace_id
- name
- type
- status

---

### WorkspaceReport

Fields:
- id
- workspace_id
- title
- status

Reports are placeholders in this Sprint. AI and telemetry are explicitly not implemented.
