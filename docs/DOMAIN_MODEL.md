# Endurance Engineer - Domain Model

## Product positioning

Endurance Engineer is the operating system for endurance racing teams.

The product is team-centered and workspace-centered, not driver-centered and not stint-planner-centered.

---

## Core hierarchy

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

This hierarchy is the shared language for product, frontend, future backend and documentation.

---

## Organization

Represents the top-level account.

Examples:
- Titan Racing
- Apex Endurance
- Williams Esports

Rules:
- An organization can have multiple teams.
- An organization owns billing, permissions and global settings in future SaaS versions.
- An organization is not tied to a single race or simulator.

---

## Team

Represents a racing division inside an organization.

Examples:
- GT3 Pro Team
- GT3 AM Team
- Prototype Team
- Academy Team

Rules:
- A team belongs to one organization.
- A team owns members, squads, cars and workspaces.
- A team is the main operational container for endurance activity.

---

## Member

Represents any person inside a team.

A member is not always a driver. Driver is a role of a member.

Roles:
- driver
- race_engineer
- strategist
- spotter
- team_manager
- analyst

Common fields:
- name
- country
- timezone
- discord
- email
- phone
- notes
- roles

Driver-role fields:
- irating
- license_class
- pace_rating
- consistency_rating
- fuel_saving_rating
- tyre_management_rating
- night_rating
- rain_rating
- traffic_rating
- pressure_rating

Rules:
- A member can have multiple roles.
- A member can belong to multiple squads.
- Only members with the driver role can be assigned to driving stints.
- The codebase should not use Driver as a primary entity name.

---

## Squad

Represents the group selected for a workspace.

Examples:
- Spa 24h Squad
- Daytona GT3 Pro Squad
- Training Crew
- Test Day Crew

A squad may include:
- drivers
- race engineers
- strategists
- spotters
- team managers
- analysts

Rules:
- A squad belongs to one team.
- A squad can contain many members.
- A squad can be reused across multiple workspaces.
- A workspace uses one primary squad at a time.

---

## Car

Represents a car used by a team.

Examples:
- Ford Mustang GT3
- BMW M4 GT3
- Ferrari 296 GT3

Fields:
- simulator
- name
- class
- fuel_tank_liters
- notes

Rules:
- A team can have many cars.
- A workspace can select one primary car.
- Cars are team assets, not workspace-only records.

---

## Workspace

Represents the operational hub for one endurance activity.

The workspace is the main product object.

Workspace types:
- race
- championship
- training
- test_day

Workspace statuses:
- planning
- ready
- active
- finished
- archived

Modules:
- Overview
- Members
- Documents
- Plans
- Files
- Reports
- Settings

Rules:
- A workspace belongs to one team.
- A workspace uses one primary squad.
- A workspace may use one primary car.
- A workspace is not always a race.
- Future telemetry, AI and backend integrations should attach to the workspace boundary.

---

## Plans

Plans represent operational planning inside a workspace.

Examples:
- Stint Plan
- Fuel Plan
- Tire Plan
- Strategy Plan
- Contingency Plan

Rules:
- A plan belongs to a workspace.
- A workspace can have many plans.
- A plan can be draft, approved, active, finished or archived.
- Stint planning is one plan type, not the whole product.
