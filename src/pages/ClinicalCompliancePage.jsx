import { clinicalComplianceData } from '../data/mockData';

function ClinicalCompliancePage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-3">
        {clinicalComplianceData.map((row) => (
          <div key={row.claimId} className="rounded-xl bg-white p-5 shadow-card">
            <h3 className="text-sm font-semibold text-primary">{row.claimId}</h3>
            <p className="mt-2 text-xs text-slate-500">Expected LOS vs Actual LOS</p>
            <p className="text-sm font-bold text-slate-700">{row.expectedLos} vs {row.actualLos} hari</p>
            <div className="mt-3 h-2 rounded-full bg-slate-100">
              <div className="h-2 rounded-full bg-accent" style={{ width: `${row.score}%` }} />
            </div>
            <p className="mt-2 text-xs text-slate-600">Clinical Compliance Score: {row.score}%</p>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow-card">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-100 text-left text-xs uppercase text-slate-600">
            <tr>
              <th className="px-4 py-3">Claim</th>
              <th className="px-4 py-3">Dx-Procedure Match</th>
              <th className="px-4 py-3">Pathway Violation</th>
              <th className="px-4 py-3">Overtreatment</th>
              <th className="px-4 py-3">Undertreatment</th>
              <th className="px-4 py-3">Score</th>
            </tr>
          </thead>
          <tbody>
            {clinicalComplianceData.map((row) => (
              <tr key={row.claimId} className="border-t border-slate-100">
                <td className="px-4 py-3 font-semibold text-primary">{row.claimId}</td>
                <td className="px-4 py-3">{row.diagnosisProcedureMatch}</td>
                <td className="px-4 py-3">{row.pathwayViolation}</td>
                <td className="px-4 py-3">{row.overtreatment ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3">{row.undertreatment ? 'Yes' : 'No'}</td>
                <td className="px-4 py-3">{row.score}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClinicalCompliancePage;
