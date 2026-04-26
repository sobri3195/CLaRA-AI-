type DischargeCriteriaBoxProps = {
  items: string[];
};

function DischargeCriteriaBox({ items }: DischargeCriteriaBoxProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card">
      <h3 className="mb-3 text-sm font-semibold text-slate-800">Kriteria Pulang</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default DischargeCriteriaBox;
