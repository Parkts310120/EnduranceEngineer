import { WORKSPACE_STATUSES, WORKSPACE_TYPES } from '../../../domain/constants'
import Badge from '../../../shared/ui/Badge'
import Button from '../../../shared/ui/Button'

export default function WorkspaceHeader({ workspace }) {
  return (
    <header className="workspace-header">
      <div>
        <span className="eyebrow">Workspace</span>
        <h1>{workspace.name}</h1>
        <p>
          {WORKSPACE_TYPES[workspace.type]} • {WORKSPACE_STATUSES[workspace.status]} • {workspace.trackName} • {workspace.durationHours}h
        </p>
      </div>

      <div className="workspace-header__actions">
        <Badge tone="success">{workspace.timezone}</Badge>
        <Button>Open race mode</Button>
      </div>
    </header>
  )
}
