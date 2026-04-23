import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function PhotographyService() {
  return (
    <ServicePageTemplate
      tag="Content & Media"
      title="Photography"
      titleItalic="Visuals That Sell"
      description="Professional product, lifestyle, and corporate photography that makes your brand look as good as it is — across every channel, at every size."
      tagline="In a visual economy, the quality of your photography is the quality of your brand."
      body={[
        "Stock photography says generic. Your own photography says serious. We've seen brands quadruple their product page conversion rates simply by replacing stock images with real photography that shows their product in context, with honest lighting and purposeful composition.",
        "We handle everything from art direction and prop styling to final retouching and delivery in every format you need — web-optimized for performance, print-ready for campaigns, and social-cut for platforms.",
      ]}
      stats={[
        { n: '300+', l: 'Shoots Completed' },
        { n: '10K+', l: 'Images Delivered' },
        { n: '2K+', l: 'Products Photographed' },
        { n: '80+', l: 'Brand Clients' },
      ]}
      benefits={[
        { title: 'Art Direction Included', desc: 'Every shoot is art-directed against your brand guidelines — mood boards, prop lists, and shot lists prepared in advance.' },
        { title: 'Studio & On-Location', desc: 'Clean studio setups for product photography, on-location shoots for lifestyle content, or a combination of both.' },
        { title: 'Fast Turnaround', desc: 'Selects within 48 hours, retouched finals within 5 business days. You\'ll never miss a campaign deadline with us.' },
      ]}
      process={[
        { step: '01', title: 'Pre-Production', desc: 'Shot list, mood board, prop plan, and schedule finalized and reviewed before the shoot day.' },
        { step: '02', title: 'Shoot Day', desc: 'Professional photographer, lighting setup, art direction, and prop styling — everything on the shot list, covered.' },
        { step: '03', title: 'Selects Review', desc: 'Lightly processed selects delivered within 48 hours for you to choose your final images.' },
        { step: '04', title: 'Retouching', desc: 'Full retouching — colour correction, background cleanup, and composite work where needed.' },
        { step: '05', title: 'Delivery', desc: 'Final images in all required formats: high-res print, web-optimized, and social-cut — organized and labelled.' },
      ]}
      deliverables={[
        'Product Photography (Hero + Detail Shots)',
        'Lifestyle & Context Photography',
        'Corporate Headshots & Team Photos',
        'Retouched Final Images (All Formats)',
        'Web-Optimized Exports (WebP / JPEG)',
        'Print-Ready Files (300 DPI)',
        'Social Media Crops (All Platforms)',
        'RAW File Archive (Optional)',
      ]}
      tools={['Sony A7 Series', 'Adobe Lightroom', 'Adobe Photoshop', 'Capture One', 'Profoto Lighting']}
      toolsLabel="Equipment & Software"
      ctaTitle="Let's make your brand look exactly as good as it is."
      ctaDesc="Tell us about your upcoming shoot — we'll build a shot list and quote within 24 hours."
      accentColor="#FFB347"
      relatedServices={[
        { title: 'Motion & Video', tag: 'Content & Media', href: '/services/rdf-motion-video' },
        { title: 'Social Media Content', tag: 'Content & Media', href: '/services/social-media-content' },
        { title: 'Brand Identity', tag: 'Design & Brand', href: '/services/brand-identity' },
      ]}
    />
  );
}
