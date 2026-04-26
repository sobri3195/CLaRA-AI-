import { Activity, BookOpen, FlaskConical, Stethoscope } from 'lucide-react';
import type { PathwayPhase } from '../types';

type PhaseSectionProps = {
  phase: PathwayPhase;
};

const sectionMeta = [
  { key: 'assessment', label: 'Assessment', icon: Stethoscope },
  { key: 'diagnostics', label: 'Diagnostics', icon: FlaskConical },
  { key: 'treatment', label: 'Treatment', icon: Activity },
  { key: 'monitoring', label: 'Monitoring', icon: Activity },
  { key: 'rehabilitation', label: 'Rehabilitasi', icon: Activity },
  { key: 'education', label: 'Edukasi', icon: BookOpen },
  { key: 'dischargePlanning', label: 'Discharge Planning', icon: BookOpen },
  { key: 'complicationWatch', label: 'Complication Watch', icon: Activity }
] as const;

function PhaseSection({ phase }: PhaseSectionProps) {
  return (
    <details className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card" open>
      <summary className="cursor-pointer list-none">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{phase.title}</h3>
            <p className="text-xs text-slate-500">{phase.timeWindow} • {phase.setting.join(', ')}</p>
          </div>
        </div>
      </summary>

      <div className="mt-4 space-y-4">
        {sectionMeta.map(({ key, label, icon: Icon }) => {
          const entries = phase[key];
          if (!entries?.length) return null;

          return (
            <section key={key}>
              <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <Icon size={15} />
                {label}
              </h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                {entries.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </details>
  );
}

export default PhaseSection;
