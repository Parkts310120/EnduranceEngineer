import Sidebar from '../../shared/layout/Sidebar'

const workspaceModules = [
  {
    title: 'Overview',
    description: 'Current race status, next actions and operational summary.',
    status: 'Active'
  },
  {
    title: 'Members',
    description: 'Drivers, engineers, spotters and managers assigned to this workspace.',
    status: 'Ready'
  },
  {
    title: 'Documents',
    description: 'Race book, driver briefing, setup notes and procedures.',
    status: 'Draft'
  },
  {
    title: 'Plans',
    description: 'Stint plan, fuel plan, tyre plan and safety car scenarios.',
    status: 'Draft'
  },
  {
    title: 'Files',
    description: 'Setups, PDFs, images, exports and reference material.',
    status: 'Empty'
  },
  {
    title: 'Telemetry',
    description: 'Future telemetry sessions, fuel usage and stint analysis.',
    status: 'Future'
  },
  {
    title: 'Reports',
    description: 'Post-race debriefs, AI summaries and team performance analysis.',
    status: 'Future'
  },
  {
    title: 'Settings',
    description: 'Workspace configuration, race timezone, car and squad.',
    status: 'Ready'
  }
]

export default function WorkspacePage() {
  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        <header className="topbar">
          <div>
            <span className="label">Race Workspace</span>
            <h1>Spa 24h</h1>
            <p>Planning • Ford Mustang GT3 • Spa-Francorchamps • 24h</p>
          </div>

          <button className="primary">Open race mode</button>
        </header>

        <section className="workspace-hero">
          <div>
            <span className="label">Workspace status</span>
            <h2>Planning phase</h2>
            <p>
              This workspace centralizes everything the team needs before,
              during and after the race weekend.
            </p>
          </div>

          <div className="phase-list">
            <span className="phase active">Planning</span>
            <span className="phase">Ready</span>
            <span className="phase">Race</span>
            <span className="phase">Finished</span>
            <span className="phase">Archived</span>
          </div>
        </section>

        <section className="module-grid">
          {workspaceModules.map((module) => (
            <article className="module-card" key={module.title}>
              <div>
                <span className="label">{module.status}</span>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
