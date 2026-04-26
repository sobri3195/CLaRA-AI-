import RiskBadge from './RiskBadge';

function AuditPriorityList({ tasks }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-card">
      <h3 className="mb-4 text-sm font-semibold text-slate-700">Audit Priority List</h3>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.claimId} className="rounded-lg border border-slate-200 p-3">
            <div className="mb-2 flex items-center justify-between">
              <p className="font-semibold text-primary">{task.claimId}</p>
              <RiskBadge level={task.urgency} />
            </div>
            <p className="text-xs text-slate-600">{task.reason}</p>
            <p className="mt-2 text-xs text-slate-500">Assigned: {task.assignedAuditor} · {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AuditPriorityList;
