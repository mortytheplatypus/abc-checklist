import { useState } from 'react';
import { Row } from './Row';

export function Group({ section, hideDone, isChecked, onToggle, onResetSection }) {
  const [showNotes, setShowNotes] = useState(false);

  const notes = section.notes || [];
  const tables = section.tables || (section.table ? [section.table] : null);
  const total = section.items.length;
  const done = section.items.filter((item) => isChecked(item.id)).length;
  const complete = total > 0 && done === total;
  const visible = hideDone
    ? section.items.filter((item) => !isChecked(item.id))
    : section.items;

  if (hideDone && complete) return null;

  const showNotesBlock = (showNotes || total === 0) && notes.length > 0;

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

        {notes.length > 0 && total > 0 && (
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

      {tables &&
        tables.map((table, ti) => (
          <div key={ti} className="info-table-wrap">
            <table className="info-table">
              <thead>
                <tr>
                  {table.headers.map((header) => (
                    <th key={header}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

      {showNotesBlock && (
        <ul className="notes">
          {notes.map((note, i) => (
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
