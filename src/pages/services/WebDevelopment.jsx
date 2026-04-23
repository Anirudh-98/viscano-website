import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function WebDevelopment() {
  return (
    <ServicePageTemplate
      tag="Development"
      title="Web Development"
      titleItalic="Fast & Scalable"
      description="We build high-performance websites and web apps that combine cutting-edge engineering, pixel-perfect design, and architecture built to grow with your business."
      tagline="Websites that load fast, rank high, and convert visitors into customers."
      body={[
        "We don't build websites — we build digital engines. Every line of code is written with performance, accessibility, and longevity in mind. Whether you need a marketing site, a complex web app, or a headless CMS-powered platform, we architect the right solution from the ground up.",
        "Our process is collaborative and transparent: weekly demos, live staging environments, and a clear handoff with full documentation. You'll always know where your project stands.",
      ]}
      stats={[
        { n: '150+', l: 'Websites Launched' },
        { n: '98', l: 'Avg. PageSpeed Score' },
        { n: '0.8s', l: 'Avg. Load Time' },
        { n: '99.9%', l: 'Uptime SLA' },
      ]}
      benefits={[
        { title: 'Performance-First', desc: 'We optimize every asset, route, and render path to score 95+ on Core Web Vitals out of the box.' },
        { title: 'SEO Ready', desc: 'Semantic HTML, structured data, sitemaps, and server-side rendering baked into every project from day one.' },
        { title: 'Built to Scale', desc: 'Modular architecture means your site grows with your business — add features without rewriting everything.' },
      ]}
      process={[
        { step: '01', title: 'Discovery & Scoping', desc: 'We map out your goals, audience, content structure, and technical requirements in a detailed scope document.' },
        { step: '02', title: 'Design & Prototype', desc: 'Our designers build wireframes and high-fidelity mockups that you review and approve before a single line of code is written.' },
        { step: '03', title: 'Development Sprints', desc: 'We build in two-week sprints with weekly demos on a live staging environment so you can give real feedback in real time.' },
        { step: '04', title: 'QA & Optimization', desc: 'Cross-browser testing, accessibility audit, performance optimization, and final content review before launch.' },
        { step: '05', title: 'Launch & Handoff', desc: 'Zero-downtime deployment, DNS cutover support, and a full walkthrough of the CMS so your team can own the content.' },
      ]}
      deliverables={[
        'Custom Website (Responsive, Mobile-First)',
        'CMS Integration (Sanity / Contentful / Custom)',
        'SEO Foundation & Sitemap',
        'Performance Optimization (95+ PageSpeed)',
        'Analytics & Conversion Tracking Setup',
        'SSL, Security Hardening & Hosting Setup',
        'Full Documentation & CMS Training',
      ]}
      tools={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS', 'Vercel', 'Cloudflare', 'Framer Motion']}
      toolsLabel="Tech Stack"
      ctaTitle="Let's build your web presence — the right way."
      ctaDesc="Tell us what you're working on. We'll come back with a scoped proposal, timeline, and a clear plan."
      accentColor="#6A4DFF"
      relatedServices={[
        { title: 'SaaS Products', tag: 'Development', href: '/services/saas-products' },
        { title: 'UI/UX Design', tag: 'Design', href: '/services/ui-ux-design' },
        { title: 'Brand Identity', tag: 'Design & Brand', href: '/services/brand-identity' },
      ]}
    />
  );
}
