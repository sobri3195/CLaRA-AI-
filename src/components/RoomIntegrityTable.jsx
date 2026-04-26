import RiskBadge from './RiskBadge';

function RoomIntegrityTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-card">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-100 text-left text-xs uppercase text-slate-600">
          <tr>
            <th className="px-4 py-3">Claim</th>
            <th className="px-4 py-3">Hospital</th>
            <th className="px-4 py-3">Room Overlap</th>
            <th className="px-4 py-3">Double Occupancy</th>
            <th className="px-4 py-3">Anomaly</th>
            <th className="px-4 py-3">Timeline</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.claimId} className="border-t border-slate-100">
              <td className="px-4 py-3 font-medium text-primary">{row.claimId}</td>
              <td className="px-4 py-3">{row.hospitalId}</td>
              <td className="px-4 py-3">{row.roomOverlapFlag ? 'Yes' : 'No'}</td>
              <td className="px-4 py-3">{row.doubleOccupancyClaim ? 'Yes' : 'No'}</td>
              <td className="px-4 py-3"><RiskBadge level={row.bedUtilizationAnomaly === 'High' ? 'High' : 'Medium'} /></td>
              <td className="px-4 py-3">{row.overlapWindow}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoomIntegrityTable;
