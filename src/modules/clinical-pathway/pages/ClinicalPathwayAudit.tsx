import { ClipboardCheck } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PrintButton from '../components/PrintButton';
import QualityIndicatorChecklist from '../components/QualityIndicatorChecklist';
import { clinicalPathways } from '../data/clinicalPathways';
import type { AuditFormState } from '../types';
import { calculateAuditCompletion, getPathwayById } from '../utils/pathwayHelpers';

const STORAGE_KEY = 'clinical-pathway-audit-v1';

function ClinicalPathwayAudit() {
  const [searchParams] = useSearchParams();
  const defaultPathway = searchParams.get('pathway') ?? clinicalPathways[0].id;

  const [form, setForm] = useState<AuditFormState>({
    pathwayId: defaultPathway,
    medicalRecordNumber: '',
    arrivalDateTime: '',
    checkedIndicators: [],
    notes: '',
    updatedAt: new Date().toISOString()
  });

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setForm(JSON.parse(raw) as AuditFormState);
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...form, updatedAt: new Date().toISOString() }));
  }, [form]);

  const pathway = getPathwayById(form.pathwayId) ?? clinicalPathways[0];

  const completion = useMemo(
    () => calculateAuditCompletion(form.checkedIndicators, pathway.qualityIndicators.length),
    [form.checkedIndicators, pathway.qualityIndicators.length]
  );

  const toggleIndicator = (id: string) => {
    setForm((prev) => ({
      ...prev,
      checkedIndicators: prev.checkedIndicators.includes(id)
        ? prev.checkedIndicators.filter((item) => item !== id)
        : [...prev.checkedIndicators, id]
    }));
  };

  return (
    <div className="space-y-4">
      <header className="rounded-2xl bg-white p-5 shadow-card">
        <h1 className="flex items-center gap-2 text-xl font-bold"><ClipboardCheck size={20} />Audit Clinical Pathway</h1>
      </header>

      <section className="grid gap-3 rounded-2xl bg-white p-4 shadow-card md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">Pilih CP</span>
          <select
            value={form.pathwayId}
            onChange={(event) => setForm((prev) => ({ ...prev, pathwayId: event.target.value, checkedIndicators: [] }))}
            className="w-full rounded-xl border border-slate-200 px-3 py-2"
          >
            {clinicalPathways.map((item) => (
              <option key={item.id} value={item.id}>{item.title}</option>
            ))}
          </select>
        </label>

        <label className="text-sm">
          <span className="mb-1 block font-medium text-slate-700">Nomor RM (opsional)</span>
          <input value={form.medicalRecordNumber} onChange={(event) => setForm((prev) => ({ ...prev, medicalRecordNumber: event.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2" />
        </label>

        <label className="text-sm md:col-span-2">
          <span className="mb-1 block font-medium text-slate-700">Tanggal/Jam Kedatangan (opsional)</span>
          <input type="datetime-local" value={form.arrivalDateTime} onChange={(event) => setForm((prev) => ({ ...prev, arrivalDateTime: event.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2 md:w-1/2" />
        </label>
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-card">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-semibold">Checklist Indikator Mutu</h2>
          <PrintButton />
        </div>
        <div className="mb-4">
          <p className="text-sm text-slate-600">Kepatuhan: {completion}%</p>
          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div className="h-2 rounded-full bg-accent" style={{ width: `${completion}%` }} />
          </div>
        </div>
        <QualityIndicatorChecklist indicators={pathway.qualityIndicators} checked={form.checkedIndicators} onToggle={toggleIndicator} />
      </section>

      <section className="rounded-2xl bg-white p-4 shadow-card">
        <label className="text-sm">
          <span className="mb-2 block font-medium text-slate-700">Catatan Audit</span>
          <textarea rows={4} value={form.notes} onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))} className="w-full rounded-xl border border-slate-200 px-3 py-2" placeholder="Catatan tambahan audit mutu..." />
        </label>
      </section>
    </div>
  );
}

export default ClinicalPathwayAudit;
