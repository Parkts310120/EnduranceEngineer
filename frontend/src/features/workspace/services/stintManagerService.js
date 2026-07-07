const stintTimeline = [
  { id: 1, driver: 'Joao', start: '14:00', end: '15:00', status: 'completed' },
  { id: 2, driver: 'Pedro', start: '15:00', end: '16:00', status: 'completed' },
  { id: 3, driver: 'Lucas', start: '16:00', end: '17:00', status: 'current' },
  { id: 4, driver: 'Rafael', start: '17:00', end: '18:00', status: 'next' },
  { id: 5, driver: 'Joao', start: '18:00', end: '19:00', status: 'planned' },
]

const tone = {
  completed: 'success',
  current: 'accent',
  next: 'warning',
  planned: 'neutral',
}

export function getStintManager() {
  return {
    hero: {
      title: 'Stint Manager',
      description: 'Manage the current driver, upcoming stints and race rotation from one place.',
      status: 'Race running',
      focus: '24 Hours of Spa',
    },
    summary: [
      { label: 'Current Driver', value: 'Lucas', detail: 'Driving now' },
      { label: 'Current Stint', value: '42 min', detail: 'Elapsed' },
      { label: 'Next Pit', value: '18 min', detail: 'Estimated' },
      { label: 'Completed', value: '2', detail: 'Finished stints' },
    ],
    timeline: stintTimeline.map((item) => ({
      ...item,
      tone: tone[item.status],
    })),
    alerts: [
      {
        id: 1,
        severity: 'warning',
        title: 'Prepare Rafael',
        message: 'Next scheduled driver in approximately 18 minutes.',
      },
      {
        id: 2,
        severity: 'info',
        title: 'Fuel window',
        message: 'Pit stop expected together with next driver swap.',
      },
    ],
  }
}
