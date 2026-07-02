import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function TeamStatusCard({ teamStatus }) {
  return (
    <Card className="team-card">
      <span className="eyebrow">Team status card</span>
      <h2>Squad readiness</h2>
      <div className="mission-stack-list compact">
        {teamStatus.members.map((member) => (
          <div className="mission-stack-row" key={member.name}>
            <div>
              <strong>{member.name}</strong>
              <small>{member.role}</small>
            </div>
            <Badge tone={member.tone}>{member.state}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
