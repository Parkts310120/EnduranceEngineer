import { plans } from '../../../domain/mockData'
import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'
import Progress from '../../../shared/ui/Progress'

export default function PlansScreen() {
  return (
    <section className="screen-stack">
      <div className="section-heading">
        <span className="eyebrow">Operational planning</span>
        <h2>Plans</h2>
        <p>Planning foundation for stint, fuel, tyre and contingency decisions.</p>
      </div>
      <div className="responsive-grid">
        {plans.map((plan) => (
          <Card key={plan.id}>
            <Badge>{plan.status}</Badge>
            <h3>{plan.title}</h3>
            <Progress value={plan.progress} label="Plan readiness" />
          </Card>
        ))}
      </div>
    </section>
  )
}
