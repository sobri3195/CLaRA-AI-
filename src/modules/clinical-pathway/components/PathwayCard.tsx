import { AlertTriangle, Brain, ClipboardCheck, Hospital } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ClinicalPathway } from '../types';
import { getUrgencyBadgeClass, getUrgencyLabel } from '../utils/pathwayHelpers';

type PathwayCardProps = {
  pathway: ClinicalPathway;
};

function PathwayCard({ pathway }: PathwayCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-900"><Brain size={18} />{pathway.title}</h3>
          {pathway.icd10 ? <p className="text-xs text-slate-500">ICD-10: {pathway.icd10}</p> : null}
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getUrgencyBadgeClass(pathway.urgency)}`}>
          {getUrgencyLabel(pathway.urgency)}
        </span>
      </div>

      <div className="mb-3">
        <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-slate-700"><Hospital size={14} />Unit Terkait</p>
        <p className="text-sm text-slate-600">{pathway.relatedUnits.slice(0, 4).join(', ')}{pathway.relatedUnits.length > 4 ? '...' : ''}</p>
      </div>

      {pathway.redFlags?.length ? (
        <div className="mb-4 rounded-xl border border-red-100 bg-red-50 p-3">
          <p className="mb-1 flex items-center gap-1 text-xs font-semibold text-red-700"><AlertTriangle size={14} />Red Flags</p>
          <p className="text-sm text-red-800">{pathway.redFlags.slice(0, 2).join(' • ')}</p>
        </div>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <Link to={`/clinical-pathway/${pathway.id}`} className="rounded-xl bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary/90">
          Lihat CP
        </Link>
        <Link to={`/clinical-pathway/audit?pathway=${pathway.id}`} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
          <ClipboardCheck size={15} />
          Checklist Mutu
        </Link>
      </div>
    </article>
  );
}

export default PathwayCard;
