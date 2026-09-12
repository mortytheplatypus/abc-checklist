import { Group } from './Group';

export function SectionList({
  sections,
  hideDone,
  isChecked,
  onToggle,
  onResetSection,
}) {
  const total = sections.reduce((n, section) => n + section.items.length, 0);
  const done = sections.reduce(
    (n, section) =>
      n + section.items.filter((item) => isChecked(item.id)).length,
    0
  );
  const allDone = total > 0 && done === total;

  if (allDone && hideDone) {
    return <p className="all-done">All done here.</p>;
  }

  return sections.map((section) => (
    <Group
      key={section.id}
      section={section}
      hideDone={hideDone}
      isChecked={isChecked}
      onToggle={onToggle}
      onResetSection={onResetSection}
    />
  ));
}
