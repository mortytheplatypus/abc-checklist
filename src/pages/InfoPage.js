import { getSectionsForPhase } from '../data/checklist';
import { SectionList } from '../components/SectionList';

export function InfoPage({
  hideDone,
  isChecked,
  onToggle,
  onResetSection,
  onResetAll,
}) {
  return (
    <main className="main">
      <SectionList
        sections={getSectionsForPhase('info')}
        hideDone={hideDone}
        isChecked={isChecked}
        onToggle={onToggle}
        onResetSection={onResetSection}
      />

      <div className="danger-zone">
        <button type="button" className="reset-all" onClick={onResetAll}>
          Reset everything
        </button>
        <p className="offline-note">
          Saved on this phone only. Open once on Wi-Fi before the trek so it
          works offline.
        </p>
      </div>
    </main>
  );
}
