import articlesJson from './articles.json';

export interface Weapon {
  id: string;
  name: string;
  realWorldCounterpart: string;
  category: string;
  image: string;
  caliber: string;
  fireRate: string;
  damage: number;
  accuracy: number;
  range: number;
  handling: number;
  inventoryMode: string;
  penetration: { drywall: string; sheetMetal: string; glass: string };
  lore: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  actor: string;
  faction: string;
  image: string;
  status: string;
  origin: string;
  specialty: string;
  bio: string;
  traits: string[];
}

export interface Mission {
  id: string;
  title: string;
  protagonists: string;
  district: string;
  image: string;
  difficulty: string;
  payout: string;
  summary: string;
  goldMedal: string[];
  tactics: string;
}

export interface MapZone {
  id: string;
  name: string;
  district: string;
  x: number;
  y: number;
  color: string;
  securityLevel: string;
  enterableStructures: string;
  transit: string;
  lore: string;
}

export interface CategoryHub {
  id: string;
  rank: number;
  name: string;
  shortName: string;
  group: string;
  monthlyViews: string;
  searchVolume: string;
  tagline: string;
  description: string;
  link: string;
  badgeColor: string;
  tags: string[];
}

export interface Article {
  id: number;
  cluster: number;
  clusterName: string;
  title: string;
  targetKeyword: string;
  leadParagraph: string;
  eav?: {
    entity: string;
    attribute: string;
    value: string;
  };
  wikidata?: string;
  tokenChunk?: string;
}

export const WEAPONS: Weapon[] = [
  {
    id: "wep_girardi_es9",
    name: "Girardi ES9 Semi-Automatic",
    realWorldCounterpart: "SIG Sauer P320 / Beretta 92FS Hybrid",
    category: "Sidearms",
    image: "/assets/weapon_combat_pistol.jpg",
    caliber: "9x19mm Parabellum",
    fireRate: "Semi-Auto (460 RPM)",
    damage: 68,
    accuracy: 86,
    range: 55,
    handling: 90,
    inventoryMode: "Concealed Holster (Fast Draw)",
    penetration: { drywall: "6 cm", sheetMetal: "1.5 mm", glass: "Deflected / 2-Shot Shatter" },
    lore: "Jason's primary sidearm. Designed with high-tensile alloy ergonomics, crisp trigger reset, and modular rail for reflex sights and suppressors."
  },
  {
    id: "wep_klose_k17",
    name: "Klose K17 Striker-Fired 9mm",
    realWorldCounterpart: "Glock 17/19 Gen 5 / HK VP9",
    category: "Sidearms",
    image: "/assets/weapon_combat_pistol.jpg",
    caliber: "9x19mm Parabellum",
    fireRate: "Semi-Auto (420 RPM)",
    damage: 65,
    accuracy: 84,
    range: 52,
    handling: 94,
    inventoryMode: "Concealed Holster / Handbag Stowage",
    penetration: { drywall: "5 cm", sheetMetal: "1.2 mm", glass: "1-Hit Fracture" },
    lore: "Lucia's signature concealed carry sidearm seen in the official convenience store robbery. Lightweight polymer frame with ultra-fast draw speed."
  },
  {
    id: "wep_carbine_mk2",
    name: "Tactical Service Carbine MK II",
    realWorldCounterpart: "Colt M4A1 / Daniel Defense MK18",
    category: "Assault Rifles",
    image: "/assets/weapon_carbine_rifle.jpg",
    caliber: "5.56x45mm NATO",
    fireRate: "750 RPM",
    damage: 82,
    accuracy: 88,
    range: 85,
    handling: 74,
    inventoryMode: "Single Long Weapon Sling / Vehicle Trunk Stash",
    penetration: { drywall: "12 cm (Passthrough)", sheetMetal: "4.5 mm", glass: "1 Hit Shatter" },
    lore: "Standard issue for Vice City tactical task forces and cartel enforcers. Modular top rail accommodates holographic red-dot and variable zoom optics."
  },
  {
    id: "wep_heavy_revolver",
    name: "Enforcer .44 Heavy Magnum",
    realWorldCounterpart: "Smith & Wesson Model 29 / 629 .44",
    category: "Sidearms",
    image: "/assets/weapon_heavy_revolver.jpg",
    caliber: ".44 Magnum",
    fireRate: "Double Action (180 RPM)",
    damage: 96,
    accuracy: 90,
    range: 78,
    handling: 58,
    inventoryMode: "Chest Rig Holster",
    penetration: { drywall: "18 cm (Passthrough)", sheetMetal: "6.0 mm", glass: "Instant Shatter" },
    lore: "Brutal stopping power in a polished nickel frame. Engineered to disable pursuing vehicle engine blocks with precise single shots."
  },
  {
    id: "wep_tactical_shotgun",
    name: "Leonida Police Tactical 12-Gauge",
    realWorldCounterpart: "Mossberg 590 Shockwave / Remington 870",
    category: "Shotguns",
    image: "/assets/weapon_tactical_shotgun.jpg",
    caliber: "12-Gauge Buckshot",
    fireRate: "Pump-Action (95 RPM)",
    damage: 98,
    accuracy: 45,
    range: 35,
    handling: 68,
    inventoryMode: "Duffel Bag / Vehicle Trunk Locker",
    penetration: { drywall: "8 cm Blast Area", sheetMetal: "2.0 mm", glass: "Complete Demolition" },
    lore: "Devastating close-quarters breaching firearm. Destroys hinges and door locks in room-clearing operations across Vice City motels."
  },
  {
    id: "wep_heavy_rpg",
    name: "AT-4 Heavy Ordnance Rocket Launcher",
    realWorldCounterpart: "Saab Bofors M136 AT4 Anti-Armor",
    category: "Heavy Ordnance",
    image: "/assets/weapon_heavy_rpg.jpg",
    caliber: "84mm High-Explosive Anti-Tank",
    fireRate: "Single Shot (Reload 4.2s)",
    damage: 100,
    accuracy: 75,
    range: 95,
    handling: 32,
    inventoryMode: "Trunk Weapon Stash Only (Heavy Loadout)",
    penetration: { drywall: "Catastrophic Blast", sheetMetal: "Heavy Armor Breach", glass: "Vaporized" },
    lore: "Military-grade shoulder-fired ordinance capable of destroying armored SWAT BearCats and pursuit helicopters in a single concussion blast."
  }
];

