import { Link } from 'react-router-dom';
import { ShieldCheck, Stethoscope, TrendingUp } from 'lucide-react';

function LandingPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-r from-primary to-sky-900 p-8 text-white shadow-card">
        <p className="mb-2 text-xs uppercase tracking-widest text-teal-200">Clinical & Risk-Aware Audit AI for BPJS</p>
        <h1 className="max-w-3xl text-3xl font-bold lg:text-4xl">CLaRA-AI</h1>
        <p className="mt-3 max-w-3xl text-sm text-slate-100 lg:text-base">AI yang tidak hanya mendeteksi fraud, tetapi memastikan klaim tetap sesuai clinical pathway dan efisien secara biaya.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/dashboard" className="rounded-lg bg-accent px-5 py-2 text-sm font-semibold text-white">Lihat Dashboard</Link>
          <Link to="/audit-assistant" className="rounded-lg border border-white/40 px-5 py-2 text-sm font-semibold text-white">Mulai Audit Cerdas</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[{
          icon: ShieldCheck,
          title: 'Masalah Utama BPJS',
          desc: 'Fraud claim, deviasi pathway, dan anomali biaya membuat proses audit lambat serta berisiko kerugian tinggi.'
        }, {
          icon: Stethoscope,
          title: 'Solusi CLaRA-AI',
          desc: 'Menggabungkan AI scoring + rule engine untuk menilai fraud, klinis, biaya, readmission, duplicate claim, dan integritas bed.'
        }, {
          icon: TrendingUp,
          title: 'Manfaat Strategis',
          desc: 'Auditor dapat memprioritaskan kasus kritis, mempercepat review, dan meningkatkan efisiensi biaya nasional.'
        }].map((item) => (
          <div key={item.title} className="rounded-xl bg-white p-5 shadow-card">
            <item.icon className="mb-3 text-accent" />
            <h3 className="text-base font-semibold text-slate-800">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LandingPage;
