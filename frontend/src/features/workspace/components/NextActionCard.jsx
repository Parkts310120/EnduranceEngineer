import Badge from '../../../shared/ui/Badge'
import Button from '../../../shared/ui/Button'
import Card from '../../../shared/ui/Card'

export default function NextActionCard({ action }) {
  return (
    <Card className="next-action-card">
      <div className="mission-card-heading">
        <div>
          <span className="eyebrow">Next action</span>
          <h2>{action.title}</h2>
        </div>
        <Badge tone="accent">{action.due}</Badge>
      </div>
      <p>{action.description}</p>
      <div className="action-footer">
        <span>{action.owner}</span>
        <Button>Review action</Button>
      </div>
    </Card>
  )
}
