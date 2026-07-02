import Card from '../../../shared/ui/Card'
import Progress from '../../../shared/ui/Progress'

export default function ProgressCard({ progress }) {
  return (
    <Card className="progress-card">
      <div className="mission-card-heading">
        <div>
          <span className="eyebrow">Progress card</span>
          <h2>Preparation readiness</h2>
        </div>
        <strong>{progress}%</strong>
      </div>
      <Progress value={progress} label="Preparation progress" />
      <p>Target: 90% before final team briefing.</p>
    </Card>
  )
}
