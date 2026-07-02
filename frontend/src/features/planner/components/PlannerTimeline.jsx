import Card from '../../../shared/ui/Card'

export default function PlannerTimeline({ timeline }) {
  return (
    <Card className="planner-panel planner-timeline">
      <span className="eyebrow">Planner timeline</span>
      <h2>Race flow</h2>
      <div className="planner-timeline__track">
        {timeline.map((item) => (
          <div className="planner-timeline__item" key={`${item.time}-${item.label}`}>
            <span>{item.time}</span>
            <strong>{item.label}</strong>
          </div>
        ))}
      </div>
    </Card>
  )
}
