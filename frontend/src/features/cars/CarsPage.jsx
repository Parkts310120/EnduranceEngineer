export default function CarsPage() {
  return (
    <main className="content">
      <header className="topbar">
        <div>
          <h1>Cars</h1>
          <p>Manage cars, simulators and endurance-specific setup information.</p>
        </div>

        <button className="primary">Add car</button>
      </header>

      <section className="grid">
        <div className="card highlight">
          <span className="label">iRacing</span>
          <h2>Ford Mustang GT3</h2>
          <p>Fuel tank: 120L • Class: GT3</p>
        </div>

        <div className="card">
          <span className="label">Future</span>
          <h2>BMW M4 GT3</h2>
          <p>Not configured yet</p>
        </div>

        <div className="card">
          <span className="label">Future</span>
          <h2>Ferrari 296 GT3</h2>
          <p>Not configured yet</p>
        </div>
      </section>
    </main>
  )
}
