export default function EventsPage() {
  return (
    <main className="content">
      <header className="topbar">
        <div>
          <h1>Events</h1>
          <p>Create and manage endurance race weekends.</p>
        </div>

        <button className="primary">New event</button>
      </header>

      <section className="grid">
        <div className="card highlight">
          <span className="label">Upcoming event</span>
          <h2>Spa 24h</h2>
          <p>Ford Mustang GT3 • 24h • Starts 14:00</p>
        </div>

        <div className="card">
          <span className="label">Future</span>
          <h2>Daytona 24h</h2>
          <p>Not configured yet</p>
        </div>

        <div className="card">
          <span className="label">Future</span>
          <h2>Le Mans</h2>
          <p>Not configured yet</p>
        </div>
      </section>
    </main>
  )
}
