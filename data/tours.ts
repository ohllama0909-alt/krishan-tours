export type TourDay = { day: number; title: string; place: string; text: string; experiences: string[]; image: string };
export type Tour = {
  slug: string; name: string; duration: number; locations: string[]; styles: string[]; image: string;
  summary: string; intro: string; highlights: string[]; route: string[]; itinerary: TourDay[];
  accommodation: string; included: string[]; notIncluded: string[]; transport: string;
};

const day = (day: number, title: string, place: string, text: string, experiences: string[], image: string): TourDay => ({ day, title, place, text, experiences, image });

export const tours: Tour[] = [
  {
    slug: "sri-lanka-essentials", name: "Sri Lanka Essentials", duration: 8,
    locations: ["Sigiriya", "Kandy", "Ella", "Galle"], styles: ["Culture", "Classic"], image: "/images/pidurangala-sigiriya.webp",
    summary: "Ancient cities, the hill-country railway and a soft landing on the southern coast.",
    intro: "A thoughtful first journey across the island, balancing Sri Lanka’s essential places with enough unscripted time to feel them.",
    highlights: ["Climb Sigiriya before the heat", "Ride the highland railway to Ella", "Share a home-cooked village lunch", "Walk Galle’s ramparts at sunset"],
    route: ["Negombo", "Sigiriya", "Kandy", "Ella", "Galle", "Colombo"],
    itinerary: [
      day(1,"A soft arrival","Negombo","Meet your private driver and settle beside the lagoon, close enough to the airport and far enough from its pace.",["Private airport welcome","Lagoon-side stay","Optional beach walk"],"/images/coast.webp"),
      day(2,"Into the island","Sigiriya","Travel through coconut country, stopping where curiosity leads before reaching the forested Cultural Triangle.",["Roadside fruit stop","Village lunch","Forest lodge arrival"],"/images/sigiriya-gardens.webp"),
      day(3,"The kingdom in the sky","Sigiriya","Climb the rock at first light, then take the afternoon slowly by pool, bicycle or lotus lake.",["Sunrise Sigiriya climb","Local historian","Optional village cycle"],"/images/sigiriya-panorama.webp"),
      day(4,"Temple roads","Kandy","Visit Dambulla’s painted caves en route to Kandy and arrive as temple drums begin across the lake.",["Dambulla cave temple","Spice garden stop","Kandy evening walk"],"/images/rainforest.webp"),
      day(5,"The train into tea country","Ella","Board the highland train for its loveliest stretch: small stations, tea terraces and open mountain views.",["Reserved rail seats","Station picnic","Ella valley sunset"],"/images/ella-train.webp"),
      day(6,"Walk above the clouds","Ella","Take an early ridge walk and cross Nine Arches Bridge before choosing a waterfall or an idle afternoon.",["Little Adam’s Peak","Nine Arches Bridge","Tea tasting"],"/images/nine-arches.webp"),
      day(7,"From hills to salt air","Galle","Descend through changing landscapes to the south coast. Enter Galle Fort late, when the stone turns gold.",["Scenic private drive","Fort orientation walk","Rampart sunset"],"/images/coast.webp"),
      day(8,"Until next time","Colombo","A quiet breakfast, time for one last swim or shop, then a private transfer to the airport.",["Flexible morning","Private departure transfer","24/7 journey support"],"/images/mirissa.webp"),
    ],
    accommodation: "Small character hotels, a forest lodge and a considered heritage stay. Always private rooms; upgrades are easy.",
    included: ["Private air-conditioned vehicle and driver", "7 nights’ accommodation with breakfast", "Reserved hill-country train seats", "Listed guiding and entrance fees", "Airport transfers and local support"],
    notIncluded: ["International flights and visa", "Travel insurance", "Meals not listed", "Personal expenses and gratuities"],
    transport: "A private, air-conditioned car or van with an English-speaking driver-guide, plus reserved seats on the Kandy–Ella railway."
  },
  {
    slug: "tea-trails-ancient-kingdoms", name: "Tea Trails & Ancient Kingdoms", duration: 10,
    locations: ["Anuradhapura", "Sigiriya", "Kandy", "Nuwara Eliya"], styles: ["Culture", "Luxury"], image: "/images/tea-hills.webp",
    summary: "Sacred cities, misted estates and the quieter roads between them.",
    intro: "Ten days tracing the island’s long history from monumental dry-zone capitals to highland tea bungalows.",
    highlights: ["Cycle Anuradhapura with a historian", "See Sigiriya at dawn", "Stay within a working tea estate", "Walk a little-used highland trail"],
    route: ["Negombo", "Anuradhapura", "Sigiriya", "Kandy", "Hatton", "Nuwara Eliya", "Colombo"],
    itinerary: [
      day(1,"Arrive gently","Negombo","Land to a warm welcome and a short drive to the coast.",["Airport welcome","Private transfer","Lagoon sunset"],"/images/coast.webp"),
      day(2,"North to the old capital","Anuradhapura","Cross the coconut belt into the island’s dry zone.",["Scenic drive","Local lunch","Mihintale sunset"],"/images/anuradhapura.webp"),
      day(3,"A city still sacred","Anuradhapura","Cycle between colossal stupas, pools and living places of devotion.",["Private historian","Bicycle exploration","Temple flower offering"],"/images/jetavanaramaya.webp"),
      day(4,"Forest roads","Sigiriya","Travel east through tank country, stopping in small villages.",["Country drive","Village kitchen lunch","Lodge at leisure"],"/images/rainforest.webp"),
      day(5,"Above the water gardens","Sigiriya","Climb before breakfast and spend the afternoon at Pidurangala or the pool.",["First-light climb","Garden story walk","Optional sunset hike"],"/images/pidurangala-sigiriya.webp"),
      day(6,"Caves and lake light","Kandy","See Dambulla’s painted caves, then continue into the central hills.",["Cave temple","Artisan visit","Kandy lake walk"],"/images/rainforest.webp"),
      day(7,"Ritual and gardens","Kandy","Move between the botanical gardens and the evening puja with sensitive local context.",["Peradeniya gardens","Temple visit","Kandyan home dinner"],"/images/rainforest.webp"),
      day(8,"The tea road","Hatton","Climb by road into cooler air and check into an estate bungalow.",["Tea-country drive","Bungalow lunch","Estate walk"],"/images/tea-estate.webp"),
      day(9,"Leaf to cup","Nuwara Eliya","Walk with an estate host, follow the making process and taste across elevations.",["Guided tea walk","Factory visit","Private tasting"],"/images/tea-hills.webp"),
      day(10,"Down from the hills","Colombo","Take the beautiful western descent for your onward flight or an added coast stay.",["Flexible departure","Private transfer","Optional Colombo stop"],"/images/tea-estate.webp"),
    ],
    accommodation: "Heritage bungalows, intimate design-led hotels and quiet lodges with a strong sense of place.",
    included: ["Private vehicle and driver-guide", "9 nights with breakfast", "Specialist cultural guiding", "Tea estate walk and tasting", "Entrance fees listed in the final proposal"],
    notIncluded: ["Flights and visa", "Insurance", "Unlisted meals", "Spa treatments and gratuities"],
    transport: "Private vehicle throughout, with the option to replace one highland road sector with a reserved train journey."
  },
  {
    slug: "wild-sri-lanka", name: "Wild Sri Lanka", duration: 7,
    locations: ["Gal Oya", "Udawalawe", "Yala"], styles: ["Wildlife", "Adventure"], image: "/images/elephants.webp",
    summary: "Patient safaris, forest lodges and three very different wild landscapes.",
    intro: "A wildlife journey designed around good naturalists, ethical distance and time outside the vehicle.",
    highlights: ["Boat safari in Gal Oya", "Walk with a Vedda community host", "Elephant country at Udawalawe", "A quieter approach to Yala"],
    route: ["Negombo", "Gal Oya", "Udawalawe", "Yala", "Tangalle"],
    itinerary: [
      day(1,"Meet at the water","Negombo","Arrive and reset beside the lagoon.",["Airport transfer","Naturalist briefing","Early night"],"/images/coast.webp"),
      day(2,"East into forest","Gal Oya","A long, revealing drive into one of the island’s least-visited corners.",["Scenic drive","Picnic lunch","Eco-lodge arrival"],"/images/rainforest.webp"),
      day(3,"Safari by boat","Gal Oya","Cross the reservoir at dawn for birdlife and the chance of swimming elephants.",["Private boat safari","Naturalist guide","Forest walk"],"/images/elephants.webp"),
      day(4,"Elephant grasslands","Udawalawe","Travel south-west and enter open country shaped by the reservoir.",["Elephant Transit Home","Dusk safari","Camp dinner"],"/images/elephants.webp"),
      day(5,"Through the deep south","Yala","Take a slow morning, then continue to the buffer forests outside Yala.",["Birding walk","Village lunch","Naturalist talk"],"/images/rainforest.webp"),
      day(6,"Read the tracks","Yala","Enter by a considered gate before dawn and stay with what the landscape offers.",["Private jeep","Expert tracker","Long brunch"],"/images/elephants.webp"),
      day(7,"Wild coast","Tangalle","Leave the forest for a final lunch by the sea or continue to your next stay.",["Coastal transfer","Beach lunch","Onward planning"],"/images/mirissa.webp"),
    ],
    accommodation: "Low-impact camps and intimate forest lodges selected for guiding quality, not theatrical luxury.",
    included: ["Private transfers", "6 nights with breakfast", "Three private safari experiences", "Naturalist fees and park entry", "Filtered drinking-water refills"],
    notIncluded: ["Flights and visa", "Insurance", "Camera fees if introduced", "Unlisted meals and gratuities"],
    transport: "Private car between regions, purpose-built jeeps inside parks and a stable safari boat at Gal Oya."
  },
  {
    slug: "southern-coast-escape", name: "Southern Coast Escape", duration: 6,
    locations: ["Galle", "Weligama", "Tangalle"], styles: ["Beach", "Family"], image: "/images/coast.webp",
    summary: "Fort lanes, warm water and a coast itinerary with room to do very little.",
    intro: "A relaxed southern journey that pairs Galle’s living history with two distinct stretches of coast.",
    highlights: ["Private Galle food walk", "Beginner or guided reef surfing", "Hidden-cove picnic", "Unhurried final beach days"],
    route: ["Colombo", "Galle", "Weligama", "Tangalle", "Colombo"],
    itinerary: [
      day(1,"Follow the ocean south","Galle","Meet in Colombo and reach Galle in time for the sea walls at golden hour.",["Private pickup","Fort check-in","Sunset rampart walk"],"/images/coast.webp"),
      day(2,"Inside the old walls","Galle","Explore architecture and everyday life, then cook lunch from the market.",["Historian walk","Market visit","Cooking session"],"/images/food.webp"),
      day(3,"A bay for learning","Weligama","Move twenty minutes east and match the day to surf, sailing or a quiet cove.",["Private transfer","Surf lesson option","Seafood dinner"],"/images/mirissa.webp"),
      day(4,"The slower south","Tangalle","Take the coastal road beyond Matara to wider, quieter beaches.",["Dondra stop","Local lunch","Beach at leisure"],"/images/coast.webp"),
      day(5,"Nothing scheduled","Tangalle","A deliberately open day for the pool, lagoon, spa or sand.",["Optional lagoon paddle","Ayurvedic treatment","Private beach picnic"],"/images/mirissa.webp"),
      day(6,"Coast to city","Colombo","Return privately to Colombo or the airport with stops shaped around your flight.",["Flexible departure","Private vehicle","Airport assistance"],"/images/coast.webp"),
    ],
    accommodation: "A small fort hotel followed by barefoot coastal stays. Family rooms and private villas available.",
    included: ["Private vehicle", "5 nights with breakfast", "Galle walking guide", "Market cooking lunch", "Airport or Colombo transfer"],
    notIncluded: ["Flights and visa", "Insurance", "Water sports", "Unlisted meals"],
    transport: "Short private road transfers with child seats on request; no travel day exceeds three and a half hours."
  },
  {
    slug: "sri-lanka-honeymoon", name: "Sri Lanka Honeymoon", duration: 12,
    locations: ["Sigiriya", "Tea Country", "Yala", "Tangalle"], styles: ["Honeymoon", "Luxury"], image: "/images/tea-estate.webp",
    summary: "Private villas, train-window views, wild mornings and a beautifully slow coast finale.",
    intro: "Romantic without clichés: characterful stays, a few remarkable meals and private experiences with breathing room between them.",
    highlights: ["Private sunrise on Pidurangala", "Tea bungalow stay", "Safari with a specialist naturalist", "Four nights beside the Indian Ocean"],
    route: ["Negombo", "Sigiriya", "Kandy", "Hatton", "Ella", "Yala", "Tangalle", "Colombo"],
    itinerary: [
      day(1,"Arrive together","Negombo","A calm first night near the lagoon with no ambitious plans.",["Private welcome","Suite check-in","Dinner reservation"],"/images/coast.webp"),
      day(2,"North through coconut country","Sigiriya","Travel inland with a flexible lunch stop and time at your forest lodge.",["Private drive","Village lunch","Pool afternoon"],"/images/sigiriya-gardens.webp"),
      day(3,"A rock at first light","Sigiriya","Climb with a private guide, then dine somewhere unexpected in the evening.",["Dawn climb","Couples massage option","Private dinner"],"/images/sigiriya-panorama.webp"),
      day(4,"Caves, spice, hills","Kandy","Move south through Dambulla and Matale to a quiet hillside stay.",["Cave temple","Spice lunch","Kandy viewpoint"],"/images/rainforest.webp"),
      day(5,"Sacred city, slow day","Kandy","Gardens in the morning and the Temple of the Tooth near dusk.",["Botanical gardens","Afternoon at leisure","Temple ceremony"],"/images/rainforest.webp"),
      day(6,"Your tea bungalow","Hatton","Wind into the western tea hills for fireside evenings and valley views.",["Scenic transfer","Bungalow lunch","Estate stroll"],"/images/tea-estate.webp"),
      day(7,"Tea at the source","Hatton","Walk between fields and factory, with a picnic set above the reservoir.",["Estate guide","Tea tasting","Private picnic"],"/images/tea-hills.webp"),
      day(8,"Rails to Ella","Ella","Ride the mountain train east and meet your driver below Ella’s ridge.",["Reserved train","Station snacks","Sunset drinks"],"/images/ella-train.webp"),
      day(9,"Into leopard country","Yala","Walk early, then descend toward Yala for a night close to the forest.",["Ridge walk","Waterfall stop","Naturalist briefing"],"/images/elephants.webp"),
      day(10,"Dawn in the wild","Tangalle","Safari slowly, brunch late and reach the coast with the afternoon free.",["Private safari","Late breakfast","Ocean villa check-in"],"/images/elephants.webp"),
      day(11,"A day without shoes","Tangalle","Keep the final full day open—swim, spa, sail or simply stay put.",["Beach picnic","Spa option","Private seafood dinner"],"/images/mirissa.webp"),
      day(12,"Homeward","Colombo","A private coastal transfer timed to your flight, with Galle available en route.",["Late checkout request","Private transfer","Airport assistance"],"/images/coast.webp"),
    ],
    accommodation: "Suites, estate bungalows and private-pool coastal villas, chosen for intimacy and genuine character.",
    included: ["Private chauffeur vehicle", "11 nights with breakfast", "Reserved train seats", "Private Sigiriya and Yala guiding", "One special dinner and one picnic"],
    notIncluded: ["Flights and visa", "Insurance", "Most lunches and dinners", "Spa and optional activities"],
    transport: "Private premium vehicle, reserved scenic train seats and a private safari jeep."
  },
  {
    slug: "ultimate-island-journey", name: "Ultimate Island Journey", duration: 14,
    locations: ["Ancient Cities", "Hill Country", "Wildlife", "South Coast"], styles: ["Classic", "Luxury", "Wildlife"], image: "/images/nine-arches.webp",
    summary: "Two rich weeks across the island, paced to reveal its contrasts rather than count its sights.",
    intro: "Our fullest first-time journey: sacred cities, living culture, mountain railways, wild country and a generous coastal finish.",
    highlights: ["Three UNESCO landscapes", "Two distinct safari habitats", "The Kandy–Ella train", "Food, craft and unscheduled coastal time"],
    route: ["Negombo", "Anuradhapura", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle", "Bentota", "Colombo"],
    itinerary: [
      day(1,"Island welcome","Negombo","Meet your driver and exhale beside the lagoon.",["Airport welcome","Short transfer","Flexible arrival"],"/images/coast.webp"),
      day(2,"The road north","Anuradhapura","Travel into the dry zone, stopping for fruit and a local lunch.",["Scenic drive","Village lunch","Mihintale option"],"/images/anuradhapura.webp"),
      day(3,"Sacred city by bicycle","Anuradhapura","Explore monuments and living devotion with a historian.",["Private guide","Bicycle ride","Sunset stupa"],"/images/jetavanaramaya.webp"),
      day(4,"Tank country","Sigiriya","Cross old irrigation landscapes to a secluded lodge.",["Country roads","Cooking lunch","Pool afternoon"],"/images/rainforest.webp"),
      day(5,"Lion Rock","Sigiriya","Climb at opening and keep the afternoon free for forest or village life.",["Sigiriya climb","Garden walk","Optional lake paddle"],"/images/pidurangala-sigiriya.webp"),
      day(6,"Caves to Kandy","Kandy","Travel through Dambulla and Matale into the central hills.",["Cave temple","Spice stop","Lake walk"],"/images/rainforest.webp"),
      day(7,"A living cultural capital","Kandy","See gardens, makers and evening ritual with room between each.",["Botanical gardens","Craft workshop","Temple visit"],"/images/rainforest.webp"),
      day(8,"Higher into tea","Nuwara Eliya","Climb through tea country to cool air and an estate stay.",["Waterfall stop","Tea factory","Bungalow dinner"],"/images/tea-hills.webp"),
      day(9,"The mountain railway","Ella","Take the train east through the island’s most cinematic highlands.",["Reserved seats","Train picnic","Ella sunset"],"/images/ella-train.webp"),
      day(10,"Ella on foot","Ella","Walk early to a ridge and cross Nine Arches before the day warms.",["Guided ridge walk","Nine Arches","Waterfall option"],"/images/nine-arches.webp"),
      day(11,"The wild south","Yala","Descend from green hills into thorn forest and open grassland.",["Scenic transfer","Naturalist briefing","Camp dinner"],"/images/elephants.webp"),
      day(12,"Tracks at dawn","Galle","Take a patient private safari, then turn west for Galle.",["Dawn safari","Late brunch","Fort sunset"],"/images/elephants.webp"),
      day(13,"Fort and ocean","Bentota","Walk Galle with a resident guide before a final afternoon on the sand.",["Fort walk","Coastal lunch","Beach stay"],"/images/coast.webp"),
      day(14,"The last coast road","Colombo","A slow morning and private transfer timed around your onward flight.",["Late breakfast","Private departure","Optional Colombo stop"],"/images/mirissa.webp"),
    ],
    accommodation: "A considered progression of heritage hotels, nature lodges, an estate bungalow and a refined beach stay.",
    included: ["Private vehicle and driver-guide", "13 nights with breakfast", "All listed specialist guides", "Rail seats, park fees and safari jeep", "Airport transfers and on-trip support"],
    notIncluded: ["International travel and visa", "Travel insurance", "Unlisted meals", "Personal purchases and gratuities"],
    transport: "A comfortable private vehicle remains with you, complemented by the scenic train and a private safari jeep."
  }
];

export const getTour = (slug: string) => tours.find((item) => item.slug === slug);
export const tourStyles = ["All", "Adventure", "Wildlife", "Culture", "Beach", "Family", "Honeymoon", "Luxury"];
