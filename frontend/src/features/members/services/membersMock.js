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
    name: 'Spa 24h Squad',
    memberIds: ['joao', 'pedro', 'lucas', 'rafael', 'carlos'],
    reserveMemberIds: ['carlos'],
  },
]
