import { Link } from 'react-router-dom'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function WorkspaceModuleCard({ module }) {
  return (
    <Card className="module-card">
      <div>
        <Badge tone={module.status === 'Ready' ? 'success' : 'neutral'}>{module.status}</Badge>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
      </div>
      <Link to={module.path}>Open</Link>
    </Card>
  )
}
