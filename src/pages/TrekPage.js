import { getSectionsForPhase } from '../data/checklist';
import { SectionList } from '../components/SectionList';

export function TrekPage({ hideDone, isChecked, onToggle, onResetSection }) {
  return (
    <main className="main">
      <SectionList
        sections={getSectionsForPhase('trek')}
        hideDone={hideDone}
        isChecked={isChecked}
        onToggle={onToggle}
        onResetSection={onResetSection}
      />
    </main>
  );
}
