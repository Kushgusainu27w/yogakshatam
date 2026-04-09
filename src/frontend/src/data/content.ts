export const siteConfig = {
  name: "Yogakshatam",
  teacherName: "Akshat",
  tagline: "Discover Inner Peace Through Mindful Movement",
  subtitle:
    "A sanctuary of stillness, strength, and self-discovery. Let each breath guide you home.",
  email: "akshat@yogakshatam.com",
  phone: "+91 98765 43210",
  location: "Mumbai, Maharashtra, India",
  instagram: "https://instagram.com/yogakshatam",
  facebook: "https://facebook.com/yogakshatam",
  youtube: "https://youtube.com/@yogakshatam",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Schedule", href: "#schedule" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "Walk the Path of Awareness",
  paragraphs: [
    "I am Akshat, a dedicated yoga practitioner and teacher with over a decade of immersive study across the traditional schools of Hatha, Vinyasa, and Yin yoga. My journey began in the foothills of the Himalayas and has since taken me across ashrams, studios, and open spaces.",
    "At Yogakshatam, every class is a conversation between breath and body — an invitation to slow down, listen deeply, and move with intention. Whether you are stepping onto the mat for the first time or deepening an existing practice, you are welcome here.",
    "My teaching philosophy centres on ahimsa (non-violence) and svadhyaya (self-study): honoring where your body is today while gently expanding its possibilities.",
  ],
  stats: [
    { value: "10+", label: "Years of Practice" },
    { value: "500+", label: "Students Guided" },
    { value: "12", label: "Yoga Styles" },
    { value: "3", label: "Countries Taught" },
  ],
};

export interface YogaClass {
  id: string;
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  description: string;
  schedule: string;
  image: string;
}

export const classes: YogaClass[] = [
  {
    id: "morning-flow",
    name: "Morning Flow",
    level: "All Levels",
    duration: "60 min",
    description:
      "Begin your day with a gentle awakening sequence that warms the spine, opens the hips, and sets a calm, clear intention for the hours ahead.",
    schedule: "Mon, Wed, Fri · 6:30 AM",
    image: "/assets/generated/hero-yoga.dim_1600x900.jpg",
  },
  {
    id: "hatha-yoga",
    name: "Hatha Yoga",
    level: "Beginner",
    duration: "75 min",
    description:
      "Classical postures held with steady breath and full awareness. Perfect for building a strong foundation, improving flexibility, and cultivating presence.",
    schedule: "Tue, Thu · 8:00 AM",
    image: "/assets/generated/hero-yoga.dim_1600x900.jpg",
  },
  {
    id: "yin-yoga",
    name: "Yin Yoga",
    level: "All Levels",
    duration: "75 min",
    description:
      "Long-held passive postures that target deep connective tissue and fascia. A meditative practice for release, restoration, and quiet contemplation.",
    schedule: "Mon, Thu · 7:00 PM",
    image: "/assets/generated/hero-yoga.dim_1600x900.jpg",
  },
  {
    id: "vinyasa-flow",
    name: "Vinyasa Flow",
    level: "Intermediate",
    duration: "60 min",
    description:
      "Dynamic, breath-linked movement sequences that build strength, heat, and fluidity. Each class is thoughtfully sequenced around a central peak pose.",
    schedule: "Tue, Sat · 9:00 AM",
    image: "/assets/generated/hero-yoga.dim_1600x900.jpg",
  },
  {
    id: "meditation",
    name: "Guided Meditation",
    level: "All Levels",
    duration: "45 min",
    description:
      "Stillness practices drawn from ancient traditions — breathwork (pranayama), body scanning, and mantra — to quiet the mind and restore inner calm.",
    schedule: "Wed, Fri · 6:00 PM",
    image: "/assets/generated/hero-yoga.dim_1600x900.jpg",
  },
  {
    id: "restorative",
    name: "Restorative Yoga",
    level: "All Levels",
    duration: "90 min",
    description:
      "Fully supported postures with bolsters, blankets, and blocks allow the nervous system to rest completely. Ideal for stress recovery and deep relaxation.",
    schedule: "Sun · 10:00 AM",
    image: "/assets/generated/hero-yoga.dim_1600x900.jpg",
  },
];

export interface ScheduleEntry {
  day: string;
  time: string;
  className: string;
  level: string;
  duration: string;
}

