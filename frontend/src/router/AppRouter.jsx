import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OrganizationPage from '../features/organization/OrganizationPage'
import TeamPage from '../features/team/TeamPage'
import DriversPage from '../features/drivers/DriversPage'
import CarsPage from '../features/cars/CarsPage'
import EventsPage from '../features/events/EventsPage'
import WorkspacePage from '../features/workspace/WorkspacePage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OrganizationPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/drivers" element={<DriversPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
      </Routes>
    </BrowserRouter>
  )
}
