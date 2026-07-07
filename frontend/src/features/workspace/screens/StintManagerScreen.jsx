import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import { getStintManager } from '../services/stintManagerService'

function StintHero({ hero }) {
  return (
    <Card className="workspace-hero">
      <div>
        <span className="eyebrow">Workspace module</span>
        <h2>{hero.title}</h2>
        <p>{hero.description}</p>
      </div>

      <div>
        <Badge tone="success">{hero.status}</Badge>
        <p>{hero.focus}</p>
      </div>
    </Card>
  )
}

function Summary({ summary }) {
  return (
    <section className="garage-summary-grid">
      {summary.map((item) => (
        <Card key={item.label}>
          <span className="eyebrow">{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.detail}</p>
        </Card>
      ))}
    </section>
  )
}

function Timeline({ timeline }) {
  return (
    <Card className="stint-timeline-card">
      <div className="stint-timeline-card__header">
        <div>
          <span className="eyebrow">Timeline</span>
          <h2>Driver Rotation</h2>
        </div>
        <Badge tone="accent">{timeline.length} stints</Badge>
      </div>

      <div className="stint-timeline">
        {timeline.map((item) => (
          <article className={`stint-timeline-item stint-timeline-item--${item.status}`} key={item.id}>
            <div className="stint-timeline-item__marker">
              <span />
            </div>

            <div className="stint-timeline-item__time">
              <strong>{item.start}</strong>
              <span>{item.end}</span>
            </div>

            <div className="stint-timeline-item__content">
              <strong>{item.driver}</strong>
              <span>
                {item.status === 'current' ? 'Driving now' : `${item.start} → ${item.end}`}
              </span>
            </div>

            <Badge tone={item.tone}>{item.status}</Badge>
          </article>
        ))}
      </div>
    </Card>
  )
}

function Alerts({ alerts }) {
  return (
    <Card>
      <span className="eyebrow">Alerts</span>
      <h2>Race Control</h2>

      <div className="garage-alert-list">
        {alerts.map((alert) => (
          <article className="garage-alert" key={alert.id}>
            <div>
              <strong>{alert.title}</strong>
              <p>{alert.message}</p>
            </div>

            <Badge tone={alert.severity === 'warning' ? 'warning' : 'accent'}>
              {alert.severity}
            </Badge>
          </article>
        ))}
      </div>
    </Card>
  )
}

export default function StintManagerScreen() {
  const stint = getStintManager()

  return (
    <section className="screen-stack">
      <StintHero hero={stint.hero} />
      <Summary summary={stint.summary} />
      <Timeline timeline={stint.timeline} />
      <Alerts alerts={stint.alerts} />
    </section>
  )
}
