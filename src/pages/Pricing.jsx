import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, CheckCircle2, FileText, MessageSquare, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (d = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: d * 0.08 }
    })
};
const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const SERVICES = [
    {
        icon: <Zap className="w-5 h-5" />,
        title: 'Brand Identity',
        items: ['Logo & visual language', 'Typography & colour system', 'Brand guidelines', 'Pitch deck design'],
        note: 'Scoped from your brand brief'
    },
    {
        icon: <FileText className="w-5 h-5" />,
        title: 'UI / UX Design',
        items: ['User research & flows', 'Wireframing & prototyping', 'Full UI design system', 'Handoff-ready files'],
        note: 'Scoped by screen count & complexity'
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: 'Web Development',
        items: ['Front-end development', 'CMS / Shopify / Framer', 'Custom web apps', 'Performance & SEO'],
        note: 'Scoped from your technical PRD'
    },
    {
        icon: <MessageSquare className="w-5 h-5" />,
        title: 'Motion & Content',
        items: ['Brand films & reels', '3D animation', 'Social media content', 'Copywriting'],
        note: 'Scoped by duration & deliverables'
    },
];

const PROCESS = [
    {
        num: '01',
        title: 'Share your brief or PRD',
        desc: "Send us a document, a voice note, or a Notion page. No template required — we'll work with what you have."
    },
    {
        num: '02',
        title: 'Discovery call',
        desc: 'A focused 30-minute conversation to understand your goals, constraints, timelines, and definition of success.'
    },
    {
        num: '03',
        title: 'Scoped proposal',
        desc: 'We send a detailed proposal with scope, deliverables, timeline, and a project-specific quote — no generic tiers.'
    },
    {
        num: '04',
        title: 'Kickoff & delivery',
        desc: 'Once agreed, we begin immediately. Regular check-ins, milestone reviews, and zero surprise invoices.'
    },
];

const FAQS = [
    {
        q: 'Why don\'t you have fixed pricing tiers?',
        a: 'Because no two projects are the same. A ₹50K logo project and a ₹5L brand platform both start with "logo" but require completely different processes. Scoping from a PRD or brief ensures you only pay for what you actually need.'
    },
    {
        q: 'What is a PRD and do I need one?',
        a: 'A Product Requirements Document outlines what you\'re building, for whom, and why. You don\'t need a formal PRD — a detailed brief, a Notion doc, or even a clear conversation works. We help you clarify scope during our discovery call.'
    },
    {
        q: 'What is the typical project range?',
        a: 'Projects range from ₹30K for focused deliverables (logo, one-page site) to ₹10L+ for full-scale brand + platform builds. The quote we provide is fixed for the agreed scope — no hourly billing.'
    },
    {
        q: 'Do you offer retainer arrangements?',
        a: 'Yes. After a project, many clients move to an ongoing retainer for content, design updates, and iterative development. Retainer rates are discussed at the end of your first engagement.'
    },
    {
        q: 'How long does a quote take?',
        a: 'If you share a brief before the call, we can usually send a proposal within 48 hours of your discovery call.'
    },
];

