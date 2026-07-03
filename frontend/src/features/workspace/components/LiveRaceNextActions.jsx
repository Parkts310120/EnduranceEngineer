import Button from '../../../shared/ui/Button'
import Card from '../../../shared/ui/Card'

export default function LiveRaceNextActions({ actions }) {
  return (
    <Card className="live-race-actions">
      <span className="eyebrow">Next actions</span>
      <h2>Operational queue</h2>
      <div className="live-race-action-list">
        {actions.map((action) => (
          <article className="live-race-action" key={action.id}>
            <div>
              <strong>{action.label}</strong>
              <span>{action.owner}</span>
            </div>
            <Button variant="secondary">Acknowledge</Button>
          </article>
        ))}
      </div>
    </Card>
  )
}
