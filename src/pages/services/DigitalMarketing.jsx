import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function DigitalMarketing() {
  return (
    <ServicePageTemplate
      tag="Growth & Strategy"
      title="Digital Marketing"
      titleItalic="Campaigns That Convert"
      description="Performance-led campaigns across paid, organic, and earned channels — built around your revenue goals, not impressions or vanity metrics."
      tagline="We don't run campaigns. We build revenue machines."
      body={[
        "Every rupee of marketing spend should be traceable to a business outcome. We run paid search, paid social, SEO, and email campaigns with a single north star: measurable revenue growth. We set up the tracking, build the creative, run the campaigns, and iterate based on what the data tells us.",
        "We work best with brands that are ready to scale — that have product-market fit, a clear offer, and a budget they're committed to deploying intelligently. If that's you, we'll tell you exactly what's possible and hold ourselves accountable to it.",
      ]}
      stats={[
        { n: '100+', l: 'Campaigns Managed' },
        { n: '3.1x', l: 'Avg. ROAS' },
        { n: '₹50Cr+', l: 'Revenue Generated' },
        { n: '15+', l: 'Industries Served' },
      ]}
      benefits={[
        { title: 'Full-Funnel Coverage', desc: 'Awareness to conversion — we run campaigns at every stage of the funnel so no qualified lead slips through.' },
        { title: 'Creative In-House', desc: 'We produce the ads too. No briefing external agencies for creative — strategy and execution stay aligned.' },
        { title: 'Transparent Reporting', desc: 'Weekly performance reviews with a live dashboard. You\'ll always know exactly where every rupee went and what it returned.' },
      ]}
      process={[
        { step: '01', title: 'Growth Audit', desc: 'We forensically review your current marketing: ad accounts, SEO baseline, email sequences, and conversion funnel.' },
        { step: '02', title: 'Strategy & Forecast', desc: 'A 90-day marketing roadmap with channel mix, budget allocation, and projected outcomes.' },
        { step: '03', title: 'Creative & Setup', desc: 'Ad creative, landing pages, email sequences, and campaign structure built and reviewed before launch.' },
        { step: '04', title: 'Launch & Optimise', desc: 'Live within two weeks, then weekly optimisation: bid adjustments, creative rotation, audience refinement.' },
        { step: '05', title: 'Scale & Report', desc: 'Monthly strategy reviews to double down on winning channels and cut underperformers.' },
      ]}
      deliverables={[
        'Marketing Strategy & Channel Plan',
        'Ad Creative (Static, Video, Carousel)',
        'Google & Meta Campaign Setup',
        'Landing Page Design & Build',
        'Email Marketing Sequences',
        'Weekly Performance Reports',
        'Live Analytics Dashboard',
        'Monthly Strategy Review',
      ]}
      tools={['Google Ads', 'Meta Ads Manager', 'Klaviyo', 'HubSpot', 'SEMrush', 'Google Analytics 4', 'Looker Studio', 'Hotjar']}
      toolsLabel="Marketing Stack"
      ctaTitle="Let's build a marketing machine that compounds over time."
      ctaDesc="Book a 30-minute strategy call. We'll audit your current marketing spend and show you where the growth is hiding."
      accentColor="#00C896"
      relatedServices={[
        { title: 'Analytics & Optimization', tag: 'Growth', href: '/services/analytics-optimization' },
        { title: 'Social Media Content', tag: 'Content & Media', href: '/services/social-media-content' },
        { title: 'Web Development', tag: 'Development', href: '/services/web-development' },
      ]}
    />
  );
}
