import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import { getRaceIntelligence } from '../services/raceIntelligenceService'

export default function RaceIntelligenceScreen() {
  const intelligence = getRaceIntelligence()

  return (
    <section className="screen-stack">
      <Card className="workspace-hero">
        <div>
          <span className="eyebrow">Race Intelligence</span>
          <h2>{intelligence.hero.title}</h2>
          <p>{intelligence.hero.description}</p>
        </div>

        <Badge tone="accent">
          {intelligence.hero.confidence}% confidence
        </Badge>
      </Card>

      <section className="garage-summary-grid">
        {intelligence.recommendations.map((item) => (
          <Card key={item.id}>
            <Badge tone={item.priority === 'high' ? 'warning' : 'accent'}>
              {item.priority}
            </Badge>

            <h3>{item.title}</h3>

            <p>{item.message}</p>

            <div className="race-intelligence-reasoning">
              <span className="eyebrow">Reasoning</span>
              <ul>
                {(item.reasoning ?? []).map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </div>

            <div className="race-intelligence-impact">
              <strong>{item.impact}</strong>
              <Badge tone="success">{item.confidence ?? intelligence.hero.confidence}% confidence</Badge>
            </div>
          </Card>
        ))}
      </section>

      <Card>
        <span className="eyebrow">Current Risks</span>

        {intelligence.risks.map((risk) => (
          <article className="garage-alert" key={risk.id}>
            <div>
              <strong>{risk.title}</strong>
              <p>{risk.message}</p>
            </div>

            <Badge tone="warning">{risk.severity}</Badge>
          </article>
        ))}
      </Card>
    </section>
  )
}
