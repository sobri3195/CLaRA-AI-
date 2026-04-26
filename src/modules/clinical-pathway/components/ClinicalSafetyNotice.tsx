import { AlertTriangle } from 'lucide-react';

function ClinicalSafetyNotice() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 shadow-card">
      <div className="mb-2 flex items-center gap-2 font-semibold">
        <AlertTriangle size={18} />
        Clinical Safety Notice
      </div>
      <p>
        Modul ini adalah alat bantu Clinical Pathway dan audit mutu. Keputusan klinis tetap berada pada DPJP/tenaga medis
        berwenang. Dosis obat dan protokol detail harus mengikuti kebijakan RS terbaru.
      </p>
    </div>
  );
}

export default ClinicalSafetyNotice;
