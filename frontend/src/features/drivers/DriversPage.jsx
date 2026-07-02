export default function DriversPage() {
  return (
    <main className="content">
      <header className="topbar">
        <div>
          <h1>Drivers</h1>
          <p>Manage driver profiles, availability and endurance performance ratings.</p>
        </div>

        <button className="primary">Add driver</button>
      </header>

      <section className="grid">
        <div className="card">
          <span className="label">Driver</span>
          <h2>Joao</h2>
          <p>Fuel Saving 8/10 • Night 5/10 • Consistency 7/10</p>
        </div>

        <div className="card">
          <span className="label">Driver</span>
          <h2>Pedro</h2>
          <p>Fuel Saving 7/10 • Night 9/10 • Consistency 8/10</p>
        </div>

        <div className="card">
          <span className="label">Driver</span>
          <h2>Lucas</h2>
          <p>Pace 9/10 • Traffic 9/10 • Can start and finish</p>
        </div>

        <div className="card">
          <span className="label">Driver</span>
          <h2>Rafael</h2>
          <p>Consistency 9/10 • Tyres 8/10 • Reserve night driver</p>
        </div>
      </section>
    </main>
  )
}
