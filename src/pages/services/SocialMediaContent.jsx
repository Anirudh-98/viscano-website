import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function SocialMediaContent() {
  return (
    <ServicePageTemplate
      tag="Content & Media"
      title="Social Media"
      titleItalic="Scroll-Stopping Creative"
      description="Platform-native content that builds your brand, grows your audience, and drives real business results — at the volume and consistency that algorithms demand."
      tagline="Your competitors are posting. We make sure you're the ones worth following."
      body={[
        "Showing up consistently on social media is the minimum. Standing out is the work. We create scroll-stopping content — Reels, carousels, stories, and static posts — that feels native to each platform while staying unmistakably on-brand.",
        "We're not a post-and-pray content agency. Everything we produce is built around a content strategy tied to your business goals: growing brand awareness, generating leads, or converting followers into customers.",
      ]}
      stats={[
        { n: '30+', l: 'Accounts Managed' },
        { n: '100+', l: 'Content Pieces / Mo.' },
        { n: '+156%', l: 'Avg. Engagement Lift' },
        { n: '2M+', l: 'Followers Grown' },
      ]}
      benefits={[
        { title: 'Strategy Before Posts', desc: 'Content pillars, posting cadence, and platform-specific strategy defined before we make a single graphic.' },
        { title: 'Every Format Covered', desc: 'From static posts and carousels to Reels, Stories, and LinkedIn articles — we produce it all, consistently.' },
        { title: 'Performance-Tracked', desc: 'Monthly analytics reports that tie content performance to reach, engagement, and lead generation — not vanity metrics.' },
      ]}
      process={[
        { step: '01', title: 'Content Audit', desc: 'We audit your existing content — what\'s working, what\'s not, and what your competitors are doing differently.' },
        { step: '02', title: 'Strategy & Pillars', desc: 'Content pillars, brand voice guide, platform strategy, and 30-day content calendar agreed before production starts.' },
        { step: '03', title: 'Content Creation', desc: 'Design, copywriting, photography direction, and video editing — all in-house, all brand-consistent.' },
        { step: '04', title: 'Review & Schedule', desc: 'Monthly content batch reviewed and approved by you before scheduling — no surprises, full control.' },
        { step: '05', title: 'Publish & Analyse', desc: 'Scheduled publishing, community management, and a monthly performance review to refine strategy.' },
      ]}
      deliverables={[
        'Content Strategy & Content Pillars',
        'Monthly Content Calendar',
        'Designed Static Posts & Carousels',
        'Reels & Short-Form Video Edits',
        'Stories & Highlight Covers',
        'Captions & Hashtag Strategy',
        'Monthly Analytics Report',
        'Community Management (Optional)',
      ]}
      tools={['Figma', 'CapCut', 'Adobe Premiere', 'Later / Buffer', 'Canva Pro', 'Meta Business Suite', 'Notion']}
      toolsLabel="Tools & Platforms"
      ctaTitle="Let's turn your social channels into a growth engine."
      ctaDesc="Start with a free content audit — we'll show you exactly where your content is leaving engagement on the table."
      accentColor="#FFB347"
      relatedServices={[
        { title: 'Motion & Video', tag: 'Content & Media', href: '/services/rdf-motion-video' },
        { title: 'Photography', tag: 'Content & Media', href: '/services/photography' },
        { title: 'Digital Marketing', tag: 'Growth', href: '/services/digital-marketing' },
      ]}
    />
  );
}
