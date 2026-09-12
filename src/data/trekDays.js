/**
 * Day-by-day ABC field guide for the Trek tab.
 * Distilled from ignore/final.md (Sep 28 – Oct 3, 2026).
 */

export const trekDays = [
  {
    id: 'day1',
    day: 1,
    date: 'September 28',
    route: 'Pokhara → Ghandruk',
    tag: 'Jeep day',
    sleep: 'Ghandruk',
    stats: 'Jeep • Sleep Ghandruk ~1,940 m',
    elevNote: 'Net by road ≈ +1,120 m. Walking gain: minimal.',
    summary: [
      { label: 'Sleep', value: 'Ghandruk ~1,940 m' },
      { label: 'Net elev', value: '+1,120 m by road; minimal walking' },
      { label: 'Next ↑', value: '+230 m to Chomrong' },
      { label: 'Temp', value: 'Valley warm; night ~10–13°C' },
    ],
    terrainPath:
      'Pokhara → winding mountain road → terraced hills → Gurung village → stone paths',
    terrain: [
      'Jeep into the hills. Expect winding roads and rougher sections near Ghandruk.',
      'Ghandruk is a Gurung village: stone lanes, steps, terraces, mountain views.',
      'Not a hard trekking day if the jeep drops you in Ghandruk as planned.',
    ],
    rests: [
      { place: 'Pokhara', plan: 'Breakfast before departure; carry water and snacks.' },
      { place: 'En route', plan: 'Lunch at a roadside restaurant if the driver plans a break.' },
      { place: 'Ghandruk', plan: 'Check in, eat, rest, explore the village lightly.' },
    ],
    weather: [
      { label: 'Pokhara daytime', value: '25–30°C' },
      { label: 'Ghandruk daytime', value: '18–24°C' },
      { label: 'Ghandruk night', value: '10–13°C' },
      { label: 'Rain chance', value: '~20–40%' },
    ],
    tip: 'Do not spend the entire evening sightseeing. Sleep properly. The first real walking day starts tomorrow.',
  },
  {
    id: 'day2',
    day: 2,
    date: 'September 29',
    route: 'Ghandruk → Chomrong',
    tag: 'Moderate',
    sleep: 'Chomrong',
    stats: '~9–10 km • 4–6 h • Net +230 m',
    elevNote: 'Total uphill roughly 500–700 m. Net gain is small but you climb and descend a lot.',
    summary: [
      { label: 'Elev', value: '~1,940 m → ~2,170 m' },
      { label: 'Net elev', value: '+230 m (total ↑ ~500–700 m)' },
      { label: 'Next ↑', value: '+430 m to Dovan' },
      { label: 'Temp', value: 'Day 18–24°C · Night 10–13°C' },
    ],
    terrainPath:
      'Ghandruk → gradual climb → descent into valley → river crossing → long staircase climb → Chomrong ridge',
    terrain: [
      'Leave through village lanes and terraced farmland, then forest toward the Kimrung Khola valley.',
      'Cross the river, then climb toward Chomrong — the stairs are where it gets tiring.',
      'Chomrong sits on a ridge; major village stop for the night.',
    ],
    rests: [
      { place: 'Ghandruk / early trail', plan: 'Tea, breakfast, short warm-up if needed.' },
      { place: 'Valley / river lodges', plan: 'Possible tea and snack. Water depends on open lodges.' },
      { place: 'Chomrong', plan: 'Best lunch if you finish the climb first. Check in and rest.' },
    ],
    weather: [
      { label: 'Daytime', value: '18–24°C' },
      { label: 'Night', value: '10–13°C' },
      { label: 'Rain chance', value: '~20–40%' },
    ],
    tip: 'Take your time on the stairs. Eat a proper lunch at Chomrong, refill water, and sleep early. A light rain jacket is useful.',
  },
  {
    id: 'day3',
    day: 3,
    date: 'September 30',
    route: 'Chomrong → Dovan',
    tag: 'Long uphill / downhill',
    sleep: 'Dovan',
    stats: '~10–12 km • 5–7 h • Net +430 m',
    elevNote: 'Total uphill roughly 700–900 m. Stairs tire legs more than the net numbers suggest.',
    summary: [
      { label: 'Elev', value: '~2,170 m → ~2,600 m' },
      { label: 'Net elev', value: '+430 m (total ↑ ~700–900 m)' },
      { label: 'Next ↑', value: '+600 m to Deurali' },
      { label: 'Temp', value: 'Day 15–20°C · Night 8–12°C' },
    ],
    terrainPath:
      'Chomrong ridge → long descent → river crossing → Sinuwa climb → forest trail → Bamboo → Dovan',
    terrain: [
      'Long stone staircase down from Chomrong, river bridge, then climb to Sinuwa.',
      'Dense bamboo and rhododendron forest; Bamboo is a natural lunch/rest point.',
      'Continue along the Modi Khola valley to Dovan — transition into the Sanctuary trail.',
    ],
    rests: [
      { place: 'Chomrong', plan: 'Breakfast; fill bottles before leaving.' },
      { place: 'Sinuwa', plan: 'Tea, snacks, short rest.' },
      { place: 'Bamboo', plan: 'Recommended lunch. Lodges and food along the route.' },
      { place: 'Dovan', plan: 'Check in, dinner, rest.' },
    ],
    weather: [
      { label: 'Daytime', value: '15–20°C' },
      { label: 'Night', value: '8–12°C' },
      { label: 'Rain chance', value: '~20–40%' },
    ],
    tip: 'Bamboo is your main break. Do not rush. Forest shade can feel cooler; trail may be damp after rain. Treat water — do not assume streams are safe.',
  },
  {
    id: 'day4',
    day: 4,
    date: 'October 1',
    route: 'Dovan → MBC',
    tag: 'Altitude day',
    sleep: 'MBC',
    stats: '~13–15 km • 6–8 h • Net +1,100 m',
    elevNote: 'Start ~2,600 m → MBC ~3,700 m. Total uphill roughly 1,100–1,300 m.',
    summary: [
      { label: 'Elev', value: '~2,600 m → Deurali ~3,200 m → MBC ~3,700 m' },
      { label: 'Net elev', value: '+1,100 m (biggest gain)' },
      { label: 'Next ↑', value: '+430 m to ABC' },
      { label: 'Temp', value: 'MBC day 5–10°C · Night −5 to 2°C' },
    ],
    terrainPath:
      'Dovan → forest gorge → Himalaya → Deurali → thinning forest → open valley → MBC',
    terrain: [
      'Follow Modi Khola upstream through forest and rocky trail.',
      'Himalaya for tea/rest; Deurali where forest thins — lunch before the open high section.',
      'Valley opens and rockier to Machhapuchhre Base Camp (~3,700 m).',
    ],
    rests: [
      { place: 'Himalaya', plan: 'Tea, snacks, short rest.' },
      { place: 'Deurali', plan: 'Recommended lunch before the high, open section.' },
      { place: 'MBC', plan: 'Check in, hydrate, dinner, sleep.' },
    ],
    weather: [
      { label: 'Dovan daytime', value: '15–20°C' },
      { label: 'Deurali daytime', value: '10–15°C' },
      { label: 'MBC daytime', value: '5–10°C' },
      { label: 'MBC night', value: '−5 to 2°C' },
      { label: 'Rain / snow', value: '~10–30%' },
    ],
    tip: 'Slow day. Start early, steady pace, break before exhaustion. Warm layers, gloves, sleeping insulation. Guide should assess everyone before committing to ABC tomorrow.',
  },
  {
    id: 'day5',
    day: 5,
    date: 'October 2',
    route: 'MBC → ABC → MBC → Dovan',
    tag: 'Highest point',
    sleep: 'Dovan',
    urgent: true,
    stats: '~18–22 km • 8–11 h • Summit day',
    elevNote:
      'MBC ~3,700 m → ABC ~4,130 m (+430 m). Total uphill ~600–900 m; descent ~1,500 m to Dovan.',
    summary: [
      { label: 'Elev', value: 'MBC ~3,700 m → ABC ~4,130 m → Dovan ~2,600 m' },
      { label: 'Net elev', value: '+430 m to ABC; then long descent' },
      { label: 'Next ↑', value: '— (summit day)' },
      { label: 'Temp', value: 'Day 5–10°C; coldest / highest day' },
    ],
    terrainPath:
      'MBC → open alpine valley → rocky/moraine trail → ABC → same route back → Deurali → Himalaya → Dovan',
    terrain: [
      'Start early from MBC (sunrise or before, per guide and weather).',
      'Open, exposed trail: rocky ground, uneven stones; possible snow or ice.',
      'Steady climb to ABC amphitheatre — photos, rest, then same route back and long descent to Dovan.',
    ],
    rests: [
      { place: 'MBC', plan: 'Breakfast and fill water before leaving; main lunch/recovery on return.' },
      { place: 'ABC', plan: 'Short rest, photos, snacks.' },
      { place: 'Deurali / Himalaya', plan: 'Tea/snack breaks on the way down if needed.' },
      { place: 'Dovan', plan: 'Dinner and overnight rest.' },
    ],
    weather: [
      { label: 'MBC / ABC daytime', value: '5–10°C' },
      { label: 'Night (if high)', value: '−5 to 2°C' },
      { label: 'Rain / snow', value: '~10–30%' },
    ],
    tip: 'Carry water, snacks, gloves, warm layer, rain gear, sunglasses, headlamp. Early morning can be freezing.',
    critical:
      'Do not force ABC if someone is sick (worsening headache, vomiting, dizziness, trouble walking, confusion, or breathing difficulty at rest). Descend and tell the guide. If delayed by weather or fatigue, stop at MBC or Deurali rather than pushing into darkness.',
  },
  {
    id: 'day6',
    day: 6,
    date: 'October 3',
    route: 'Dovan → Jhinu → hot springs → Pokhara',
    tag: 'Descent + recovery',
    sleep: 'Pokhara',
    stats: '~12–16 km walk + jeep • 5–7 h walking',
    elevNote: 'Dovan ~2,600 m → Jhinu ~1,780 m (net −820 m). Some uphill ~300–500 m. Jeep to Pokhara ~820 m.',
    summary: [
      { label: 'Elev', value: '~2,600 m → Jhinu ~1,780 m → Pokhara ~820 m' },
      { label: 'Net elev', value: '−820 m walk + jeep' },
      { label: 'Next ↑', value: '—' },
      { label: 'Temp', value: 'Warms to ~25–30°C in Pokhara' },
    ],
    terrainPath:
      'Dovan → forest descent → Bamboo → Sinuwa → Chomrong junction → Jhinu Danda → steep descent to river → hot springs → jeep',
    terrain: [
      'Mostly downhill through forest — do not underestimate the stairs.',
      'Pass Bamboo and Sinuwa, then toward Jhinu Danda and down to the river hot springs.',
      'Soak, then jeep back to Pokhara.',
    ],
    rests: [
      { place: 'Dovan', plan: 'Breakfast, water refill.' },
      { place: 'Bamboo', plan: 'Tea/snack break.' },
      { place: 'Sinuwa / Chomrong', plan: 'Main lunch stop.' },
      { place: 'Jhinu / hot springs', plan: 'Rest, soak, rehydrate.' },
      { place: 'Pokhara', plan: 'Dinner and proper sleep.' },
    ],
    weather: [
      { label: 'Dovan daytime', value: '15–20°C' },
      { label: 'Jhinu daytime', value: '18–24°C' },
      { label: 'Pokhara daytime', value: '25–30°C' },
      { label: 'Rain chance', value: '~15–35%' },
    ],
    tip: 'Warmer as you descend. Hot springs are the reward — do not soak too long if dehydrated or exhausted. Drink and eat before the jeep.',
  },
];
