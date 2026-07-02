import { NavLink } from 'react-router-dom'
import { WORKSPACE_NAVIGATION, WORKSPACE_STATUSES, WORKSPACE_TYPES } from '../../../domain/constants'
import Badge from '../../../shared/ui/Badge'

export default function WorkspaceSidebar({ workspace }) {
  return (
    <aside className="workspace-sidebar">
      <div className="brand-lockup">
        <span>🏁</span>
        <strong>Endurance Engineer</strong>
      </div>

      <div className="workspace-switcher">
        <span>Workspace</span>
        <h2>{workspace.name}</h2>
        <div className="workspace-switcher__meta">
          <Badge tone="accent">{WORKSPACE_TYPES[workspace.type]}</Badge>
          <Badge>{WORKSPACE_STATUSES[workspace.status]}</Badge>
        </div>
      </div>

      <nav className="workspace-nav" aria-label="Workspace navigation">
        {WORKSPACE_NAVIGATION.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            end={item.path === ''}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
