import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function UiUxDesign() {
  return (
    <ServicePageTemplate
      tag="Design & Brand"
      title="UI/UX Design"
      titleItalic="Friction-Free Journeys"
      description="Research-backed user interfaces and experiences that reduce drop-off, increase conversion, and make your product the one users recommend to their colleagues."
      tagline="Good UX is invisible. Great UX is the reason users keep coming back."
      body={[
        "Friction is expensive. Every confusing navigation, every unclear CTA, every form field that asks for something users don't understand costs you conversions, trust, and revenue. We design to remove friction — systematically, testably, measurably.",
        "Our UX process starts with research: user interviews, heatmap analysis, funnel audits. We design with data, then validate with prototypes before a single line of code is written. The result is an interface your developers can build with confidence and your users can navigate without thinking.",
      ]}
      stats={[
        { n: '60+', l: 'Products Designed' },
        { n: '+38%', l: 'Avg. Conversion Lift' },
        { n: '500+', l: 'User Testing Sessions' },
        { n: '+32pts', l: 'Avg. NPS Improvement' },
      ]}
      benefits={[
        { title: 'Research Before Pixels', desc: 'We talk to your users, analyse your data, and audit your current experience before opening Figma. Insight precedes design.' },
        { title: 'Prototype & Validate', desc: 'Interactive prototypes are tested with real users before handoff — catching issues that cost 10x more to fix in production.' },
        { title: 'Developer-Ready', desc: 'Precise component specs, spacing systems, and interaction states delivered in Figma so devs can build without guessing.' },
      ]}
      process={[
        { step: '01', title: 'UX Research & Audit', desc: 'User interviews, analytics review, heatmap analysis, and competitor benchmarking to understand where and why users struggle.' },
        { step: '02', title: 'Information Architecture', desc: 'Sitemap, user flows, and navigation structure designed and reviewed before any visual work begins.' },
        { step: '03', title: 'Wireframes', desc: 'Low-fidelity wireframes for every key screen, validated with stakeholders before moving to high fidelity.' },
        { step: '04', title: 'Visual Design & Design System', desc: 'High-fidelity mockups built on a consistent component library — colours, typography, spacing, and states all defined.' },
        { step: '05', title: 'Prototype, Test & Handoff', desc: 'Clickable Figma prototype tested with 5–10 target users, iterated based on findings, then handed off to development.' },
      ]}
      deliverables={[
        'UX Research Report & Insights',
        'User Journey Maps',
        'Information Architecture & Sitemaps',
        'Wireframes (All Key Screens)',
        'High-Fidelity UI Design (Figma)',
        'Interactive Prototype',
        'Design System & Component Library',
        'Developer Handoff Specifications',
      ]}
      tools={['Figma', 'FigJam', 'Hotjar', 'Maze', 'Notion', 'Loom', 'Zeplin']}
      toolsLabel="Design & Research Tools"
      ctaTitle="Let's design an experience your users can't stop talking about."
      ctaDesc="Share your product and we'll do a free 15-minute UX audit to show you three quick wins."
      accentColor="#FF6B6B"
      relatedServices={[
        { title: 'Web Development', tag: 'Development', href: '/services/web-development' },
        { title: 'Brand Identity', tag: 'Design & Brand', href: '/services/brand-identity' },
        { title: 'SaaS Products', tag: 'Development', href: '/services/saas-products' },
      ]}
    />
  );
}
