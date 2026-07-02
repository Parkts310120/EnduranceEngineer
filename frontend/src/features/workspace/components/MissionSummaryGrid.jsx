import Card from '../../../shared/ui/Card'

export default function MissionSummaryGrid({ cards }) {
  return (
    <section className="mission-summary-grid" aria-label="Mission control summary">
      {cards.map((card) => (
        <Card className="mission-summary-card" key={card.label} tone={card.tone === 'highlight' ? 'highlight' : 'default'}>
          <div className="mission-card-header">
            <span className="eyebrow">{card.label}</span>
            {card.meta ? <span>{card.meta}</span> : null}
          </div>
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </Card>
      ))}
    </section>
  )
}
