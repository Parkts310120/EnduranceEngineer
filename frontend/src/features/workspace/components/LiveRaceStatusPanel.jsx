import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import Progress from '../../../shared/ui/Progress'

export default function LiveRaceStatusPanel({ fuel, tyres, team }) {
  return (
    <section className="live-race-status-grid" aria-label="Live operational status">
      <Card className="live-race-status-card">
        <div className="live-race-status-card__header">
          <span className="eyebrow">Fuel status</span>
          <Badge tone={fuel.tone}>{fuel.status}</Badge>
        </div>
        <Progress label={fuel.label} value={fuel.level} />
        <p>Target stint length: {fuel.targetLaps} laps.</p>
      </Card>

      <Card className="live-race-status-card">
        <div className="live-race-status-card__header">
          <span className="eyebrow">Tyre status</span>
          <Badge tone="accent">{tyres.status}</Badge>
        </div>
        <h3>{tyres.compound}</h3>
        <p>{tyres.age} on set • {tyres.wear}</p>
      </Card>

      <Card className="live-race-status-card">
        <div className="live-race-status-card__header">
          <span className="eyebrow">Team status</span>
          <Badge tone="success">{team.readiness}</Badge>
        </div>
        <div className="live-race-team-list">
          {team.members.map((member) => (
            <div className="live-race-team-member" key={`${member.role}-${member.name}`}>
              <div>
                <strong>{member.name}</strong>
                <span>{member.role}</span>
              </div>
              <Badge tone={member.tone}>{member.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
