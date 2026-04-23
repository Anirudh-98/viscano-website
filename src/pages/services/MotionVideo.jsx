import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function MotionVideo() {
  return (
    <ServicePageTemplate
      tag="Content & Media"
      title="Motion & Video"
      titleItalic="Stories in Motion"
      description="Cinematic brand films, product explainers, social reels, and motion graphics that make your audience stop, watch, and feel something."
      tagline="Video is the highest-converting content format. We make yours unforgettable."
      body={[
        "Attention is finite and increasingly expensive. A brand film that looks generic gets skipped. A product video that shows, not tells, gets shared. The difference is craft — in the writing, the cinematography, the pacing, the sound design — applied with intention.",
        "We handle everything: pre-production scripting and storyboarding, production with professional crew, and post-production with colour grading, motion graphics, and sound mix. You get a final asset that works across every platform.",
      ]}
      stats={[
        { n: '200+', l: 'Videos Produced' },
        { n: '+67%', l: 'Avg. View Rate Lift' },
        { n: '50+', l: 'Content Pieces / Mo.' },
        { n: '40+', l: 'Brand Clients' },
      ]}
      benefits={[
        { title: 'Full Service', desc: 'Script to screen — we handle every stage so you\'re not coordinating five different vendors for a single deliverable.' },
        { title: 'Platform Optimised', desc: 'Every video is cut and formatted for where it will live: Instagram Reels, YouTube, LinkedIn, and your website.' },
        { title: 'Brand-Consistent', desc: 'Colour grade, typography, pacing, and music are all matched to your brand guidelines so every video feels unmistakably yours.' },
      ]}
      process={[
        { step: '01', title: 'Creative Brief', desc: 'We define the objective, audience, tone, and key message before writing a single word of script.' },
        { step: '02', title: 'Script & Storyboard', desc: 'A shot-by-shot storyboard and final script reviewed and signed off before production day.' },
        { step: '03', title: 'Production', desc: 'Professional camera crew, lighting, and direction — on location or in our studio — executed against the storyboard.' },
        { step: '04', title: 'Post-Production', desc: 'Edit, colour grade, motion graphics, voiceover, and sound design — all handled in-house.' },
        { step: '05', title: 'Delivery & Repurposing', desc: 'Master file plus platform-cut versions (16:9, 9:16, 1:1, 4:5) with captions and thumbnail options.' },
      ]}
      deliverables={[
        'Brand Film / Hero Video',
        'Product Demo or Explainer Video',
        'Social Media Reels & Stories (Multiple Cuts)',
        'Motion Graphics Package',
        'Voiceover & Sound Design',
        'Subtitles & Captions',
        'All Platform-Formatted Exports',
        'Raw Footage Archive',
      ]}
      tools={['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Cinema 4D', 'Adobe Audition', 'Blackmagic Cameras']}
      toolsLabel="Production Tools"
      ctaTitle="Let's make content your audience actually watches."
      ctaDesc="Tell us about your next campaign and we'll put together a creative brief and production quote."
      accentColor="#FFB347"
      relatedServices={[
        { title: 'Photography', tag: 'Content & Media', href: '/services/photography' },
        { title: 'Social Media Content', tag: 'Content & Media', href: '/services/social-media-content' },
        { title: 'Brand Identity', tag: 'Design & Brand', href: '/services/brand-identity' },
      ]}
    />
  );
}
