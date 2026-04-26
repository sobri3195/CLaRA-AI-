function StatCard({ title, value, subtitle, icon: Icon, tone = 'primary' }) {
  const tones = {
    primary: 'bg-primary/10 text-primary',
    teal: 'bg-accent/10 text-accent',
    danger: 'bg-highRisk/10 text-highRisk',
    warning: 'bg-mediumRisk/10 text-mediumRisk',
    success: 'bg-lowRisk/10 text-lowRisk',
  };

  return (
    <div className="rounded-xl bg-white p-5 shadow-card">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        {Icon && (
          <div className={`rounded-lg p-2 ${tones[tone]}`}>
            <Icon size={18} />
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      {subtitle && <p className="mt-1 text-xs text-slate-500">{subtitle}</p>}
    </div>
  );
}

export default StatCard;
