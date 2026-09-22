import { GarmentCard, QuoteItem, SourceReference } from '../types';

export const NATIONAL_TEXTILE_STATS = {
  totalWasteKtpa: 7073, // 7.073 million tonnes
  totalWasteMlnTonnes: 7.073,
  
  preConsumerKtpa: 2973, // 42%
  preConsumerPct: 42,
  
  postConsumerKtpa: 4100, // 58%
  postConsumerPct: 58,
  
  // Post-consumer collection
  ulbKtpa: 2725, // 66%
  ulbPct: 66,
  ngoInformalKtpa: 1375, // 34%
  ngoInformalPct: 34,
  
  // Post-consumer outcomes
  recoveryKtpa: 2255, // 55%
  recoveryPct: 55,
  disposalKtpa: 1845, // 45%
  disposalPct: 45,
  
  // Pre-consumer outcomes comparison
  preConsumerUpcyclingPct: 58,
  preConsumerDowncyclingPct: 39,
  preConsumerReusePct: 1,
  preConsumerDisposalPct: 2, // Only ~2% to landfill/incineration!
};

export const GLOBAL_CONTEXT = {
  globalWasteMlnTonnes: 92,
  ghgContributionRange: '2% – 8%',
  waterUseTrillionLitres: 215,
  oceanMicroplasticsPct: 9,
  productionDoubledYears: '2000 – 2015',
  garmentLifeReductionPct: 36,
};

export const REASON_OPTIONS = [
  {
    id: 'fit' as const,
    label: "It doesn't fit anymore",
    subtext: 'Changes in body shape, shrinkage, or sizing variance',
    insight: 'Clothing fit is one of the highest drivers of premature closet retirement. According to e-commerce and fit studies (e.g. ModCloth / RentTheRunway research), over 35% of dissatisfaction stems from dimensional variance rather than fabric decay.',
    tag: 'Physical Utility'
  },
  {
    id: 'damaged' as const,
    label: "It's damaged or worn out",
    subtext: 'Underarm stains, frayed collar, pilling, or torn seams',
    insight: 'Physical damage often dictates its subsequent gateway: severely torn garments rarely enter secondhand wear and instead get diverted toward mechanical shredding, wiping rags (pocha), or open landfill bins.',
    tag: 'Material Integrity'
  },
  {
    id: 'bored' as const,
    label: "I'm bored of wearing it",
    subtext: 'Closet fatigue, impulse purchases, or novelty loss',
    insight: 'The average number of times a garment is worn before being retired decreased by 36% between 2000 and 2015 (UNEP). The garment is physically intact, making it an ideal candidate for reuse if channeled properly.',
    tag: 'Psychological Lifespan'
  },
  {
    id: 'style' as const,
    label: "It's no longer my style",
    subtext: 'Aesthetic evolution, trend cycles, or lifestyle change',
    insight: 'Style mismatch accounts for vast quantities of "closet orphans"—pristine garments that hang unworn for 12–24 months before being cleared out in bulk during seasonal wardrobe purges.',
    tag: 'Aesthetic Shelf-life'
  }
];

