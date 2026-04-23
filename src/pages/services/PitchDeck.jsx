import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function PitchDeck() {
  return (
    <ServicePageTemplate
      tag="Design & Brand"
      title="Pitch Deck Design"
      titleItalic="Stories That Close"
      description="Investor-ready pitch decks that communicate your vision with clarity, build credibility through design, and give you the best possible shot at your next raise."
      tagline="A great pitch deck doesn't just inform — it makes investors feel the opportunity."
      body={[
        "Investors see hundreds of decks a month. The ones they remember aren't the ones with the most data — they're the ones that tell a compelling story clearly, build a credible narrative, and look like they were made by people who care about the details.",
        "We work with founders from seed to Series B to craft decks that combine narrative structure, data visualization, and design craft. We'll push back if your story has gaps, and we'll help you find the clearest way to tell it.",
      ]}
      stats={[
        { n: '50+', l: 'Decks Created' },
        { n: '$2M+', l: 'Avg. Round Size' },
        { n: '85%', l: 'Meeting Rate' },
        { n: '99%', l: 'Client Satisfaction' },
      ]}
      benefits={[
        { title: 'Story-First', desc: 'We structure your narrative before designing a single slide — problem, solution, traction, ask — in the order investors expect.' },
        { title: 'Data Made Beautiful', desc: 'We turn your metrics, TAM calculations, and growth charts into visuals that make your numbers land harder.' },
        { title: 'Multiple Formats', desc: 'Delivered for live presentation (big text, bold visuals) and send-ahead reading (more detail, self-explanatory) in every format.' },
      ]}
      process={[
        { step: '01', title: 'Story Discovery', desc: 'A structured interview to extract your problem, solution, traction, team, and ask — and find the narrative spine that holds it together.' },
        { step: '02', title: 'Outline & Structure', desc: 'We draft the slide outline with headline copy for every slide before designing anything.' },
        { step: '03', title: 'Visual Direction', desc: 'Two design directions — one bold, one refined — reviewed as a mood board and sample slide.' },
        { step: '04', title: 'Full Design', desc: 'Every slide designed in Figma with custom data visualizations, consistent typography, and pixel-perfect layouts.' },
        { step: '05', title: 'Refinement & Delivery', desc: 'Two rounds of revisions, then export to PowerPoint, Google Slides, and PDF in both presentation and send-ahead versions.' },
      ]}
      deliverables={[
        'Investor Pitch Deck (10–15 Slides)',
        'Send-Ahead Version (Detailed)',
        'Custom Data Visualizations',
        'Executive Summary (1-Pager)',
        'Animated Presentation Version',
        'Source Files (Figma + PowerPoint)',
        'PDF & Google Slides Export',
      ]}
      tools={['Figma', 'PowerPoint', 'Google Slides', 'Adobe After Effects', 'Notion']}
      toolsLabel="Design Tools"
      ctaTitle="Let's build the deck that opens the doors you need opened."
      ctaDesc="We typically deliver a first draft within 7 business days. Share your details and let's get started."
      accentColor="#FF6B6B"
      relatedServices={[
        { title: 'Brand Identity', tag: 'Design & Brand', href: '/services/brand-identity' },
        { title: 'Logo Design', tag: 'Design & Brand', href: '/services/logo-design' },
        { title: 'UI/UX Design', tag: 'Design & Brand', href: '/services/ui-ux-design' },
      ]}
    />
  );
}
