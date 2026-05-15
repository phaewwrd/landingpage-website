export type IconKey =
  | "spark"
  | "shield"
  | "workflow"
  | "analytics"
  | "support"
  | "layers"
  | "rocket"
  | "users"
  | "check"
  | "bolt";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconKey;
}

export interface Service {
  title: string;
  description: string;
  highlights: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface PricingFeature {
  label: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  features: PricingFeature[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavigationLink[];
}
