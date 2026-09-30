export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  category: 'sweeping' | 'inspection' | 'repair' | 'maintenance';
}

export const BUSINESS_INFO = {
  name: "Yasmin Clements",
  businessType: "Chimney Services",
  tagline: "Clean Chimneys, Safer Homes.",
  address: "9 Princes Square, Harrogate, London, United Kingdom, HG1 1ND",
  cityArea: "Harrogate, London, UK",
  postalCode: "HG1 1ND",
  phoneRaw: "447915925681",
  phoneFormatted: "+44 7915 925681",
  phoneTel: "tel:+447915925681",
  whatsappUrl: "https://wa.me/447915925681?text=Hello%20Yasmin%20Clements%2C%20I%20would%20like%20to%20enquire%20about%20your%20chimney%20services.",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=9+Princes+Square,+Harrogate,+HG1+1ND",
  primaryColor: "#1E3A8A", // Deep Classic Royal/Navy Blue
  secondaryColor: "#FFFFFF",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "chimney-cleaning",
    name: "Chimney Cleaning",
    category: "sweeping",
    description: "Thorough removal of creosote deposits, soot, and debris to ensure optimal airflow and fire prevention.",
  },
  {
    id: "chimney-inspection",
    name: "Chimney Inspection",
    category: "inspection",
    description: "Detailed safety checks of flues, masonry, and draught conditions to spot structural issues or blockages.",
  },
  {
    id: "chimney-repair",
    name: "Chimney Repair",
    category: "repair",
    description: "Expert restoration of cracked brickwork, damaged pots, and deteriorating chimney components.",
  },
  {
    id: "chimney-sweeping",
    name: "Chimney Sweeping",
    category: "sweeping",
    description: "Traditional and modern sweeping methods carried out cleanly with complete dust containment.",
  },
  {
    id: "chimney-cap-installation",
    name: "Chimney Cap Installation",
    category: "maintenance",
    description: "Durable cowls and bird-guard caps fitted securely to keep rain, birds, and leaves out of your flue.",
  },
  {
    id: "chimney-liner-installation",
    name: "Chimney Liner Installation",
    category: "repair",
    description: "Professional flue lining and replacement to ensure safe smoke extraction and carbon monoxide containment.",
  },
  {
    id: "chimney-leak-repair",
    name: "Chimney Leak Repair",
    category: "repair",
    description: "Targeted diagnosis and waterproofing for chimney flashings, porous bricks, and rain ingress points.",
  },
  {
    id: "smoke-soot-removal",
    name: "Smoke & Soot Removal",
    category: "sweeping",
    description: "Specialized extraction of heavy soot buildup from fireboxes, baffles, and chimney chambers.",
  },
  {
    id: "chimney-waterproofing",
    name: "Chimney Waterproofing",
    category: "maintenance",
    description: "Breathable masonry water repellents applied to protect exterior chimney stacks from frost and damp.",
  },
  {
    id: "chimney-crown-repair",
    name: "Chimney Crown Repair",
    category: "repair",
    description: "Mortar and concrete crown sealing to prevent rainwater penetrating down the chimney cavities.",
  },
  {
    id: "fireplace-cleaning",
    name: "Fireplace Cleaning",
    category: "sweeping",
    description: "Spotless hearth, grate, and surround cleaning to leave your living space clean and ready for safe fires.",
  },
  {
    id: "chimney-maintenance",
    name: "Chimney Maintenance",
    category: "maintenance",
    description: "Ongoing seasonal checkups and preventive servicing to keep your heating system in peak condition.",
  },
];

export const TRUST_POINTS = [
  {
    title: "Safety & Hazard Prevention",
    description: "Regular cleaning and inspections dramatically reduce chimney fire hazards and dangerous carbon monoxide blockages.",
  },
  {
    title: "Clean & Mess-Conscious Service",
    description: "Every appointment includes full floor sheets and soot containment to protect your home and furnishings.",
  },
  {
    title: "Full-Spectrum Chimney Care",
    description: "From routine seasonal sweeping to structural repairs, caps, liners, and leak fixes, all under one specialist.",
  },
  {
    title: "Direct & Prompt Communication",
    description: "Reach Yasmin Clements directly via WhatsApp or phone call without call centres or automated delays.",
  },
];

export const REASSURANCE_STANDARDS = [
  {
    title: "Flue Draught & Airflow Testing",
    detail: "Confirming adequate draw before and after servicing so smoke vents outside, not back into your room.",
  },
  {
    title: "Soot & Creosote Containment",
    detail: "Heavy-duty industrial sealing techniques so no soot escapes into your living space during the sweep.",
  },
  {
    title: "Structural Assessment",
    detail: "Careful visual inspection of pots, stacks, flashings, and crowns to catch weather damage early.",
  },
  {
    title: "Transparent Advice",
    detail: "Honest feedback on the condition of your chimney with practical recommendations for safety.",
  },
];

export const FAQS = [
  {
    question: "How often should my chimney be swept?",
    answer: "For standard wood-burning stoves and open fires, chimneys should be swept at least once a year, or twice a year during heavy winter usage. Smokeless fuel appliances should be serviced at least annually.",
  },
  {
    question: "How do I prepare my fireplace before the visit?",
    answer: "Please ensure the fire is completely extinguished and cold at least 12 hours prior to the appointment. Clear the immediate hearth area of ornaments or delicate items.",
  },
  {
    question: "Will there be soot or mess in my home?",
    answer: "No. Professional dust sheets and industrial containment equipment are used to seal the fireplace opening, ensuring soot is captured cleanly and safely.",
  },
  {
    question: "How do I book or request a quote?",
    answer: "You can message directly on WhatsApp (+44 7915 925681) or call directly. Feel free to describe your fireplace type or send photos of any exterior chimney issues.",
  },
];
