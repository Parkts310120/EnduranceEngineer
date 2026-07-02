import { Navigate, Outlet, useParams } from 'react-router-dom'
import { workspaces } from '../../domain/mockData'
import WorkspaceHeader from './components/WorkspaceHeader'
import WorkspaceSidebar from './components/WorkspaceSidebar'

export default function WorkspaceLayout() {
  const { workspaceId } = useParams()
  const workspace = workspaces.find((item) => item.id === workspaceId)

  if (!workspace) {
    return <Navigate to={`/workspaces/${workspaces[0].id}`} replace />
  }

  return (
    <div className="workspace-shell">
      <WorkspaceSidebar workspace={workspace} />
      <main className="workspace-main">
        <WorkspaceHeader workspace={workspace} />
        <Outlet context={{ workspace }} />
      </main>
    </div>
  )
}
