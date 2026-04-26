import type { QualityIndicator } from '../types';

type QualityIndicatorChecklistProps = {
  indicators: QualityIndicator[];
  checked: string[];
  onToggle: (id: string) => void;
};

function QualityIndicatorChecklist({ indicators, checked, onToggle }: QualityIndicatorChecklistProps) {
  return (
    <div className="space-y-3">
      {indicators.map((indicator) => {
        const isChecked = checked.includes(indicator.id);

        return (
          <label key={indicator.id} className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 hover:bg-slate-50">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => onToggle(indicator.id)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-accent focus:ring-accent"
            />
            <div>
              <p className="text-sm font-medium text-slate-800">{indicator.label}</p>
              <p className="text-xs text-slate-500">{indicator.type}{indicator.target ? ` • target ${indicator.target}` : ''}</p>
            </div>
          </label>
        );
      })}
    </div>
  );
}

export default QualityIndicatorChecklist;
