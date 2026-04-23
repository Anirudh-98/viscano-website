import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function MobileApps() {
  return (
    <ServicePageTemplate
      tag="Development"
      title="Mobile Apps"
      titleItalic="Native Experiences"
      description="Cross-platform iOS and Android apps that feel native, perform beautifully, and delight your users from the first tap to the thousandth session."
      tagline="Mobile experiences that users open every day — by choice, not obligation."
      body={[
        "Great mobile apps aren't just websites shrunk to a small screen. They're designed around thumb zones, offline states, push notifications, and the specific cadence of how people actually use their phones. We build with that understanding at the core.",
        "We use React Native and Expo to ship cross-platform apps at speed without sacrificing the feel of a native experience — then we optimize per platform so iOS feels like iOS and Android feels like Android.",
      ]}
      stats={[
        { n: '25+', l: 'Apps Launched' },
        { n: '4.8★', l: 'Avg. App Store Rating' },
        { n: '500K+', l: 'Total Downloads' },
        { n: '2 Plat.', l: 'iOS & Android' },
      ]}
      benefits={[
        { title: 'One Codebase, Two Platforms', desc: 'React Native lets us ship iOS and Android simultaneously — cutting cost and timeline without compromising quality.' },
        { title: 'Offline-First', desc: 'We design for spotty connectivity from the start, with local state, sync queues, and graceful degradation built in.' },
        { title: 'App Store Ready', desc: 'We handle the submission process, ASO optimization, screenshots, and compliance so you can focus on your business.' },
      ]}
      process={[
        { step: '01', title: 'Product Definition', desc: 'We map user journeys, define core screens, and agree on the MVP feature set before opening Figma.' },
        { step: '02', title: 'UX & UI Design', desc: 'Platform-native design patterns, gesture-driven navigation, and accessible typography designed in Figma with developer handoff.' },
        { step: '03', title: 'Development', desc: 'React Native build with TypeScript, with CI pipelines pushing to TestFlight and Play Console weekly.' },
        { step: '04', title: 'QA & Device Testing', desc: 'Tested on a matrix of real iOS and Android devices across OS versions and screen sizes.' },
        { step: '05', title: 'Submission & Launch', desc: 'App Store and Play Store submission, review management, and a post-launch crash monitoring setup.' },
      ]}
      deliverables={[
        'iOS & Android App (React Native)',
        'App Architecture & Backend API',
        'Push Notification System',
        'Offline Support & Data Sync',
        'Analytics & Crash Reporting',
        'App Store & Play Store Submission',
        'Post-Launch Support Plan',
      ]}
      tools={['React Native', 'Expo', 'TypeScript', 'Firebase', 'Redux Toolkit', 'Node.js', 'Sentry', 'Fastlane']}
      toolsLabel="Tech Stack"
      ctaTitle="Let's ship an app your users will actually use."
      ctaDesc="We'll scope your app, give you a realistic timeline, and start building within two weeks of kickoff."
      accentColor="#6A4DFF"
      relatedServices={[
        { title: 'SaaS Products', tag: 'Development', href: '/services/saas-products' },
        { title: 'UI/UX Design', tag: 'Design', href: '/services/ui-ux-design' },
        { title: 'Web Development', tag: 'Development', href: '/services/web-development' },
      ]}
    />
  );
}
