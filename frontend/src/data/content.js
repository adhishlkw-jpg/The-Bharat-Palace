// Central content, image mappings, and constants for The Bharat Palace site.

export const CONTACT = {
  phone: "+916386243721",
  phoneDisplay: "+91 63862 43721",
  whatsapp: "https://wa.me/916386243721",
  maps: "https://maps.app.goo.gl/smWcdrpAGM6E4bwx9",
  address: "Arya Nagar, Sitapur",
  addressFull: "Arya Nagar, Sitapur, Uttar Pradesh 261001",
  hours: "Open 24 Hours",
  capacity: "Up to 400 Guests",
};

// Owner-provided venue photos
export const OWNER = {
  exterior:
    "https://customer-assets.emergentagent.com/job_palace-events-3/artifacts/67up9xhf_IMG_3950.jpg",
  weddingStage:
    "https://customer-assets.emergentagent.com/job_palace-events-3/artifacts/t79umttl_IMG_3953.jpg",
  lobby:
    "https://customer-assets.emergentagent.com/job_palace-events-3/artifacts/6vzog92z_IMG_3955.jpg",
  // Swapped mapping to match what user expects: engagement card shows the purple welcome board, birthday card shows the jungle theme
  engagement:
    "https://customer-assets.emergentagent.com/job_palace-events-3/artifacts/kknz0pvf_IMG_3954.jpg",
  birthday:
    "https://customer-assets.emergentagent.com/job_palace-events-3/artifacts/5x8x8917_IMG_3951.jpg",
};

// Supplementary luxury imagery for gallery variety — verified stable Pexels CDN URLs
export const STOCK = {
  corporate:
    "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1600",
  reception:
    "https://images.pexels.com/photos/20499528/pexels-photo-20499528.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // Elegant baby shower — floral arch with 'Welcome Baby' sign, pastel table settings
  babyShower:
    "https://images.pexels.com/photos/32573161/pexels-photo-32573161.jpeg?auto=compress&cs=tinysrgb&w=1600",
  family:
    "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1600",
  foodSetup:
    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // Indian mandap decor with flowers & chandeliers
  decoration:
    "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=1600",
  // Vibrant Indian wedding stage with golden columns & colorful flowers — anniversary vibe
  anniversary:
    "https://images.pexels.com/photos/14395559/pexels-photo-14395559.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Facilities", href: "#facilities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const HERO_SLIDES = [
  {
    image: OWNER.exterior,
    caption: "The Bharat Palace — Sitapur",
  },
  {
    image: OWNER.weddingStage,
    caption: "Wedding Stage & Mandap",
  },
  {
    image: OWNER.lobby,
    caption: "Grand Chandelier Foyer",
  },
];

export const FACILITIES = [
  { icon: "Crown", title: "Spacious Hall", desc: "Up to 400 guests seated with grand chandeliers." },
  { icon: "Sparkles", title: "Elegant Décor", desc: "Curated floral & lighting arrangements." },
  { icon: "Heart", title: "Premium Hospitality", desc: "Warm, attentive service for every guest." },
  { icon: "BedDouble", title: "Guest Rooms", desc: "On-site rooms for family & travelling guests." },
  { icon: "Car", title: "Ample Parking", desc: "Generous vehicle capacity on premises." },
  { icon: "UtensilsCrossed", title: "Food Arrangement", desc: "Dedicated setup area for caterers & buffets." },
  { icon: "Droplets", title: "Clean Washrooms", desc: "Sparkling, well-maintained facilities." },
  { icon: "Headphones", title: "Event Support", desc: "Professional coordination end-to-end." },
];

export const EVENT_CATEGORIES = [
  { title: "Weddings", image: OWNER.weddingStage, size: "large" },
  { title: "Reception", image: STOCK.reception, size: "medium" },
  { title: "Birthday Party", image: OWNER.birthday, size: "medium" },
  { title: "Engagement", image: OWNER.engagement, size: "medium" },
  { title: "Anniversary", image: STOCK.anniversary, size: "medium" },
  { title: "Corporate Event", image: STOCK.corporate, size: "large" },
  { title: "Baby Shower", image: STOCK.babyShower, size: "medium" },
  { title: "Family Gathering", image: STOCK.family, size: "medium" },
];

export const GALLERY_ITEMS = [
  { src: OWNER.weddingStage, category: "Stage", tags: ["Weddings", "Stage", "Decoration"] },
  { src: OWNER.engagement, category: "Decoration", tags: ["Decoration"] },
  { src: OWNER.lobby, category: "Hall", tags: ["Hall"] },
  { src: OWNER.exterior, category: "Exterior", tags: ["Exterior"] },
  { src: OWNER.birthday, category: "Stage", tags: ["Stage", "Decoration"] },
  { src: STOCK.reception, category: "Weddings", tags: ["Weddings"] },
  { src: STOCK.foodSetup, category: "Food Setup", tags: ["Food Setup"] },
  { src: STOCK.decoration, category: "Decoration", tags: ["Decoration"] },
  { src: STOCK.corporate, category: "Hall", tags: ["Hall"] },
];

export const GALLERY_FILTERS = [
  "All",
  "Weddings",
  "Hall",
  "Decoration",
  "Food Setup",
  "Stage",
  "Exterior",
];

export const REVIEWS = [
  {
    name: "Dr. Arpita Baijal",
    rating: 5,
    text: "Amazing banquet experience! Beautiful ambience, delicious food, excellent service, and very cooperative staff. Everything was perfectly managed and our guests loved the décor and hospitality. Highly recommended for weddings, birthdays, and celebrations.",
    age: "2 months ago",
  },
  {
    name: "Mohd Azad",
    rating: 5,
    text: "The service and ambience were good, and the place is beautiful as well. It is a suitable and spacious venue for weddings or events with around 400 people. Overall, a very good experience.",
    age: "4 months ago",
  },
  {
    name: "Dr. Abhinav Rastogi",
    rating: 5,
    text: "Good experience, well kept hall with clean washrooms and sufficient space outside for food arrangements. There are rooms available. Keep up the good work!!",
    age: "6 months ago",
  },
];

export const STATS = [
  { value: 146, suffix: "+", label: "Google Reviews" },
  { value: 24, suffix: "/7", label: "Open" },
  { value: 400, suffix: "+", label: "Guest Capacity" },
  { value: 100, suffix: "+", label: "Events Hosted" },
];

export const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Corporate Event",
  "Baby Shower",
  "Family Gathering",
  "Other",
];
