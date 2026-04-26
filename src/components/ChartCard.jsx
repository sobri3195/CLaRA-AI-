function ChartCard({ title, children, action }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        {action}
      </div>
      <div className="h-72">{children}</div>
    </div>
  );
}

export default ChartCard;
