import type { CareSetting, PathwayCategory } from '../types';

type SearchAndFilterBarProps = {
  query: string;
  category: PathwayCategory | 'all';
  setting: CareSetting | 'all';
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: PathwayCategory | 'all') => void;
  onSettingChange: (value: CareSetting | 'all') => void;
};

function SearchAndFilterBar({
  query,
  category,
  setting,
  onQueryChange,
  onCategoryChange,
  onSettingChange
}: SearchAndFilterBarProps) {
  return (
    <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-card md:grid-cols-3">
      <input
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        placeholder="Cari diagnosis, gejala, unit, red flags, indikator mutu..."
        className="rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
      />
      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value as PathwayCategory | 'all')}
        className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
      >
        <option value="all">Semua Kategori</option>
        <option value="stroke">Stroke</option>
        <option value="spine">Spine</option>
        <option value="vestibular">Vestibular</option>
        <option value="seizure">Seizure</option>
      </select>
      <select
        value={setting}
        onChange={(event) => onSettingChange(event.target.value as CareSetting | 'all')}
        className="rounded-xl border border-slate-200 px-3 py-2 text-sm"
      >
        <option value="all">Semua Setting</option>
        <option value="IGD">IGD</option>
        <option value="Rawat Jalan">Rawat Jalan</option>
        <option value="Rawat Inap">Rawat Inap</option>
        <option value="ICU">ICU</option>
        <option value="Rehabilitasi Medik">Rehabilitasi Medik</option>
      </select>
    </div>
  );
}

export default SearchAndFilterBar;
