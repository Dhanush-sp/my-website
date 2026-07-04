import { ParsedLandingContent } from '../types';

export const FALLBACK_RAW_CONTENT = `
## [META_SETTINGS]
[SITE_NAME: VANCE CALISTHENICS ACADEMY]
[COACH_NAME: Alex Vance]
[SPECIALTY: Solo Creator & Elite Body Mastery Coach]
[ANNOUNCEMENT_BANNER: 🔥 SPRING TRANSFORMATION COHORT: Only 4 1-on-1 coaching spots remaining for this month!]

## [HERO_SECTION]
[BADGE: 🏆 #1 Online Calisthenics Coaching Protocol]
[TITLE: MASTER YOUR BODY WEIGHT. UNLOCK SUPERNATURAL STRENGTH.]
[SUBTITLE: Ditch the gym membership and joint-destroying weights. Transform your physique through elite street workout & gymnastics strength—in under 45 minutes a day, anywhere you travel.]
[PRIMARY_CTA: Apply For 1-on-1 Coaching]
[SECONDARY_CTA: Watch Free 5-Min Protocol]
[HERO_IMAGE_URL: https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop]
[HERO_IMAGE_ALT: Athlete performing iron cross gymnastic ring hold outdoors at sunset]
- **Stat_1_Value**: 450+
- **Stat_1_Label**: Clients Transformed
- **Stat_2_Value**: 98.4%
- **Stat_2_Label**: First-Muscle-Up Success Rate
- **Stat_3_Value**: 15+ Yrs
- **Stat_3_Label**: Coach Body Mastery Experience

## [AS_SEEN_IN]
[HEADING: RECOMMENDED BY TOP FITNESS & LIFESTYLE PLATFORMS]
- **Brand_1**: Men's Health
- **Brand_2**: Gymshark Athletes
- **Brand_3**: Timeless Fitness
- **Brand_4**: Street Workout Global
- **Brand_5**: Bodyweight Pro

## [PAIN_POINTS_SECTION]
[BADGE: THE PROBLEM WITH TRADITIONAL GYMS]
[TITLE: Are You Tired of Heavy Lifting That Triggers Chronic Joint Pain?]
[SUBTITLE: Most fitness enthusiasts get stuck in a plateau of stiff muscles, lower back aches, and zero real-world athletic body control.]
- **Pain_1_Title**: Stiff, Robotic Gym Strength
- **Pain_1_Desc**: You bench press and squat heavy, but feel sluggish, inflexible, and ache every morning when you get out of bed.
- **Pain_2_Title**: Time-Consuming 2-Hour Gym Commutes
- **Pain_2_Desc**: Waiting for equipment, packing gym bags, and sitting in traffic kills your productivity as a busy professional or creator.
- **Pain_3_Title**: Zero Relative Body Strength & Skills
- **Pain_3_Desc**: Despite lifting heavy weights, you still struggle to hold a clean freestanding handstand or perform a effortless front lever.

## [HOW_IT_WORKS_SECTION]
[BADGE: THE 3-STEP VANCE PROTOCOL]
[TITLE: From Zero Skills to Effortless Body Mastery in 90 Days]
[SUBTITLE: Our science-backed calisthenics progression framework adapts to your current level—whether you are working toward your first clean pull-up or a full planche.]
- **Step_1_Title**: Step 1: Joint Armor & Scapular Decompression
- **Step_1_Desc**: We bulletproof your wrists, elbows, and rotator cuffs while unlocking elite shoulder mobility during week 1 to 3.
- **Step_2_Title**: Step 2: Neuromuscular Leverage Activation
- **Step_2_Desc**: Learn the physics of body positioning. Master progressive variations for muscle-ups, handstands, and levers safely.
- **Step_3_Title**: Step 3: Hypertrophy & Skill Integration
- **Step_3_Desc**: Combine high-tension calisthenics holds with explosive bodyweight reps to carve a lean, functional, gymnast physique.

## [ABOUT_COACH_SECTION]
[BADGE: MEET YOUR MENTOR]
[TITLE: I Built This Academy Because Traditional Gyms Failed My Joints]
[BIO_TEXT: Hey, I am Alex Vance. Ten years ago, I suffered two torn shoulder labrums from heavy barbell lifting. Doctors told me I would never press overhead again. I left the iron behind and immersed myself in Olympic rings and street calisthenics. Not only did my joints heal 100%, but I built more functional muscle and athletic control than ever before. Now, I dedicate my life to helping high-performers achieve ultimate physical freedom.]
[COACH_IMAGE_URL: https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop]
[COACH_IMAGE_ALT: Coach Alex Vance demonstrating intense focus and calisthenics physique]
- **Credential_1**: Certified Calisthenics Specialist & Biomechanics Coach
- **Credential_2**: Featured Speaker at Global Street Workout Summit 2024
- **Credential_3**: Creator of the 90-Day Ring Mastery Blueprint

## [TESTIMONIALS_SECTION]
[BADGE: VERIFIED SOCIAL PROOF]
[TITLE: Real Creators & Professionals. Unstoppable Transformations.]
[SUBTITLE: See how our students leveled up their physique, energy, and body control without setting foot inside a crowded gym.]
[TESTIMONIAL_IMAGE_URL: https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop]
- **Review_1_Name**: Marcus Vance (Software Engineer & Creator)
- **Review_1_Result**: Unlocked strict muscle-up in 4 weeks & lost 14 lbs of body fat!
- **Review_1_Text**: "Sitting at a desk 10 hours a day destroyed my lower back. Alex's protocol gave me the mobility of a 20-year-old and my physique has never looked sharper. The daily feedback via WhatsApp is unmatched."
- **Review_2_Name**: Elena Rostova (Online Brand Strategist)
- **Review_2_Result**: First freestanding handstand hold at age 34!
- **Review_2_Text**: "I tried yoga and standard gym trainers for years with zero progress on handstands. Alex diagnosed my wrist mobility bottleneck on Day 1. Now I train anywhere on the road while traveling!"
- **Review_3_Name**: David K. (Executive Founder)
- **Review_3_Result**: Replaced 2-hour gym routines with 40-min park workouts!
- **Review_3_Text**: "Best investment I made this year. High energy, zero joint pain, and incredible definition in my shoulders and core. Highly recommended for busy professionals."

## [PRICING_AND_PROGRAMS]
[BADGE: CHOOSE YOUR PATH]
[TITLE: Coaching Packages Tailored to Your Ambition]
[SUBTITLE: All programs include 24/7 direct messaging, customized video technique audits, and tailored nutrition guidance.]
- **Tier_1_Name**: The Digital Protocol (Self-Guided + Group)
- **Tier_1_Price**: $97 / month
- **Tier_1_Desc**: Perfect for self-starters who want structured progressions and community support.
- **Tier_1_Feature_1**: Full 12-Week Interactive Video Workout Roadmap
- **Tier_1_Feature_2**: Weekly Group Q&A & Video Form Check Calls
- **Tier_1_Feature_3**: Mobility & Joint Armor Video Vault
- **Tier_1_CTA**: Start 7-Day Trial

- **Tier_2_Name**: VIP 1-on-1 Mentorship (Most Popular)
- **Tier_2_Price**: $297 / month
- **Tier_2_Desc**: Comprehensive hands-on private coaching for guaranteed breakthrough results.
- **Tier_2_Feature_1**: Daily 1-on-1 WhatsApp & Video Technique Reviews
- **Tier_2_Feature_2**: 100% Custom Periodized Programming Updated Weekly
- **Tier_2_Feature_3**: Personalized High-Performance Bio-Nutrition Plan
- **Tier_2_CTA**: Claim Your VIP Spot

## [FAQ_SECTION]
[BADGE: FREQUENTLY ASKED QUESTIONS]
[TITLE: Everything You Need to Know Before Starting]
- **FAQ_1_Q**: Do I need expensive gym equipment or Olympic rings right away?
- **FAQ_1_A**: Not at all! You can start with zero equipment—just floor space and a doorway pull-up bar or local park. We guide you on when and how to introduce gymnastic rings or resistance bands as you progress.
- **FAQ_2_Q**: What if I have never done a single pull-up or push-up in my life?
- **FAQ_2_A**: That is exactly where many of our clients begin. Our scaling framework uses eccentric control, band assistance, and structural holds to get you to your first clean rep safely within weeks.
- **FAQ_3_Q**: How much time per week do I need to commit?
- **FAQ_3_A**: Just 3 to 4 sessions per week, lasting 40 to 45 minutes each. Because calisthenics engages high neuromuscular compound movements, short focused workouts deliver superior results compared to long isolation gym sessions.
- **FAQ_4_Q**: How does the application and onboarding process work?
- **FAQ_4_A**: Once you submit the brief application below, Alex will review your goals and schedule a free 15-minute diagnostic video call. If we are a mutual fit, your customized onboarding portal opens immediately.

## [FINAL_CTA_SECTION]
[BADGE: YOUR TRANSFORMATION BEGINS TODAY]
[TITLE: Ready to Defy Gravity and Own Your Physique?]
[SUBTITLE: Stop guessing your training. Apply for private mentorship today or download our free 7-Day Body Mastery Blueprint.]
[PRIMARY_CTA_LABEL: Apply Now For 1-on-1 Mentorship]
[SECONDARY_CTA_LABEL: Get Free 7-Day Starter Guide]

## [FOOTER_SECTION]
[COPYRIGHT: © 2026 Vance Calisthenics Academy. All Rights Reserved.]
[DISCLAIMER: Consult with your physician before beginning any new exercise protocol. Results vary based on adherence and individual physiology.]
[SOCIAL_INSTAGRAM: https://instagram.com]
[SOCIAL_YOUTUBE: https://youtube.com]
[SOCIAL_TIKTOK: https://tiktok.com]
`.trim();

