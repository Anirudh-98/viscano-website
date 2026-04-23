import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function Ecommerce() {
  return (
    <ServicePageTemplate
      tag="Development"
      title="E-commerce"
      titleItalic="Built to Convert"
      description="Custom online stores and headless commerce solutions designed to maximize conversion, handle scale, and deliver a buying experience your customers can't resist."
      tagline="Every element of your store is engineered to turn browsers into buyers."
      body={[
        "Generic Shopify themes plateau. When you hit a growth ceiling — slow load times, rigid templates, or a checkout that leaks revenue — you need a commerce platform built exactly for your products, brand, and customers.",
        "We build custom storefronts on Shopify Plus or fully headless architectures that let you move faster, convert better, and own the entire experience from discovery to post-purchase.",
      ]}
      stats={[
        { n: '35+', l: 'Stores Built' },
        { n: '+45%', l: 'Avg. Conv. Rate Lift' },
        { n: '+312%', l: 'Avg. Revenue Growth' },
        { n: '0.7s', l: 'Avg. Time to First Buy' },
      ]}
      benefits={[
        { title: 'Conversion-Led Design', desc: 'Every UI decision is tested against conversion data — from hero layout to checkout flow and post-purchase upsells.' },
        { title: 'Blazing Fast', desc: 'Sub-second load times on product pages because every 100ms of delay costs you 1% in conversion.' },
        { title: 'Owned Stack', desc: 'Your store, your data, your rules. No black-box plugins slowing you down or holding your data hostage.' },
      ]}
      process={[
        { step: '01', title: 'Commerce Audit', desc: 'We analyse your current store: funnel drop-offs, load times, mobile UX gaps, and missed revenue opportunities.' },
        { step: '02', title: 'Store Architecture', desc: 'We design the storefront structure, product taxonomy, and checkout flow optimized for your specific catalogue.' },
        { step: '03', title: 'Design & Build', desc: 'Custom theme or headless build, developed in sprints with weekly demos on a staging store.' },
        { step: '04', title: 'Integrations & QA', desc: 'Payment gateways, shipping providers, loyalty apps, and email marketing platforms tested end-to-end.' },
        { step: '05', title: 'Launch & Scale', desc: 'Soft launch to a subset of traffic, performance validated, then full rollout with a post-launch CRO roadmap.' },
      ]}
      deliverables={[
        'Custom Storefront Design & Build',
        'Mobile-Optimized Product Pages',
        'Checkout Flow Optimization',
        'Payment Gateway Integration',
        'Inventory & Order Management',
        'Email Marketing Integration (Klaviyo)',
        'Analytics & Conversion Tracking',
        'Post-Launch CRO Roadmap',
      ]}
      tools={['Shopify Plus', 'Next.js', 'Hydrogen / Oxygen', 'Stripe', 'Klaviyo', 'Google Analytics 4', 'Meta Pixel', 'Algolia']}
      toolsLabel="Platforms & Tools"
      ctaTitle="Let's build a store that outsells your competitors."
      ctaDesc="We'll audit your current store for free and show you exactly where you're leaving money on the table."
      accentColor="#6A4DFF"
      relatedServices={[
        { title: 'Web Development', tag: 'Development', href: '/services/web-development' },
        { title: 'Digital Marketing', tag: 'Growth', href: '/services/digital-marketing' },
        { title: 'Analytics & Optimization', tag: 'Growth', href: '/services/analytics-optimization' },
      ]}
    />
  );
}
