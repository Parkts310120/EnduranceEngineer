export const MEMBER_ROLES = {
  driver: 'Driver',
  race_engineer: 'Race Engineer',
  strategist: 'Strategist',
  spotter: 'Spotter',
  team_manager: 'Team Manager',
  analyst: 'Analyst',
}

export const WORKSPACE_TYPES = {
  race: 'Race',
  championship: 'Championship',
  training: 'Training',
  test_day: 'Test Day',
}

export const WORKSPACE_STATUSES = {
  planning: 'Planning',
  ready: 'Ready',
  active: 'Active',
  finished: 'Finished',
  archived: 'Archived',
}

export const WORKSPACE_NAVIGATION = [
  { label: 'Overview', path: '' },
  { label: 'Members', path: 'members' },
  { label: 'Documents', path: 'documents' },
  { label: 'Plans', path: 'plans' },
  { label: 'Live Race', path: 'live' },
  { label: 'Cars', path: 'cars' },
  { label: 'Files', path: 'files' },
  { label: 'Reports', path: 'reports' },
  { label: 'Settings', path: 'settings' },
]
