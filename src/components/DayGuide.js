import { useState } from 'react';

export function DayGuide({ day, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className={day.urgent ? 'day-guide urgent' : 'day-guide'}>
      <button
        type="button"
        className="day-guide-head"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <div className="day-guide-titles">
          <h2 className="day-guide-title">
            Day {day.day} · {day.date}
          </h2>
          <p className="day-guide-route">{day.route}</p>
        </div>
        <div className="day-guide-meta">
          <span className="day-tag">{day.tag}</span>
          <span className="day-sleep">
            Sleep: {day.sleep}
            {day.lodge ? ` · ${day.lodge.name}` : ''}
          </span>
          <span className="day-chevron" aria-hidden="true">
            {open ? '−' : '+'}
          </span>
        </div>
      </button>

      {day.lodge && (
        <a
          className="day-lodge"
          href={day.lodge.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Booked: {day.lodge.name}
        </a>
      )}

      {open && (
        <div className="day-guide-body">
          {day.summary && (
            <dl className="day-summary">
              {day.summary.map((field) => (
                <div key={field.label} className="day-summary-row">
                  <dt>{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
          )}

          <p className="day-stats">{day.stats}</p>
          {day.elevNote && <p className="day-elev">{day.elevNote}</p>}

          <h3 className="day-subhead">What to expect</h3>
          <p className="day-path">{day.terrainPath}</p>
          <ul className="day-list">
            {day.terrain.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

          <h3 className="day-subhead">Lunch, water & rest</h3>
          <ul className="day-rests">
            {day.rests.map((stop) => (
              <li key={stop.place}>
                <strong>{stop.place}</strong>
                <span>{stop.plan}</span>
              </li>
            ))}
          </ul>

          <h3 className="day-subhead">Weather (approx.)</h3>
          <ul className="day-weather">
            {day.weather.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <span>{row.value}</span>
              </li>
            ))}
          </ul>

          {day.tip && (
            <>
              <h3 className="day-subhead">Tip</h3>
              <p className="day-tip">{day.tip}</p>
            </>
          )}

          {day.critical && (
            <div className="day-critical">
              <h3 className="day-subhead">Critical</h3>
              <p>{day.critical}</p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
