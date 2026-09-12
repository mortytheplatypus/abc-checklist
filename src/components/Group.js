import { useState } from 'react';
import { Row } from './Row';

export function Group({ section, hideDone, isChecked, onToggle, onResetSection }) {
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
