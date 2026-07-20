export function getRaceState() {
  return {
    race: {
      name: '24 Hours of Spa',
      phase: 'Green Flag',
      elapsedSeconds: 24138,
      remainingSeconds: 62262,
      currentLap: 143,
    },

    stint: {
      currentDriver: 'Lucas',
      nextDriver: 'Rafael',
      elapsedMinutes: 42,
      remainingMinutes: 18,
      completedStints: 2,
    },

    car: {
      fuelPercent: 48,
      tyreLifePercent: 71,
      currentTyreSet: 'Set 3',
    },

    pitWindow: {
      status: 'Open soon',
      estimatedInMinutes: 18,
      service: {
        fuel: true,
        tyres: false,
        driverSwap: true,
        repair: false,
      },
      checklist: [
        { id: 'driver-ready', label: 'Next driver ready', status: 'pending' },
        { id: 'fuel-call', label: 'Confirm fuel amount', status: 'pending' },
        { id: 'radio-check', label: 'Radio check', status: 'pending' },
        { id: 'pit-entry', label: 'Pit entry reminder', status: 'pending' },
        { id: 'driver-swap', label: 'Driver swap procedure', status: 'pending' },
      ],
    },
  }
}
