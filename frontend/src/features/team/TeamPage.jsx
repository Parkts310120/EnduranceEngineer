import { team } from '../../domain/mockData'
import Badge from '../../shared/ui/Badge'
import Button from '../../shared/ui/Button'
import Card from '../../shared/ui/Card'
import Input from '../../shared/ui/Input'

export default function TeamPage() {
  return (
    <main className="content-page content-page--narrow">
      <Card>
        <div className="section-heading">
          <Badge>Team</Badge>
          <h1>Create your first team</h1>
          <p>Teams organize members, squads, cars and operational workspaces.</p>
        </div>

        <Input label="Team name" defaultValue={team.name} />
        <Input label="Category" defaultValue={team.category} />
        <Input label="Status" defaultValue={team.status} />

        <Button className="full-width">Save team foundation</Button>
      </Card>
    </main>
  )
}
