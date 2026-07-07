import { Link } from 'react-router-dom'
import { organization } from '../../domain/mockData'
import Button from '../../shared/ui/Button'
import Input from '../../shared/ui/Input'

export default function OrganizationPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="brand-lockup brand-lockup--large">
          <span>🏁</span>
          <strong>Endurance Engineer</strong>
        </div>

        <h1>Organization foundation</h1>
        <p>Start from the account that owns teams, members, cars and workspaces.</p>

        <Input label="Organization name" defaultValue={organization.name} />
        <Input label="Country" defaultValue={organization.country} />
        <Input label="Timezone" defaultValue={organization.timezone} />

        <Button as={Link} to="/team" className="full-width">Continue to team</Button>
      </section>
    </main>
  )
}
