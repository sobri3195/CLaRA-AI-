import { useParams } from 'react-router-dom';
import { getPathwayById } from '../utils/pathwayHelpers';

function ClinicalPathwayPrint() {
  const { id = '' } = useParams();
  const pathway = getPathwayById(id);

  if (!pathway) return <p>Data CP tidak ditemukan.</p>;

  return (
    <div className="space-y-3 rounded-2xl bg-white p-6 shadow-card print:shadow-none">
      <h1 className="text-xl font-bold">{pathway.title}</h1>
      <p className="text-sm">{pathway.icd10 ? `ICD-10: ${pathway.icd10}` : '-'}</p>
      <h2 className="font-semibold">Timeline</h2>
      {pathway.phases.map((phase) => (
        <div key={phase.id} className="rounded-xl border border-slate-200 p-3">
          <h3 className="font-semibold">{phase.title}</h3>
          <p className="text-sm text-slate-600">{phase.timeWindow}</p>
        </div>
      ))}
    </div>
  );
}

export default ClinicalPathwayPrint;
