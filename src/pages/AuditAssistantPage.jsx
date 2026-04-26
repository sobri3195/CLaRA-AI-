import { Link } from 'react-router-dom';
import RiskBadge from '../components/RiskBadge';
import { auditTasks } from '../data/mockData';

function AuditAssistantPage() {
  return (
    <div className="overflow-x-auto rounded-xl bg-white p-5 shadow-card">
      <h2 className="mb-4 text-lg font-bold text-slate-800">Audit Assistant Recommendations</h2>
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 text-left text-xs uppercase text-slate-600">
          <tr>
            <th className="px-4 py-3">Claim</th>
            <th className="px-4 py-3">Alasan Audit</th>
            <th className="px-4 py-3">Dampak Finansial</th>
            <th className="px-4 py-3">Urgensi</th>
            <th className="px-4 py-3">Assigned</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {auditTasks.map((task) => (
            <tr key={task.claimId} className="border-t border-slate-100">
              <td className="px-4 py-3 font-semibold text-primary">{task.claimId}</td>
              <td className="px-4 py-3">{task.reason}</td>
              <td className="px-4 py-3">Rp {task.financialImpact.toLocaleString('id-ID')}</td>
              <td className="px-4 py-3"><RiskBadge level={task.urgency} /></td>
              <td className="px-4 py-3">{task.assignedAuditor}</td>
              <td className="px-4 py-3">{task.status}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  <Link to={`/claims/${task.claimId}`} className="rounded-md bg-primary px-2 py-1 text-xs text-white">Review Claim</Link>
                  <button className="rounded-md border border-slate-300 px-2 py-1 text-xs">Assign Auditor</button>
                  <button className="rounded-md border border-emerald-300 bg-emerald-50 px-2 py-1 text-xs text-emerald-700">Mark as Cleared</button>
                  <button className="rounded-md border border-red-300 bg-red-50 px-2 py-1 text-xs text-red-700">Escalate</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AuditAssistantPage;
