export default function OrganizationPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="logo large">
          <span>🏁</span>
          <strong>Endurance Engineer</strong>
        </div>

        <h1>Create your organization</h1>
        <p>Start by creating the racing organization that will own your teams, drivers and events.</p>

        <label>Organization name</label>
        <input placeholder="Titan Racing" />

        <label>Country</label>
        <input placeholder="Brazil" />

        <label>Timezone</label>
        <input placeholder="UTC-3" />

        <button className="primary full">Create organization</button>
      </section>
    </main>
  )
}
