import CarsStatus from '../components/CarsStatus'
import DriversStatus from '../components/DriversStatus'
import PlannerSummary from '../components/PlannerSummary'
import PlannerTimeline from '../components/PlannerTimeline'
import SessionOverview from '../components/SessionOverview'
import StintsTable from '../components/StintsTable'
import WarningsPanel from '../components/WarningsPanel'
import { getPlanner } from '../services/plannerService'

export default function PlannerScreen() {
  const planner = getPlanner()

  return (
    <section className="screen-stack planner-page">
      <SessionOverview session={planner.session} />
      <PlannerSummary summary={planner.summary} />

      <section className="planner-layout">
        <DriversStatus drivers={planner.drivers} />
        <CarsStatus cars={planner.cars} />
      </section>

      <PlannerTimeline timeline={planner.timeline} />
      <StintsTable stints={planner.stints} />
      <WarningsPanel warnings={planner.warnings} />
    </section>
  )
}
