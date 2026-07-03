import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function LiveRaceAlerts({ alerts }) {
  return (
    <Card className="live-race-alerts">
      <span className="eyebrow">Live alerts</span>
      <h2>Race control board</h2>
      <div className="live-race-alert-list">
        {alerts.map((alert) => (
          <article className={`live-race-alert live-race-alert--${alert.severity}`} key={alert.id}>
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
