const riskStyles = {
  High: 'bg-red-100 text-red-700 border-red-200',
  Medium: 'bg-amber-100 text-amber-700 border-amber-200',
  Low: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Critical: 'bg-red-100 text-red-700 border-red-300',
};

function RiskBadge({ level }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${riskStyles[level] || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
      {level}
    </span>
  );
}

export default RiskBadge;
