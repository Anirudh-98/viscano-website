import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function BrandIdentity() {
  return (
    <ServicePageTemplate
      tag="Design & Brand"
      title="Brand Identity"
      titleItalic="Systems That Endure"
      description="We create complete visual identities that communicate what your brand stands for, differentiate you from competitors, and scale consistently across every touchpoint."
      tagline="Your brand is a promise. We make sure every visual keeps it."
      body={[
        "A logo is not a brand. A brand is a living system — the sum of every decision your audience experiences, from your website to your packaging to the way your team writes an email. We design systems that make those decisions easy and consistent.",
        "We start with strategy: understanding your market position, your audience's expectations, and the emotional territory you want to own. Then we build a visual language that expresses all of it — distinctively, beautifully, and durably.",
      ]}
      stats={[
        { n: '80+', l: 'Brands Created' },
        { n: '98%', l: 'Client Satisfaction' },
        { n: '80+', l: 'Avg. Guideline Pages' },
        { n: '4.8wks', l: 'Avg. Delivery Time' },
      ]}
      benefits={[
        { title: 'Strategy-Led', desc: 'Every visual decision is rooted in a clear brand strategy, positioning statement, and audience insight — not just aesthetic preference.' },
        { title: 'System Thinking', desc: 'We design for consistency at scale: one system that looks right on a business card, a billboard, and a mobile app.' },
        { title: 'Future-Proof', desc: 'Delivered in formats ready for digital, print, motion, and whatever comes next — with a guidelines doc your whole team can use.' },
      ]}
      process={[
        { step: '01', title: 'Discovery & Research', desc: 'Deep-dive into your market, competitors, and audience to uncover the positioning territory that truly differentiates you.' },
        { step: '02', title: 'Strategic Platform', desc: 'Mission, values, brand voice, and visual direction defined before a single concept is drawn.' },
        { step: '03', title: 'Visual Exploration', desc: 'Three distinct creative directions — each a fully realized world, not just logo sketches — reviewed in a structured presentation.' },
        { step: '04', title: 'System Build', desc: 'The chosen direction is expanded into a full system: logo suite, color palette, typography, iconography, and photography style.' },
        { step: '05', title: 'Handoff & Rollout', desc: 'Production-ready files in every format, a clear brand guidelines document, and support during the rollout phase.' },
      ]}
      deliverables={[
        'Brand Strategy & Positioning Document',
        'Logo Suite (Primary, Secondary, Icon)',
        'Color System (Primary, Secondary, Neutral)',
        'Typography Hierarchy & Font Licenses',
        'Iconography & Illustration Style',
        'Photography & Art Direction Guidelines',
        'Motion & Animation Principles',
        'Brand Voice & Tone Guide',
        'Full Brand Guidelines (PDF + Figma)',
      ]}
      tools={['Figma', 'Adobe Illustrator', 'Adobe InDesign', 'Notion', 'Procreate']}
      toolsLabel="Design Tools"
      ctaTitle="Let's build a brand that stands for something."
      ctaDesc="Start with a discovery call. We'll tell you exactly what's possible in your budget and timeline."
      accentColor="#FF6B6B"
      relatedServices={[
        { title: 'Logo Design', tag: 'Design & Brand', href: '/services/logo-design' },
        { title: 'UI/UX Design', tag: 'Design & Brand', href: '/services/ui-ux-design' },
        { title: 'Pitch Deck Design', tag: 'Design & Brand', href: '/services/pitch-deck' },
      ]}
    />
  );
}
