import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function SimulationComparison({ data }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-slate-700">Before vs After CLaRA-AI</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="metric" tick={{ fontSize: 11 }} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="before" fill="#64748b" name="Sebelum" radius={[4, 4, 0, 0]} />
            <Bar dataKey="after" fill="#0d9488" name="Sesudah" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SimulationComparison;