export const CHARACTERS: Character[] = [
  {
    id: "char_lucia",
    name: "Lucia",
    role: "Lead Protagonist (Dual Duo)",
    actor: "Manni L. Perez (Heavily Reported)",
    faction: "Lucia & Jason Syndicate (Independent)",
    image: "/assets/lucia_character_portrait.jpg",
    status: "Active / On Parole (Leonida Dept. of Corrections)",
    origin: "Leonida State Penitentiary / Vice City",
    specialty: "Tactical Infiltration, Dual Wielding, Precision CQB, Close-Quarter Intimidation",
    bio: "Official Rockstar Games Overview: Vice City, USA. Jason and Lucia have always known the deck is stacked against them. Hardened by incarceration in Leonida State Penitentiary, Lucia is a calculated, streetwise tactician whose bond with Jason anchors the game's cooperative criminal heists. When an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive.",
    traits: ["Calculated Criminal Mind", "High Combat Reflexes", "Fast Lockpicking & Intimidation", "Ankle Monitor Parole Limitations"]
  },
  {
    id: "char_jason",
    name: "Jason",
    role: "Lead Protagonist (Dual Duo)",
    actor: "Gregory Connors (Reported)",
    faction: "Lucia & Jason Syndicate (Independent)",
    image: "/assets/jason_character_portrait.jpg",
    status: "Active / Operating Underground",
    origin: "Kelly County / Vice City Marina",
    specialty: "High-Speed Pursuit Evasion, Heavy Arms, Muscle Mechanics, Trunk Stash Access",
    bio: "Official Rockstar Games Overview: Lucia's devoted criminal partner and romantic anchor. A pragmatic combat specialist, expert getaway driver, and military-tactical operative. Jason operates out of coastal marinas and rural chop shops, bringing muscle, mechanical prowess, and heavy firepower to their coordinated strikes. Bound by mutual survival and deep trust ('Trust? - Trust'), he stands at the center of the Leonida criminal conspiracy.",
    traits: ["Master Getaway Driver", "Heavy Weapon Stability", "Syndicate Street Contacts", "Trunk Armory Specialist"]
  },
  {
    id: "char_stefanie",
    name: "Stefanie G.",
    role: "Correctional Counselor",
    actor: "Rockstar Official Performer",
    faction: "Leonida Department of Corrections",
    image: "/assets/stefanie_counselor_portrait.jpg",
    status: "State Official",
    origin: "Leonida State Penitentiary",
    specialty: "Institutional Parole Assessment, Psychological Profiling",
    bio: "Lucia's correctional counselor at Leonida State Penitentiary seen in Trailer 1's opening dialogue ('Lucia, do you know why you're here? - Bad luck, I guess'). Represents the institutional surveillance apparatus and mandatory parole conditions that Lucia must continually evade.",
    traits: ["State Parole Power", "Psychological Insight", "Legal Oversight"]
  },
  {
    id: "char_cal_hampton",
    name: "Cal Hampton",
    role: "Underground Broker & Smuggler",
    actor: "Supporting Cast",
    faction: "Keys Marina Smugglers",
    image: "/assets/cal_hampton_portrait.jpg",
    status: "Active / Smuggling Contact",
    origin: "The Vice Keys Archipelago",
    specialty: "Maritime Logistics, Speedboat Procurement, Contraband Routing",
    bio: "A weathered Keys fisherman and deepwater smuggler who supplies Jason and Lucia with offshore drop coordinates, modified boat engines, and safehouse access across the southern archipelago.",
    traits: ["Offshore Waterways Master", "Contraband Brokerage", "Maritime Radar Jammers"]
  },
  {
    id: "char_raul",
    name: "Raul 'El Martillo'",
    role: "Port Gellhorn Syndicate Enforcer",
    actor: "Supporting Cast",
    faction: "San Chiancos Cartel",
    image: "/assets/raul_character_portrait.jpg",
    status: "Hostile / Transactional",
    origin: "Port Gellhorn Industrial Docks",
    specialty: "Stolen Luxury Vehicles, Heavy Ordnance Smuggling, Chop Shops",
    bio: "A ruthless Port Gellhorn cartel boss running industrial container chop shops and illicit weapon shipments, setting up volatile contract hits and high-value vehicle recovery heists.",
    traits: ["Heavy Weapon Supplier", "Chop Shop Empire", "Brutal Negotiator"]
  }
];

