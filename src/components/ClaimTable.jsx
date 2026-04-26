import { Link } from 'react-router-dom';
import RiskBadge from './RiskBadge';

function ClaimTable({ claims }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-card">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 text-left text-xs uppercase tracking-wide text-slate-600">
          <tr>
            <th className="px-4 py-3">Claim ID</th>
            <th className="px-4 py-3">Hospital</th>
            <th className="px-4 py-3">Diagnosis</th>
            <th className="px-4 py-3">Risk Score</th>
            <th className="px-4 py-3">Risk Level</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim) => (
            <tr key={claim.id} className="border-t border-slate-100">
              <td className="px-4 py-3 font-medium text-primary">{claim.id}</td>
              <td className="px-4 py-3">{claim.hospitalId}</td>
              <td className="px-4 py-3">{claim.diagnosis}</td>
              <td className="px-4 py-3">{claim.fraudRiskScore}</td>
              <td className="px-4 py-3"><RiskBadge level={claim.riskLevel} /></td>
              <td className="px-4 py-3">
                <Link to={`/claims/${claim.id}`} className="text-accent hover:underline">Lihat Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClaimTable;
