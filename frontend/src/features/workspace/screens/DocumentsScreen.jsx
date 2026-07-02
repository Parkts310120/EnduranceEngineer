import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import RaceBookDocumentCard from '../components/RaceBookDocumentCard'
import RaceBookImportantDocuments from '../components/RaceBookImportantDocuments'
import { getRaceBook } from '../services/raceBookService'

export default function DocumentsScreen() {
  const raceBook = getRaceBook()

  return (
    <section className="screen-stack race-book-screen">
      <div className="workspace-hero race-book-hero">
        <div>
          <span className="eyebrow">Workspace documents</span>
          <h2>{raceBook.title}</h2>
          <p>{raceBook.description}</p>
        </div>
        <div className="race-book-stats" aria-label="Race book status summary">
          <Badge tone="success">{raceBook.stats.ready} ready</Badge>
          <Badge tone="accent">{raceBook.stats.inReview} in review</Badge>
          <Badge tone="warning">{raceBook.stats.missing} missing</Badge>
        </div>
      </div>

      <section className="race-book-layout">
        <RaceBookImportantDocuments documents={raceBook.importantDocuments} />
        <Card className="race-book-missing-summary">
          <span className="eyebrow">Empty states</span>
          <h2>Missing documents</h2>
          <p>
            {raceBook.missingDocuments.length === 0
              ? 'All required Race Book documents have at least a draft.'
              : `${raceBook.missingDocuments.length} documents still need to be created before race mode.`}
          </p>
        </Card>
      </section>

      <section className="race-book-grid" aria-label="Race Book documents">
        {raceBook.documents.map((document) => (
          <RaceBookDocumentCard document={document} key={document.id} />
        ))}
      </section>
    </section>
  )
}