export default function Pricing() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="min-h-screen bg-[#080808] text-white overflow-hidden">

            {/* ── HERO ── */}
            <section className="relative w-full pt-40 pb-20 px-6 lg:px-16 max-w-[1400px] mx-auto">

                {/* Noise grain */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="pn"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#pn)" />
                </svg>

                <motion.div initial="hidden" animate="visible" variants={stagger} className="relative z-10">
                    <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/30 mb-10">
                        <span className="w-8 h-[1px] bg-white/20" />
                        Pricing
                    </motion.div>

                    <div className="overflow-visible pb-2 mb-2">
                        <motion.h1
                            variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } } }}
                            className="text-[clamp(3rem,9vw,9rem)] font-serif font-light text-white leading-[1.1] tracking-tight"
                        >
                            Priced for
                        </motion.h1>
                    </div>
                    <div className="overflow-visible pb-2 mb-16">
                        <motion.h1
                            variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } } }}
                            className="text-[clamp(3rem,9vw,9rem)] font-serif italic font-light text-white/30 leading-[1.1] tracking-tight"
                        >
                            your project.
                        </motion.h1>
                    </div>

                    {/* The big statement */}
                    <motion.div
                        variants={fadeUp}
                        className="border-t border-white/[0.07] pt-12 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12"
                    >
                        <div>
                            <p className="text-2xl md:text-3xl font-serif font-light text-white/90 leading-relaxed tracking-tight max-w-lg">
                                We don't do fixed tiers.<br />
                                <span className="italic text-white/40">Every quote is built from your PRD.</span>
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 justify-center">
                            <p className="text-white/40 text-sm font-light leading-relaxed max-w-md">
                                Cookie-cutter pricing leads to cookie-cutter work. We scope every engagement from your specific requirements — so you pay exactly for what you need and nothing you don't.
                            </p>
                            <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-bold text-white border-b border-white/20 pb-1 w-fit hover:border-white/60 transition-colors">
                                Get a quote <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── PRD EXPLAINER BANNER ── */}
            <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.9 }}
                    className="relative rounded-3xl bg-white/[0.04] border border-white/[0.1] p-10 md:p-14 overflow-hidden"
                >
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
                    <div className="flex flex-col md:flex-row gap-10 items-start relative z-10">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                                    <FileText className="w-4 h-4 text-white/60" />
                                </div>
                                <span className="text-[10px] tracking-[0.25em] uppercase text-white/40 font-semibold">How our pricing works</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-light tracking-tight mb-5 leading-tight">
                                Your PRD shapes<br />
                                <span className="italic text-white/40">every number.</span>
                            </h2>
                            <p className="text-white/40 text-sm font-light leading-relaxed max-w-xl">
                                Before we quote anything, we ask you to share a brief or PRD (Product Requirements Document). It defines what you're building, your objectives, constraints, and ideal outcomes. From that document, we scope the exact effort required — and price accordingly. No padding, no guessing.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 min-w-[260px]">
                            {[
                                'Fixed-scope, fixed-price quotes',
                                'No hourly billing surprises',
                                'Price tied to your deliverables',
                                'Proposal within 48 hrs of call',
                                'Milestone-based payment structure'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-white/70 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-white/30 shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── SERVICE AREAS ── */}
            <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
                    <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/25 mb-12">
                        <span className="w-6 h-[1px] bg-white/15" />
                        What we scope & price
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {SERVICES.map((svc, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="group bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/[0.06] hover:border-white/[0.14] transition-all duration-400"
                            >
                                <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white/80 transition-colors">
                                    {svc.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold tracking-tight text-white/90 mb-4">{svc.title}</h3>
                                    <ul className="flex flex-col gap-2">
                                        {svc.items.map((item, j) => (
                                            <li key={j} className="flex items-center gap-2 text-xs text-white/40 font-light">
                                                <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-auto pt-4 border-t border-white/[0.06] text-[10px] tracking-wide text-white/25 italic">
                                    {svc.note}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── HOW TO GET A QUOTE ── */}
            <section className="border-t border-white/[0.06] px-6 lg:px-16 max-w-[1400px] mx-auto py-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div>
                            <motion.div variants={fadeUp} className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-4">How it works</motion.div>
                            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif font-light tracking-tight leading-[1.05]">
                                From brief to<br />
                                <span className="italic text-white/40">fixed quote.</span>
                            </motion.h2>
                        </div>
                        <motion.p variants={fadeUp} className="text-white/35 text-sm font-light leading-relaxed max-w-xs md:pb-1">
                            Our process is built to give you clarity fast — usually a proposal within 48 hours of talking.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PROCESS.map((step, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="relative flex flex-col gap-4 p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
                            >
                                <span className="font-serif text-5xl text-white/[0.05] leading-none">{step.num}</span>
                                <h4 className="text-sm font-semibold tracking-tight text-white/80">{step.title}</h4>
                                <p className="text-xs text-white/30 font-light leading-relaxed">{step.desc}</p>
                                {i < PROCESS.length - 1 && (
                                    <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/10" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── FAQ ── */}
            <section className="border-t border-white/[0.06] px-6 lg:px-16 max-w-[1400px] mx-auto py-24">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={stagger}
                    className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16"
                >
                    <div>
                        <motion.div variants={fadeUp} className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-4">Questions</motion.div>
                        <motion.h2 variants={fadeUp} className="text-4xl font-serif font-light tracking-tight leading-tight mb-6">
                            Pricing<br /><span className="italic text-white/40">FAQs.</span>
                        </motion.h2>
                        <motion.p variants={fadeUp} className="text-white/35 text-sm font-light leading-relaxed">
                            Still unsure? Drop us a line — we respond to every enquiry personally.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-8">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:scale-[1.02] transition-all">
                                Ask us directly <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div variants={stagger} className="flex flex-col gap-2">
                        {FAQS.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                className={`border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'bg-white/[0.05] border-white/[0.15]' : 'bg-transparent hover:border-white/[0.12] hover:bg-white/[0.02]'}`}
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    aria-expanded={openFaq === idx}
                                    aria-controls={`faq-answer-${idx}`}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left outline-none"
                                >
                                    <span className={`text-sm font-medium tracking-tight transition-colors ${openFaq === idx ? 'text-white' : 'text-white/70'}`}>
                                        {faq.q}
                                    </span>
                                    <span className="text-white/30 ml-4 text-xl font-light shrink-0">{openFaq === idx ? '−' : '+'}</span>
                                </button>
                                <div id={`faq-answer-${idx}`} className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 opacity-100 pb-5 px-6' : 'max-h-0 opacity-0 px-6'}`}>
                                    <p className="text-white/50 text-sm leading-relaxed font-light">{faq.a}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.9 }}
                    className="relative rounded-[2rem] bg-white/[0.03] border border-white/[0.08] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 hover:bg-white/[0.05] transition-all duration-500 group overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10 max-w-xl">
                        <h3 className="text-4xl md:text-5xl font-serif font-light leading-[1.1] tracking-tight mb-4">
                            Ready to get<br />
                            <span className="italic text-white/40">your quote?</span>
                        </h3>
                        <p className="text-sm text-white/35 font-light leading-relaxed">
                            Share your brief or PRD and we'll come back with a scoped, fixed-price proposal within 48 hours.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col gap-3 shrink-0">
                        <Link to="/contact"
                            className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:scale-[1.02] transition-all"
                        >
                            Start with a brief
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <a href="mailto:connect@viscano.com"
                            className="text-center text-[11px] text-white/30 hover:text-white/60 transition-colors font-medium"
                        >
                            or email connect@viscano.com
                        </a>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
