export type Experience = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  image: string;
  locations: string[];
  fact: string;
};

export const experiences: Experience[] = [
  { slug: "wildlife", name: "Wildlife", short: "Wait quietly. Let the wild come to you.", intro: "Sri Lanka’s wildlife is not confined to one park. Elephants cross village roads, hornbills move through hotel gardens and whales pass beyond the southern shelf. We choose patient naturalists, quieter gates and encounters that respect distance.", image: "/images/elephants.webp", locations: ["Yala", "Wilpattu", "Udawalawe", "Gal Oya"], fact: "Best approached slowly, with fewer drives and better guides." },
  { slug: "beaches", name: "Beaches", short: "Find the right coast for the season.", intro: "Two monsoons give the island a clever advantage: there is almost always a good coast somewhere. We match sheltered swimming coves, long surf breaks and small coastal stays to the month you travel.", image: "/images/coast.webp", locations: ["Mirissa", "Tangalle", "Trincomalee", "Bentota"], fact: "South-west: roughly Dec–Apr. East: roughly May–Sep." },
  { slug: "culture-heritage", name: "Culture & Heritage", short: "Ancient places that are still part of daily life.", intro: "The island’s old capitals are not museum sets. Pilgrims still carry flowers beneath vast white stupas; temple drums mark the evening in Kandy. Good local context turns stone and ritual into a living story.", image: "/images/dambulla-cave.webp", locations: ["Anuradhapura", "Sigiriya", "Polonnaruwa", "Kandy"], fact: "Visit sacred places with covered shoulders and an unhurried guide." },
  { slug: "adventure", name: "Adventure", short: "Ridges, rivers and roads less travelled.", intro: "Walk in the Knuckles, raft the Kelani, cycle the ancient cities or take the long way through highland backroads. Adventure here can be soft or serious—and should always leave space to look around.", image: "/images/rainforest.webp", locations: ["Knuckles", "Kitulgala", "Ella", "Belihuloya"], fact: "Early starts bring cooler air, clear views and quieter trails." },
  { slug: "food", name: "Food", short: "Breakfast deserves its own itinerary.", intro: "Hoppers at the edge of the griddle. Sour fish curry in the south. Crab and coconut on the east coast. The best way into Sri Lankan cooking is through markets, home kitchens and people with time to explain the sambols.", image: "/images/food.webp", locations: ["Colombo", "Galle", "Jaffna", "Kandy"], fact: "Ask for local spice, not tourist spice—then add sambol carefully." },
  { slug: "wellness", name: "Wellness", short: "A slower rhythm, grounded in place.", intro: "Wellness can mean a few quiet days in the hills, an informed Ayurvedic consultation, ocean swims or simply an itinerary with less packing and more sleep. We avoid miracle claims and choose thoughtful practitioners.", image: "/images/tea-estate.webp", locations: ["Santani", "Tangalle", "Kandy", "Kalpitiya"], fact: "A good retreat begins with listening, not a fixed programme." },
  { slug: "train-journeys", name: "Train Journeys", short: "The long way is the point.", intro: "Blue carriages trace the contours between Kandy and Ella: tea terraces, eucalyptus forest, small platforms and sudden valleys. We arrange the practical details, but keep the journey beautifully unscripted.", image: "/images/nine-arches.webp", locations: ["Kandy", "Hatton", "Nanu Oya", "Ella"], fact: "Reserved seats help; an open window matters more than class." },
  { slug: "local-life", name: "Local Life", short: "Meet the island beyond its landmarks.", intro: "A market breakfast, a village cricket match, a family-run workshop or tea with someone Krishan has known for years. These moments work because they are small, reciprocal and never staged as performances.", image: "/images/tea-hills.webp", locations: ["Matale", "Jaffna", "Galle", "Hill Country"], fact: "The best encounters leave room for conversation and change." },
];

export const getExperience = (slug: string) => experiences.find((item) => item.slug === slug);