export const MISSIONS: Mission[] = [
  {
    id: "mis_bad_luck",
    title: "1. Bad Luck, I Guess (Prologue)",
    protagonists: "Lucia",
    district: "Leonida State Penitentiary",
    image: "/assets/stefanie_counselor_portrait.jpg",
    difficulty: "Story Prologue (1/10)",
    payout: "$0 (Parole Release)",
    summary: "Lucia's correctional interview with Stefanie, followed by her parole processing, mandatory ankle monitor fitting, and emotional reunion with Jason outside the prison gates.",
    goldMedal: ["Complete within 06:30", "Zero verbal hesitation", "Flawless contraband concealment"],
    tactics: "Introduces conversational dialogue choices and sets the emotional stakes of Lucia's parole conditions."
  },
  {
    id: "mis_trust_firepower",
    title: "2. Trust & Firepower (Convenience Store Holdup)",
    protagonists: "Lucia & Jason (Dual Switch)",
    district: "Kelly County / North Vice Suburbs",
    image: "/assets/mission_convenience_heist.jpg",
    difficulty: "Early Heist (3/10)",
    payout: "$3,450 + Contraband",
    summary: "Lucia and Jason pull off a synchronized late-night holdup of a rural 24/7 store. Lucia intimidates the clerk and customers while Jason bags cash from the register and safe.",
    goldMedal: ["Bag all cash in under 90s", "Subdue witness before 911 call", "Escape VCPD in Bravado Gauntlet without paint damage"],
    tactics: "Introduces the Contextual Partner Wheel and vehicle trunk weapon stowage."
  },
  {
    id: "mis_bank_vault",
    title: "3. The Bank of Leonida Vault Breach",
    protagonists: "Lucia & Jason",
    district: "Downtown Vice City Financial Core",
    image: "/assets/mission_bank_vault.jpg",
    difficulty: "Major Score Heist (8/10)",
    payout: "$1,850,000",
    summary: "A high-stakes tactical heist targeting the subterranean safe deposit depository of the Bank of Leonida. Features thermite vault drilling, hostage containment, and a heavy SWAT shootout.",
    goldMedal: ["Drill vault door without overheating", "Zero civilian casualties", "SWAT pursuit lost in subway tunnel within 3 mins"],
    tactics: "Requires physical duffel bag transport and switching to heavy tactical carbines stowed in the trunk."
  },
  {
    id: "mis_keys_intercept",
    title: "4. Keys Midnight Contraband Intercept",
    protagonists: "Jason & Lucia",
    district: "The Vice Keys & International Waters",
    image: "/assets/mission_keys_intercept.jpg",
    difficulty: "Maritime Chase (6/10)",
    payout: "$420,000",
    summary: "Hijacking a cartel contraband shipment across the choppy Florida Straits using offshore speedboats while dodging Coast Guard radar helicopters.",
    goldMedal: ["Board enemy speedboat at speed", "Shoot down pursuit helicopter engine", "Reach marina safehouse before sunrise"],
    tactics: "Utilizes dynamic water wave displacement and passenger precision drive-by shooting."
  }
];

