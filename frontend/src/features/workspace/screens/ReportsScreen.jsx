import { reports } from '../../../domain/mockData'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function ReportsScreen() {
  return (
    <section className="screen-stack">
      <div className="section-heading">
        <span className="eyebrow">Learning loop</span>
        <h2>Reports</h2>
        <p>Report surfaces are prepared without implementing AI or telemetry.</p>
      </div>
      <div className="responsive-grid">
        {reports.map((report) => (
          <Card key={report.id}>
            <Badge>{report.status}</Badge>
            <h3>{report.title}</h3>
            <p>Placeholder for future manual and automated reporting.</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
