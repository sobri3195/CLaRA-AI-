import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartCard from '../components/ChartCard';
import { doctorsData, hospitalsData, riskTrendData } from '../data/mockData';

const riskDistribution = [
  { name: 'High', value: 1832, color: '#dc2626' },
  { name: 'Medium', value: 4098, color: '#f59e0b' },
  { name: 'Low', value: 6526, color: '#16a34a' },
];

function FraudAnalyticsPage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title="Risk Level Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={riskDistribution} dataKey="value" nameKey="name" outerRadius={110} label>
                {riskDistribution.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Tren Klaim Mencurigakan Bulanan">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="fraud" fill="#dc2626" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title="Top 10 Rumah Sakit Berisiko">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hospitalsData} layout="vertical" margin={{ left: 30 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="suspiciousClaims" fill="#0d9488" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Top Dokter Dengan Klaim Anomali">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={doctorsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-10} height={60} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="anomalies" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Duplicate Claim Indicator', value: '8.1%' },
          { label: 'Readmission < 30 days', value: '12.4%' },
          { label: 'Upcoding Indicator', value: '6.9%' },
          { label: 'Unbundling Indicator', value: '5.2%' },
        ].map((item) => (
          <div key={item.label} className="rounded-xl bg-white p-5 shadow-card">
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-primary">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FraudAnalyticsPage;
