/**
 * ABC trek checklist, grouped by when you actually use it rather than by the
 * order of the source document (plans/checklist.md).
 *
 * Item ids are stable localStorage keys — renaming a label is safe, renaming
 * an id silently wipes that item's saved state.
 */

export const phases = [
  { id: 'prep', label: 'Prep', hint: 'Before you leave Bangladesh' },
  { id: 'pack', label: 'Pack', hint: 'What goes in the bag' },
  { id: 'trek', label: 'Trek', hint: 'On the ground in Nepal' },
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
      {
        id: 'docs.passport',
        label: 'Passport — enough validity and blank pages',
      },
      {
        id: 'docs.visa',
        label: 'Nepal visa / visa-on-arrival rule checked for BD passports',
      },
      { id: 'docs.flights', label: 'Flight tickets — Dhaka to Kathmandu' },
      {
        id: 'docs.copies',
        label: 'Copies of passport, tickets, bookings, emergency contacts',
      },
      {
        id: 'docs.itinerary-home',
        label: 'Itinerary and everyone’s numbers left with someone at home',
      },
    ],
  },
  {
    id: 'money',
    phase: 'prep',
    title: 'Money',
    notes: [
      'Don’t depend entirely on cards.',
      'For a group of 7–8, one person should keep a shared expense ledger. Otherwise you’ll spend half the trip working out who paid for which jeep.',
    ],
    items: [
      { id: 'money.npr', label: 'NPR cash for the trek' },
      { id: 'money.card', label: 'International card for Kathmandu / Pokhara' },
      { id: 'money.usd', label: 'Emergency USD' },
      { id: 'money.ledger', label: 'One person assigned to the expense ledger' },
    ],
  },
  {
    id: 'bookings',
    phase: 'prep',
    title: 'Book in advance',
    notes: [
      'The three things not to leave late: the Kathmandu to Pokhara bus for 7–8 people, the Pokhara to trailhead jeep, and permits. Everything else is fixable in Pokhara.',
      'Book 7–8 bus seats together. Don’t land in Kathmandu hoping there will be enough seats.',
    ],
    items: [
      { id: 'book.flights', label: 'Dhaka to Kathmandu flights' },
      {
        id: 'book.ktm-pokhara-bus',
        label: 'Kathmandu to Pokhara night bus — 7–8 seats together',
      },
      { id: 'bus.departure', label: 'Bus: departure location confirmed' },
      { id: 'bus.pickup-time', label: 'Bus: pickup time confirmed' },
      { id: 'bus.luggage', label: 'Bus: luggage allowance confirmed' },
      { id: 'bus.operator-phone', label: 'Bus: operator’s phone number saved' },
      { id: 'book.pokhara-hotel', label: 'Pokhara hotel' },
      { id: 'book.ktm-return-hotel', label: 'Return Kathmandu hotel' },
    ],
  },
  {
    id: 'get-ready',
    phase: 'prep',
    title: 'Get yourself ready',
    notes: [
      'Do not arrive in Nepal with brand-new boots. Wear them regularly, walk long distances and stairs, check your heel isn’t slipping, and find the pressure points before the trail does.',
    ],
    items: [
      { id: 'book.boots-broken-in', label: 'Trekking boots broken in' },
      { id: 'book.basic-equipment', label: 'Basic trekking equipment sorted' },
    ],
  },

  // ---------------------------------------------------------------- PACK
  {
    id: 'clothing-upper',
    phase: 'pack',
    title: 'Upper body',
    notes: ['Don’t overpack. Layers beat bulk.'],
    items: [
      { id: 'gear.tshirts', label: '2–3 quick-dry T-shirts' },
      { id: 'gear.thermals-top', label: '1–2 thermal / base layers' },
      { id: 'gear.fleece', label: 'Fleece or mid-layer' },
      { id: 'gear.down-jacket', label: 'Down jacket' },
      { id: 'gear.rain-jacket', label: 'Waterproof rain jacket' },
      {
        id: 'gear.windbreaker',
        label: 'Windbreaker, if the rain jacket is a poor wind shell',
      },
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
      { id: 'gear.underwear', label: 'Comfortable underwear' },
      { id: 'gear.sleep-clothes', label: 'Warm sleeping clothes' },
    ],
  },
  {
    id: 'clothing-extremities',
    phase: 'pack',
    title: 'Hands, head, feet',
    notes: ['These matter more than people expect.'],
    items: [
      { id: 'gear.trek-socks', label: '3–4 pairs trekking socks' },
      { id: 'gear.warm-socks', label: 'Warm wool or synthetic socks' },
      { id: 'gear.warm-gloves', label: 'Warm gloves' },
      { id: 'gear.liner-gloves', label: 'Lightweight liner gloves' },
      { id: 'gear.beanie', label: 'Warm beanie' },
      { id: 'gear.sun-hat', label: 'Sun hat or cap' },
      { id: 'gear.buff', label: 'Buff / neck gaiter' },
    ],
  },
  {
    id: 'footwear',
    phase: 'pack',
    title: 'Footwear',
    notes: [
      'Carry blister treatment rather than assuming you won’t need it.',
    ],
    items: [
      { id: 'gear.boots', label: 'Trekking boots — already broken in' },
      { id: 'op.gear.sandals', label: 'Sandals for the teahouse' },
      { id: 'gear.extra-socks', label: 'Extra socks' },
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
      { id: 'op.gear.backpack', label: 'Backpack' },
      { id: 'rain.pack-cover', label: 'Backpack rain cover' },
      { id: 'rain.jacket', label: 'Waterproof rain jacket packed on top' },
      { id: 'rain.dry-bags', label: 'Dry bags / waterproof bags' },
      { id: 'rain.ziplocks', label: 'Ziplock bags' },
      { id: 'op.gear.sleeping-bag', label: 'Sleeping bag' },
      { id: 'op.gear.poles', label: 'Trekking poles' },
    ],
  },
  {
    id: 'food',
    phase: 'pack',
    title: 'Snacks',
    notes: [
      'You don’t need six days of food — the teahouses feed you. This is emergency energy only.',
      'Don’t rely on sugary snacks alone. Something salty can be surprisingly useful.',
    ],
    items: [
      { id: 'food.chocolate', label: 'Chocolate' },
      { id: 'food.dates', label: 'Dates' },
      { id: 'food.nuts', label: 'Nuts and dry fruit' },
      { id: 'food.energy-bars', label: 'Energy bars' },
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
      'Don’t assume a source is safe just because locals drink from it.',
    ],
    items: [
      { id: 'water.bottle', label: 'Bottle or bladder, around 2 L total' },
      {
        id: 'water.purification',
        label: 'Purification — tablets, drops or filter',
      },
    ],
  },
  {
    id: 'medicine',
    phase: 'pack',
    title: 'First aid',
    notes: [
      'One small shared group kit beats eight full individual kits. Personal prescriptions stay personal.',
    ],
    items: [
      { id: 'med.bandages', label: 'Bandages' },
      { id: 'med.blister-patches', label: 'Blister patches' },
      { id: 'med.antiseptic', label: 'Antiseptic' },
      { id: 'med.painkiller', label: 'Painkiller' },
      { id: 'med.stomach', label: 'Stomach / diarrhea medicine' },
      { id: 'med.ors', label: 'ORS / electrolytes' },
      { id: 'med.motion', label: 'Motion-sickness medication if anyone needs it' },
      { id: 'med.prescription', label: 'Personal prescription medicines' },
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
    notes: [
      'Don’t rely on your phone flashlight. You may walk before sunrise or after dark if something goes wrong. Everyone should have their own headlamp.',
    ],
    items: [
      { id: 'elec.phone', label: 'Phone' },
      { id: 'elec.power-bank', label: 'Power bank' },
      { id: 'elec.cables', label: 'Charging cables' },
      { id: 'elec.adapter', label: 'Universal travel adapter' },
      { id: 'elec.headlamp', label: 'Headlamp — one per person' },
      { id: 'elec.spare-batteries', label: 'Spare headlamp batteries' },
    ],
  },

  // ---------------------------------------------------------------- TREK
  {
    id: 'kathmandu',
    phase: 'trek',
    title: 'Kathmandu rest day',
    notes: [
      'Don’t turn it into another sightseeing marathon.',
      'You planned to rent a down jacket and trekking poles. Actually inspect rental gear — don’t just take a bag because the shop says it suits ABC.',
    ],
    items: [
      { id: 'ktm.hotel', label: 'Check into hotel' },
      { id: 'ktm.rent-gear', label: 'Rent trekking equipment' },
      { id: 'ktm.supplies', label: 'Buy remaining supplies' },
      { id: 'ktm.withdraw-npr', label: 'Withdraw enough NPR' },
      { id: 'ktm.charge', label: 'Charge everything' },
    ],
  },
  {
    id: 'permits',
    phase: 'trek',
    title: 'Permits',
    notes: [
      'You’ll generally need the Annapurna Conservation Area permit (ACAP) plus the trekking registration / TIMS arrangement that applies at the time.',
    ],
    items: [
      { id: 'permits.acap', label: 'ACAP permit' },
      { id: 'permits.tims', label: 'TIMS / trek registration' },
      { id: 'permits.photos', label: 'Photos of every permit saved on phone' },
      { id: 'permits.passport-handy', label: 'Passport kept handy' },
    ],
  },
  {
    id: 'pre-trek',
    phase: 'trek',
    title: 'Last day in Pokhara',
    notes: [],
    items: [
      { id: 'pre.rent', label: 'Rent down jacket and sleeping bag' },
      { id: 'pre.npr', label: 'Buy NPR — enough for the whole trek' },
      { id: 'pre.snacks', label: 'Buy snacks' },
      { id: 'pre.water-electrolytes', label: 'Buy water and electrolytes' },
      { id: 'pre.weather', label: 'Check weather forecast' },
      { id: 'pre.charge', label: 'Charge power banks' },
      {
        id: 'pre.passports-permits',
        label: 'Confirm everyone’s passport and permit situation',
      },
    ],
  },
  {
    id: 'maps',
    phase: 'trek',
    title: 'Offline maps',
    notes: [
      'Do this before leaving Pokhara. Don’t assume you’ll have reliable mobile data.',
    ],
    items: [
      { id: 'maps.offline-route', label: 'Offline map of the entire ABC route' },
      { id: 'maps.teahouses', label: 'Teahouse destinations saved' },
      { id: 'maps.pokhara-hotel', label: 'Pokhara hotel saved' },
      { id: 'maps.jeep-locations', label: 'Jeep pickup and drop-off saved' },
    ],
  },
  {
    id: 'jeep',
    phase: 'trek',
    title: 'Jeep to the trailhead',
    notes: [
      'For 7–8 people, arrange this before trekking day. Target: Pokhara to the Siwai / Jhinu area, then Chhomrong.',
      'Don’t let the driver talk you into changing the plan because some other road is “better”.',
    ],
    items: [
      { id: 'jeep.capacity', label: 'Vehicle capacity' },
      { id: 'jeep.passengers', label: 'Number of passengers' },
      { id: 'jeep.luggage', label: 'Luggage capacity' },
      { id: 'jeep.price', label: 'Total price' },
      { id: 'jeep.pickup-location', label: 'Pickup location' },
      { id: 'jeep.pickup-time', label: 'Pickup time' },
      { id: 'jeep.dropoff', label: 'Exact drop-off point' },
      { id: 'jeep.road-charges', label: 'Road and parking charges included?' },
    ],
  },
  {
    id: 'cash',
    phase: 'trek',
    title: 'Cash on the trail',
    notes: [
      'ATMs become irrelevant once you’re deep into the trail. Don’t plan to withdraw money when you need it.',
    ],
    items: [
      { id: 'cash.trek-npr', label: 'NPR for the whole trek plus emergency' },
      { id: 'cash.separated', label: 'Emergency cash kept separate from wallet' },
    ],
  },
  {
    id: 'morning',
    phase: 'trek',
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
    id: 'altitude',
    phase: 'info',
    title: 'Altitude',
    urgent: true,
    notes: [
      'ABC sits around 4,130 m. Watch for: persistent headache, nausea, dizziness, unusual fatigue, difficulty sleeping, loss of coordination, shortness of breath at rest.',
      'Do not treat worsening symptoms as something to push through. Descending is the treatment for serious altitude illness.',
    ],
    items: [],
  },
  {
    id: 'flexibility',
    phase: 'info',
    title: 'Don’t chase the itinerary',
    notes: [
      'The mountains don’t care about your schedule. If someone gets sick, the weather turns, a road is blocked, the group is exhausted, or the trail is bad — change the plan.',
      'The goal is not "we reach ABC on Day 6". The goal is "everyone reaches ABC safely".',
    ],
    items: [],
  },
  {
    id: 'group',
    phase: 'info',
    title: 'Group rules',
    notes: [
      'Nobody walks alone, especially above Deurali.',
      'If someone is slower, the group adapts rather than splitting into random individuals.',
    ],
    items: [],
  },
  {
    id: 'routine',
    phase: 'info',
    title: 'Daily routine',
    notes: [
      '6:00–6:30 wake up. 6:30–7:00 breakfast. 7:00–8:00 start walking.',
      'Short break every 60–90 minutes. Lunch around midday.',
      'Reach the destination early enough to actually get a room.',
      'Evening: eat, shower if possible, charge devices, prepare the backpack, sleep early.',
      'Don’t turn the teahouse into a late-night hangout. Your next morning matters more.',
    ],
    items: [],
  },
  {
    id: 'teahouse',
    phase: 'info',
    title: 'Teahouse expectations',
    notes: [
      'Basic rooms, often shared bathrooms, cold rooms higher up. Hot showers, charging and Wi-Fi are sometimes available and usually cost extra.',
      'At higher elevations the dining room is often the warmest place, because that’s where the stove is.',
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
