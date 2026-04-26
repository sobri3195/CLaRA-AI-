import { clinicalPathways } from '../data/clinicalPathways';
import type { CareSetting, ClinicalPathway, PathwayCategory } from '../types';

export const getPathwayById = (id: string): ClinicalPathway | undefined => clinicalPathways.find((item) => item.id === id);

export const searchPathways = (query: string): ClinicalPathway[] => {
  const keyword = query.trim().toLowerCase();
  if (!keyword) return clinicalPathways;

  return clinicalPathways.filter((pathway) => {
    const haystacks = [
      pathway.title,
      pathway.shortTitle,
      pathway.icd10,
      pathway.definition,
      ...pathway.patientCriteria,
      ...pathway.relatedUnits,
      ...(pathway.redFlags ?? []),
      ...pathway.qualityIndicators.map((indicator) => indicator.label),
      ...pathway.phases.flatMap((phase) => [
        phase.title,
        phase.timeWindow,
        ...(phase.assessment ?? []),
        ...(phase.diagnostics ?? []),
        ...(phase.treatment ?? []),
        ...(phase.monitoring ?? []),
        ...(phase.rehabilitation ?? []),
        ...(phase.education ?? [])
      ])
    ];

    return haystacks.some((value) => value?.toLowerCase().includes(keyword));
  });
};

export const filterPathways = (
  pathways: ClinicalPathway[],
  category: PathwayCategory | 'all',
  setting: CareSetting | 'all'
): ClinicalPathway[] =>
  pathways.filter((pathway) => {
    const categoryMatch = category === 'all' || pathway.category === category;
    const settingMatch = setting === 'all' || pathway.careSetting.includes(setting);
    return categoryMatch && settingMatch;
  });

export const calculateAuditCompletion = (checkedIndicators: string[], totalIndicators: number): number => {
  if (!totalIndicators) return 0;
  return Math.round((checkedIndicators.length / totalIndicators) * 100);
};

export const getUrgencyBadgeClass = (urgency: ClinicalPathway['urgency']): string => {
  if (urgency === 'emergency') return 'bg-red-100 text-red-700 border border-red-200';
  if (urgency === 'urgent') return 'bg-amber-100 text-amber-700 border border-amber-200';
  return 'bg-emerald-100 text-emerald-700 border border-emerald-200';
};

export const getUrgencyLabel = (urgency: ClinicalPathway['urgency']): string => {
  if (urgency === 'emergency') return 'Emergency';
  if (urgency === 'urgent') return 'Urgent';
  return 'Routine';
};
