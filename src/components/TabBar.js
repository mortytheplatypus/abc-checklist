export function TabBar({ phases, activePhaseId, phaseProgress, onSelect }) {
  return (
    <nav className="tabs">
      {phases.map((p) => {
        const prog = phaseProgress[p.id] || { done: 0, total: 0 };
        const isActive = p.id === activePhaseId;
        return (
          <button
            key={p.id}
            type="button"
            className={isActive ? 'tab active' : 'tab'}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onSelect(p.id)}
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
  );
}
