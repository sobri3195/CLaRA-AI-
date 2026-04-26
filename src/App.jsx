import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AuditAssistantPage from './pages/AuditAssistantPage';
import ClaimDetailPage from './pages/ClaimDetailPage';
import ClinicalCompliancePage from './pages/ClinicalCompliancePage';
import DashboardPage from './pages/DashboardPage';
import FraudAnalyticsPage from './pages/FraudAnalyticsPage';
import LandingPage from './pages/LandingPage';
import RoomIntegrityPage from './pages/RoomIntegrityPage';
import SimulationPage from './pages/SimulationPage';
import ClinicalPathwayAudit from './modules/clinical-pathway/pages/ClinicalPathwayAudit';
import ClinicalPathwayDashboard from './modules/clinical-pathway/pages/ClinicalPathwayDashboard';
import ClinicalPathwayDetail from './modules/clinical-pathway/pages/ClinicalPathwayDetail';
import ClinicalPathwayPrint from './modules/clinical-pathway/pages/ClinicalPathwayPrint';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/claims/:id" element={<ClaimDetailPage />} />
        <Route path="/clinical-compliance" element={<ClinicalCompliancePage />} />
        <Route path="/fraud-analytics" element={<FraudAnalyticsPage />} />
        <Route path="/room-integrity" element={<RoomIntegrityPage />} />
        <Route path="/audit-assistant" element={<AuditAssistantPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/clinical-pathway" element={<ClinicalPathwayDashboard />} />
        <Route path="/clinical-pathway/audit" element={<ClinicalPathwayAudit />} />
        <Route path="/clinical-pathway/print/:id" element={<ClinicalPathwayPrint />} />
        <Route path="/clinical-pathway/:id" element={<ClinicalPathwayDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
