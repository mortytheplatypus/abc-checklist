import { getSectionsForPhase } from '../data/checklist';
import { SectionList } from '../components/SectionList';

export function PrepPage({ hideDone, isChecked, onToggle, onResetSection }) {
  return (
    <main className="main">
      <SectionList
        sections={getSectionsForPhase('prep')}
        hideDone={hideDone}
        isChecked={isChecked}
        onToggle={onToggle}
        onResetSection={onResetSection}
      />
    </main>
  );
}
