import { useEffect, useState } from 'react';
import { phases, getSectionsForPhase } from './data/checklist';
import { useChecklistState } from './hooks/useChecklistState';
import './App.css';

const TAB_KEY = 'abc-checklist-tab';

function ProgressBar({ done, total }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return (
    <div className="progress">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="progress-label">
        {done}/{total}
      </span>
    </div>
  );
}

function Row({ label, checked, onToggle }) {
  return (
    <li>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        className={checked ? 'row done' : 'row'}
        onClick={onToggle}
      >
        <span className="box" aria-hidden="true" />
        <span className="row-text">{label}</span>
      </button>
    </li>
  );
}

function Group({ section, hideDone, isChecked, onToggle, onResetSection }) {
  const [showNotes, setShowNotes] = useState(false);

  const total = section.items.length;
  const done = section.items.filter((item) => isChecked(item.id)).length;
  const complete = total > 0 && done === total;
  const visible = hideDone
    ? section.items.filter((item) => !isChecked(item.id))
    : section.items;

  if (hideDone && complete) return null;

  return (
    <section className={section.urgent ? 'group urgent' : 'group'}>
      <div className="group-head">
        <h2 className="group-title">{section.title}</h2>

        {total > 0 && (
          <span className="group-count">
            {complete ? 'done' : `${done}/${total}`}
          </span>
        )}

        {section.daily && (
          <button
            type="button"
            className="chip"
            onClick={() => onResetSection(section.id)}
          >
            New day
          </button>
        )}

        {section.notes.length > 0 && total > 0 && (
          <button
            type="button"
            className={showNotes ? 'chip chip-on' : 'chip'}
            aria-expanded={showNotes}
            onClick={() => setShowNotes((v) => !v)}
          >
            Tips
          </button>
        )}
      </div>

      {(showNotes || total === 0) && section.notes.length > 0 && (
        <ul className="notes">
          {section.notes.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      )}

      {visible.length > 0 && (
        <ul className="rows">
          {visible.map((item) => (
            <Row
              key={item.id}
              label={item.label}
              checked={isChecked(item.id)}
              onToggle={() => onToggle(item.id)}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

function App() {
  const { toggle, resetSection, resetAll, isChecked, phaseProgress } =
    useChecklistState();

  const [activePhase, setActivePhase] = useState(
    () => localStorage.getItem(TAB_KEY) || 'prep'
  );
  const [hideDone, setHideDone] = useState(false);

  useEffect(() => {
    localStorage.setItem(TAB_KEY, activePhase);
    window.scrollTo(0, 0);
  }, [activePhase]);

  const phase = phases.find((p) => p.id === activePhase) || phases[0];
  const phaseSections = getSectionsForPhase(phase.id);
  const progress = phaseProgress[phase.id] || { done: 0, total: 0 };
  const allDone = progress.total > 0 && progress.done === progress.total;

  const handleResetAll = () => {
    if (window.confirm('Clear every tick across the whole checklist?')) {
      resetAll();
    }
  };

  return (
    <div className="app">
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
              onClick={() => setHideDone((v) => !v)}
            >
              {hideDone ? 'Show all' : 'Hide done'}
            </button>
          )}
        </div>

        {progress.total > 0 && (
          <ProgressBar done={progress.done} total={progress.total} />
        )}
      </header>

      <main className="main">
        {allDone && hideDone ? (
          <p className="all-done">All done here.</p>
        ) : (
          phaseSections.map((section) => (
            <Group
              key={section.id}
              section={section}
              hideDone={hideDone}
              isChecked={isChecked}
              onToggle={toggle}
              onResetSection={resetSection}
            />
          ))
        )}

        {phase.id === 'info' && (
          <div className="danger-zone">
            <button type="button" className="reset-all" onClick={handleResetAll}>
              Reset everything
            </button>
            <p className="offline-note">
              Saved on this phone only. Open once on Wi-Fi before the trek so it
              works offline.
            </p>
          </div>
        )}
      </main>

      <nav className="tabs">
        {phases.map((p) => {
          const prog = phaseProgress[p.id] || { done: 0, total: 0 };
          const isActive = p.id === phase.id;
          return (
            <button
              key={p.id}
              type="button"
              className={isActive ? 'tab active' : 'tab'}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setActivePhase(p.id)}
            >
              <span className="tab-label">{p.label}</span>
              {prog.total > 0 && (
                <span className="tab-count">
                  {prog.done === prog.total ? '✓' : `${prog.done}/${prog.total}`}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}

export default App;
