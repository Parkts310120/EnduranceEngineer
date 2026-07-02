# Endurance Engineer - Domain Model

## Product positioning

Endurance Engineer is the operating system for endurance racing teams.

The product is team-centered, not driver-centered.

---

## Core hierarchy

Organization
  -> Team
    -> Members
    -> Squads
    -> Cars
    -> Events
      -> Race Workspace
        -> Planner
        -> Race Book
        -> Strategy
        -> Checklist
        -> Notes
        -> Telemetry
        -> AI Reports

---

## Organization

Represents the top-level account.

Example:
- Titan Racing
- Apex Endurance
- Williams Esports

Rules:
- An organization can have multiple teams.
- An organization owns billing, permissions and global settings.

---

## Team

Represents a racing division inside an organization.

Examples:
- GT3 Pro
- GT3 AM
- Prototype Team
- Academy Team

Rules:
- A team belongs to one organization.
- A team has members, squads, cars and events.

---

## Member

Represents any person inside a team.

A member is not always a driver.

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

Driver-specific fields:
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
- Only members with driver role can be assigned to driving stints.

---

## Squad

Represents the group selected for a race or season.

This replaces the old idea of Lineup.

Examples:
- Spa 24h Squad
- Daytona GT3 Pro Squad
- Endurance Series Round 1 Squad

A squad may include:
- drivers
- race engineers
- strategists
- spotters
- team managers

Rules:
- A squad belongs to one team.
- A squad can contain many members.
- A squad can be reused across multiple events.
- A race event uses one primary squad.

---

## SquadMember

Represents a member inside a squad.

Fields:
- squad_id
- member_id
- role_in_squad
- is_reserve
- notes

Examples:
- Lucas as driver
- João as race engineer
- Carlos as spotter
- Pedro as reserve driver

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
- An event uses one main car.

---

## Event

Represents a race weekend.

Examples:
- Spa 24h
- Daytona 24h
- Petit Le Mans
- Le Mans 24h

Fields:
- team_id
- squad_id
- car_id
- track_id
- name
- start_datetime
- duration_hours
- timezone
- stint_estimated_minutes
- pit_stop_seconds
- notes

Rules:
- An event belongs to one team.
- An event uses one squad.
- An event uses one car.
- An event creates one Race Workspace.

---

## Race Workspace

Represents the operational hub for one event.

Modules:
- Dashboard
- Members
- Planner
- Race Book
- Strategy
- Checklist
- Notes
- Files
- Telemetry
- AI Reports

Rules:
- The workspace is where the team operates the race.
- The dashboard should show what the team needs to do now.
- The workspace is event-specific.

---

## Planner

Generates and manages stints.

Inputs:
- event duration
- stint duration estimate
- squad drivers
- driver availability
- max hours
- rest rules
- fatigue rules
- preferred race blocks

Outputs:
- planned stints
- driver ready windows
- fatigue warnings
- schedule conflicts

Rules:
- Only squad members with driver role can receive stints.
- The planner must support recalculation during the race.
- Stint times are estimates, not fixed absolute truth.

---

## Race Book

Represents the structured documentation for a race weekend.

Sections:
- weekend schedule
- server information
- Discord information
- car setup notes
- pit rules
- fuel notes
- tyre notes
- driver briefing
- track limits
- procedures
- emergency plan
- checklist

Rules:
- Race Book replaces Google Docs / Notion / scattered notes.
- Race Book belongs to one event workspace.

---

## Strategy

Represents fuel, tyre and pit planning.

Future areas:
- fuel stint length
- tyre double stint
- pit windows
- lift and coast plans
- safety car scenarios
- rain scenarios

---

## Telemetry

Represents telemetry sessions connected to an event.

Future areas:
- fuel usage
- tyre degradation
- lift and coast efficiency
- driver comparison
- stint analysis

---

## AI Engineer

Represents future AI-generated recommendations.

Future examples:
- driver fatigue alerts
- fuel saving recommendations
- tyre management analysis
- race debriefs
- lift and coast instructions

---

## Important naming decisions

Use Member instead of Driver as the main person entity.

Use Squad instead of Lineup.

Use Event for a race weekend.

Use Race Workspace for the operational area of one event.

---

## MVP scope

The first MVP includes:
- Organization
- Team
- Members
- Squads
- Cars
- Events
- Race Workspace
- Planner
- Race Book

The first MVP does not include:
- AI
- voice engineer
- live telemetry
- payments
- public team sharing