export const DISPOSAL_OPTIONS = [
  {
    id: 'donate' as const,
    label: 'Donate',
    subtext: 'Charity bin, domestic helper, orphanage, or collection drive',
    realWorldReality: 'Donated garments enter the NGO/charity or domestic secondary ecosystem. However, if unwearable or oversized, recipient organisations frequently downcycle or discard up to 40% of donations due to sorting and distribution costs.',
    channel: 'NGOs & Social Circles',
    symbol: '🤝'
  },
  {
    id: 'give_sell' as const,
    label: 'Sell or Pass Along',
    subtext: 'Thrift platform, sibling/cousin hand-me-down, or flea market',
    realWorldReality: 'Extends direct reuse by transferring ownership. While this retains 100% of the garment value initially, the eventual subsequent owner will still face the same end-of-life disposal decision later.',
    channel: 'Secondary Wardrobe & Resale',
    symbol: '🔄'
  },
  {
    id: 'repurpose' as const,
    label: 'Repurpose Domestically',
    subtext: 'Convert into pocha (floor mop), kitchen rag, tote bag, or pet cushion',
    realWorldReality: 'A deeply entrenched cultural practice across Indian households. Repurposing prolongs utility and displaces new virgin cleaning wipes, but ultimately ends in municipal waste when fibers degrade beyond use.',
    channel: 'Domestic Downcycling',
    symbol: '✂️'
  },
  {
    id: 'discard' as const,
    label: 'Throw in the Bin',
    subtext: 'Mixed municipal waste bin picked up by municipal sanitation trucks',
    realWorldReality: 'Enters the Urban Local Body (ULB) waste stream directly. Mixed with wet food scraps and municipal debris, garments become soiled and contaminated, drastically reducing recovery potential and heading directly to dumpsites.',
    channel: 'Urban Local Bodies (ULB)',
    symbol: '🗑️'
  }
];

export const SORTING_GARMENTS: GarmentCard[] = [
  {
    id: 'g1',
    name: '100% Cotton Graphic Tee',
    description: 'Medium wear, faded print, intact neckline, minor underarm discolouration.',
    composition: '100% Single Jersey Cotton',
    condition: 'Good structural condition, cosmetic staining',
    color: 'Navy Blue',
    recommendedCategory: 'downcycle',
    explanation: 'While monomaterial cotton is prime for fibre recovery, localized dye and grease stains often fail secondhand resale standards. It is ideal for mechanical garnetting into wiping cloth or acoustic automotive felt.',
    challenge: 'Monomaterial is easy to shred, but cosmetic blemishes prevent peer-to-peer secondhand reuse.'
  },
  {
    id: 'g2',
    name: 'Synthetic Poly-Blend Fast Fashion Top',
    description: 'Polyester-elastane blend with sequin embellishments and synthetic care tag.',
    composition: '88% Polyester, 12% Elastane + Metallic Sequins',
    condition: 'Worn twice, looks brand new',
    color: 'Silver Grey',
    recommendedCategory: 'reuse',
    explanation: 'Because it is pristine, direct reuse (thrift / donation) is the ONLY viable circular path. Mixed elastane and plastic embellishments cannot be mechanically shredded or melted down with current industrial recycling machinery.',
    challenge: 'Multi-material elastane blends are practically non-recyclable in current Indian recycling mills; reuse is its only sanctuary before landfill.'
  },
  {
    id: 'g3',
    name: 'Sturdy Denim Work Jeans',
    description: 'Heavyweight cotton twill denim, worn hems, functioning brass zipper and rivets.',
    composition: '98% Cotton, 2% Spandex, Brass Rivets',
    condition: 'Structurally very solid, scuffed pocket edges',
    color: 'Indigo Blue',
    recommendedCategory: 'reuse',
    explanation: 'Durable denim retains immense commercial value in regional secondary clothing markets (e.g. roadside markets in Delhi, Kanpur, and Ahmedabad) where durable work trousers are in high demand.',
    challenge: 'Must be manually disassembled to remove rivets and zippers if ever sent for shredding.'
  },
  {
    id: 'g4',
    name: 'Acrylic-Wool Blend Knitted Jumper',
    description: 'Pilled texture, stretched cuffs, unravelled hem, synthetic label.',
    composition: '70% Acrylic, 30% Regenerated Wool',
    condition: 'Heavily pilled and distorted',
    color: 'Oatmeal Heather',
    recommendedCategory: 'recycle',
    explanation: 'Panipat’s world-famous shoddy mills specialize in tearing knitwear back into recycled yarn for blankets and carpets. Acrylic fibers provide bulk while wool contributes warmth.',
    challenge: 'Requires skilled manual colour grading (dhabba sorting) so the fibers can be spun into new yarn without dyeing.'
  },
  {
    id: 'g5',
    name: 'Heavily Soiled Kitchen Apron & Rag',
    description: 'Torn edges, oil-soaked, food residue, repeatedly washed.',
    composition: '100% Coarse Cotton',
    condition: 'Completely degraded fibers, biological contamination',
    color: 'Stained Cream',
    recommendedCategory: 'discard',
    explanation: 'When textile fibers reach maximum structural fatigue or become heavily contaminated with oils/organic matter, municipal composting or regulated sanitary landfill/incineration becomes the only realistic path.',
    challenge: 'Contaminated textiles disrupt garnetting blades and create mold in recycling warehouses.'
  }
];

