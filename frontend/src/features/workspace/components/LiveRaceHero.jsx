import Badge from '../../../shared/ui/Badge'

export default function LiveRaceHero({ hero }) {
  return (
    <section className="workspace-hero live-race-hero">
      <div>
        <span className="eyebrow">Workspace live</span>
        <h2>{hero.title}</h2>
        <p>{hero.description}</p>
      </div>
      <div className="live-race-hero__status">
        <Badge tone="success">{hero.status}</Badge>
        <span>{hero.phase}</span>
      </div>
    </section>
  )
}
