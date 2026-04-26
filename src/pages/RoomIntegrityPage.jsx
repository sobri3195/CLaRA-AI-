import { AlertTriangle } from 'lucide-react';
import RoomIntegrityTable from '../components/RoomIntegrityTable';
import { roomIntegrityData } from '../data/mockData';

function RoomIntegrityPage() {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 shadow-card">
        <div className="flex items-start gap-2">
          <AlertTriangle size={16} className="mt-0.5" />
          <div>
            <p className="text-sm font-semibold">Alert Integritas Kamar & Bed</p>
            <p className="text-xs">Ditemukan potensi klaim rawat inap melebihi kapasitas kamar pada 3 rumah sakit prioritas.</p>
          </div>
        </div>
      </div>

      <RoomIntegrityTable rows={roomIntegrityData} />

      <div className="rounded-xl bg-white p-5 shadow-card">
        <h3 className="mb-3 text-sm font-semibold text-slate-700">Timeline Visual (Non-Teknis)</h3>
        <div className="space-y-3 text-sm">
          {roomIntegrityData.map((item) => (
            <div key={item.claimId} className="rounded-lg border border-slate-200 p-3">
              <p className="font-semibold text-primary">{item.claimId} - {item.hospitalId}</p>
              <p className="text-xs text-slate-600">{item.overlapWindow}</p>
              <p className="mt-1 text-xs text-slate-500">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomIntegrityPage;