export const MAP_ZONES: MapZone[] = [
  {
    id: "zone_downtown",
    name: "Vice City Downtown & Financial District",
    district: "Vice Metro",
    x: 32,
    y: 42,
    color: "cyan",
    securityLevel: "High (Vice City Police Department)",
    enterableStructures: "32 Verified Buildings",
    transit: "VCET Elevated Heavy Rail Station",
    lore: "The economic nerve center of Leonida. Towering corporate headquarters, bank vaults, and high-density traffic corridors."
  },
  {
    id: "zone_ocean_drive",
    name: "Vice Beach & Ocean Drive",
    district: "Vice Beach",
    x: 64,
    y: 38,
    color: "rose",
    securityLevel: "Moderate (Tourist Beach Patrol)",
    enterableStructures: "48 Hotels, Nightclubs & Diners",
    transit: "Beach Boardwalk Trolley & Supercar Staging",
    lore: "World-famous Art Deco hotels, pastel neon palm avenues, luxury boutiques, and high-velocity street racing."
  },
  {
    id: "zone_port_gellhorn",
    name: "Port Gellhorn Industrial Hub",
    district: "Western Leonida",
    x: 18,
    y: 65,
    color: "amber",
    securityLevel: "Low to Moderate (Private Security)",
    enterableStructures: "19 Warehouses & Chop Shops",
    transit: "Freight Rail & Commercial Shipping Dock",
    lore: "Heavy cargo terminals, illicit chop shops, dirt speedway, and contraband staging facilities."
  },
  {
    id: "zone_grassrivers",
    name: "Grassrivers Everglades Wildlife Reserve",
    district: "Central Wetlands",
    x: 48,
    y: 72,
    color: "green",
    securityLevel: "Unpatrolled Wildlife Zone",
    enterableStructures: "7 Shacks & Ranger Outposts",
    transit: "Fan-Powered Airboat Waterways Only",
    lore: "Dangerous swamplands populated by apex predators, illegal moonshine stills, and hidden aircraft crash sites."
  },
  {
    id: "zone_vice_keys",
    name: "The Vice Keys Archipelago",
    district: "Southern Islands",
    x: 78,
    y: 84,
    color: "cyan",
    securityLevel: "Coast Guard Maritime Patrol",
    enterableStructures: "14 Marinas & Bungalows",
    transit: "Overseas Highway & Deepwater Marinas",
    lore: "Island chain linked by vulnerable ocean-spanning bridges. Staging ground for high-speed offshore contraband smuggling."
  }
];

