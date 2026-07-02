import Badge from '../../../shared/ui/Badge'
import Card from '../../../shared/ui/Card'

export default function CarCard({ car }) {
  return (
    <Card tone={car.status === 'Primary' ? 'highlight' : 'default'}>
      <Badge tone={car.status === 'Primary' ? 'accent' : 'neutral'}>{car.status}</Badge>
      <h2>{car.name}</h2>
      <p>{car.simulator} • {car.class} • {car.fuelTankLiters}L tank</p>
    </Card>
  )
}
