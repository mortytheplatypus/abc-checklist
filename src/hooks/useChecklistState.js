import { useCallback, useEffect, useMemo, useState } from 'react';
import { sections } from '../data/checklist';

const STORAGE_KEY = 'abc-checklist-v1';

function loadChecked() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function useChecklistState() {
  const [checked, setChecked] = useState(loadChecked);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle = useCallback((id) => {
    setChecked((prev) => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = true;
      return next;
    });
  }, []);

  const resetSection = useCallback((sectionId) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) return;
    setChecked((prev) => {
      const next = { ...prev };
      section.items.forEach((item) => delete next[item.id]);
      return next;
    });
  }, []);

  const resetAll = useCallback(() => setChecked({}), []);

  const isChecked = useCallback((id) => Boolean(checked[id]), [checked]);

  const phaseProgress = useMemo(() => {
    const totals = {};
    sections.forEach((section) => {
      const entry = totals[section.phase] || { done: 0, total: 0 };
      section.items.forEach((item) => {
        entry.total += 1;
        if (checked[item.id]) entry.done += 1;
      });
      totals[section.phase] = entry;
    });
    return totals;
  }, [checked]);

  return { toggle, resetSection, resetAll, isChecked, phaseProgress };
}
