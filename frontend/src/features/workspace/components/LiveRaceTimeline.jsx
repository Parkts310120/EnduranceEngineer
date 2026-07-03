import Card from '../../../shared/ui/Card'

export default function LiveRaceTimeline({ timeline }) {
  return (
    <Card className="live-race-timeline">
      <span className="eyebrow">Race timeline</span>
      <h2>Latest events</h2>
      <div className="live-race-timeline__items">
        {timeline.map((item) => (
          <div className="live-race-timeline__item" key={`${item.time}-${item.label}`}>
            <time>{item.time}</time>
            <div>
              <strong>{item.label}</strong>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
