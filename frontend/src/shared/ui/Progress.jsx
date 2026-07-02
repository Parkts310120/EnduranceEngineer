export default function Progress({ value, label }) {
  return (
    <div className="ui-progress" aria-label={label}>
      <div className="ui-progress__meta">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="ui-progress__track">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
