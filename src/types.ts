export interface HeroSection {
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  heroImageUrl: string;
  heroImageAlt: string;
  stats: Array<{ value: string; label: string }>;
}

export interface AsSeenInSection {
  heading: string;
  brands: string[];
}

export interface PainPointsSection {
  badge: string;
  title: string;
  subtitle: string;
  pains: Array<{ title: string; desc: string }>;
}

export interface HowItWorksSection {
  badge: string;
  title: string;
  subtitle: string;
  steps: Array<{ title: string; desc: string }>;
}

export interface AboutCoachSection {
  badge: string;
  title: string;
  bioText: string;
  coachImageUrl: string;
  coachImageAlt: string;
  credentials: string[];
}

export interface TestimonialsSection {
  badge: string;
  title: string;
  subtitle: string;
  testimonialImageUrl: string;
  reviews: Array<{ name: string; result: string; text: string }>;
}

export interface PricingSection {
  badge: string;
  title: string;
  subtitle: string;
  tiers: Array<{
    name: string;
    price: string;
    desc: string;
    features: string[];
    cta: string;
  }>;
}

export interface FaqSection {
  badge: string;
  title: string;
  faqs: Array<{ q: string; a: string }>;
}

export interface FinalCtaSection {
  badge: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface FooterSection {
  copyright: string;
  disclaimer: string;
  socialInstagram: string;
  socialYoutube: string;
  socialTiktok: string;
}

export interface MetaSettings {
  siteName: string;
  coachName: string;
  specialty: string;
  announcementBanner: string;
}

export interface ParsedLandingContent {
  meta: MetaSettings;
  hero: HeroSection;
  asSeenIn: AsSeenInSection;
  painPoints: PainPointsSection;
  howItWorks: HowItWorksSection;
  aboutCoach: AboutCoachSection;
  testimonials: TestimonialsSection;
  pricing: PricingSection;
  faq: FaqSection;
  finalCta: FinalCtaSection;
  footer: FooterSection;
}