export const CATEGORIES: CategoryHub[] = [
  {
    id: "cat_weapons",
    rank: 1,
    name: "Weapons & Tactical Armory",
    shortName: "Weapons",
    group: "Combat & Mechanics",
    monthlyViews: "4.8M+",
    searchVolume: "960K/mo",
    tagline: "Weapon Models, Real-World Names & Ballistics",
    description: "Exhaustive armory catalog with high-res pictures, caliber specifications, and material penetration curves.",
    link: "/weapons",
    badgeColor: "rose",
    tags: ["Carbine MK II", "Combat Pistol 9mm", "Heavy Revolver", "Breaching Shotgun"]
  },
  {
    id: "cat_characters",
    rank: 2,
    name: "Characters & Cast Dossiers",
    shortName: "Characters",
    group: "Narrative & Lore",
    monthlyViews: "4.4M+",
    searchVolume: "880K/mo",
    tagline: "Lucia, Jason & Supporting Cast Portraits",
    description: "Character portraits, voice actor investigations, faction alignments, and psychological profiles.",
    link: "/characters",
    badgeColor: "cyan",
    tags: ["Lucia Lead", "Jason Heist Lead", "Stefanie Counselor", "Underworld"]
  },
  {
    id: "cat_missions",
    rank: 3,
    name: "Missions & Story Walkthrough",
    shortName: "Missions",
    group: "Guides & Strategy",
    monthlyViews: "4.1M+",
    searchVolume: "790K/mo",
    tagline: "Mission Details, Objectives & Heist Payouts",
    description: "Story mission briefings, vault heists, convenience store holdups, gold medal objectives, and tactics.",
    link: "/missions",
    badgeColor: "amber",
    tags: ["Bank Vault Breach", "Convenience Holdup", "Keys Intercept", "Gold Medals"]
  },
  {
    id: "cat_map",
    rank: 4,
    name: "Leonida Map & Cartography",
    shortName: "Map",
    group: "World & Exploration",
    monthlyViews: "4.2M+",
    searchVolume: "820K/mo",
    tagline: "130+ km² Leonida Scale & Enterable Districts",
    description: "Detailed cartography covering Vice City Downtown, Ocean Beach, Port Gellhorn, and the Vice Keys.",
    link: "/map",
    badgeColor: "cyan",
    tags: ["Vice City", "Port Gellhorn", "Enterable Interiors", "Everglades"]
  },
  {
    id: "cat_financial",
    rank: 5,
    name: "Take-Two Financial & Market Desk",
    shortName: "Financial",
    group: "Commercial & Launch",
    monthlyViews: "1.8M+",
    searchVolume: "290K/mo",
    tagline: "$8.0B Net Bookings Guidance & SEC Filings",
    description: "Wall Street intelligence desk for Take-Two Interactive (NASDAQ: TTWO) with revenue forecasts and SEC disclosures.",
    link: "/financial",
    badgeColor: "cyan",
    tags: ["NASDAQ: TTWO", "$8B Guidance", "SEC EDGAR 8-K", "38M Units"]
  },
  {
    id: "cat_news",
    rank: 6,
    name: "Verified News & Investigation Desk",
    shortName: "News",
    group: "Journalism",
    monthlyViews: "3.5M+",
    searchVolume: "650K/mo",
    tagline: "Fact-Checked Announcements & Release Intel",
    description: "Calm, verified reporting distinguishing official disclosures from community speculation.",
    link: "/news",
    badgeColor: "rose",
    tags: ["Release Window", "Take-Two Earnings", "Trailer Breakdown", "PS5 Pro"]
  }
];

export const ARTICLES: Article[] = articlesJson as Article[];