export const PANIPAT_STEPS = [
  {
    step: '01',
    title: 'SORT',
    name: 'Dhabba Manual Sorting',
    desc: 'Bales of post-consumer clothes arriving from across India and port clearances are hand-sorted by experienced sorters based on fibre type, shade, and color tone.',
    detail: 'No water or chemical dyes are used later; the finished yarn’s colour is entirely determined by this initial human sorting accuracy.'
  },
  {
    step: '02',
    title: 'SHRED',
    name: 'Garnetting & De-stitching',
    desc: 'Buttons, zippers, and stiff collars are cut off by hand. The deconstructed fabric panels are fed into spiked rotary drums (garnett machines) that tear fabric into fluff.',
    detail: 'Known historically as "shoddy", this process produces raw, unspun fibrous clouds from previously tightly woven garments.'
  },
  {
    step: '03',
    title: 'FIBRE',
    name: 'Carrier Fibre Blending',
    desc: 'Because mechanical shredding shortens the cotton or wool staple length, virgin polyester or longer recycled fibres are blended in (typically 15%–30%) to restore tensile strength.',
    detail: 'This hybrid fleece is carded into parallel webs, preparing the shortened fibers to endure industrial spinning tensions.'
  },
  {
    step: '04',
    title: 'YARN',
    name: 'Open-End Rotor Spinning',
    desc: 'The carded slivers are fed through high-speed open-end rotor frames, twisting the recovered fibers into coarse count (6s to 12s) recycled yarn packages.',
    detail: 'Panipat clusters produce hundreds of metric tonnes of recycled yarn daily, supplying domestic and export weaving mills.'
  },
  {
    step: '05',
    title: 'NEW PRODUCT',
    name: 'Relief Blankets & Furnishings',
    desc: 'The recycled yarn is woven into warm relief blankets (frequently deployed in global disaster responses), floor dhurries, prayer mats, and industrial padding.',
    detail: 'A garment once considered discarded in an urban apartment finds renewed physical life in a completely different geography and form.'
  }
];

export const OUTCOME_DEFINITIONS = [
  {
    category: 'reuse' as const,
    title: 'Reuse',
    colorHex: '#65785F',
    oneLiner: 'The garment remains clothing, worn by another human being.',
    detail: 'Extends the product’s operational life without breaking down its material structure. Includes thrift shops, peer-to-peer exchanges, community clothing swaps, charity giveaways, and informal rural secondhand markets.',
    environmentalImpact: 'Highest circular value: zero energy needed for fibre re-processing or remanufacturing.',
    nationalScale: 'Vibrant domestic hand-me-down culture, but constrained by logistical sorting costs and social taboos around pre-worn clothes.'
  },
  {
    category: 'recycle' as const,
    title: 'Recycle (Fibre-to-Fibre)',
    colorHex: '#637A83',
    oneLiner: 'Material or fibre is recovered to enter a new spinning or production cycle.',
    detail: 'Garments are deconstructed, garnetted into raw staple fibers, carded, and re-spun into yarn. Mostly mechanical recycling; chemical recycling for pure synthetic or cellulose separation is still emerging at pilot scale.',
    environmentalImpact: 'Saves virgin cotton irrigation and petrochemical synthesis, though mechanically shortened fibers often require virgin blending.',
    nationalScale: 'World-renowned hubs like Panipat (Haryana), Tirupur (Tamil Nadu), and Surat (Gujarat).'
  },
  {
    category: 'downcycle' as const,
    title: 'Downcycle',
    colorHex: '#9A7A52',
    oneLiner: 'The textile is transformed into a lower-value non-apparel product.',
    detail: 'Used clothes cut into machinery cleaning rags (pocha), felt padding, mattress batting, carpet underlays, sound-dampening panels for vehicles, and geotextiles. Cannot be returned to wearable clothing.',
    environmentalImpact: 'Diverts solid mass from municipal dumps and delays disposal, but constitutes an irreversible downgrade in economic and aesthetic value.',
    nationalScale: 'Extremely pervasive: tens of thousands of urban informal workers collect rags for commercial transport, garages, and factories.'
  },
  {
    category: 'discard' as const,
    title: 'Disposal',
    colorHex: '#A64B32',
    oneLiner: 'Incineration or unmanaged open landfill dumping.',
    detail: 'When textiles are mixed with municipal wet waste, contaminated, or incinerated for low-efficiency thermal recovery. Synthetic polyester takes up to 200+ years to decompose, leaching microplastics and toxic dyes into groundwater.',
    environmentalImpact: 'Total loss of material and embodied water/carbon; generates potent landfill methane and air emissions.',
    nationalScale: 'Accounts for ~45% of post-consumer textile mass in India (1,845 KTPA) according to the 2026 Ministry of Textiles report.'
  }
];

