const garageCars = [
  {
    id: 'car-27',
    name: 'Silver Arrow',
    model: 'BMW M4 GT3 Evo',
    number: '#27',
    category: 'GT3 Pro-Am',
    status: 'Ready',
    fuel: 82,
    tyreLife: 76,
    lastDriver: 'Marina Costa',
    currentSetup: 'Barcelona endurance baseline — medium downforce',
    nextMaintenance: 'Brake inspection after FP2',
  },
  {
    id: 'car-44',
    name: 'Night Hawk',
    model: 'Mercedes-AMG GT3',
    number: '#44',
    category: 'GT3 Silver',
    status: 'Service',
    fuel: 38,
    tyreLife: 41,
    lastDriver: 'Rafael Lima',
    currentSetup: 'Wet balance test — soft rear bar',
    nextMaintenance: 'Replace front splitter and refuel',
  },
  {
    id: 'car-71',
    name: 'Apex Scout',
    model: 'Porsche 911 GT3 R',
    number: '#71',
    category: 'GT3 Am',
    status: 'Inspection',
    fuel: 64,
    tyreLife: 58,
    lastDriver: 'João Mendes',
    currentSetup: 'Qualifying trim — high rotation map',
    nextMaintenance: 'Gearbox oil sample review',
  },
]

const garageAlerts = [
  {
    id: 'garage-alert-brakes',
    severity: 'warning',
    title: '#27 brake window approaching',
    message: 'Schedule pad depth confirmation before the next race simulation.',
  },
  {
    id: 'garage-alert-fuel',
    severity: 'critical',
    title: '#44 fuel level below garage target',
    message: 'Refuel before releasing the car for installation laps.',
  },
  {
    id: 'garage-alert-clean',
    severity: 'info',
    title: '#71 setup notes synchronized',
    message: 'Latest driver feedback is attached to the current setup baseline.',
  },
]

const statusTone = {
  Ready: 'success',
  Service: 'warning',
  Inspection: 'accent',
}

const alertTone = {
  warning: 'warning',
  critical: 'danger',
  info: 'accent',
}

function getAverage(cars, key) {
  return Math.round(cars.reduce((total, car) => total + car[key], 0) / cars.length)
}

function getStatusSummary(cars) {
  return ['Ready', 'Service', 'Inspection'].map((status) => ({
    status,
    count: cars.filter((car) => car.status === status).length,
    tone: statusTone[status] ?? 'neutral',
  }))
}

function getMaintenance(cars) {
  return cars.map((car) => ({
    id: `${car.id}-maintenance`,
    car: `${car.number} ${car.name}`,
    task: car.nextMaintenance,
    owner: car.status === 'Ready' ? 'Race engineer' : 'Crew chief',
    tone: statusTone[car.status] ?? 'neutral',
  }))
}

export function getGarageOverview() {
  const cars = garageCars.map((car) => ({
    ...car,
    tone: statusTone[car.status] ?? 'neutral',
  }))

  return {
    hero: {
      title: 'Garage',
      description: 'Track car readiness, setups, maintenance windows, fuel, and tyre life from one workspace garage desk.',
      status: `${cars.filter((car) => car.status === 'Ready').length}/${cars.length} cars ready`,
      focus: 'MVP mock data',
    },
    summary: [
      { label: 'Cars in garage', value: cars.length, detail: 'Workspace fleet' },
      { label: 'Ready to roll', value: cars.filter((car) => car.status === 'Ready').length, detail: 'Released by engineering' },
      { label: 'Average fuel', value: `${getAverage(cars, 'fuel')}%`, detail: 'Across all cars' },
      { label: 'Average tyre life', value: `${getAverage(cars, 'tyreLife')}%`, detail: 'Current fitted sets' },
    ],
    cars,
    status: {
      title: 'Garage status',
      readiness: `${cars.filter((car) => car.status === 'Ready').length} ready cars`,
      items: getStatusSummary(cars),
    },
    maintenance: getMaintenance(cars),
    alerts: garageAlerts.map((alert) => ({
      ...alert,
      tone: alertTone[alert.severity] ?? 'neutral',
    })),
  }
}
