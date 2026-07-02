import { cars, squads } from '../../../domain/mockData'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import Input from '../../../shared/ui/Input'

export default function SettingsScreen({ workspace }) {
  const car = cars.find((item) => item.id === workspace.carId)
  const squad = squads.find((item) => item.id === workspace.squadId)

  return (
    <section className="screen-stack">
      <div className="section-heading">
        <span className="eyebrow">Configuration</span>
        <h2>Settings</h2>
        <p>Mocked workspace configuration prepared for future persistence.</p>
      </div>
      <Card>
        <div className="settings-grid">
          <Input label="Workspace name" defaultValue={workspace.name} />
          <Input label="Workspace type" defaultValue={workspace.type} />
          <Input label="Status" defaultValue={workspace.status} />
          <Input label="Timezone" defaultValue={workspace.timezone} />
        </div>
        <div className="settings-summary">
          <Badge tone="accent">{car?.name}</Badge>
          <Badge>{squad?.name}</Badge>
        </div>
      </Card>
    </section>
  )
}