export const QUALITATIVE_QUOTES: QuoteItem[] = [
  {
    id: 'q1',
    quote: "I put three large bags into a clothes collection bin outside a mall in Bengaluru. I felt an immediate relief, but honestly? I have no idea if someone wore them or if they got hauled away with municipal trash.",
    author: "Ananya S.",
    age: 23,
    city: "Bengaluru",
    theme: "uncertainty"
  },
  {
    id: 'q2',
    quote: "My mother has an unspoken rule: no cotton T-shirt ever leaves this house until it has served at least two years as a pocha (floor mop) and three months as a dusting cloth for the scooty.",
    author: "Rohan M.",
    age: 26,
    city: "Pune",
    theme: "convenience"
  },
  {
    id: 'q3',
    quote: "I bought a concert tee four years ago. It has holes along the side seams and the graphic is cracked, but I can't bring myself to throw it out. It lives in the bottom drawer like an emotional artifact.",
    author: "Divya K.",
    age: 21,
    city: "Delhi NCR",
    theme: "attachment"
  },
  {
    id: 'q4',
    quote: "I gave four cartons of almost-new tops to our domestic help. A week later she told me gently that the styles were too Western and sleeveless for her daughters to wear in their neighborhood. I hadn't even stopped to consider that.",
    author: "Meera T.",
    age: 29,
    city: "Mumbai",
    theme: "donation"
  },
  {
    id: 'q5',
    quote: "Thrifting apps in India are great in theory, but when you spend 40 minutes photographing, measuring, and chatting with buyers just to sell a Zara top for ₹300, it's just so much easier to give it away to whoever knocks first.",
    author: "Kavya P.",
    age: 24,
    city: "Hyderabad",
    theme: "convenience"
  },
  {
    id: 'q6',
    quote: "Whenever I see clothing bins labeled '100% Recycled', I get skeptical. Who is paying for the sorting labor? In our college hostel, people leave piles in common rooms that end up swept out by cleaners.",
    author: "Arjun N.",
    age: 22,
    city: "Chennai",
    theme: "uncertainty"
  }
];

