export default function Input({ label, ...props }) {
  return (
    <label className="ui-field">
      <span>{label}</span>
      <input className="ui-input" {...props} />
    </label>
  )
}
