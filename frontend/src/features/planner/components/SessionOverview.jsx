import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import Progress from '../../../shared/ui/Progress'

export default function SessionOverview({ session }) {
  return (
    <section className="workspace-hero planner-hero">
      <div>
        <span className="eyebrow">Planner Engine</span>
        <h2>{session.event}</h2>
        <p>
          {session.track} • {session.carClass} • {session.raceLength} • {session.startTime}
        </p>
      </div>
      <Card className="planner-hero__status">
        <Badge tone="accent">{session.phase}</Badge>
        <Progress value={session.readiness} label="Plan readiness" />
      </Card>
    </section>
  )
}
