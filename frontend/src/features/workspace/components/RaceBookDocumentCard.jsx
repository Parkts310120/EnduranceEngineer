import Badge from '../../../shared/ui/Badge'
import Button from '../../../shared/ui/Button'
import Card from '../../../shared/ui/Card'

export default function RaceBookDocumentCard({ document }) {
  return (
    <Card className={`race-book-card ${document.isMissing ? 'race-book-card--missing' : ''}`}>
      <div className="race-book-card__header">
        <div>
          <span className="eyebrow">{document.category}</span>
          <h3>{document.title}</h3>
        </div>
        <Badge tone={document.statusTone}>{document.statusLabel}</Badge>
      </div>

      <p>{document.description}</p>

      {document.isMissing ? (
        <div className="race-book-empty-state">
          <strong>Document not created yet</strong>
          <span>Create this page before race mode so the team has a single source of truth.</span>
        </div>
      ) : null}

      <div className="race-book-card__meta">
        <span>Owner: {document.owner}</span>
        <span>Updated: {document.updatedAt}</span>
      </div>

      <Button variant={document.isMissing ? 'primary' : 'secondary'}>{document.primaryAction}</Button>
    </Card>
  )
}
