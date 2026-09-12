export function Row({ label, checked, onToggle }) {
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
