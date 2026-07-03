import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import Progress from '../../../shared/ui/Progress'
import { getGarageOverview } from '../services/garageService'

function GarageHero({ hero }) {
  return (
    <Card className="workspace-hero garage-hero">
      <div>
        <span className="eyebrow">Workspace module</span>
        <h2>{hero.title}</h2>
        <p>{hero.description}</p>
      </div>
      <div className="garage-hero__status">
        <Badge tone="success">{hero.status}</Badge>
        <span>{hero.focus}</span>
      </div>
    </Card>
  )
}

function GarageSummaryCards({ summary }) {
  return (
    <section className="garage-summary-grid" aria-label="Garage summary">
      {summary.map((item) => (
        <Card key={item.label} className="garage-summary-card">
          <span className="eyebrow">{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.detail}</p>
        </Card>
      ))}
    </section>
  )
}

function GarageCarCard({ car }) {
  return (
    <Card className="garage-car-card">
      <div className="garage-car-card__header">
        <div>
          <span className="eyebrow">{car.number}</span>
          <h3>{car.name}</h3>
          <p>{car.model}</p>
        </div>
        <Badge tone={car.tone}>{car.status}</Badge>
      </div>
      <div className="garage-car-card__meta">
        <span>{car.category}</span>
        <span>Last driver: {car.lastDriver}</span>
      </div>
      <Progress value={car.fuel} label="Fuel" />
      <Progress value={car.tyreLife} label="Tyre life" />
      <div className="garage-car-card__setup">
        <strong>Current setup</strong>
        <p>{car.currentSetup}</p>
      </div>
      <div className="garage-car-card__maintenance">
        <strong>Next maintenance</strong>
        <span>{car.nextMaintenance}</span>
      </div>
    </Card>
  )
}

function GarageStatusPanel({ status }) {
  return (
    <Card className="garage-panel garage-status-panel">
      <span className="eyebrow">{status.readiness}</span>
      <h2>{status.title}</h2>
      <div className="garage-status-list">
        {status.items.map((item) => (
          <div className="garage-status-item" key={item.status}>
            <div>
              <strong>{item.status}</strong>
              <span>{item.count} cars</span>
            </div>
            <Badge tone={item.tone}>{item.count}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}

function GarageMaintenanceList({ maintenance }) {
  return (
    <Card className="garage-panel garage-maintenance-list">
      <span className="eyebrow">Service queue</span>
      <h2>Maintenance</h2>
      <div className="garage-maintenance-list__items">
        {maintenance.map((item) => (
          <div className="garage-maintenance-item" key={item.id}>
            <div>
              <strong>{item.car}</strong>
              <p>{item.task}</p>
            </div>
            <Badge tone={item.tone}>{item.owner}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}

function GarageAlerts({ alerts }) {
  return (
    <Card className="garage-panel garage-alerts">
      <span className="eyebrow">Engineering alerts</span>
      <h2>Alerts</h2>
      <div className="garage-alert-list">
        {alerts.map((alert) => (
          <article className={`garage-alert garage-alert--${alert.severity}`} key={alert.id}>
            <div>
              <strong>{alert.title}</strong>
              <p>{alert.message}</p>
            </div>
            <Badge tone={alert.tone}>{alert.severity}</Badge>
          </article>
        ))}
      </div>
    </Card>
  )
}

export default function CarsScreen() {
  const garage = getGarageOverview()

  return (
    <section className="screen-stack garage-screen">
      <GarageHero hero={garage.hero} />
      <GarageSummaryCards summary={garage.summary} />
      <section className="garage-layout">
        <div className="garage-car-grid">
          {garage.cars.map((car) => (
            <GarageCarCard car={car} key={car.id} />
          ))}
        </div>
        <div className="garage-side-stack">
          <GarageStatusPanel status={garage.status} />
          <GarageMaintenanceList maintenance={garage.maintenance} />
          <GarageAlerts alerts={garage.alerts} />
        </div>
      </section>
    </section>
  )
}
