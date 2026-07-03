import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import MemberCard from '../../members/components/MemberCard'
import { getMembersOverview } from '../services/membersService'

function MembersHero({ hero }) {
  return (
    <Card className="workspace-hero members-hero">
      <div>
        <span className="eyebrow">Workspace module</span>
        <h2>{hero.title}</h2>
        <p>{hero.description}</p>
      </div>
      <div className="members-hero__status">
        <Badge tone="success">{hero.status}</Badge>
        <span>{hero.focus}</span>
      </div>
    </Card>
  )
}

function MembersSummaryCards({ summary }) {
  return (
    <section className="members-summary-grid" aria-label="Members summary">
      {summary.map((item) => (
        <Card key={item.label} className="members-summary-card">
          <span className="eyebrow">{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.detail}</p>
        </Card>
      ))}
    </section>
  )
}

function MembersRolePanel({ roles }) {
  return (
    <Card className="members-panel members-role-panel">
      <span className="eyebrow">Crew structure</span>
      <h2>{roles.title}</h2>
      <div className="members-status-list">
        {roles.items.map((item) => (
          <div className="members-status-item" key={item.role}>
            <div>
              <strong>{item.role}</strong>
              <span>{item.count} members</span>
            </div>
            <Badge tone={item.tone}>{item.count}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}

function MembersAvailabilityPanel({ availability }) {
  return (
    <Card className="members-panel members-availability-panel">
      <span className="eyebrow">{availability.readiness}</span>
      <h2>{availability.title}</h2>
      <div className="members-status-list">
        {availability.items.map((item) => (
          <div className="members-status-item" key={item.status}>
            <div>
              <strong>{item.status}</strong>
              <span>{item.count} members</span>
            </div>
            <Badge tone={item.tone}>{item.count}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}

function MembersAlerts({ alerts }) {
  return (
    <Card className="members-panel members-alerts">
      <span className="eyebrow">Crew alerts</span>
      <h2>Alerts</h2>
      <div className="members-alert-list">
        {alerts.map((alert) => (
          <article className={`members-alert members-alert--${alert.severity}`} key={alert.id}>
            <div>
              <strong>{alert.title}</strong>
              <p>{alert.message}</p>
            </div>
            <Badge tone={alert.tone}>{alert.severity}</Badge>
          </article>
        ))}
      </div>
    </Card>
  )
}

export default function MembersScreen({ workspace }) {
  const membersOverview = getMembersOverview(workspace)

  return (
    <section className="screen-stack members-screen">
      <MembersHero hero={membersOverview.hero} />
      <MembersSummaryCards summary={membersOverview.summary} />

      <section className="members-layout">
        <div className="members-grid">
          {membersOverview.members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="members-side-stack">
          <MembersRolePanel roles={membersOverview.roles} />
          <MembersAvailabilityPanel availability={membersOverview.availability} />
          <MembersAlerts alerts={membersOverview.alerts} />
        </div>
      </section>
    </section>
  )
}
