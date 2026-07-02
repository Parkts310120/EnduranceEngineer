import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function RaceBookImportantDocuments({ documents }) {
  return (
    <Card className="race-book-important">
      <div className="mission-card-heading">
        <div>
          <span className="eyebrow">Important documents</span>
          <h2>Must-read before race mode</h2>
        </div>
        <Badge tone="accent">{documents.length} pinned</Badge>
      </div>

      <div className="race-book-important__list">
        {documents.map((document) => (
          <div className="race-book-important__item" key={document.id}>
            <div>
              <strong>{document.title}</strong>
              <span>{document.owner}</span>
            </div>
            <Badge tone={document.statusTone}>{document.statusLabel}</Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
