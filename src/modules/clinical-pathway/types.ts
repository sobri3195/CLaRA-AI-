export type PathwayCategory = 'stroke' | 'spine' | 'vestibular' | 'seizure';

export type CareSetting = 'IGD' | 'Rawat Jalan' | 'Rawat Inap' | 'ICU' | 'Rehabilitasi Medik';

export type PathwayUrgency = 'emergency' | 'urgent' | 'routine';

export type QualityIndicatorType = 'time' | 'documentation' | 'clinical' | 'safety' | 'rational-use';

export type PathwayPhase = {
  id: string;
  title: string;
  timeWindow: string;
  setting: string[];
  assessment?: string[];
  diagnostics?: string[];
  treatment?: string[];
  monitoring?: string[];
  rehabilitation?: string[];
  education?: string[];
  dischargePlanning?: string[];
  complicationWatch?: string[];
};

export type QualityIndicator = {
  id: string;
  label: string;
  target?: string;
  type: QualityIndicatorType;
};

export type ClinicalPathway = {
  id: string;
  title: string;
  shortTitle: string;
  category: PathwayCategory;
  careSetting: CareSetting[];
  urgency: PathwayUrgency;
  icd10?: string;
  definition?: string;
  goals: string[];
  patientCriteria: string[];
  relatedUnits: string[];
  phases: PathwayPhase[];
  redFlags?: string[];
  inpatientCriteria?: string[];
  referralCriteria: string[];
  dischargeCriteria: string[];
  qualityIndicators: QualityIndicator[];
  guidelines: string[];
  notes?: string[];
};

export type AuditFormState = {
  pathwayId: string;
  medicalRecordNumber: string;
  arrivalDateTime: string;
  checkedIndicators: string[];
  notes: string;
  updatedAt: string;
};
