import LiveRaceAlerts from '../components/LiveRaceAlerts'
import LiveRaceFocusGrid from '../components/LiveRaceFocusGrid'
import LiveRaceHero from '../components/LiveRaceHero'
import LiveRaceNextActions from '../components/LiveRaceNextActions'
import LiveRaceStatusPanel from '../components/LiveRaceStatusPanel'
import LiveRaceTimeline from '../components/LiveRaceTimeline'
import { getLiveRaceMode } from '../services/liveRaceService'

export default function LiveRaceScreen() {
  const liveRace = getLiveRaceMode()

  return (
    <section className="screen-stack live-race-screen">
      <LiveRaceHero hero={liveRace.hero} />
      <LiveRaceFocusGrid
        currentDriver={liveRace.currentDriver}
        currentStint={liveRace.currentStint}
        nextDriver={liveRace.nextDriver}
        pitWindow={liveRace.pitWindow}
      />
      <LiveRaceStatusPanel fuel={liveRace.fuel} tyres={liveRace.tyres} team={liveRace.team} />
      <section className="live-race-command-grid">
        <LiveRaceAlerts alerts={liveRace.alerts} />
        <LiveRaceNextActions actions={liveRace.actions} />
      </section>
      <LiveRaceTimeline timeline={liveRace.timeline} />
    </section>
  )
}
