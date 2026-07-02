import CompletedModulesCard from '../components/CompletedModulesCard'
import MissionHero from '../components/MissionHero'
import MissionSummaryGrid from '../components/MissionSummaryGrid'
import NextActionCard from '../components/NextActionCard'
import PreparationChecklistCard from '../components/PreparationChecklistCard'
import ProgressCard from '../components/ProgressCard'
import TeamStatusCard from '../components/TeamStatusCard'
import UpcomingScheduleCard from '../components/UpcomingScheduleCard'
import { getWorkspaceMissionControl } from '../services/workspaceService'

export default function OverviewScreen({ workspace }) {
  const missionControl = getWorkspaceMissionControl(workspace)
  const { checklist, missionCards, modules, nextAction, phases, progress, schedule, teamStatus, workspaceStatus } =
    missionControl

  return (
    <div className="screen-stack mission-control">
      <MissionHero phases={phases} workspaceStatus={workspaceStatus} />
      <MissionSummaryGrid cards={missionCards} />

      <section className="mission-layout">
        <NextActionCard action={nextAction} />
        <ProgressCard progress={progress} />
      </section>

      <section className="mission-columns">
        <PreparationChecklistCard checklist={checklist} />
        <CompletedModulesCard modules={modules} />
        <TeamStatusCard teamStatus={teamStatus} />
        <UpcomingScheduleCard schedule={schedule} />
      </section>
    </div>
  )
}
