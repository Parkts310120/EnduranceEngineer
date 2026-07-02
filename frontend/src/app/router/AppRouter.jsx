import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { workspaces } from '../../domain/mockData'
import CarsPage from '../../features/cars/CarsPage'
import MembersPage from '../../features/members/MembersPage'
import OrganizationPage from '../../features/organization/OrganizationPage'
import PlannerPage from '../../features/planner/screens/PlannerPage'
import TeamPage from '../../features/team/TeamPage'
import WorkspaceLayout from '../../features/workspace/WorkspaceLayout'
import WorkspaceScreenRouter from '../../features/workspace/WorkspaceScreenRouter'

export default function AppRouter() {
  const defaultWorkspace = workspaces[0].id

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrganizationPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/workspace" element={<Navigate to={`/workspaces/${defaultWorkspace}`} replace />} />
        <Route path="/workspaces/:workspaceId" element={<WorkspaceLayout />}>
          <Route index element={<WorkspaceScreenRouter screen="overview" />} />
          <Route path="members" element={<WorkspaceScreenRouter screen="members" />} />
          <Route path="documents" element={<WorkspaceScreenRouter screen="documents" />} />
          <Route path="plans" element={<WorkspaceScreenRouter screen="plans" />} />
          <Route path="files" element={<WorkspaceScreenRouter screen="files" />} />
          <Route path="reports" element={<WorkspaceScreenRouter screen="reports" />} />
          <Route path="settings" element={<WorkspaceScreenRouter screen="settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
