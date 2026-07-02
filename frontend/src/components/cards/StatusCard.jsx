export default function StatusCard({ label, title, description, highlight }) {
  return (
    <div className={`card ${highlight ? 'highlight' : ''}`}>
      <span className="label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