export const weeklySchedule: ScheduleEntry[] = [
  {
    day: "Monday",
    time: "6:30 AM",
    className: "Morning Flow",
    level: "All Levels",
    duration: "60 min",
  },
  {
    day: "Monday",
    time: "7:00 PM",
    className: "Yin Yoga",
    level: "All Levels",
    duration: "75 min",
  },
  {
    day: "Tuesday",
    time: "8:00 AM",
    className: "Hatha Yoga",
    level: "Beginner",
    duration: "75 min",
  },
  {
    day: "Tuesday",
    time: "9:00 AM",
    className: "Vinyasa Flow",
    level: "Intermediate",
    duration: "60 min",
  },
  {
    day: "Wednesday",
    time: "6:30 AM",
    className: "Morning Flow",
    level: "All Levels",
    duration: "60 min",
  },
  {
    day: "Wednesday",
    time: "6:00 PM",
    className: "Guided Meditation",
    level: "All Levels",
    duration: "45 min",
  },
  {
    day: "Thursday",
    time: "8:00 AM",
    className: "Hatha Yoga",
    level: "Beginner",
    duration: "75 min",
  },
  {
    day: "Thursday",
    time: "7:00 PM",
    className: "Yin Yoga",
    level: "All Levels",
    duration: "75 min",
  },
  {
    day: "Friday",
    time: "6:30 AM",
    className: "Morning Flow",
    level: "All Levels",
    duration: "60 min",
  },
  {
    day: "Friday",
    time: "6:00 PM",
    className: "Guided Meditation",
    level: "All Levels",
    duration: "45 min",
  },
  {
    day: "Saturday",
    time: "9:00 AM",
    className: "Vinyasa Flow",
    level: "Intermediate",
    duration: "60 min",
  },
  {
    day: "Sunday",
    time: "10:00 AM",
    className: "Restorative Yoga",
    level: "All Levels",
    duration: "90 min",
  },
];

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Drop-In",
    price: "₹800",
    period: "per class",
    description: "Try a single class at your own pace with no commitment.",
    features: [
      "One class of your choice",
      "All equipment provided",
      "Suitable for first-timers",
      "Weekend classes available",
    ],
    highlight: false,
    cta: "Book a Class",
  },
  {
    name: "Monthly",
    price: "₹4,500",
    period: "per month",
    description: "Unlimited access to all group classes for a full month.",
    features: [
      "Unlimited group classes",
      "Priority booking",
      "Monthly progress check-in",
      "Access to recordings",
      "Community support",
    ],
    highlight: true,
    cta: "Start Monthly",
  },
  {
    name: "Private Sessions",
    price: "₹2,200",
    period: "per session",
    description:
      "Personalized one-on-one guidance tailored entirely to your body.",
    features: [
      "Customized class design",
      "Flexible scheduling",
      "Injury-aware sequencing",
      "Nutrition & lifestyle tips",
      "Session recordings",
    ],
    highlight: false,
    cta: "Enquire Now",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Mehta",
    role: "Software Engineer, Mumbai",
    quote:
      "Akshat's morning flow classes have completely transformed how I start my day. The pace is perfect — challenging enough to energize, gentle enough to honor my body. I've never felt more centered.",
    stars: 5,
  },
  {
    name: "Rohan Sharma",
    role: "Architect, Pune",
    quote:
      "I came in with a stiff lower back and left after six weeks with not just relief but a genuine love for the practice. The way Akshat explains alignment is so clear, so patient.",
    stars: 5,
  },
  {
    name: "Ananya Kapoor",
    role: "Teacher, Delhi",
    quote:
      "The Yin Yoga sessions are pure magic. An hour of complete stillness that somehow moves something deep inside. I recommend Yogakshatam to everyone seeking real rest.",
    stars: 5,
  },
  {
    name: "Vikram Nair",
    role: "Entrepreneur, Bangalore",
    quote:
      "As someone who runs a business, stress is constant. Akshat's guided meditation class is the only hour of the week where I'm completely present. Invaluable.",
    stars: 5,
  },
  {
    name: "Meera Iyer",
    role: "Physiotherapist, Chennai",
    quote:
      "Professionally, I'm impressed by Akshat's anatomical knowledge and his sensitivity to individual limitations. Personally, his classes bring me tremendous joy.",
    stars: 5,
  },
  {
    name: "Kabir Bose",
    role: "Photographer, Kolkata",
    quote:
      "I've practiced with many teachers across India. Yogakshatam stands apart for its authenticity. Akshat teaches from lived experience, not just technique.",
    stars: 5,
  },
];

export const galleryImages = [
  {
    src: "/assets/generated/hero-yoga.dim_1600x900.jpg",
    alt: "Morning meditation in peaceful surroundings",
    caption: "Morning meditation",
  },
  {
    src: "/assets/generated/hero-yoga.dim_1600x900.jpg",
    alt: "Hatha yoga practice",
    caption: "Hatha Flow",
  },
  {
    src: "/assets/generated/hero-yoga.dim_1600x900.jpg",
    alt: "Group yin yoga class",
    caption: "Yin Restoration",
  },
  {
    src: "/assets/generated/hero-yoga.dim_1600x900.jpg",
    alt: "Pranayama breathing practice",
    caption: "Pranayama",
  },
  {
    src: "/assets/generated/hero-yoga.dim_1600x900.jpg",
    alt: "Outdoor yoga session at sunrise",
    caption: "Sunrise Session",
  },
  {
    src: "/assets/generated/hero-yoga.dim_1600x900.jpg",
    alt: "Restorative yoga with props",
    caption: "Restorative Practice",
  },
];
