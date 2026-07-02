const menuItems = [
  'Dashboard',
  'Race',
  'Drivers',
  'Planner',
  'Strategy',
  'Tires',
  'Telemetry',
  'Race Engineer AI',
  'Settings'
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span>🏁</span>
        <strong>Endurance Engineer</strong>
      </div>

      <nav>
        {menuItems.map((item) => (
          <button
            key={item}
            className={item === 'Dashboard' ? 'active' : ''}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  )
}
