import Card from '../../../shared/ui/Card'

export default function CompletedModulesCard({ modules }) {
  return (
    <Card className="modules-card">
      <span className="eyebrow">Completed modules</span>
      <h2>Workspace modules</h2>
      <div className="module-status-grid">
        {modules.map((module) => (
          <div className="module-status" key={module.name}>
            <span>{module.name}</span>
            <span className={`status-dot status-dot--${module.tone}`} />
          </div>
        ))}
      </div>
    </Card>
  )
}
