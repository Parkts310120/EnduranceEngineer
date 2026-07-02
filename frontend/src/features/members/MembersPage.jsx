import { members } from '../../domain/mockData'
import PageHeader from '../../shared/layout/PageHeader'
import MemberCard from './components/MemberCard'

export default function MembersPage() {
  return (
    <main className="content-page">
      <PageHeader
        eyebrow="People"
        title="Members"
        description="Manage every person in the team. Driver is a role, not the primary entity."
        action="Add member"
      />

      <section className="responsive-grid">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </section>
    </main>
  )
}
