# Endurance Engineer - Data Model

## Core idea

Endurance Engineer is built around teams, not only races.

A team owns drivers, cars, tracks, race events, race plans, stints, telemetry sessions and AI reports.

---

## Main entities

### Team

Represents a racing team.

Fields:
- id
- name
- country
- timezone
- created_at

Relations:
- has many drivers
- has many cars
- has many race events

---

### Driver

Represents a driver inside a team.

Fields:
- id
- team_id
- name
- nickname
- timezone
- irating
- license_class
- max_total_hours
- max_consecutive_stints
- minimum_rest_minutes
- can_start_race
- can_finish_race
- notes

Performance ratings:
- pace_rating
- consistency_rating
- fuel_saving_rating
- tyre_management_rating
- night_rating
- rain_rating
- traffic_rating
- pressure_rating

Future metrics:
- avg_fuel_per_lap
- avg_incidents_per_hour
- avg_tyre_wear
- avg_lap_time_delta
- fatigue_profile

---

### Car

Represents a car used by the team.

Fields:
- id
- team_id
- simulator
- name
- class
- fuel_tank_liters
- notes

Examples:
- iRacing Ford Mustang GT3
- BMW M4 GT3
- Ferrari 296 GT3

---

### Track

Represents a circuit.

Fields:
- id
- name
- simulator
- layout
- length_km
- timezone
- notes

Examples:
- Spa-Francorchamps
- Daytona
- Le Mans
- Sebring

---

### RaceEvent

Represents a specific race.

Fields:
- id
- team_id
- track_id
- car_id
- name
- start_datetime
- duration_hours
- race_timezone
- stint_estimated_minutes
- stint_min_minutes
- stint_max_minutes
- pit_stop_seconds
- notes

Examples:
- Spa 24h
- Daytona 24h
- Petit Le Mans

---

### DriverAvailability

Represents when a driver can race.

Fields:
- id
- race_event_id
- driver_id
- available_from
- available_to
- preference_level
- notes

Use cases:
- João unavailable from 03:00 to 06:00
- Pedro prefers night stints

---

### RaceBlock

Represents blocks of the race.

Fields:
- id
- race_event_id
- name
- start_time
- end_time
- block_type
- notes

Block types:
- start
- day
- night
- deep_night
- morning
- finish

Examples:
- Start block: 14:00-18:00
- Deep night: 00:00-06:00
- Finish: 11:00-14:00

---

### RaceBlockDriver

Defines which drivers should cover each race block.

Fields:
- id
- race_block_id
- driver_id
- role

Roles:
- preferred
- reserve
- avoid

---

### RacePlan

Represents a generated plan for a race.

Fields:
- id
- race_event_id
- name
- version
- status
- created_at
- notes

Statuses:
- draft
- approved
- active
- finished

Examples:
- Plan A
- Conservative night plan
- Fuel saving plan

---

### Stint

Represents one stint in a race plan.

Fields:
- id
- race_plan_id
- number
- driver_id
- block_id
- planned_start
- planned_end
- start_window_min
- start_window_max
- ready_at
- stint_type
- status
- notes

Stint types:
- normal
- push
- fuel_save
- double_stint_tyre
- safety_car_adjusted

Statuses:
- planned
- ready
- driving
- completed
- skipped
- replaced

---

### DriverState

Represents live status of each driver during the race.

Fields:
- id
- race_event_id
- driver_id
- state
- updated_at

States:
- sleeping
- resting
- preparing
- ready
- in_discord
- driving
- unavailable

---

### StrategySnapshot

Represents race strategy at a point in time.

Fields:
- id
- race_event_id
- race_plan_id
- timestamp
- remaining_time
- fuel_level
- avg_fuel_per_lap
- laps_remaining
- pit_window
- estimated_pit_count
- notes

---

### TelemetrySession

Represents a captured telemetry session.

Fields:
- id
- race_event_id
- driver_id
- car_id
- track_id
- file_path
- session_type
- created_at

Session types:
- practice
- qualifying
- race
- stint_test
- fuel_save_test

---

### FuelSavePoint

Represents a lift-and-coast point on track.

Fields:
- id
- track_id
- car_id
- name
- corner
- lap_dist_pct
- lift_distance_meters
- expected_fuel_saved_liters
- expected_time_loss_seconds
- notes

Examples:
- Les Combes, lift 100m
- Bus Stop, lift 80m

---

### AIReport

Represents an AI-generated report.

Fields:
- id
- race_event_id
- driver_id
- telemetry_session_id
- report_type
- content
- created_at

Report types:
- stint_summary
- tyre_analysis
- fuel_analysis
- driver_fatigue
- race_debrief

---

## First MVP entities

For the first usable version, we only need:

1. Team
2. Driver
3. Car
4. Track
5. RaceEvent
6. RaceBlock
7. RaceBlockDriver
8. RacePlan
9. Stint

Telemetry, fuel saving, AI and live state come later.
