import { getRaceState } from './raceStateService'

function formatRaceTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return [hours, minutes, remainingSeconds]
    .map((value) => String(value).padStart(2, '0'))
    .join(':')
}

export function getRaceControl() {
  const state = getRaceState()

  return {
    race: {
      name: state.race.name,
      phase: state.race.phase,
      elapsed: formatRaceTime(state.race.elapsedSeconds),
      remaining: formatRaceTime(state.race.remainingSeconds),
      lap: state.race.currentLap,
    },

    currentStint: {
      driver: state.stint.currentDriver,
      fuel: state.car.fuelPercent,
      tyres: state.car.tyreLifePercent,
      elapsed: `${state.stint.elapsedMinutes} min`,
      expectedPit: `${state.pitWindow.estimatedInMinutes} min`,
      nextDriver: state.stint.nextDriver,
      tyreSet: state.car.currentTyreSet,
    },

    pitStop: state.pitWindow.service,

    alerts: [
      {
        severity: 'warning',
        title: `Prepare ${state.stint.nextDriver}`,
        message: `Next driver should be ready in approximately ${state.pitWindow.estimatedInMinutes} minutes.`,
      },
      {
        severity: 'info',
        title: 'Fuel Window',
        message: 'Pit stop expected within the current fuel target.',
      },
    ],
  }
}
