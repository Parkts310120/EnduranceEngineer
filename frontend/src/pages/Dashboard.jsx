import Header from '../components/layout/Header'
import StatusCard from '../components/cards/StatusCard'

export default function Dashboard() {
  return (
    <main className="content">
      <Header />

      <section className="grid">
        <StatusCard
          label="Next driver"
          title="Pedro"
          description="Stint 08 • Night • Ready at 19:50"
          highlight
        />

        <StatusCard
          label="Next stint window"
          title="20:20 - 20:32"
          description="Main prediction: 20:25"
        />

        <StatusCard
          label="Team status"
          title="4 drivers"
          description="Balanced schedule for 24h"
        />

        <StatusCard
          label="Alerts"
          title="0 critical"
          description="No availability conflicts"
        />
      </section>
    </main>
  )
}
