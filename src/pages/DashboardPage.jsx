import { AlertCircle, Banknote, BanknoteArrowDown, ClipboardCheck, FileStack } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart, Line } from 'recharts';
import { auditTasks, claimsData, dashboardStats, hospitalsData, riskTrendData } from '../data/mockData';
import AuditPriorityList from '../components/AuditPriorityList';
import ChartCard from '../components/ChartCard';
import ClaimTable from '../components/ClaimTable';
import StatCard from '../components/StatCard';

function DashboardPage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard title="Total Klaim Masuk" value={dashboardStats.totalClaims.toLocaleString('id-ID')} icon={FileStack} tone="primary" />
        <StatCard title="Klaim High-Risk" value={dashboardStats.highRiskClaims.toLocaleString('id-ID')} icon={AlertCircle} tone="danger" />
        <StatCard title="Klaim Medium-Risk" value={dashboardStats.mediumRiskClaims.toLocaleString('id-ID')} icon={ClipboardCheck} tone="warning" />
        <StatCard title="Klaim Low-Risk" value={dashboardStats.lowRiskClaims.toLocaleString('id-ID')} icon={ClipboardCheck} tone="success" />
        <StatCard title="Estimasi Potensi Kerugian" value={`Rp ${dashboardStats.estimatedLoss.toLocaleString('id-ID')}`} icon={Banknote} tone="danger" />
        <StatCard title="Estimasi Potensi Penghematan" value={`Rp ${dashboardStats.estimatedSaving.toLocaleString('id-ID')}`} icon={BanknoteArrowDown} tone="teal" />
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <ChartCard title="Fraud Risk Trend (Bulanan)">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={riskTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line dataKey="fraud" stroke="#dc2626" strokeWidth={3} dot={{ r: 3 }} />
                <Line dataKey="clinical" stroke="#0d9488" strokeWidth={2} dot={{ r: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
        <AuditPriorityList tasks={auditTasks} />
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <ChartCard title="Clinical Deviation & Cost Anomaly Summary">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={riskTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="clinical" fill="#14b8a6" />
              <Bar dataKey="anomaly" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Hospital Risk Heatmap (Simple)">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hospitalsData.slice(0, 6)} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={130} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Bar dataKey="riskScore">
                {hospitalsData.slice(0, 6).map((entry) => (
                  <Cell key={entry.name} fill={entry.riskScore > 85 ? '#dc2626' : '#f59e0b'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ClaimTable claims={claimsData} />
    </div>
  );
}

export default DashboardPage;
