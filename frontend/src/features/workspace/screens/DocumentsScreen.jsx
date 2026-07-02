import { documents } from '../../../domain/mockData'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function DocumentsScreen() {
  return (
    <section className="screen-stack">
      <div className="section-heading">
        <span className="eyebrow">Knowledge base</span>
        <h2>Documents</h2>
        <p>Operational documents for briefing, procedures and reference.</p>
      </div>
      <div className="responsive-grid">
        {documents.map((document) => (
          <Card key={document.id}>
            <Badge>{document.status}</Badge>
            <h3>{document.title}</h3>
            <p>Owner: {document.owner}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
