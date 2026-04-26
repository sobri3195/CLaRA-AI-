import SimulationComparison from '../components/SimulationComparison';
import { simulationData } from '../data/mockData';

function SimulationPage() {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Pengurangan Beban Audit Manual', value: '42%' },
          { label: 'High-Risk Terdeteksi', value: '+31%' },
          { label: 'Estimasi Cost Saving', value: 'Rp 17.8 Miliar' },
          { label: 'Audit Efficiency Rate', value: '+42 poin' },
        ].map((item) => (
          <div key={item.label} className="rounded-xl bg-white p-5 shadow-card">
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-bold text-primary">{item.value}</p>
          </div>
        ))}
      </div>
      <SimulationComparison data={simulationData} />
    </div>
  );
}

export default SimulationPage;
