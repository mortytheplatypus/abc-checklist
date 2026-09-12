import { trekDays } from '../data/trekDays';
import { DayGuide } from '../components/DayGuide';

export function TrekPage() {
  return (
    <main className="main">
      {trekDays.map((day, i) => (
        <DayGuide key={day.id} day={day} defaultOpen={i === 0} />
      ))}
    </main>
  );
}
