// All content sourced from https://abcdezigns.com/
// This is the single source of truth for company information

export const companyInfo = {
  name: 'ABCD',
  fullName: 'Akhil Bharat Constructions & Designs',
  tagline: 'Strong Foundations. Elegant Finishes.',
  heroText: 'Expert Construction & Interior Design Solutions for Modern Living',
  website: 'https://abcdezigns.com/',
};

export const aboutContent = {
  intro: 'At ABCD – Akhil Bharat Constructions & Designs, we bring your dream spaces to life — from foundation to final finish.',
  description: 'We provide end-to-end building solutions with a focus on structural strength, functional design, and timeless aesthetics. Our commitment is to honest work, transparency, and lasting relationships with every client we serve.',
  values: [
    { title: 'Structural Strength', description: 'Building with the highest quality materials and engineering standards.' },
    { title: 'Functional Design', description: 'Spaces designed for how you actually live and work.' },
    { title: 'Timeless Aesthetics', description: 'Designs that look beautiful today and for decades to come.' },
    { title: 'Honest Work', description: 'Transparent processes and genuine craftsmanship in every project.' },
    { title: 'Lasting Relationships', description: 'We build trust alongside buildings — relationships that endure.' },
  ],
};

export const services = [
  {
    id: 'residential',
    title: 'Residential Construction',
    description: 'From individual homes to residential complexes, we handle every aspect of residential construction. Our team ensures quality craftsmanship from foundation to rooftop, delivering homes built to last with modern amenities and structural integrity.',
    icon: '🏠',
    features: ['Foundation', 'Walls', 'Structure', 'Flooring', 'Finishing'],
  },
  {
    id: 'interior',
    title: 'Interior Design',
    description: 'Transform your spaces with our expert interior design services. We create stunning interiors that blend functionality with aesthetics, crafting living spaces, kitchens, bedrooms, and offices that reflect your personal style and needs.',
    icon: '🎨',
    features: ['Living Room', 'Kitchen', 'Bedroom', 'Lighting', 'Furniture', 'Finishes'],
  },
  {
    id: 'office',
    title: 'Office Renovation',
    description: 'Modernize your workspace with our office renovation services. We redesign and rebuild office spaces to improve productivity, aesthetics, and functionality — transforming outdated offices into inspiring modern work environments.',
    icon: '🏢',
    features: ['Space Planning', 'Modern Interiors', 'Electrical Work', 'Flooring', 'False Ceiling'],
  },
  {
    id: 'structural',
    title: 'Structural Work',
    description: 'Our structural work services cover the backbone of every building. From RCC framework and column construction to beam and slab work, we ensure every structure is engineered for strength, safety, and longevity.',
    icon: '🏗️',
    features: ['Foundation', 'RCC', 'Columns', 'Beams', 'Structural Framework'],
  },
  {
    id: 'woodwork',
    title: 'Woodwork & Furnishing',
    description: 'Custom woodwork and furnishing solutions including modular kitchens, wardrobes, furniture, and decorative woodwork. Every piece is crafted with precision to complement your interiors and maximize space utilization.',
    icon: '🪵',
    features: ['Wardrobe', 'Modular Kitchen', 'Furniture', 'Interior Woodwork'],
  },
  {
    id: 'remodeling',
    title: 'Remodeling & Maintenance',
    description: 'Breathe new life into existing spaces with our remodeling and maintenance services. Whether it\'s a single room or an entire building, we renovate and maintain properties to keep them looking and functioning at their best.',
    icon: '🔨',
    features: ['Renovation', 'Restoration', 'Upgrades', 'Maintenance', 'Repairs'],
  },
];

export const categories = [
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'Commercial construction solutions for offices, retail spaces, and business establishments.',
    features: [
      'Commercial-grade foundation & structure',
      'Large-scale RCC framework',
      'Commercial electrical & plumbing systems',
      'Fire safety compliance',
      'Modern commercial interiors',
      'Parking & utility planning',
    ],
    tier: 1,
  },
  {
    id: 'basic',
    title: 'Basic',
    description: 'Essential construction package for budget-conscious projects without compromising on structural quality.',
    features: [
      'Standard foundation',
      'Brickwork & plastering',
      'Regular tiles & flooring',
      'Paint finishes',
      'Basic electrical & plumbing',
      'Standard doors & windows',
    ],
    excluded: ['No false ceiling', 'No designer woodwork'],
    tier: 2,
  },
  {
    id: 'premium',
    title: 'Premium',
    description: 'Upgraded construction package with enhanced materials, finishes, and design elements.',
    features: [
      'Engineered foundation',
      'Quality brickwork & plastering',
      'Vitrified tile flooring',
      'Premium paint & texture finishes',
      'Enhanced electrical & plumbing',
      'Wooden doors & UPVC windows',
      'False ceiling in living areas',
      'Modular kitchen setup',
      'Designer bathroom fittings',
    ],
    tier: 3,
  },
  {
    id: 'royale',
    title: 'Royale',
    description: 'Luxury construction package with premium materials, designer finishes, and complete furnishing.',
    features: [
      'Premium engineered foundation',
      'Superior brickwork & plastering',
      'Italian marble / premium tile flooring',
      'Luxury paint, texture & wallpaper finishes',
      'Concealed premium electrical & plumbing',
      'Teak wood doors & designer windows',
      'Full false ceiling with designer lighting',
      'Complete modular kitchen',
      'Designer bathroom with premium fittings',
      'Custom woodwork & furnishing',
      'Landscape design',
      'Smart home ready wiring',
    ],
    tier: 4,
  },
];

export const constructionStages = [
  { id: 1, title: 'CONCEPT', description: 'Understanding your vision and requirements' },
  { id: 2, title: 'DESIGN', description: 'Creating architectural plans and 3D visualizations' },
  { id: 3, title: 'FOUNDATION', description: 'Laying the structural groundwork' },
  { id: 4, title: 'STRUCTURE', description: 'Building the RCC framework, columns, and beams' },
  { id: 5, title: 'INTERIORS', description: 'Finishing walls, flooring, and interior elements' },
  { id: 6, title: 'FINISHING', description: 'Paint, fixtures, fittings, and final touches' },
  { id: 7, title: 'HANDOVER', description: 'Quality inspection and project delivery' },
];

export const contactInfo = {
  phone: '+91 9030807570',
  email: 'info@abcdezigns.com',
  website: 'https://abcdezigns.com',
  note: 'Contact ABCD for a customized estimate.',
};

export const navigationItems = [
  { id: 'home', label: 'HOME', angle: 0 },
  { id: 'about', label: 'ABOUT', angle: 60 },
  { id: 'services', label: 'SERVICES', angle: 120 },
  { id: 'categories', label: 'CATEGORIES', angle: 180 },
  { id: 'projects', label: 'PROJECTS', angle: 240 },
  { id: 'contact', label: 'CONTACT', angle: 300 },
];
