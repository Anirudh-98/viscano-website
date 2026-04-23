import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function AnalyticsOptimization() {
  return (
    <ServicePageTemplate
      tag="Growth & Strategy"
      title="Analytics &"
      titleItalic="Optimization"
      description="We instrument your digital product, run structured experiments, and turn data into decisions that systematically improve conversion, retention, and revenue."
      tagline="What can't be measured can't be improved. We fix that first."
      body={[
        "Most businesses are flying blind. They know their revenue but not which pages are killing it, which flows are leaking users, or which copy change would have doubled their trial signups. We fix that by building the measurement infrastructure that makes the invisible visible.",
        "Once the data is right, we design experiments: A/B tests, multivariate tests, funnel interventions. Every test has a hypothesis, a success metric, and a minimum detectable effect. We don't run tests to run tests — we run tests to find winners and scale them.",
      ]}
      stats={[
        { n: '70+', l: 'Analytics Audits Done' },
        { n: '+38%', l: 'Avg. CRO Lift' },
        { n: '500+', l: 'Tests Run' },
        { n: '₹100Cr+', l: 'Revenue Attributed' },
      ]}
      benefits={[
        { title: 'Tracking That Works', desc: 'GA4, Mixpanel, and Segment configured correctly — events, funnels, and cohorts that actually reflect your user behaviour.' },
        { title: 'Hypothesis-Driven Tests', desc: 'Every A/B test starts with a data-backed hypothesis. We don\'t change button colours; we test structural improvements.' },
        { title: 'Compounding Returns', desc: 'Each winning test becomes the new baseline. Over 6 months, compounded wins produce step-change improvements in conversion.' },
      ]}
      process={[
        { step: '01', title: 'Analytics Audit', desc: 'We review your current tracking setup for gaps, misconfigurations, and missing events that are blinding your team.' },
        { step: '02', title: 'Tracking Implementation', desc: 'Full event tracking, funnel definition, and goal configuration across GA4, Mixpanel, or your chosen platform.' },
        { step: '03', title: 'Funnel Analysis', desc: 'We map your conversion funnels, identify the highest-impact drop-off points, and quantify the revenue at stake.' },
        { step: '04', title: 'Test Design & Launch', desc: 'Structured A/B tests with statistical rigor: sample size calculation, holdback groups, and clear success criteria.' },
        { step: '05', title: 'Analyse & Scale', desc: 'Winners are documented, scaled, and become the baseline for the next round of experiments.' },
      ]}
      deliverables={[
        'Analytics Audit Report',
        'Full Event Tracking Implementation',
        'Conversion Funnel Analysis',
        'A/B Test Reports (With Statistical Significance)',
        'Heatmap & Session Recording Analysis',
        'Custom Analytics Dashboard',
        'Monthly Experimentation Report',
        'CRO Roadmap (Prioritized Backlog)',
      ]}
      tools={['Google Analytics 4', 'Mixpanel', 'Hotjar', 'Optimizely', 'Segment', 'Looker Studio', 'VWO', 'FullStory']}
      toolsLabel="Analytics Stack"
      ctaTitle="Let's make your data work for your revenue, not just your reports."
      ctaDesc="We start with a free analytics audit. Send us your GA4 access and we'll show you what you're missing."
      accentColor="#00C896"
      relatedServices={[
        { title: 'Digital Marketing', tag: 'Growth', href: '/services/digital-marketing' },
        { title: 'SaaS Products', tag: 'Development', href: '/services/saas-products' },
        { title: 'Web Development', tag: 'Development', href: '/services/web-development' },
      ]}
    />
  );
}
