import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function CarsStatus({ cars }) {
  return (
    <Card className="planner-panel">
      <span className="eyebrow">Cars status</span>
      <h2>Garage readiness</h2>
      <div className="planner-list">
        {cars.map((car) => (
          <div className="planner-list-row" key={car.id}>
            <div>
              <strong>{car.name}</strong>
              <span>{car.setup}</span>
            </div>
            <div className="planner-row-meta">
              <span>{car.fuel}</span>
              <Badge tone={car.statusTone}>{car.statusLabel}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
