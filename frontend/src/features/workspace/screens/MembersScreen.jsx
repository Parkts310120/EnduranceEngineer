import { members, squads } from '../../../domain/mockData'
import MemberCard from '../../members/components/MemberCard'

export default function MembersScreen({ workspace }) {
  const squad = squads.find((item) => item.id === workspace.squadId)
  const workspaceMembers = members.filter((member) => squad?.memberIds.includes(member.id))

  return (
    <section className="screen-stack">
      <div className="section-heading">
        <span className="eyebrow">Workspace crew</span>
        <h2>{squad?.name}</h2>
        <p>Members assigned to this workspace. Driver remains one role inside the broader team model.</p>
      </div>

      <div className="responsive-grid">
        {workspaceMembers.map((member) => <MemberCard key={member.id} member={member} />)}
      </div>
    </section>
  )
}
