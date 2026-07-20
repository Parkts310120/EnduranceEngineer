import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function RaceStatusPanel({ raceControl, intelligence }) {
  return (
    <Card className="race-status-panel">
      <div className="race-status-panel__header">
        <div>
          <span className="eyebrow">Mission Control</span>
          <h2>{raceControl.race.name}</h2>
          <p>{raceControl.race.phase}</p>
        </div>

        <Badge tone="accent">
          {intelligence.hero.confidence}% confidence
        </Badge>
      </div>

      <div className="garage-summary-grid">
        <Card>
          <span className="eyebrow">Current Driver</span>
          <strong>{raceControl.currentStint.driver}</strong>
          <p>{raceControl.currentStint.elapsed} elapsed</p>
        </Card>

        <Card>
          <span className="eyebrow">Fuel</span>
          <strong>{raceControl.currentStint.fuel}%</strong>
          <p>Estimated pit in {raceControl.currentStint.expectedPit}</p>
        </Card>

        <Card>
          <span className="eyebrow">Tyres</span>
          <strong>{raceControl.currentStint.tyres}%</strong>
          <p>{raceControl.currentStint.tyreSet}</p>
        </Card>

        <Card>
          <span className="eyebrow">Next Driver</span>
          <strong>{raceControl.currentStint.nextDriver}</strong>
          <p>Driver swap planned</p>
        </Card>
      </div>

      <div className="pit-checklist-panel">
        <div className="pit-checklist-panel__header">
          <span className="eyebrow">Pit Checklist</span>
          <Badge tone="warning">Pit in {raceControl.currentStint.expectedPit}</Badge>
        </div>

        <div className="pit-checklist-list">
          {raceControl.pitChecklist.map((item) => (
            <div className="pit-checklist-item" key={item.id}>
              <span>{item.label}</span>
              <Badge tone={item.status === 'done' ? 'success' : 'neutral'}>
                {item.status}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}
