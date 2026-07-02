import Card from '../../../shared/ui/Card'

export default function UpcomingScheduleCard({ schedule }) {
  return (
    <Card className="schedule-card">
      <span className="eyebrow">Upcoming schedule card</span>
      <h2>Next milestones</h2>
      <div className="timeline-list">
        {schedule.map((event) => (
          <div className="timeline-item" key={event.title}>
            <span>{event.time}</span>
            <strong>{event.title}</strong>
          </div>
        ))}
      </div>
    </Card>
  )
}
