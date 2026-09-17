export type Destination = {
  slug: string;
  name: string;
  region: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  imagePosition?: string;
  bestTime: string;
  stay: string;
  coordinates: [number, number]; // WGS84: latitude, longitude
  reasons: string[];
  things: string[];
  nearby: string[];
  tip: string;
};

export const destinations: Destination[] = [
  {
    slug: "ella", name: "Ella", region: "Hill Country", category: "Slow adventure",
    tagline: "Where tea hills disappear into the clouds.",
    description: "Wake above the valley, cross a century-old railway bridge and walk through tea fields while the afternoon mist rolls in.",
    image: "/images/ella-train.webp", imagePosition: "center", bestTime: "January–March", stay: "2–3 nights", coordinates: [6.8667, 81.0466],
    reasons: ["One of Asia’s great rail journeys", "Gentle ridge walks with huge views", "Small guesthouses and mountain air"],
    things: ["Walk to Little Adam’s Peak before breakfast", "See the train curve across Nine Arches Bridge", "Visit a working tea estate", "Swim below a forest waterfall"],
    nearby: ["Haputale", "Nuwara Eliya", "Udawalawe"], tip: "Stay outside the town centre for quieter mornings and wider valley views."
  },
  {
    slug: "sigiriya", name: "Sigiriya", region: "Cultural Triangle", category: "Heritage",
    tagline: "An ancient kingdom above the forest.",
    description: "Climb in the cool first light, past water gardens and frescoes, to a ruined citadel floating over the plains.",
    image: "/images/sigiriya.webp", bestTime: "January–September", stay: "2 nights", coordinates: [7.957, 80.7603],
    reasons: ["A remarkable fifth-century rock citadel", "Wide views across the dry-zone forest", "Easy access to village life and wildlife"],
    things: ["Climb Sigiriya at opening time", "Watch sunset from Pidurangala", "Cycle quiet village lanes", "Take a slow catamaran across a lotus lake"],
    nearby: ["Dambulla", "Polonnaruwa", "Minneriya"], tip: "The rock is most peaceful—and coolest—in the first hour after opening."
  },
  {
    slug: "kandy", name: "Kandy", region: "Central Province", category: "Living culture",
    tagline: "A sacred city held between green hills.",
    description: "Temple drums at dusk, flower sellers by the lake and forested ridges just beyond the last city street.",
    image: "/images/rainforest.webp", bestTime: "December–April", stay: "2 nights", coordinates: [7.2906, 80.6337],
    reasons: ["A living centre of Buddhist culture", "The natural gateway to tea country", "Gardens, craft and layered history"],
    things: ["Visit the Temple of the Tooth respectfully", "Walk the lake at blue hour", "Explore Peradeniya Botanical Gardens", "Meet traditional artisans outside the centre"],
    nearby: ["Knuckles Range", "Matale", "Nuwara Eliya"], tip: "Cover shoulders and knees at sacred sites; Krishan carries spare wraps in the vehicle."
  },
  {
    slug: "galle", name: "Galle", region: "South Coast", category: "Coastal heritage",
    tagline: "Salt air, old stone and unhurried afternoons.",
    description: "Walk the ramparts before breakfast, slip into courtyard cafés and watch the sun lower beyond the lighthouse.",
    image: "/images/galle.webp", bestTime: "December–April", stay: "2–3 nights", coordinates: [6.0329, 80.2168],
    reasons: ["A beautifully preserved living fort", "Independent food, craft and design", "Easy access to sheltered coves"],
    things: ["Walk the sea walls at sunrise", "Browse small galleries and workshops", "Take a market-to-table cooking lesson", "Swim at nearby Unawatuna"],
    nearby: ["Unawatuna", "Weligama", "Koggala"], tip: "Sleep inside the fort once; after day visitors leave, its lanes change character."
  },
  {
    slug: "mirissa", name: "Mirissa", region: "South Coast", category: "Ocean",
    tagline: "Barefoot mornings on the Indian Ocean.",
    description: "Swim early, eat from a beachside grill and take to deep water with a responsible whale-watching crew.",
    image: "/images/mirissa.webp", bestTime: "December–April", stay: "2–4 nights", coordinates: [5.9483, 80.4716],
    reasons: ["Warm water and soft crescent beaches", "Blue-water wildlife encounters", "A relaxed base for the deep south"],
    things: ["Swim before the bay wakes", "Sail rather than crowd the whale boats", "Find a quiet cove by tuk-tuk", "Eat the day’s catch beside the sand"],
    nearby: ["Weligama", "Galle", "Tangalle"], tip: "Choose operators that keep distance from whales and cap passenger numbers."
  },
  {
    slug: "yala", name: "Yala", region: "Deep South", category: "Wildlife",
    tagline: "The hush before the jungle wakes.",
    description: "Follow fresh tracks through thorn forest, pause beside waterholes and let the landscape—not a checklist—set the pace.",
    image: "/images/elephants.webp", bestTime: "February–July", stay: "2 nights", coordinates: [6.3725, 81.5185],
    reasons: ["Sri Lanka’s most varied dry-zone habitats", "Leopard country with rich birdlife", "Wild coastline and forest camps"],
    things: ["Take one considered dawn drive", "Watch waterholes slowly come alive", "Explore quieter park sectors", "Stay under dark southern skies"],
    nearby: ["Bundala", "Kataragama", "Tangalle"], tip: "A patient naturalist and a quieter gate matter more than racing between sightings."
  },
  {
    slug: "nuwara-eliya", name: "Nuwara Eliya", region: "Highlands", category: "Tea country",
    tagline: "Cool mornings in a landscape shaped by tea.",
    description: "Follow estate paths through emerald rows, share a pot at the source and wake to gardens silvered by mist.",
    image: "/images/tea-hills.webp", bestTime: "February–May", stay: "2 nights", coordinates: [6.9497, 80.7891],
    reasons: ["Sri Lanka’s highest tea country", "Distinctive cool-climate landscapes", "Access to Horton Plains"],
    things: ["Walk with an estate guide", "Taste teas side by side", "Start Horton Plains before dawn", "Stay in a restored planter’s bungalow"],
    nearby: ["Horton Plains", "Hatton", "Ella"], tip: "Pack a light layer: evenings here feel completely different from the coast."
  },
  {
    slug: "trincomalee", name: "Trincomalee", region: "East Coast", category: "Beach & culture",
    tagline: "Clear water, temple bells and the open east.",
    description: "Snorkel over bright reef, step into a clifftop temple and eat crab curry within sight of the natural harbour.",
    image: "/images/coast.webp", imagePosition: "center", bestTime: "May–September", stay: "3 nights", coordinates: [8.5874, 81.2152],
    reasons: ["Calm east-coast seas in summer", "Layered Tamil and maritime heritage", "Reef, whales and a vast natural harbour"],
    things: ["Snorkel at Pigeon Island with care", "Visit Koneswaram Temple", "Swim at Nilaveli in the morning", "Taste eastern crab curry"],
    nearby: ["Nilaveli", "Pasikudah", "Kuchchaveli"], tip: "The east has its own season—come when the south-west coast is in monsoon."
  },
  {
    slug: "arugam-bay", name: "Arugam Bay", region: "East Coast", category: "Surf",
    tagline: "Long waves and slow, sandy days.",
    description: "Surf at first light, cross a lagoon by canoe and end the day with lime soda under the palms.",
    image: "/images/mirissa.webp", imagePosition: "60% center", bestTime: "May–September", stay: "3–5 nights", coordinates: [6.8404, 81.8368],
    reasons: ["Sri Lanka’s most celebrated point breaks", "Laid-back independent beach culture", "Lagoons and little-visited wild country"],
    things: ["Match a break to your ability", "Paddle a mangrove lagoon", "Climb Elephant Rock at first light", "Take a day with no plan"],
    nearby: ["Kumana", "Panama", "Gal Oya"], tip: "Beginners do best early with a local instructor, before onshore wind arrives."
  },
  {
    slug: "anuradhapura", name: "Anuradhapura", region: "Cultural Triangle", category: "Ancient cities",
    tagline: "Two thousand years, still alive.",
    description: "Cycle between white stupas, stone pools and the world’s oldest historically documented planted tree.",
    image: "/images/anuradhapura.webp", imagePosition: "center", bestTime: "January–September", stay: "2 nights", coordinates: [8.3114, 80.4037],
    reasons: ["A vast sacred city still in use", "Monumental ancient engineering", "Quiet exploration by bicycle"],
    things: ["Begin at the Sri Maha Bodhi", "Cycle the monastic city", "See moonstones with a local historian", "Stay for the evening devotional atmosphere"],
    nearby: ["Mihintale", "Wilpattu", "Aukana"], tip: "Bring socks for sun-warmed stone and dress modestly across the sacred city."
  }
];

export const getDestination = (slug: string) => destinations.find((item) => item.slug === slug);