/**
 * Extracts sections delimited by ## [SECTION_NAME]
 */
function getSectionMap(rawText: string): Record<string, string> {
  const sections: Record<string, string> = {};
  const lines = rawText.split(/\r?\n/);
  let currentSection = '';
  let buffer: string[] = [];

  for (const line of lines) {
    const match = line.match(/^##\s*\[([A-Z0-9_]+)\]/i);
    if (match) {
      if (currentSection) {
        sections[currentSection] = buffer.join('\n');
      }
      currentSection = match[1].toUpperCase();
      buffer = [];
    } else if (currentSection) {
      buffer.push(line);
    }
  }

  if (currentSection) {
    sections[currentSection] = buffer.join('\n');
  }

  return sections;
}

/**
 * Extracts all tags like [KEY: VALUE] or [KEY: VALUE containing colons]
 */
function extractTags(sectionText: string): Record<string, string> {
  const tags: Record<string, string> = {};
  // Match [KEY: VALUE] across multiple or single lines
  const regex = /\[([A-Z0-9_]+)\s*:\s*([^\]]+)\]/gi;
  let match;
  while ((match = regex.exec(sectionText)) !== null) {
    const key = match[1].trim().toUpperCase();
    const val = match[2].trim();
    tags[key] = val;
  }
  return tags;
}

