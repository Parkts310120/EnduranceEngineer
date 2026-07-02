import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function PreparationChecklistCard({ checklist }) {
  return (
    <Card className="checklist-card">
      <span className="eyebrow">Preparation checklist</span>
      <h2>Before race mode</h2>
      <div className="mission-stack-list">
        {checklist.map((task) => (
          <div className="mission-stack-row" key={task.item}>
            <span>{task.item}</span>
            <Badge tone={task.tone}>{task.status}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
