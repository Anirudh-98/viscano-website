import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function SaasProducts() {
  return (
    <ServicePageTemplate
      tag="Development"
      title="SaaS Products"
      titleItalic="Built to Scale"
      description="End-to-end SaaS platform development — from zero to launch. Auth, billing, dashboards, APIs, and everything in between, engineered for reliability at any scale."
      tagline="We turn your product idea into a production-ready SaaS that users love."
      body={[
        "Building a SaaS product is more than writing features — it's architecting a system that handles growth, security, and complexity without slowing your team down. We've built SaaS platforms across HR, fintech, edtech, and B2B verticals, and we bring that depth to every engagement.",
        "From the first discovery call to post-launch growth sprints, we act as a true product partner — not just a vendor. That means we push back when something doesn't serve your users, and we ship with speed when it does.",
      ]}
      stats={[
        { n: '40+', l: 'SaaS Platforms Built' },
        { n: '8wks', l: 'Avg. MVP Timeline' },
        { n: '99.9%', l: 'Uptime SLA' },
        { n: '94%', l: 'Client Renewal Rate' },
      ]}
      benefits={[
        { title: 'MVP in 8 Weeks', desc: 'We scope ruthlessly and build the version that proves your thesis fast — then layer complexity as you grow.' },
        { title: 'Multi-Tenant Ready', desc: 'Role-based access control, team workspaces, and data isolation built into the architecture from day one.' },
        { title: 'Revenue-Wired', desc: 'Stripe billing, usage metering, and subscription management integrated and tested before you ever launch.' },
      ]}
      process={[
        { step: '01', title: 'Product Discovery', desc: 'We run structured discovery sessions to define your user personas, core jobs-to-be-done, and the tightest MVP scope.' },
        { step: '02', title: 'Architecture Design', desc: 'Database schema, API contracts, auth flows, and infrastructure design reviewed and signed off before build begins.' },
        { step: '03', title: 'Iterative Build', desc: 'Two-week sprints, weekly demos, and a living Notion doc that tracks every decision and trade-off.' },
        { step: '04', title: 'Integration & QA', desc: 'End-to-end testing, payment integration testing, security review, and load testing before launch day.' },
        { step: '05', title: 'Launch & Growth', desc: 'Production deployment, monitoring setup, and a roadmap for the features that come after your first 100 users.' },
      ]}
      deliverables={[
        'Full-Stack SaaS Platform (Web)',
        'Authentication & Authorization System',
        'Stripe Billing & Subscription Management',
        'Admin & User Dashboard',
        'REST / GraphQL API with Documentation',
        'CI/CD Pipeline & Automated Testing',
        'Cloud Infrastructure (AWS / GCP / Vercel)',
        'Post-Launch Support & Monitoring',
      ]}
      tools={['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Auth0 / NextAuth', 'AWS', 'Redis', 'Docker']}
      toolsLabel="Tech Stack"
      ctaTitle="Your SaaS idea deserves a world-class engineering team."
      ctaDesc="Book a discovery call. We'll review your idea, scope the MVP, and give you an honest timeline."
      accentColor="#6A4DFF"
      relatedServices={[
        { title: 'Web Development', tag: 'Development', href: '/services/web-development' },
        { title: 'UI/UX Design', tag: 'Design', href: '/services/ui-ux-design' },
        { title: 'Analytics & Optimization', tag: 'Growth', href: '/services/analytics-optimization' },
      ]}
    />
  );
}