/**
 * Extracts bullet items in format `- **Key**: Value` or `- **Key** : Value`
 */
function extractBullets(sectionText: string): Record<string, string> {
  const bullets: Record<string, string> = {};
  const regex = /^-\s*\*\*([^*]+)\*\*\s*:\s*(.+)$/gm;
  let match;
  while ((match = regex.exec(sectionText)) !== null) {
    const key = match[1].trim();
    const val = match[2].trim();
    bullets[key] = val;
  }
  return bullets;
}

export function parseContentTxt(rawText: string): ParsedLandingContent {
  const textToParse = rawText && rawText.trim().length > 50 ? rawText : FALLBACK_RAW_CONTENT;
  const sections = getSectionMap(textToParse);

  // Helper to get section text
  const getSec = (name: string) => sections[name] || '';

  // 1. META_SETTINGS
  const metaTags = extractTags(getSec('META_SETTINGS'));
  const meta = {
    siteName: metaTags['SITE_NAME'] || 'VANCE CALISTHENICS ACADEMY',
    coachName: metaTags['COACH_NAME'] || 'Alex Vance',
    specialty: metaTags['SPECIALTY'] || 'Elite Body Mastery Coach',
    announcementBanner: metaTags['ANNOUNCEMENT_BANNER'] || '🔥 Limited Mentorship Spots Available This Month',
  };

  // 2. HERO_SECTION
  const heroTags = extractTags(getSec('HERO_SECTION'));
  const heroBullets = extractBullets(getSec('HERO_SECTION'));
  const stats: Array<{ value: string; label: string }> = [];
  for (let i = 1; i <= 5; i++) {
    const val = heroBullets[`Stat_${i}_Value`];
    const lbl = heroBullets[`Stat_${i}_Label`];
    if (val && lbl) {
      stats.push({ value: val, label: lbl });
    }
  }
  const hero = {
    badge: heroTags['BADGE'] || '🏆 #1 Online Calisthenics Coaching Protocol',
    title: heroTags['TITLE'] || 'MASTER YOUR BODY WEIGHT. UNLOCK SUPERNATURAL STRENGTH.',
    subtitle: heroTags['SUBTITLE'] || 'Transform your physique through elite street workout & gymnastics strength.',
    primaryCta: heroTags['PRIMARY_CTA'] || 'Apply For 1-on-1 Coaching',
    secondaryCta: heroTags['SECONDARY_CTA'] || 'Watch Free Protocol',
    heroImageUrl: heroTags['HERO_IMAGE_URL'] || 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: heroTags['HERO_IMAGE_ALT'] || 'Calisthenics Athlete',
    stats: stats.length ? stats : [
      { value: '450+', label: 'Clients Transformed' },
      { value: '98.4%', label: 'Success Rate' },
      { value: '15+ Yrs', label: 'Coach Experience' }
    ]
  };

  // 3. AS_SEEN_IN
  const seenTags = extractTags(getSec('AS_SEEN_IN'));
  const seenBullets = extractBullets(getSec('AS_SEEN_IN'));
  const brands: string[] = [];
  for (let i = 1; i <= 10; i++) {
    if (seenBullets[`Brand_${i}`]) brands.push(seenBullets[`Brand_${i}`]);
  }
  const asSeenIn = {
    heading: seenTags['HEADING'] || 'RECOMMENDED BY TOP FITNESS & LIFESTYLE PLATFORMS',
    brands: brands.length ? brands : ['Men\'s Health', 'Gymshark Athletes', 'Timeless Fitness', 'Street Workout Global']
  };

  // 4. PAIN_POINTS
  const painTags = extractTags(getSec('PAIN_POINTS_SECTION'));
  const painBullets = extractBullets(getSec('PAIN_POINTS_SECTION'));
  const pains: Array<{ title: string; desc: string }> = [];
  for (let i = 1; i <= 6; i++) {
    const t = painBullets[`Pain_${i}_Title`];
    const d = painBullets[`Pain_${i}_Desc`];
    if (t && d) pains.push({ title: t, desc: d });
  }
  const painPoints = {
    badge: painTags['BADGE'] || 'THE PROBLEM WITH TRADITIONAL GYMS',
    title: painTags['TITLE'] || 'Are You Tired of Heavy Lifting That Triggers Chronic Joint Pain?',
    subtitle: painTags['SUBTITLE'] || 'Most fitness enthusiasts get stuck in a plateau of stiff muscles and joint aches.',
    pains: pains.length ? pains : [
      { title: 'Stiff, Robotic Gym Strength', desc: 'Lifting heavy weights leaves your joints aching and inflexible.' },
      { title: 'Time-Consuming 2-Hour Commutes', desc: 'Packing bags and sitting in traffic wastes your daily productivity.' },
      { title: 'Zero Relative Body Control', desc: 'Struggling to hold a basic handstand or front lever despite benching heavy.' }
    ]
  };

  // 5. HOW_IT_WORKS
  const howTags = extractTags(getSec('HOW_IT_WORKS_SECTION'));
  const howBullets = extractBullets(getSec('HOW_IT_WORKS_SECTION'));
  const steps: Array<{ title: string; desc: string }> = [];
  for (let i = 1; i <= 6; i++) {
    const t = howBullets[`Step_${i}_Title`];
    const d = howBullets[`Step_${i}_Desc`];
    if (t && d) steps.push({ title: t, desc: d });
  }
  const howItWorks = {
    badge: howTags['BADGE'] || 'THE 3-STEP VANCE PROTOCOL',
    title: howTags['TITLE'] || 'From Zero Skills to Effortless Body Mastery in 90 Days',
    subtitle: howTags['SUBTITLE'] || 'Our science-backed calisthenics progression adapts to your level.',
    steps: steps.length ? steps : [
      { title: 'Step 1: Joint Armor & Decompression', desc: 'Bulletproof your wrists, elbows, and rotator cuffs safely.' },
      { title: 'Step 2: Neuromuscular Leverage', desc: 'Master progressions for muscle-ups, handstands, and levers.' },
      { title: 'Step 3: Hypertrophy & Integration', desc: 'Carve a lean, functional, gymnast physique with high tension.' }
    ]
  };

  // 6. ABOUT_COACH
  const coachTags = extractTags(getSec('ABOUT_COACH_SECTION'));
  const coachBullets = extractBullets(getSec('ABOUT_COACH_SECTION'));
  const credentials: string[] = [];
  for (let i = 1; i <= 10; i++) {
    if (coachBullets[`Credential_${i}`]) credentials.push(coachBullets[`Credential_${i}`]);
  }
  const aboutCoach = {
    badge: coachTags['BADGE'] || 'MEET YOUR MENTOR',
    title: coachTags['TITLE'] || 'I Built This Academy Because Traditional Gyms Failed My Joints',
    bioText: coachTags['BIO_TEXT'] || 'Hey, I am Alex Vance. After suffering shoulder labrum injuries from barbell training, I discovered Olympic rings and street calisthenics. Now I help creators achieve supreme body mastery.',
    coachImageUrl: coachTags['COACH_IMAGE_URL'] || 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1000&auto=format&fit=crop',
    coachImageAlt: coachTags['COACH_IMAGE_ALT'] || 'Coach Alex Vance',
    credentials: credentials.length ? credentials : [
      'Certified Calisthenics Specialist & Biomechanics Coach',
      'Featured Speaker at Global Street Workout Summit 2024',
      'Creator of the 90-Day Ring Mastery Blueprint'
    ]
  };

  // 7. TESTIMONIALS
  const testTags = extractTags(getSec('TESTIMONIALS_SECTION'));
  const testBullets = extractBullets(getSec('TESTIMONIALS_SECTION'));
  const reviews: Array<{ name: string; result: string; text: string }> = [];
  for (let i = 1; i <= 6; i++) {
    const n = testBullets[`Review_${i}_Name`];
    const r = testBullets[`Review_${i}_Result`];
    const tx = testBullets[`Review_${i}_Text`];
    if (n && r && tx) reviews.push({ name: n, result: r, text: tx });
  }
  const testimonials = {
    badge: testTags['BADGE'] || 'VERIFIED SOCIAL PROOF',
    title: testTags['TITLE'] || 'Real Creators & Professionals. Unstoppable Transformations.',
    subtitle: testTags['SUBTITLE'] || 'See how our students leveled up their physique without setting foot in a crowded gym.',
    testimonialImageUrl: testTags['TESTIMONIAL_IMAGE_URL'] || 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000&auto=format&fit=crop',
    reviews: reviews.length ? reviews : [
      {
        name: 'Marcus Vance (Software Engineer)',
        result: 'Strict muscle-up in 4 weeks & lost 14 lbs!',
        text: 'Alex\'s protocol gave me the mobility of a 20-year-old and my physique has never looked sharper.'
      }
    ]
  };

  // 8. PRICING
  const priceTags = extractTags(getSec('PRICING_AND_PROGRAMS'));
  const priceBullets = extractBullets(getSec('PRICING_AND_PROGRAMS'));
  const tiers: Array<{ name: string; price: string; desc: string; features: string[]; cta: string }> = [];
  for (let i = 1; i <= 3; i++) {
    const name = priceBullets[`Tier_${i}_Name`];
    const price = priceBullets[`Tier_${i}_Price`];
    const desc = priceBullets[`Tier_${i}_Desc`];
    const cta = priceBullets[`Tier_${i}_CTA`] || 'Join Program';
    if (name && price) {
      const features: string[] = [];
      for (let f = 1; f <= 8; f++) {
        if (priceBullets[`Tier_${i}_Feature_${f}`]) features.push(priceBullets[`Tier_${i}_Feature_${f}`]);
      }
      tiers.push({ name, price, desc: desc || '', features, cta });
    }
  }
  const pricing = {
    badge: priceTags['BADGE'] || 'CHOOSE YOUR PATH',
    title: priceTags['TITLE'] || 'Coaching Packages Tailored to Your Ambition',
    subtitle: priceTags['SUBTITLE'] || 'All programs include 24/7 direct messaging and video technique audits.',
    tiers: tiers.length ? tiers : [
      {
        name: 'VIP 1-on-1 Mentorship',
        price: '$297 / month',
        desc: 'Comprehensive hands-on private coaching.',
        features: ['Daily WhatsApp technique reviews', 'Custom periodized programming', 'High-performance bio-nutrition'],
        cta: 'Claim Your VIP Spot'
      }
    ]
  };

  // 9. FAQ
  const faqTags = extractTags(getSec('FAQ_SECTION'));
  const faqBullets = extractBullets(getSec('FAQ_SECTION'));
  const faqs: Array<{ q: string; a: string }> = [];
  for (let i = 1; i <= 10; i++) {
    const q = faqBullets[`FAQ_${i}_Q`];
    const a = faqBullets[`FAQ_${i}_A`];
    if (q && a) faqs.push({ q, a });
  }
  const faq = {
    badge: faqTags['BADGE'] || 'FREQUENTLY ASKED QUESTIONS',
    title: faqTags['TITLE'] || 'Everything You Need to Know Before Starting',
    faqs: faqs.length ? faqs : [
      { q: 'Do I need expensive gym equipment?', a: 'No! You can start with zero equipment and just floor space or a doorway pull-up bar.' }
    ]
  };

  // 10. FINAL_CTA
  const ctaTags = extractTags(getSec('FINAL_CTA_SECTION'));
  const finalCta = {
    badge: ctaTags['BADGE'] || 'YOUR TRANSFORMATION BEGINS TODAY',
    title: ctaTags['TITLE'] || 'Ready to Defy Gravity and Own Your Physique?',
    subtitle: ctaTags['SUBTITLE'] || 'Stop guessing your training. Apply for private mentorship today.',
    primaryCtaLabel: ctaTags['PRIMARY_CTA_LABEL'] || 'Apply Now For 1-on-1 Mentorship',
    secondaryCtaLabel: ctaTags['SECONDARY_CTA_LABEL'] || 'Get Free 7-Day Starter Guide'
  };

  // 11. FOOTER
  const footTags = extractTags(getSec('FOOTER_SECTION'));
  const footer = {
    copyright: footTags['COPYRIGHT'] || '© 2026 Vance Calisthenics Academy. All Rights Reserved.',
    disclaimer: footTags['DISCLAIMER'] || 'Consult with your physician before beginning any new exercise protocol.',
    socialInstagram: footTags['SOCIAL_INSTAGRAM'] || 'https://instagram.com',
    socialYoutube: footTags['SOCIAL_YOUTUBE'] || 'https://youtube.com',
    socialTiktok: footTags['SOCIAL_TIKTOK'] || 'https://tiktok.com'
  };

  return {
    meta,
    hero,
    asSeenIn,
    painPoints,
    howItWorks,
    aboutCoach,
    testimonials,
    pricing,
    faq,
    finalCta,
    footer
  };
}
