import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ExplainabilityPanel from '../components/ExplainabilityPanel';
import RiskBadge from '../components/RiskBadge';
import { claimsData } from '../data/mockData';

function DetailItem({ label, value }) {
  return (
    <div className="rounded-lg border border-slate-200 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function ClaimDetailPage() {
  const { id } = useParams();
  const claim = useMemo(() => claimsData.find((c) => c.id === id) || claimsData[0], [id]);

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-white p-5 shadow-card">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Claim Risk Detail</h2>
          <RiskBadge level={claim.riskLevel} />
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <DetailItem label="Claim ID" value={claim.id} />
          <DetailItem label="SEP Number" value={claim.sepNumber} />
          <DetailItem label="Patient ID" value={claim.patientId} />
          <DetailItem label="Hospital ID" value={claim.hospitalId} />
          <DetailItem label="Doctor ID" value={claim.doctorId} />
          <DetailItem label="Diagnosis" value={claim.diagnosis} />
          <DetailItem label="Procedure Code" value={claim.procedureCode} />
          <DetailItem label="Admission Date" value={claim.admissionDate} />
          <DetailItem label="Discharge Date" value={claim.dischargeDate} />
          <DetailItem label="Length of Stay" value={`${claim.los} hari`} />
          <DetailItem label="Expected LOS" value={`${claim.expectedLos} hari`} />
          <DetailItem label="INA-CBG Tariff" value={`Rp ${claim.inaCbgTariff.toLocaleString('id-ID')}`} />
          <DetailItem label="Total Claim Cost" value={`Rp ${claim.totalClaimCost.toLocaleString('id-ID')}`} />
          <DetailItem label="Fraud Risk Score" value={claim.fraudRiskScore} />
          <DetailItem label="Clinical Deviation Score" value={claim.clinicalDeviationScore} />
          <DetailItem label="Cost Anomaly Score" value={claim.costAnomalyScore} />
          <DetailItem label="Audit Priority Rank" value={`#${claim.auditPriorityRank}`} />
        </div>
      </div>
      <ExplainabilityPanel flags={claim.flags} />
    </div>
  );
}

export default ClaimDetailPage;
