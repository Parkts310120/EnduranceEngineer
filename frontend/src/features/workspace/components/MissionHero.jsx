import Badge from '../../../shared/ui/Badge'
import Progress from '../../../shared/ui/Progress'

export default function MissionHero({ phases, workspaceStatus }) {
  return (
    <section className="workspace-hero mission-hero">
      <div>
        <span className="eyebrow">Mission Control</span>
        <h2>{workspaceStatus.raceState}</h2>
        <p>{workspaceStatus.summary}</p>
      </div>

      <div className="mission-hero__aside">
        <Progress value={workspaceStatus.progress} label="Preparation readiness" />
        <div className="phase-list" aria-label="Workspace phase">
          {phases.map((phase) => (
            <Badge key={phase} tone={phase === workspaceStatus.phase ? 'accent' : 'neutral'}>
              {phase}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
