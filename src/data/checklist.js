/**
 * ABC trek checklist, grouped by when you actually use it rather than by the
 * order of the source document (plans/checklist.md).
 *
 * Item ids are stable localStorage keys. Renaming a label is safe; renaming an
 * id silently wipes that item's saved state.
 */

export const phases = [
  { id: 'prep', label: 'Prep', hint: 'Before and on arrival' },
  { id: 'pack', label: 'Pack', hint: 'What goes in the bag' },
  { id: 'trek', label: 'Trek', hint: 'Day-by-day on the trail' },
  { id: 'info', label: 'Info', hint: 'Read when you need it' },
];

export const sections = [
  // ---------------------------------------------------------------- PREP
  {
    id: 'documents',
    phase: 'prep',
    title: 'Documents',
    notes: [
      'Keep digital and paper copies somewhere separate from the originals.',
    ],
    items: [
      { id: 'docs.flights', label: 'Flight tickets, Dhaka to Kathmandu' },
      {
        id: 'docs.copies',
        label: 'Copies of passport, tickets, bookings, emergency contacts',
      },
      {
        id: 'docs.itinerary-home',
        label: 'Itinerary and everyone\'s numbers left with someone at home',
      },
    ],
  },
  {
    id: 'money',
    phase: 'prep',
    title: 'Money',
    notes: [],
    items: [
      { id: 'money.npr', label: 'NPR cash for the trek' },
      { id: 'money.card', label: 'International card for Kathmandu / Pokhara' },
      { id: 'money.usd', label: 'Emergency USD' },
    ],
  },
  {
    id: 'bookings',
    phase: 'prep',
    title: 'Book in advance',
    notes: [],
    items: [
      { id: 'book.flights', label: 'Dhaka to Kathmandu flights' },
      { id: 'book.ktm-hotel-advance', label: 'Kathmandu hotel for two, 26 Sept night' },
      { id: 'book.ktm-pokhara-bus', label: 'Kathmandu to Pokhara night bus, 27 Sept' },
      { id: 'bus.departure', label: 'Bus: departure location confirmed' },
      { id: 'bus.operator-phone', label: 'Bus: operator phone number saved' },
    ],
  },

  // ---------------------------------------------------------------- PACK
  {
    id: 'clothing-upper',
    phase: 'pack',
    title: 'Upper body',
    notes: ['Do not overpack. Layers beat bulk.'],
    items: [
      { id: 'gear.tshirts', label: '2-3 quick-dry T-shirts' },
      { id: 'gear.thermals-top', label: '1-2 thermal / base layers' },
      { id: 'gear.fleece', label: 'Fleece or mid-layer' },
      { id: 'gear.down-jacket', label: 'Down jacket' },
      { id: 'gear.rain-jacket', label: 'Waterproof rain jacket' },
      { id: 'gear.windbreaker', label: 'Windbreaker, if needed' },
    ],
  },
  {
    id: 'clothing-lower',
    phase: 'pack',
    title: 'Lower body',
    notes: [],
    items: [
      { id: 'gear.trek-pants', label: '2 trekking pants' },
      { id: 'gear.thermal-bottom', label: '1 thermal bottom' },
      { id: 'gear.underwear', label: 'Comfortable underwears' },
      { id: 'gear.sleep-clothes', label: 'Warm sleeping clothes' },
    ],
  },
  {
    id: 'clothing-extremities',
    phase: 'pack',
    title: 'Hands, head, feet',
    notes: ['These matter more than people expect.'],
    items: [
      { id: 'gear.trek-socks', label: '3-4 pairs trekking socks' },
      { id: 'gear.warm-socks', label: 'Warm wool or synthetic socks' },
      { id: 'gear.warm-gloves', label: 'Warm gloves' },
      { id: 'gear.liner-gloves', label: 'Lightweight liner gloves' },
      { id: 'gear.beanie', label: 'Warm beanie, buff/neck gaiter' },
      { id: 'gear.sun-hat', label: 'Sun hat or cap' },
    ],
  },
  {
    id: 'footwear',
    phase: 'pack',
    title: 'Footwear',
    notes: [],
    items: [
      { id: 'gear.boots', label: 'Trekking boots, already broken in' },
      { id: 'gear.blister-treatment', label: 'Blister treatment' },
    ],
  },
  {
    id: 'bag',
    phase: 'pack',
    title: 'Bag and rain protection',
    notes: [
      'September is still close to monsoon. Keep rain gear inside your daypack, not buried in your luggage.',
      'Use waterproof bags for passport, phone, power bank, wallet, electronics and spare clothes. A cheap plastic bag can save your electronics.',
    ],
    items: [
      { id: 'op.gear.backpack', label: 'Backpack with rain cover' },
      { id: 'rain.dry-bags', label: 'Dry bags / waterproof bags' },
      { id: 'op.gear.poles', label: 'Trekking poles' },
    ],
  },
  {
    id: 'food',
    phase: 'pack',
    title: 'Snacks',
    notes: [
      'This is emergency energy only. Do not rely on sugary snacks alone. Something salty can be surprisingly useful.',
    ],
    items: [
      { id: 'food.chocolate', label: 'Chocolate' },
      { id: 'food.dates', label: 'Dates, nuts and dry fruit' },
      { id: 'food.energy-bars', label: 'Milk powder and Energy bars' },
      { id: 'food.biscuits', label: 'Biscuits' },
      { id: 'food.ors', label: 'Electrolyte / ORS packets' },
      { id: 'food.salty', label: 'Some salty snacks' },
    ],
  },
  {
    id: 'water',
    phase: 'pack',
    title: 'Water',
    notes: [
      'Aim for roughly 2 litres of carrying capacity per person. You can refill along the trail.',
      'Do not assume a source is safe just because locals drink from it.',
    ],
    items: [
      { id: 'water.bottle', label: 'Bottle or bladder, around 2 L total' },
      {
        id: 'water.purification',
        label: 'Purification: tablets, drops or filter',
      },
    ],
  },
  {
    id: 'medicine',
    phase: 'pack',
    title: 'First aid',
    notes: [],
    items: [
      { id: 'med.bandages', label: 'Bandages' },
      { id: 'med.blister-patches', label: 'Blister patches' },
      { id: 'med.antiseptic', label: 'Antiseptic' },
      { id: 'med.painkiller', label: 'Painkiller' },
      { id: 'med.stomach', label: 'Stomach / diarrhea medicine' },
      { id: 'med.ors', label: 'ORS / electrolytes' },
      { id: 'med.cold-fever', label: 'Fever/cold medicines' },
    ],
  },
  {
    id: 'sun',
    phase: 'pack',
    title: 'Sun protection',
    notes: [
      'UV at altitude is intense. Sunglasses are essential, not optional.',
    ],
    items: [
      { id: 'sun.sunglasses', label: 'Sunglasses with good UV protection' },
      { id: 'sun.sunscreen', label: 'Sunscreen' },
      { id: 'sun.lip-balm', label: 'Lip balm with SPF' },
    ],
  },
  {
    id: 'electronics',
    phase: 'pack',
    title: 'Electronics',
    notes: [],
    items: [
      { id: 'elec.phone', label: 'Phone' },
      { id: 'elec.power-bank', label: 'Power bank' },
      { id: 'elec.cables', label: 'Charging cables' },
      { id: 'elec.adapter', label: 'Universal travel adapter' },
    ],
  },

  // ---------------------------------------------------------- LOGISTICS (Prep)
  {
    id: 'pre-trek',
    phase: 'prep',
    title: 'Pre-trek',
    notes: [],
    items: [
      { id: 'ktm.withdraw-npr', label: 'Exchange currency / withdraw enough NPR' },
      { id: 'ktm.rent-gear', label: 'Rent trekking equipment, then inspect it' },
      { id: 'ktm.bus-tickets', label: 'Buy night-bus tickets for 27 Sept' },
      { id: 'pre.npr', label: 'NPR for the whole trek confirmed' },
      { id: 'pre.snacks', label: 'Snacks bought' },
      { id: 'pre.water-electrolytes', label: 'Water and electrolytes bought' },
      { id: 'pre.weather', label: 'Weather forecast checked' },
      { id: 'pre.charge', label: 'Power banks charged' },
    ],
  },
  {
    id: 'maps',
    phase: 'prep',
    title: 'Offline maps',
    notes: [],
    items: [
      { id: 'maps.offline-route', label: 'Offline map of the entire ABC route' },
      { id: 'maps.teahouses', label: 'Teahouse destinations saved' },
      { id: 'maps.ghandruk', label: 'Ghandruk saved (first night, 28 Sept)' },
      { id: 'maps.jeep-locations', label: 'Jeep pickup and drop-off saved' },
    ],
  },
  {
    id: 'permits',
    phase: 'prep',
    title: 'Permits',
    notes: [
      'You\'ll generally need the Annapurna Conservation Area permit (ACAP) plus the trekking registration / TIMS arrangement that applies at the time.',
    ],
    items: [
      { id: 'permits.acap', label: 'ACAP permit' },
      { id: 'permits.tims', label: 'TIMS / trek registration' },
      { id: 'permits.photos', label: 'Photos of every permit saved on phone' },
      { id: 'permits.passport-handy', label: 'Passport kept handy' },
    ],
  },
  {
    id: 'cash',
    phase: 'prep',
    title: 'Cash on the trail',
    notes: [],
    items: [
      { id: 'cash.trek-npr', label: 'NPR for the whole trek plus emergency' },
      { id: 'cash.separated', label: 'Emergency cash kept separate from wallet' },
    ],
  },
  {
    id: 'morning',
    phase: 'prep',
    title: 'Every morning',
    daily: true,
    notes: [
      'Run this before you leave the teahouse. Tap "New day" to clear it for tomorrow.',
    ],
    items: [
      { id: 'am.water', label: 'Water filled' },
      { id: 'am.snacks', label: 'Snacks' },
      { id: 'am.rain-jacket', label: 'Rain jacket in the daypack' },
      { id: 'am.phone', label: 'Phone' },
      { id: 'am.power-bank', label: 'Power bank charged' },
      { id: 'am.headlamp', label: 'Headlamp' },
      { id: 'am.sunglasses', label: 'Sunglasses' },
      { id: 'am.sunscreen', label: 'Sunscreen' },
      { id: 'am.medicine', label: 'Basic medicine' },
      { id: 'am.everyone-ready', label: 'Everyone is ready before you leave' },
    ],
  },

  // ---------------------------------------------------------------- INFO
  {
    id: 'routine',
    phase: 'info',
    title: 'Daily routine',
    notes: [
      '6:00 to 6:30 wake up. 6:30 to 7:00 breakfast. 7:00 to 8:00 start walking.',
      'Short break every 60 to 90 minutes. Lunch around midday.',
      'Evening: eat, shower if possible, charge devices, prepare the backpack, sleep early.',
    ],
    items: [],
  },
  {
    id: 'group',
    phase: 'info',
    title: 'Rules & mental map',
    notes: [
      'Ridge → valleys → forest stairs → alpine basin → ABC → same way back → hot springs → Pokhara.',
      'Hard part: stairs + altitude. Hardest day: Oct 2. ABC early, lunch at MBC, descend to Dovan.',
      'Slowest person sets the pace. Nobody walks alone above Deurali.',
      'Sick? Tell the guide immediately. Descend. Do not push through.',
      'Carry 1.5-2 L water each; refill at lodges. Treat water. Do not assume streams are safe.',
      'Eat breakfast before walking. Lunch at recommended lodges. Carry snacks.',
      'Stairs: small steps, steady pace. Do not sprint uphill.',
      'Start early (earlier on Oct 2). Headlamp, rain gear, and warm layers kept accessible.',
      'Keep enough NPR for food, rooms, and emergencies.',
    ],
    items: [],
  },
  {
    id: 'altitude',
    phase: 'info',
    title: 'Altitude illness',
    urgent: true,
    notes: [
      'ABC sits around 4,130 m. Sleeping at MBC (~3,700 m) is already a big jump. Watch for: persistent headache, nausea, dizziness, unusual fatigue, difficulty sleeping, loss of coordination, shortness of breath at rest.',
      'Do not treat worsening symptoms as something to push through. Descending is the treatment for serious altitude illness. Tell the guide immediately.',
    ],
    items: [],
  },
  {
    id: 'hardest',
    phase: 'info',
    title: 'Hardest days',
    table: {
      headers: ['Day', 'Why'],
      rows: [
        ['Oct 1', 'Biggest net gain; altitude transition (Dovan → MBC)'],
        ['Oct 2', 'Highest altitude; long descent to Dovan'],
        ['Sep 30', 'Repeated stairs and forest climbs'],
      ],
    },
    notes: [],
    items: [],
  },
  {
    id: 'checkpoints',
    phase: 'info',
    title: 'Trail checkpoints',
    table: {
      headers: ['Place', 'Role'],
      rows: [
        ['Chomrong', 'Last major village; supplies, eat, rest'],
        ['Bamboo', 'Forest rest / lunch toward Dovan'],
        ['Himalaya', 'Tea/rest before Deurali'],
        ['Deurali', 'Lunch before open high section'],
        ['MBC', 'High overnight; ABC-day recovery lunch'],
        ['ABC', 'Highest point ~4,130 m; visit and return'],
      ],
    },
    notes: [],
    items: [],
  },
  {
    id: 'elev-temp',
    phase: 'info',
    title: 'Elevation & temperature',
    tables: [
      {
        headers: ['Stop', 'Elev', 'Next ↑'],
        rows: [
          ['Ghandruk', '~1,940 m', '+230 m'],
          ['Chomrong', '~2,170 m', '+430 m'],
          ['Dovan', '~2,600 m', '+600 m'],
          ['Deurali', '~3,200 m', '+500 m'],
          ['MBC', '~3,700 m', '+430 m'],
          ['ABC', '~4,130 m', '-'],
        ],
      },
      {
        headers: ['Day', 'Route', 'Net elev', 'Temp'],
        rows: [
          ['Sep 28', 'Pokhara → Ghandruk', '+1,120 m road', 'Night ~10-13°C'],
          ['Sep 29', 'Ghandruk → Chomrong', '+230 m', '18-24° / 10-13°'],
          ['Sep 30', 'Chomrong → Dovan', '+430 m', '15-20° / 8-12°'],
          ['Oct 1', 'Dovan → MBC', '+1,100 m', '5-10° / -5-2°'],
          ['Oct 2', 'MBC → ABC → Dovan', '+430 m to ABC', '5-10°; coldest'],
          ['Oct 3', 'Dovan → Pokhara', '-820 m walk', 'Warms to 25-30°'],
        ],
      },
    ],
    items: [],
  },
];

export function getSectionsForPhase(phaseId) {
  return sections.filter((section) => section.phase === phaseId);
}

export function getAllItemIds() {
  return sections.flatMap((section) => section.items.map((item) => item.id));
}
