import { getSectionsForPhase } from '../data/checklist';
import { SectionList } from '../components/SectionList';

export function PackPage({ hideDone, isChecked, onToggle, onResetSection }) {
  return (
    <main className="main">
      <SectionList
        sections={getSectionsForPhase('pack')}
        hideDone={hideDone}
        isChecked={isChecked}
        onToggle={onToggle}
        onResetSection={onResetSection}
      />
    </main>
  );
}