export const SOURCES_LIST: SourceReference[] = [
  {
    id: 'mot_2026',
    title: 'Mapping of Textile Waste Value Chain in India',
    organization: 'Ministry of Textiles, Government of India',
    year: '2026',
    url: 'https://www.texmin.gov.in/static/uploads/2026/03/407c2f186a2044a4497c9c9803d16a2c.pdf',
    role: 'Primary quantitative backbone establishing national waste generation (7,073 KTPA), pre- vs post-consumer split (42% / 58%), collection routes (66% ULB / 34% informal), and mapped outcomes (55% recovery / 45% disposal).',
    limitations: 'Macro-economic value chain model. National baseline figures represent annualized estimates across Indian urban and rural aggregated sectors.'
  },
  {
    id: 'unep_2023',
    title: 'Unsustainable Fashion and Textiles — Zero Waste Report',
    organization: 'United Nations Environment Programme (UNEP)',
    year: '2023',
    url: 'https://www.unep.org/ietc/news/statement/press-release-unsustainable-fashion-and-textiles-focus-international-day-zero-waste',
    role: 'Provides global comparative context: 92 million tonnes global textile waste/year, 2%–8% global GHG emissions, water consumption metrics, and declining garment wearing durations.',
    limitations: 'Global macro averages; individual country consumption and post-consumer habits vary widely.'
  },
  {
    id: 'fmc_2026',
    title: 'Panipat Textile Recycling & Sustainability Readiness Report',
    organization: 'Foundation for MSME Clusters (FMC)',
    year: '2026',
    url: 'https://fmc.org.in/panipat-textile-recycling-sustainability-readiness-report/',
    role: 'Empirical six-month cluster study documenting Panipat’s 100+ recycling MSMEs, garnetting mechanical operations, shoddy yarn spinning, and relief blanket production.',
    limitations: 'Specific to the industrial geography of Panipat (Haryana). Must NOT be treated as a universal representation for all Indian states.'
  },
  {
    id: 'ffg_2022',
    title: 'Wealth in Waste: India’s Potential to Bring Textile Waste Back into the Supply Chain',
    organization: 'Fashion for Good',
    year: '2022',
    url: 'https://www.fashionforgood.com/report/wealth-in-waste/',
    role: 'Provides supporting analysis on domestic recycling infrastructure, collection hurdles, and economic feasibility across Indian textile hubs.',
    limitations: 'Earlier snapshot from 2022. Figures cannot be combined into a simple continuous time series with the 2026 Ministry report due to differing methodological boundaries.'
  },
  {
    id: 'kaggle_reviews',
    title: 'Women’s E-Commerce Clothing Reviews Dataset',
    organization: 'Kaggle (CC0 Public Domain)',
    year: '2018',
    url: 'https://www.kaggle.com/datasets/nicapotato/womens-ecommerce-clothing-reviews',
    role: 'Contextual qualitative and quantitative reference on why garments fail to satisfy users (e.g., fit, fabric hand-feel, durability, quality).',
    limitations: 'Commercial retail dataset (23,486 reviews) from an international e-commerce site. Strictly used for garment sentiment context, NOT for Indian post-consumer waste claims.'
  }
];

export const SURVEY_FIELDS_SCHEMA = [
  { field: 'respondent_id', label: 'Respondent ID', desc: 'Anonymised unique identifier' },
  { field: 'age_group', label: 'Age Group', desc: 'Target demographic: 18–24, 25–30' },
  { field: 'city', label: 'City Tier / Location', desc: 'Urban Indian residence (Tier 1 / Tier 2)' },
  { field: 'purchase_frequency', label: 'Purchase Frequency', desc: 'How often new clothing items are bought' },
  { field: 'estimated_unworn_clothes', label: 'Unworn Clothes (%)', desc: 'Self-reported percentage of wardrobe unworn in past 6 months' },
  { field: 'reason_for_disuse', label: 'Primary Reason for Disuse', desc: 'Fit, cosmetic wear, trend fatigue, emotional mismatch' },
  { field: 'disposal_method', label: 'Preferred Disposal Method', desc: 'Donation, domestic rag (pocha), pass to friends, municipal bin' },
  { field: 'recycling_awareness', label: 'Recycling System Knowledge', desc: 'Awareness of mechanical shredding vs fiber recycling in India' },
  { field: 'knows_where_donations_go', label: 'Destination Transparency', desc: 'Confidence in knowing where donated garments ultimately land' },
  { field: 'open_response_afterlife', label: 'Qualitative Afterlife Thought', desc: 'Freeform reflection on what happens after parting with clothes' }
];
