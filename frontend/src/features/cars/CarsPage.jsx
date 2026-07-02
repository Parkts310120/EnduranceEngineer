import { cars } from '../../domain/mockData'
import PageHeader from '../../shared/layout/PageHeader'
import CarCard from './components/CarCard'

export default function CarsPage() {
  return (
    <main className="content-page">
      <PageHeader
        eyebrow="Assets"
        title="Cars"
        description="Manage team cars used by workspaces, test days and race operations."
        action="Add car"
      />

      <section className="responsive-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </section>
    </main>
  )
}
