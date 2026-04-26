import { AlertTriangle, CheckCircle2 } from 'lucide-react';

function ExplainabilityPanel({ flags = [] }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-slate-700">Explainability Panel</h3>
      <ul className="space-y-2">
        {flags.map((flag, idx) => (
          <li key={idx} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
            {flag.includes('dalam batas') ? (
              <CheckCircle2 size={16} className="mt-0.5 text-emerald-600" />
            ) : (
              <AlertTriangle size={16} className="mt-0.5 text-amber-600" />
            )}
            <span>{flag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExplainabilityPanel;
