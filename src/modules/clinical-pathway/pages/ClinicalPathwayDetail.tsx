import { Brain, Copy, Hospital } from 'lucide-react';
import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import ClinicalSafetyNotice from '../components/ClinicalSafetyNotice';
import DischargeCriteriaBox from '../components/DischargeCriteriaBox';
import PathwayTimeline from '../components/PathwayTimeline';
import PrintButton from '../components/PrintButton';
import RedFlagPanel from '../components/RedFlagPanel';
import ReferralCriteriaBox from '../components/ReferralCriteriaBox';
import { getPathwayById } from '../utils/pathwayHelpers';

function ClinicalPathwayDetail() {
  const { id = '' } = useParams();
  const pathway = getPathwayById(id);

  const summaryText = useMemo(() => {
    if (!pathway) return '';
    return `${pathway.title}\nKriteria pasien: ${pathway.patientCriteria.join('; ')}\nKriteria rujukan: ${pathway.referralCriteria.join('; ')}`;
  }, [pathway]);

  if (!pathway) {
    return <div className="rounded-2xl bg-white p-6 text-sm shadow-card">CP tidak ditemukan. <Link to="/clinical-pathway" className="text-accent">Kembali</Link></div>;
  }

  const copySummary = async () => {
    await navigator.clipboard.writeText(summaryText);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-5 shadow-card">
        <div>
          <h1 className="flex items-center gap-2 text-xl font-bold"><Brain size={20} />{pathway.title}</h1>
          <p className="text-sm text-slate-600">{pathway.icd10 ? `ICD-10: ${pathway.icd10}` : 'Tanpa ICD-10 spesifik'}</p>
        </div>
        <div className="flex gap-2">
          <PrintButton />
          <button onClick={copySummary} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"><Copy size={16} />Copy Summary</button>
        </div>
      </div>

      <ClinicalSafetyNotice />

      <div className="grid gap-4 xl:grid-cols-[1fr,1.4fr]">
        <div className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
            <h3 className="mb-2 font-semibold">Ringkasan</h3>
            {pathway.definition ? <p className="mb-3 text-sm text-slate-700">{pathway.definition}</p> : null}
            <h4 className="mb-1 text-sm font-semibold">Kriteria Pasien</h4>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">{pathway.patientCriteria.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
            <h3 className="mb-2 flex items-center gap-2 font-semibold"><Hospital size={16} />Unit Terkait</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">{pathway.relatedUnits.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>

          <RedFlagPanel items={pathway.redFlags} />
          <ReferralCriteriaBox items={pathway.referralCriteria} />
          <DischargeCriteriaBox items={pathway.dischargeCriteria} />
        </div>

        <section className="space-y-4">
          <h2 className="rounded-2xl bg-white p-4 text-lg font-semibold shadow-card">Timeline Fase Perawatan</h2>
          <PathwayTimeline phases={pathway.phases} />
        </section>
      </div>
    </div>
  );
}

export default ClinicalPathwayDetail;
