import { WORKSPACE_NAVIGATION } from '../../../domain/constants'
import Progress from '../../../shared/ui/Progress'
import WorkspaceModuleCard from '../components/WorkspaceModuleCard'

const modules = [
  { title: 'Members', path: 'members', status: 'Ready', description: 'Workspace squad, crew roles and operational responsibilities.' },
  { title: 'Documents', path: 'documents', status: 'Draft', description: 'Race book, driver briefing, procedures and reference notes.' },
  { title: 'Plans', path: 'plans', status: 'Draft', description: 'Stint, fuel, tyre and contingency plans for the workspace.' },
  { title: 'Files', path: 'files', status: 'Ready', description: 'Setups, PDFs, images and files connected to this operation.' },
  { title: 'Reports', path: 'reports', status: 'Future', description: 'Preparation and post-session reports for long-term learning.' },
  { title: 'Settings', path: 'settings', status: 'Ready', description: 'Workspace type, car, squad, timezone and status configuration.' },
]

export default function OverviewScreen({ workspace }) {
  return (
    <div className="screen-stack">
      <section className="workspace-hero">
        <div>
          <span className="eyebrow">Operational hub</span>
          <h2>{workspace.status === 'planning' ? 'Planning phase' : 'Workspace ready'}</h2>
          <p>{workspace.summary}</p>
        </div>
        <Progress value={workspace.phaseProgress} label="Foundation readiness" />
      </section>

      <section className="module-grid" aria-label="Workspace modules">
        {modules
          .filter((module) => WORKSPACE_NAVIGATION.some((item) => item.path === module.path))
          .map((module) => <WorkspaceModuleCard key={module.title} module={module} />)}
      </section>
    </div>
  )
}
