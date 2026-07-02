export const organization = {
  id: 'titan-racing',
  name: 'Titan Racing',
  country: 'Brazil',
  timezone: 'UTC-3',
}

export const team = {
  id: 'gt3-pro',
  organizationId: organization.id,
  name: 'GT3 Pro Team',
  category: 'GT3',
  status: 'Building foundation',
}

export const members = [
  {
    id: 'joao',
    name: 'Joao',
    timezone: 'UTC-3',
    roles: ['driver', 'strategist'],
    strengths: ['Fuel saving', 'Consistency', 'Day stints'],
    status: 'Available',
    avatar: 'JO',
  },
  {
    id: 'pedro',
    name: 'Pedro',
    timezone: 'UTC-3',
    roles: ['driver'],
    strengths: ['Night pace', 'Deep night focus', 'Consistency'],
    status: 'Night block',
    avatar: 'PE',
  },
  {
    id: 'lucas',
    name: 'Lucas',
    timezone: 'UTC-3',
    roles: ['driver', 'team_manager'],
    strengths: ['Pace', 'Traffic', 'Start/finish'],
    status: 'Lead driver',
    avatar: 'LU',
  },
  {
    id: 'rafael',
    name: 'Rafael',
    timezone: 'UTC-3',
    roles: ['driver', 'race_engineer'],
    strengths: ['Tyre management', 'Consistency', 'Night reserve'],
    status: 'Ready',
    avatar: 'RA',
  },
  {
    id: 'carlos',
    name: 'Carlos',
    timezone: 'UTC-3',
    roles: ['spotter', 'analyst'],
    strengths: ['Traffic calls', 'Incident review', 'Comms'],
    status: 'Support crew',
    avatar: 'CA',
  },
]

export const squads = [
  {
    id: 'spa-24h-squad',
    teamId: team.id,
    name: 'Spa 24h Squad',
    memberIds: ['joao', 'pedro', 'lucas', 'rafael', 'carlos'],
    reserveMemberIds: ['carlos'],
  },
]

export const cars = [
  {
    id: 'ford-mustang-gt3',
    teamId: team.id,
    simulator: 'iRacing',
    name: 'Ford Mustang GT3',
    class: 'GT3',
    fuelTankLiters: 120,
    status: 'Primary',
  },
  {
    id: 'bmw-m4-gt3',
    teamId: team.id,
    simulator: 'iRacing',
    name: 'BMW M4 GT3',
    class: 'GT3',
    fuelTankLiters: 120,
    status: 'Future',
  },
  {
    id: 'ferrari-296-gt3',
    teamId: team.id,
    simulator: 'iRacing',
    name: 'Ferrari 296 GT3',
    class: 'GT3',
    fuelTankLiters: 120,
    status: 'Future',
  },
]

export const workspaces = [
  {
    id: 'spa-24h',
    teamId: team.id,
    type: 'race',
    name: 'Spa 24h',
    status: 'planning',
    carId: 'ford-mustang-gt3',
    squadId: 'spa-24h-squad',
    trackName: 'Spa-Francorchamps',
    durationHours: 24,
    timezone: 'CEST',
    phaseProgress: 42,
    summary: 'Planning workspace for race procedures, members, documents and plans.',
  },
  {
    id: 'daytona-test-day',
    teamId: team.id,
    type: 'test_day',
    name: 'Daytona Test Day',
    status: 'ready',
    carId: 'bmw-m4-gt3',
    squadId: 'spa-24h-squad',
    trackName: 'Daytona',
    durationHours: 6,
    timezone: 'EST',
    phaseProgress: 72,
    summary: 'Future test day workspace for setup validation and team practice.',
  },
]

export const documents = [
  { id: 'race-book', title: 'Race Book', status: 'Draft', owner: 'Team Manager' },
  { id: 'driver-briefing', title: 'Driver Briefing', status: 'Review', owner: 'Race Engineer' },
  { id: 'procedures', title: 'Pit & Comms Procedures', status: 'Ready', owner: 'Strategist' },
]

export const plans = [
  { id: 'stint-plan', title: 'Stint Plan', status: 'Draft', progress: 65 },
  { id: 'fuel-plan', title: 'Fuel Plan', status: 'Draft', progress: 35 },
  { id: 'contingency-plan', title: 'Contingency Plan', status: 'Not started', progress: 10 },
]

export const files = [
  { id: 'setup', name: 'spa_mustang_race.sto', type: 'Setup', status: 'Ready' },
  { id: 'track-map', name: 'spa_reference_map.pdf', type: 'Reference', status: 'Draft' },
]

export const reports = [
  { id: 'prep-report', title: 'Preparation Report', status: 'Future' },
  { id: 'post-race', title: 'Post-race Debrief', status: 'Future' },
]
