import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function DriversStatus({ drivers }) {
  return (
    <Card className="planner-panel">
      <span className="eyebrow">Drivers status</span>
      <h2>Rotation readiness</h2>
      <div className="planner-list">
        {drivers.map((driver) => (
          <div className="planner-list-row" key={driver.id}>
            <div>
              <strong>{driver.name}</strong>
              <span>{driver.currentBlock}</span>
            </div>
            <div className="planner-row-meta">
              <span>{driver.nextStint}</span>
              <Badge tone={driver.statusTone}>{driver.statusLabel}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
