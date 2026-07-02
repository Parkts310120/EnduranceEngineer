import Card from '../../../shared/ui/Card'

export default function StintsTable({ stints }) {
  return (
    <Card className="planner-panel planner-stints">
      <span className="eyebrow">Stints table</span>
      <h2>Planned rotation</h2>
      <div className="planner-stints__table" role="table" aria-label="Planned stints">
        <div className="planner-stints__row planner-stints__row--head" role="row">
          <span>Stint</span>
          <span>Driver</span>
          <span>Window</span>
          <span>Fuel</span>
          <span>Tyres</span>
        </div>
        {stints.map((stint) => (
          <div className="planner-stints__row" key={stint.stint} role="row">
            <strong>{stint.stint}</strong>
            <span>{stint.driver}</span>
            <span>{stint.window}</span>
            <span>{stint.fuelTarget}</span>
            <span>{stint.tyres}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
