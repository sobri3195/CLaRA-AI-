import { Bell, Search } from 'lucide-react';

function Navbar() {
  return (
    <header className="sticky top-0 z-10 mb-5 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-card">
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500">
        <Search size={14} />
        Cari claim, rumah sakit, dokter...
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 text-slate-600 hover:bg-slate-100"><Bell size={18} /></button>
        <div className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Auditor BPJS</div>
      </div>
    </header>
  );
}

export default Navbar;
