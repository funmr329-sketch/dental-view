export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export const services: Service[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive preventive care and routine treatments to maintain your healthy smile.',
    icon: 'Tooth',
    features: ['Regular Check-ups', 'Professional Cleanings', 'Fillings & Restorations', 'Oral Cancer Screenings', 'Digital X-Rays', 'Fluoride Treatments'],
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our advanced cosmetic procedures and aesthetic treatments.',
    icon: 'Sparkle',
    features: ['Teeth Whitening', 'Porcelain Veneers', 'Dental Bonding', 'Smile Makeovers', 'Inlays & Onlays', 'Gum Contouring'],
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth and perfect your bite with modern orthodontic solutions.',
    icon: 'ArrowsOut',
    features: ['Traditional Braces', 'Invisalign Clear Aligners', 'Retainers', 'Early Intervention', 'Adult Orthodontics', 'Accelerated Treatment'],
  },
  {
    id: 'implants',
    title: 'Implants & Restorations',
    description: 'Permanent solutions for missing teeth with natural-looking dental implants.',
    icon: 'Anchor',
    features: ['Dental Implants', 'Crowns & Bridges', 'Dentures', 'All-on-4 Implants', 'Bone Grafting', 'Sinus Lifts'],
  },
  {
    id: 'periodontics',
    title: 'Periodontics',
    description: 'Specialized care for your gums and the supporting structures of your teeth.',
    icon: 'Heart',
    features: ['Gum Disease Treatment', 'Scaling & Root Planing', 'Laser Therapy', 'Gum Grafting', 'Periodontal Maintenance', 'Pocket Reduction'],
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Immediate attention for dental emergencies with same-day appointments available.',
    icon: 'Lightning',
    features: ['Tooth Pain Relief', 'Broken Tooth Repair', 'Knocked-out Tooth', 'Abscess Treatment', 'Emergency Extractions', 'After-hours Care'],
  },
];

export const team: TeamMember[] = [
  {
    id: 'sarah-mitchell',
    name: 'Dr. Sarah Mitchell',
    role: 'Lead Dentist',
    description: 'With over 15 years of experience, Dr. Mitchell specializes in restorative and cosmetic dentistry with a gentle touch.',
    image: '',
    initials: 'SM',
  },
  {
    id: 'james-chen',
    name: 'Dr. James Chen',
    role: 'Orthodontist',
    description: 'A certified Invisalign specialist, Dr. Chen creates beautiful smiles using the latest orthodontic technology.',
    image: '',
    initials: 'JC',
  },
  {
    id: 'emily-rodriguez',
    name: 'Dr. Emily Rodriguez',
    role: 'Cosmetic Specialist',
    description: 'Dr. Rodriguez combines artistry with advanced techniques to deliver stunning cosmetic transformations.',
    image: '',
    initials: 'ER',
  },
  {
    id: 'michael-park',
    name: 'Dr. Michael Park',
    role: 'Periodontist',
    description: 'Dr. Park specializes in advanced gum care and dental implant surgery with exceptional precision.',
    image: '',
    initials: 'MP',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Jennifer Adams',
    role: 'Patient since 2019',
    content: 'I have always been anxious about dental visits, but the team here made me feel completely at ease. The modern facility and gentle care transformed my perspective on dental health.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marcus Williams',
    role: 'Patient since 2020',
    content: 'The Invisalign treatment changed my smile and my confidence. Dr. Chen was incredible throughout the entire process. I smile freely now, and I cannot recommend them enough.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Sophia Chen',
    role: 'Patient since 2018',
    content: 'Exceptional cosmetic work on my veneers. Dr. Rodriguez has an incredible eye for detail. The results look completely natural. Worth every visit.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Patient since 2021',
    content: 'Had an emergency on a Saturday and they got me in within an hour. Professional, caring, and efficient. Found my dental home for life.',
    rating: 5,
  },
];

export const stats: Stat[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '10K+', label: 'Happy Patients' },
  { value: '4.9', label: 'Patient Rating' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];