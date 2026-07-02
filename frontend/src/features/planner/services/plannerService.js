const plannerState = {
  session: {
    event: 'Spa 24h',
    track: 'Spa-Francorchamps',
    carClass: 'GT3',
    raceLength: '24h',
    startTime: 'Saturday · 16:30 CEST',
    phase: 'Race plan draft',
    readiness: 68,
  },
  drivers: [
    { id: 'joao', name: 'Joao', status: 'ready', currentBlock: 'Opening rotation', nextStint: 'Stint 01', restWindow: '4h 20m' },
    { id: 'pedro', name: 'Pedro', status: 'ready', currentBlock: 'Night specialist', nextStint: 'Stint 04', restWindow: '7h 10m' },
    { id: 'lucas', name: 'Lucas', status: 'watch', currentBlock: 'Start/finish reserve', nextStint: 'Stint 03', restWindow: '5h 45m' },
    { id: 'rafael', name: 'Rafael', status: 'ready', currentBlock: 'Tyre saver', nextStint: 'Stint 02', restWindow: '3h 55m' },
  ],
  cars: [
    { id: 'primary', name: 'Ford Mustang GT3', status: 'ready', fuel: '120 L', tyres: '6 sets mapped', setup: 'Race baseline v3' },
    { id: 'backup', name: 'BMW M4 GT3', status: 'standby', fuel: '120 L', tyres: 'Reference only', setup: 'Test day setup' },
  ],
  timeline: [
    { time: '16:30', label: 'Green flag', type: 'start' },
    { time: '18:05', label: 'First scheduled stop', type: 'pit' },
    { time: '21:20', label: 'Sunset / night procedure', type: 'phase' },
    { time: '02:10', label: 'Deep night double stint review', type: 'review' },
    { time: '07:45', label: 'Morning tyre pressure sync', type: 'phase' },
    { time: '16:30', label: 'Projected finish', type: 'finish' },
  ],
  stints: [
    { stint: '01', driver: 'Joao', window: '16:30 - 18:05', fuelTarget: '96 L', tyres: 'Set A', notes: 'Start safe, avoid off-tracks' },
    { stint: '02', driver: 'Rafael', window: '18:05 - 19:40', fuelTarget: '94 L', tyres: 'Set A', notes: 'Extend if traffic is clean' },
    { stint: '03', driver: 'Lucas', window: '19:40 - 21:15', fuelTarget: '95 L', tyres: 'Set B', notes: 'Sunset visor check' },
    { stint: '04', driver: 'Pedro', window: '21:15 - 22:50', fuelTarget: '96 L', tyres: 'Set B', notes: 'Night pace reference' },
    { stint: '05', driver: 'Pedro', window: '22:50 - 00:25', fuelTarget: '94 L', tyres: 'Set B', notes: 'Optional double stint' },
  ],
  warnings: [
    { id: 'fuel-window', severity: 'medium', title: 'Fuel model not locked', description: 'Consumption target still depends on final track temperature.' },
    { id: 'night-rest', severity: 'low', title: 'Night rest gap tight', description: 'Pedro has the shortest recovery window after the double stint.' },
    { id: 'backup-car', severity: 'low', title: 'Backup car is standby only', description: 'No active stint plan should reference the BMW backup.' },
  ],
}

const statusMeta = {
  ready: { label: 'Ready', tone: 'success' },
  watch: { label: 'Watch', tone: 'warning' },
  standby: { label: 'Standby', tone: 'neutral' },
}

const warningToneBySeverity = {
  low: 'neutral',
  medium: 'warning',
  high: 'accent',
}

function decorateStatus(item) {
  const status = statusMeta[item.status]

  return {
    ...item,
    statusLabel: status.label,
    statusTone: status.tone,
  }
}

function getSummary(state) {
  return {
    totalStints: state.stints.length,
    plannedHours: state.session.raceLength,
    readyDrivers: state.drivers.filter((driver) => driver.status === 'ready').length,
    warnings: state.warnings.length,
  }
}

export function getPlanner() {
  return {
    session: plannerState.session,
    drivers: plannerState.drivers.map(decorateStatus),
    cars: plannerState.cars.map(decorateStatus),
    timeline: plannerState.timeline,
    stints: plannerState.stints,
    warnings: plannerState.warnings.map((warning) => ({
      ...warning,
      tone: warningToneBySeverity[warning.severity],
    })),
    summary: getSummary(plannerState),
  }
}
