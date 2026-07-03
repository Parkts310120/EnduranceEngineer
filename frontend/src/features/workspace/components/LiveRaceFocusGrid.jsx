import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function LiveRaceFocusGrid({ currentDriver, currentStint, nextDriver, pitWindow }) {
  const cards = [
    { eyebrow: 'Current driver', title: currentDriver.name, body: currentDriver.car, meta: currentDriver.position, tone: 'success' },
    { eyebrow: 'Current stint', title: currentStint.number, body: currentStint.time, meta: `Target end ${currentStint.targetEnd}`, tone: 'accent' },
    { eyebrow: 'Next driver', title: nextDriver.name, body: nextDriver.readiness, meta: 'Ready for handover', tone: 'success' },
    { eyebrow: 'Next pit window', title: pitWindow.opensIn, body: pitWindow.range, meta: 'Prepare crew call', tone: 'warning' },
  ]

  return (
    <section className="live-race-focus-grid" aria-label="Live race focus cards">
      {cards.map((card) => (
        <Card className="live-race-focus-card" key={card.eyebrow}>
          <div className="live-race-focus-card__header">
            <span className="eyebrow">{card.eyebrow}</span>
            <Badge tone={card.tone}>{card.meta}</Badge>
          </div>
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </Card>
      ))}
    </section>
  )
}
