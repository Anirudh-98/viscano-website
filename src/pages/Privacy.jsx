import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const SECTIONS = [
    {
        title: 'Information We Collect',
        body: 'We collect information you provide directly — name, email, and project details submitted via our contact form. We also collect standard analytics data (page views, referral source) through Google Analytics to understand how visitors use the site.',
    },
    {
        title: 'How We Use It',
        body: 'Information submitted through our contact form is used solely to respond to your inquiry and scope your project. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
    },
    {
        title: 'Cookies & Analytics',
        body: 'We use Google Analytics (GA4) to collect anonymised usage data. No personally identifiable information is stored in cookies. You can opt out of analytics tracking via your browser settings or a GA opt-out extension.',
    },
    {
        title: 'Data Storage & Security',
        body: 'Form submissions are stored in Firebase Firestore, hosted on Google Cloud infrastructure with encryption at rest and in transit. As a cybersecurity-aware studio, we follow secure architecture practices in all product and data decisions.',
    },
    {
        title: 'Third-Party Services',
        body: 'Our site integrates Google Analytics, Google Fonts, and Firebase. These services have their own privacy policies. We recommend reviewing them independently if you have concerns.',
    },
    {
        title: 'Your Rights',
        body: 'You may request access to, correction of, or deletion of any personal data you have submitted to us by emailing connect@viscano.com. We will respond within 7 business days.',
    },
    {
        title: 'Contact',
        body: 'For any privacy-related queries, reach us at connect@viscano.com. Viscano Creative Studio, Hyderabad, Telangana, India.',
    },
];

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#F5F3EE] font-sans">
            <SEOHead
                title="Privacy Policy — Viscano"
                description="Viscano's privacy policy. How we collect, use, and protect your data."
                canonical="https://viscano.com/privacy"
            />

            <div className="max-w-[760px] mx-auto px-6 py-32 md:py-40">

                {/* Header */}
                <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-8">
                    <span className="w-6 h-[1px] bg-white/40" />
                    Legal
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Privacy Policy</h1>
                <p className="text-sm font-mono text-white/35 mb-16">Last updated: April 2026</p>

                {/* Sections */}
                <div className="flex flex-col divide-y divide-white/[0.06]">
                    {SECTIONS.map((s, i) => (
                        <div key={i} className="py-8 flex flex-col gap-3">
                            <h2 className="text-base font-bold text-white">{s.title}</h2>
                            <p className="text-[#F5F3EE]/60 text-sm leading-[1.8] font-light">{s.body}</p>
                        </div>
                    ))}
                </div>

                {/* Back link */}
                <div className="mt-16 pt-8 border-t border-white/[0.06]">
                    <Link to="/" className="text-sm text-white/40 hover:text-white transition-colors">
                        ← Back to Viscano
                    </Link>
                </div>
            </div>
        </div>
    );
}
