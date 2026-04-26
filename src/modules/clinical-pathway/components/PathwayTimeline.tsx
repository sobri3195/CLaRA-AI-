import type { PathwayPhase } from '../types';
import PhaseSection from './PhaseSection';

type PathwayTimelineProps = {
  phases: PathwayPhase[];
};

function PathwayTimeline({ phases }: PathwayTimelineProps) {
  return (
    <div className="space-y-4">
      {phases.map((phase) => (
        <PhaseSection key={phase.id} phase={phase} />
      ))}
    </div>
  );
}

export default PathwayTimeline;
