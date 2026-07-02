export default function TeamPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>Create your first team</h1>
        <p>Teams group drivers, cars and race events inside your organization.</p>

        <label>Team name</label>
        <input placeholder="GT3 Pro Team" />

        <label>Category</label>
        <input placeholder="GT3" />

        <button className="primary full">Create team</button>
      </section>
    </main>
  )
}
