import Card from '../../../shared/ui/Card'

export default function PlannerSummary({ summary }) {
  const metrics = [
    { label: 'Planned stints', value: summary.totalStints },
    { label: 'Race length', value: summary.plannedHours },
    { label: 'Ready drivers', value: summary.readyDrivers },
    { label: 'Warnings', value: summary.warnings },
  ]

  return (
    <section className="planner-summary-grid" aria-label="Planner summary">
      {metrics.map((metric) => (
        <Card className="planner-summary-card" key={metric.label}>
          <span className="eyebrow">{metric.label}</span>
          <strong>{metric.value}</strong>
        </Card>
      ))}
    </section>
  )
}
