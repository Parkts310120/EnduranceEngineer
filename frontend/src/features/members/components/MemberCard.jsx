import { MEMBER_ROLES } from '../../../domain/constants'
import Avatar from '../../../shared/ui/Avatar'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function MemberCard({ member }) {
  return (
    <Card className="member-card">
      <div className="member-card__header">
        <Avatar label={member.avatar} />
        <div>
          <h2>{member.name}</h2>
          <span>{member.timezone}</span>
        </div>
      </div>

      <div className="role-list">
        {member.roles.map((role) => (
          <Badge key={role} tone={role === 'driver' ? 'accent' : 'neutral'}>
            {MEMBER_ROLES[role]}
          </Badge>
        ))}
      </div>

      <p>{member.strengths.join(' • ')}</p>
      <Badge tone="success">{member.status}</Badge>
    </Card>
  )
}
