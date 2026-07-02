import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function WarningsPanel({ warnings }) {
  return (
    <Card className="planner-panel">
      <span className="eyebrow">Warnings panel</span>
      <h2>Plan risks</h2>
      <div className="planner-list">
        {warnings.map((warning) => (
          <div className="planner-warning" key={warning.id}>
            <div>
              <strong>{warning.title}</strong>
              <p>{warning.description}</p>
            </div>
            <Badge tone={warning.tone}>{warning.severity}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
