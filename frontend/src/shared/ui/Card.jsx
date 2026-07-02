export default function Card({ children, tone = 'default', className = '' }) {
  return <section className={`ui-card ui-card--${tone} ${className}`.trim()}>{children}</section>
}
