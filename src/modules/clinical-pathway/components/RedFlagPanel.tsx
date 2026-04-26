import { AlertTriangle } from 'lucide-react';

type RedFlagPanelProps = {
  items?: string[];
};

function RedFlagPanel({ items }: RedFlagPanelProps) {
  if (!items?.length) return null;

  return (
    <section className="rounded-2xl border border-red-200 bg-red-50 p-4 shadow-card">
      <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-700">
        <AlertTriangle size={16} />
        Red Flags
      </h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-red-900">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default RedFlagPanel;
