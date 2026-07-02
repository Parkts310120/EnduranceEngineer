import { files } from '../../../domain/mockData'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function FilesScreen() {
  return (
    <section className="screen-stack">
      <div className="section-heading">
        <span className="eyebrow">Assets</span>
        <h2>Files</h2>
        <p>Workspace files are mocked for now and ready for future storage integration.</p>
      </div>
      <div className="responsive-grid">
        {files.map((file) => (
          <Card key={file.id}>
            <Badge>{file.type}</Badge>
            <h3>{file.name}</h3>
            <p>{file.status}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
