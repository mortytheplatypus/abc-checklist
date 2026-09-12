import { useEffect, useState } from 'react';
import { phases } from './data/checklist';
import { useChecklistState } from './hooks/useChecklistState';
import { Header } from './components/Header';
import { TabBar } from './components/TabBar';
import { PrepPage } from './pages/PrepPage';
import { PackPage } from './pages/PackPage';
import { TrekPage } from './pages/TrekPage';
import { InfoPage } from './pages/InfoPage';
import './App.css';

const TAB_KEY = 'abc-checklist-tab';

const PAGES = {
  prep: PrepPage,
  pack: PackPage,
  trek: TrekPage,
  info: InfoPage,
};

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
  const progress = phaseProgress[phase.id] || { done: 0, total: 0 };
  const Page = PAGES[phase.id] || PrepPage;

  const handleResetAll = () => {
    if (window.confirm('Clear every tick across the whole checklist?')) {
      resetAll();
    }
  };

  return (
    <div className="app">
      <Header
        phase={phase}
        progress={progress}
        hideDone={hideDone}
        onToggleHideDone={() => setHideDone((v) => !v)}
      />

      <Page
        hideDone={hideDone}
        isChecked={isChecked}
        onToggle={toggle}
        onResetSection={resetSection}
        onResetAll={handleResetAll}
      />

      <TabBar
        phases={phases}
        activePhaseId={phase.id}
        phaseProgress={phaseProgress}
        onSelect={setActivePhase}
      />
    </div>
  );
}

export default App;
