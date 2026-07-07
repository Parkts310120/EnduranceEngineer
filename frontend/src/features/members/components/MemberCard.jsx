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

        <Badge tone={member.statusTone ?? 'neutral'}>
          {member.status}
        </Badge>
      </div>

      <div className="role-list">
        {member.roles.map((role) => (
          <Badge
            key={role}
            tone={role === member.primaryRole ? (member.roleTone ?? 'accent') : 'neutral'}
          >
            {MEMBER_ROLES[role]}
          </Badge>
        ))}
      </div>

      <div className="member-card__section">
        <span className="eyebrow">Primary role</span>
        <strong>{member.primaryRoleLabel ?? MEMBER_ROLES[member.roles[0]]}</strong>
      </div>

      <div className="member-card__section">
        <span className="eyebrow">Strengths</span>
        <p>{member.strengths.join(' • ')}</p>
      </div>
    </Card>
  )
}
