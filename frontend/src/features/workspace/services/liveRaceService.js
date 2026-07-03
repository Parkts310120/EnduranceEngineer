const liveRaceState = {
  race: {
    name: 'Barcelona 6H — Live Desk',
    phase: 'Hour 2 of 6',
    elapsed: '01:42:18',
    remaining: '04:17:42',
    position: 'P4 overall / P2 class',
    trackStatus: 'Green flag',
  },
  stint: {
    driver: 'Marina Costa',
    car: '#27 BMW M4 GT3',
    stintNumber: 3,
    stintTime: '34:12',
    targetEnd: 'Lap 58',
    nextDriver: 'Rafael Lima',
    pitWindowOpensIn: '11 min',
    pitWindowRange: 'Lap 54–58',
  },
  fuel: {
    level: 42,
    lapsRemaining: 14,
    targetLaps: 12,
    status: 'On target',
  },
  tyres: {
    compound: 'Medium',
    age: '22 laps',
    wear: 'Front left watch',
    status: 'Managed',
  },
  team: [
    { role: 'Race engineer', name: 'Camila Rocha', status: 'Online', tone: 'success' },
    { role: 'Strategist', name: 'Nico Alvarez', status: 'Reviewing pit window', tone: 'accent' },
    { role: 'Spotter', name: 'João Mendes', status: 'Online', tone: 'success' },
    { role: 'Team manager', name: 'Ana Freitas', status: 'Standby', tone: 'neutral' },
  ],
  alerts: [
    {
      id: 'alert-fuel-margin',
      severity: 'warning',
      title: 'Fuel margin narrowing',
      message: 'Keep lift-and-coast target for two laps before committing to lap 56 stop.',
    },
    {
      id: 'alert-track-limits',
      severity: 'info',
      title: 'Track limits clean',
      message: 'No new warnings in the last 18 laps. Maintain current line at T9 exit.',
    },
  ],
  timeline: [
    { time: '01:08:02', label: 'Pit stop completed', detail: 'Fuel + tyres, Marina in the car' },
    { time: '01:21:44', label: 'Safety margin restored', detail: 'Gap to P3 stabilized at 8.2s' },
    { time: '01:36:10', label: 'Traffic call', detail: 'GT4 pack cleared through sector 2' },
    { time: '01:42:18', label: 'Current state', detail: 'Green flag, monitoring fuel delta' },
  ],
  actions: [
    { id: 'confirm-driver', label: 'Confirm Rafael is ready in pit lane', owner: 'Team manager' },
    { id: 'fuel-call', label: 'Call fuel number at lap 52', owner: 'Strategist' },
    { id: 'tyre-check', label: 'Prepare medium tyre set B', owner: 'Race engineer' },
  ],
}

const severityTone = {
  warning: 'warning',
  info: 'accent',
  critical: 'danger',
}

function getReadiness(team) {
  const online = team.filter((member) => member.status.toLowerCase().includes('online')).length
  return `${online}/${team.length} online`
}

function getFuelTone(fuel) {
  if (fuel.lapsRemaining < fuel.targetLaps) return 'danger'
  if (fuel.lapsRemaining <= fuel.targetLaps + 2) return 'warning'
  return 'success'
}

export function getLiveRaceMode() {
  const { race, stint, fuel, tyres, team, alerts, timeline, actions } = liveRaceState

  return {
    hero: {
      title: 'Live Race Mode',
      description: `${race.name} is currently ${race.trackStatus.toLowerCase()} with ${race.remaining} remaining.`,
      status: race.trackStatus,
      phase: race.phase,
    },
    currentDriver: {
      name: stint.driver,
      car: stint.car,
      position: race.position,
      elapsed: race.elapsed,
    },
    currentStint: {
      number: `Stint ${stint.stintNumber}`,
      time: stint.stintTime,
      targetEnd: stint.targetEnd,
    },
    nextDriver: {
      name: stint.nextDriver,
      readiness: 'Helmet on • fuel board reviewed',
    },
    pitWindow: {
      opensIn: stint.pitWindowOpensIn,
      range: stint.pitWindowRange,
    },
    fuel: {
      ...fuel,
      tone: getFuelTone(fuel),
      label: `${fuel.level}% fuel • ${fuel.lapsRemaining} laps remaining`,
    },
    tyres,
    team: {
      readiness: getReadiness(team),
      members: team,
    },
    alerts: alerts.map((alert) => ({
      ...alert,
      tone: severityTone[alert.severity] ?? 'neutral',
    })),
    timeline,
    actions,
  }
}
