import { useOutletContext } from 'react-router-dom'
import OverviewScreen from './screens/OverviewScreen'
import MembersScreen from './screens/MembersScreen'
import DocumentsScreen from './screens/DocumentsScreen'
import PlansScreen from './screens/PlansScreen'
import LiveRaceScreen from './screens/LiveRaceScreen'
import StintManagerScreen from './screens/StintManagerScreen'
import RaceIntelligenceScreen from './screens/RaceIntelligenceScreen'
import CarsScreen from './screens/CarsScreen'
import FilesScreen from './screens/FilesScreen'
import ReportsScreen from './screens/ReportsScreen'
import SettingsScreen from './screens/SettingsScreen'

const screens = {
  overview: OverviewScreen,
  members: MembersScreen,
  documents: DocumentsScreen,
  plans: PlansScreen,
  live: LiveRaceScreen,
  stints: StintManagerScreen,
  intelligence: RaceIntelligenceScreen,
  cars: CarsScreen,
  files: FilesScreen,
  reports: ReportsScreen,
  settings: SettingsScreen,
}

export default function WorkspaceScreenRouter({ screen }) {
  const { workspace } = useOutletContext()
  const Screen = screens[screen]

  return <Screen workspace={workspace} />
}
