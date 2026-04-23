import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function LogoDesign() {
  return (
    <ServicePageTemplate
      tag="Design & Brand"
      title="Logo Design"
      titleItalic="Marks That Last"
      description="Distinctive logos designed with intent — from concept exploration to production-ready files that work everywhere, from favicon to billboard."
      tagline="The best logos are ideas, not decorations. We craft marks that mean something."
      body={[
        "A great logo solves a problem: it makes your brand instantly recognizable and telegraphs your values in a single glance. That sounds simple. It isn't. It takes rigorous research, disciplined restraint, and a willingness to throw away clever ideas in favour of clear ones.",
        "We approach logo design as a strategic exercise first and a craft exercise second. We explore three distinct directions before refining the one that earns it — then we deliver it in every format your business will ever need.",
      ]}
      stats={[
        { n: '120+', l: 'Logos Designed' },
        { n: '3', l: 'Concepts Per Project' },
        { n: '∞', l: 'Revisions Included' },
        { n: 'All', l: 'File Formats Delivered' },
      ]}
      benefits={[
        { title: 'Concept Before Craft', desc: 'We explore three distinct directions — wordmark, icon, combination — before settling on what actually works best for your brand.' },
        { title: 'Versatile by Design', desc: 'Every logo we design works in black & white, at 16px as a favicon, and at 10 feet on a hoarding. No exceptions.' },
        { title: 'Fully Production-Ready', desc: 'You get every vector format, every variation, and an unambiguous usage guide. Your printer, developer, and social team will thank you.' },
      ]}
      process={[
        { step: '01', title: 'Brand Brief', desc: 'We extract what makes your business distinctive — your values, your audience, and the emotion you want to own.' },
        { step: '02', title: 'Market Research', desc: 'We analyse your competitive landscape to identify design clichés to avoid and territory to claim.' },
        { step: '03', title: 'Concept Sketches', desc: 'Rough ideation across logomark, wordmark, and combination mark directions before committing to digital.' },
        { step: '04', title: 'Digital Refinement', desc: 'Three refined concepts presented in context (business cards, website header, app icon) for a realistic review.' },
        { step: '05', title: 'Final Delivery', desc: 'One refined direction taken to final — all variants, all colour modes, all file formats, plus a usage guide.' },
      ]}
      deliverables={[
        'Primary Logo (Vector)',
        'Wordmark & Lettermark Variants',
        'Icon / Logomark (Standalone)',
        'Colour Variations (Full, Mono, Reversed)',
        'Black & White Versions',
        'Favicon & App Icon Sizes',
        'All File Formats (SVG, PNG, PDF, EPS)',
        'Logo Usage Guidelines',
      ]}
      tools={['Adobe Illustrator', 'Figma', 'Procreate', 'Adobe InDesign']}
      toolsLabel="Design Tools"
      ctaTitle="Let's design a mark your brand will carry for decades."
      ctaDesc="Send us your brief and we'll get back to you within 24 hours with a project proposal."
      accentColor="#FF6B6B"
      relatedServices={[
        { title: 'Brand Identity', tag: 'Design & Brand', href: '/services/brand-identity' },
        { title: 'UI/UX Design', tag: 'Design & Brand', href: '/services/ui-ux-design' },
        { title: 'Pitch Deck Design', tag: 'Design & Brand', href: '/services/pitch-deck' },
      ]}
    />
  );
}
