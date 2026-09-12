import { ProgressBar } from './ProgressBar';

export function Header({ phase, progress, hideDone, onToggleHideDone }) {
  return (
    <header className="header">
      <div className="header-row">
        <div>
          <h1 className="phase-name">{phase.label}</h1>
          <p className="phase-hint">{phase.hint}</p>
        </div>

        {progress.total > 0 && (
          <button
            type="button"
            className={hideDone ? 'chip chip-on' : 'chip'}
            onClick={onToggleHideDone}
          >
            {hideDone ? 'Show all' : 'Hide done'}
          </button>
        )}
      </div>

      {progress.total > 0 && (
        <ProgressBar done={progress.done} total={progress.total} />
      )}
    </header>
  );
}
