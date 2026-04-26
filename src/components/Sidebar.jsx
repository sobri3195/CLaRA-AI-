import { NavLink } from 'react-router-dom';
import { Activity, BadgeAlert, BedDouble, Brain, ClipboardList, Gauge, Home, Microscope, PlaySquare } from 'lucide-react';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Gauge },
  { to: '/clinical-compliance', label: 'Clinical Compliance', icon: Microscope },
  { to: '/fraud-analytics', label: 'Fraud Analytics', icon: BadgeAlert },
  { to: '/room-integrity', label: 'Room Integrity', icon: BedDouble },
  { to: '/audit-assistant', label: 'Audit Assistant', icon: ClipboardList },
  { to: '/simulation', label: 'Simulation', icon: PlaySquare },
  { to: '/clinical-pathway', label: 'Clinical Pathway', icon: Brain },
];

function Sidebar() {
  return (
    <aside className="hidden w-72 shrink-0 bg-primary p-5 text-slate-200 lg:block">
      <NavLink to="/" className="mb-8 flex items-center gap-2">
        <Activity className="text-accent" />
        <div>
          <p className="text-sm text-slate-300">CLaRA-AI</p>
          <p className="text-xs text-slate-400">Clinical & Risk Audit</p>
        </div>
      </NavLink>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-white/15 text-white' : 'text-slate-300 hover:bg-white/10'}`}
        >
          <Home size={16} />
          Landing
        </NavLink>
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-white/15 text-white' : 'text-slate-300 hover:bg-white/10'}`}
          >
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
