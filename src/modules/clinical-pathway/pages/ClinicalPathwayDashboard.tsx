import { useMemo, useState } from 'react';
import ClinicalSafetyNotice from '../components/ClinicalSafetyNotice';
import PathwayCard from '../components/PathwayCard';
import SearchAndFilterBar from '../components/SearchAndFilterBar';
import { clinicalPathways } from '../data/clinicalPathways';
import type { CareSetting, PathwayCategory } from '../types';
import { filterPathways, searchPathways } from '../utils/pathwayHelpers';

function ClinicalPathwayDashboard() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<PathwayCategory | 'all'>('all');
  const [setting, setSetting] = useState<CareSetting | 'all'>('all');

  const filteredPathways = useMemo(() => {
    const searchResult = query ? searchPathways(query) : clinicalPathways;
    return filterPathways(searchResult, category, setting);
  }, [query, category, setting]);

  return (
    <div className="space-y-5">
      <header className="rounded-2xl bg-white p-6 shadow-card">
        <h1 className="text-2xl font-bold text-slate-900">Clinical Pathway Neurologi</h1>
        <p className="mt-1 text-sm text-slate-600">Decision support berbasis CP internal — perlu validasi DPJP/SMF.</p>
      </header>

      <ClinicalSafetyNotice />

      <SearchAndFilterBar
        query={query}
        category={category}
        setting={setting}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
        onSettingChange={setSetting}
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredPathways.map((pathway) => (
          <PathwayCard key={pathway.id} pathway={pathway} />
        ))}
      </section>
      {!filteredPathways.length ? <p className="rounded-2xl bg-white p-6 text-center text-sm text-slate-500 shadow-card">Tidak ada Clinical Pathway yang sesuai filter.</p> : null}
    </div>
  );
}

export default ClinicalPathwayDashboard;
