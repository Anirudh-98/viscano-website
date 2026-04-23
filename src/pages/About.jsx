import React, { useEffect, useRef, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, useInView } from 'framer-motion';
import { Shield, ArrowUpRight } from 'lucide-react'; // Shield used in A3 beliefs
import { Link } from 'react-router-dom';

/* ─── animation variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 48 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
};

/* ─── animated counter ─── */
function StatCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    useEffect(() => {
        if (!inView) return;
        const duration = 1400;
        const start = Date.now();
        const tick = () => {
            const p = Math.min((Date.now() - start) / duration, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(ease * target));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(target);
        };
        requestAnimationFrame(tick);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── data ─── */
const BELIEFS = [
    { text: 'Speed is a form of respect for your time.' },
    { text: 'A brief should excite the designer, not constrain them.' },
    { text: 'Tier 2 founders deserve Tier 1 creative work.' },
    { text: 'AI doesn\'t replace creativity — it multiplies it.' },
    { text: 'Your brand should make you proud every single day.' },
    {
        text: 'A beautiful product with a security vulnerability is an unfinished product. Full stop.',
        isSecure: true,
    },
];

const MILESTONES = [
    { year: '2020', label: 'IT Career', detail: 'Enterprise IT, Hyderabad' },
    { year: '2023', label: 'M.S. Cybersecurity', detail: 'Graduate studies' },
    { year: '2024', label: 'Viscano Founded', detail: 'Hyderabad, India' },
    { year: '2025', label: '40+ Projects', detail: 'Across 10+ industries' },
    { year: '2026', label: 'AI-Native Studio', detail: 'Vision — global' },
];

const TEAM = [
    {
        img: '/ani.webp',
        name: 'Anirudh',
        role: 'Founder & Creative Director',
        tagline: 'Builds brands you can trust — inside and out.',
        credential: 'M.S. Cybersecurity · Ex-IT Industry',
        isFounder: true,
    },
    {
        img: '/anudeep.webp',
        name: 'Anudeep',
        role: 'Co-Founder',
        tagline: 'Brand strategist. Makes complexity look effortless.',
        isFounder: false,
    },
    {
        img: '/chaitanya.webp',
        name: 'Chaitanya',
        role: 'Tech & Engineering Lead',
        tagline: 'Ships clean, ships fast. Rarely ships twice.',
        isFounder: false,
    },
];

const VALUES = [
    {
        symbol: '◆',
        title: 'Craft',
        desc: 'We sweat every pixel and every line of code. Craft is not a standard we aim for — it\'s our baseline.',
    },
    {
        symbol: '◈',
        title: 'Speed',
        desc: 'Fast delivery is a creative skill. We\'ve built systems that let us move quickly without cutting corners.',
    },
    {
        symbol: '◉',
        title: 'Ownership',
        desc: 'We treat every project as if our name is on it. Because it is.',
    },
];

/* ─── number accent colors (cycles) ─── */
const ACCENT_COLORS = ['#F5F3EE', '#1A5CA8', '#1A7A4A', '#C0392B', '#F5F3EE', '#1A5CA8'];

export default function About() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-[#F5F3EE] overflow-hidden font-sans">
            <SEOHead
                title="About Viscano — Creative Studio | Hyderabad, India"
                description="Viscano is led by a Cybersecurity Masters graduate and IT veteran. We build brand identities and digital products that are both world-class and security-first."
                keywords="about Viscano, creative studio Hyderabad, cybersecurity design agency, brand identity India, Anirudh Viscano"
                canonical="https://viscano.com/about"
            />

            {/* ═══════════════════════════════════════════
                A1 — HERO: MANIFESTO STATEMENT
            ═══════════════════════════════════════════ */}
            <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0A0A0A] pt-24 pb-16 md:pb-0">

                {/* Grain overlay */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="hero-grain"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#hero-grain)" />
                </svg>

                {/* Subtle radial glow */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 30% 50%, rgba(245,243,238,0.03) 0%, transparent 70%)' }} />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28 lg:py-0">

                    {/* Left — manifesto text */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-8 lg:gap-10"
                    >
                        <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55">
                            <span className="w-6 h-[1px] bg-white/40" />
                            About Viscano
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="text-[clamp(2.6rem,5.5vw,5rem)] font-bold tracking-tighter leading-[1.05] text-white"
                        >
                            We believe most Indian brands are{' '}
                            <span className="font-serif italic font-normal text-white/35">invisible.</span>
                            <br />We exist to fix that.
                        </motion.h1>

                        <motion.div variants={fadeUp} custom={2} className="flex flex-col gap-2 pt-6 border-t border-white/[0.08]">
                            <p className="text-sm text-white/45 leading-relaxed">
                                <span className="font-mono text-white/30 mr-2">EST.</span>2023 ·
                                <span className="ml-2">Hyderabad, India</span>
                            </p>
                            <p className="text-base md:text-lg text-[#F5F3EE]/70 leading-relaxed max-w-[460px]">
                                A security-first creative studio building brand identities, digital products, and motion work for founders who refuse to be invisible.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} custom={3} className="flex items-center gap-6 pt-2">
                            <a href="#origin"
                                className="px-7 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:scale-[1.03] transition-all duration-200">
                                Our Story
                            </a>
                            <a href="#team"
                                className="text-sm font-medium text-white/50 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-0.5">
                                Meet the Team
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right — founder photo with grain */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden"
                    >
                        <img
                            src="/ani.webp"
                            alt="Anirudh — Founder, Viscano"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />

                        {/* Film grain overlay */}
                        <svg className="absolute inset-0 w-full h-full opacity-[0.18] mix-blend-overlay pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <filter id="grain-photo"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                            <rect width="100%" height="100%" filter="url(#grain-photo)" />
                        </svg>

                        {/* Caption tag */}
                        <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/40">Anirudh</span>
                            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/25">Founder & Creative Director</span>
                        </div>

                        {/* Year badge */}
                        {/* <div className="absolute top-5 right-5 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5">
                            <span className="font-mono text-[10px] text-white/50 tracking-widest">2023 →</span>
                        </div> */}
                    </motion.div>

                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                        className="w-[1px] h-10 bg-white/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50" />
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
                A2 — ORIGIN STORY
            ═══════════════════════════════════════════ */}
            <section id="origin" className="py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#080809] relative overflow-hidden">

                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="origin-grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#origin-grain)" />
                </svg>

                <div className="relative z-10 max-w-[1200px] mx-auto">

                    {/* Label */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
                        className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-10">
                        <span className="w-6 h-[1px] bg-white/40" />
                        Origin Story
                    </motion.div>

                    {/* Editorial copy — split layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 mb-20">

                        {/* Sticky label col */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                            className="lg:sticky lg:top-32 self-start">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white leading-tight mb-6">
                                The Unexpected<br />
                                <span className="font-serif italic font-normal text-white/35">Path Here</span>
                            </h2>
                            <p className="text-sm font-mono text-white/30 tracking-wide leading-relaxed">
                                IT veteran → Cybersecurity M.S. → Studio founder
                            </p>
                        </motion.div>

                        {/* Narrative copy */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                            className="flex flex-col gap-7 text-[1.05rem] md:text-lg text-[#F5F3EE]/65 leading-[1.75] font-light">

                            <motion.p variants={fadeUp}>
                                I spent years inside enterprise IT watching products get built, shipped, and quietly compromised.
                                Not dramatically — no blockbuster breaches. Just small architectural shortcuts that accumulated into real exposure.
                                Beautiful software. Brittle foundations. The designers never knew. The clients never asked.
                            </motion.p>

                            <motion.p variants={fadeUp} custom={1}>
                                That discomfort sent me back to school. A Masters in Cybersecurity reframes how you see every product decision —
                                every API design, every third-party integration, every database schema. Building the right way isn't slower.
                                It's just more intentional. Most studios have never been in that room.
                            </motion.p>

                            <motion.p variants={fadeUp} custom={2}>
                                What I came back to was a gap nobody was naming: Indian startups were pouring money into branding,
                                finally demanding world-class creative — but the products underneath were still being assembled with the same brittle shortcuts.
                                Beautiful cover. Dangerous interior. No one offered both, so I built the studio that does.
                            </motion.p>

                            <motion.p variants={fadeUp} custom={3}>
                                Viscano exists because{' '}
                                <span className="text-[#F5F3EE] font-medium">
                                    creative work and secure architecture are both non-negotiable
                                </span>
                                {' '}— and it took an unusual path to know that with certainty.
                            </motion.p>
                        </motion.div>
                    </div>

                    {/* Pull quote */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
                        className="relative border-l-[3px] border-white/20 pl-8 md:pl-12 py-2 mb-20">
                        <blockquote className="font-serif italic text-[2rem] md:text-[2.75rem] lg:text-[3rem] text-[#F5F3EE]/80 leading-[1.25] tracking-tight max-w-[800px]">
                            "Beautiful design and secure architecture are not opposites. They're both non-negotiable."
                        </blockquote>
                        <span className="mt-4 block font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">— Anirudh, Founder</span>
                    </motion.div>

                    {/* Milestone timeline */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                        className="relative">

                        {/* Connecting line — desktop */}
                        <div className="hidden md:block absolute top-5 left-0 right-0 h-[1px] bg-white/[0.08]" />

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0">
                            {MILESTONES.map((m, i) => (
                                <motion.div key={i} variants={fadeUp} custom={i}
                                    className="relative flex flex-col gap-3 md:items-center md:text-center md:px-4">
                                    {/* Node */}
                                    <div className="w-2.5 h-2.5 rounded-full border-2 border-white/40 bg-[#0A0A0A] relative z-10 md:mb-4" />
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">{m.year}</span>
                                    <span className="text-sm font-bold text-white/85">{m.label}</span>
                                    <span className="text-[11px] text-white/35 leading-snug">{m.detail}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
                A3 — THE VISCANO CODE (BELIEFS)
            ═══════════════════════════════════════════ */}
            <section className="py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#0A0A0A]">
                <div className="max-w-[1100px] mx-auto">

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                        className="flex flex-col gap-4 mb-16">
                        <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55">
                            <span className="w-6 h-[1px] bg-white/40" />
                            Our Beliefs
                        </motion.div>
                        <motion.h2 variants={fadeUp} custom={1}
                            className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
                            The Viscano{' '}
                            <span className="font-serif italic font-normal text-white/35">Code</span>
                        </motion.h2>
                    </motion.div>

                    <div className="flex flex-col divide-y divide-white/[0.06]">
                        {BELIEFS.map((b, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={fadeUp}
                                custom={i * 0.5}
                                className="group flex items-start gap-6 md:gap-10 py-8 md:py-10 hover:bg-white/[0.01] transition-colors"
                            >
                                {/* Number */}
                                <span
                                    className="font-mono text-[13px] font-bold tracking-widest shrink-0 mt-1 transition-opacity duration-300"
                                    style={{ color: ACCENT_COLORS[i] }}
                                >
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                {/* Belief text */}
                                <p className={`text-[1.4rem] md:text-[1.75rem] lg:text-[2rem] font-bold tracking-tight leading-[1.2]
                                    ${b.isSecure ? 'text-white' : 'text-white/80 group-hover:text-white transition-colors duration-300'}`}>
                                    {b.isSecure && (
                                        <Shield
                                            className="inline-block mr-3 mb-1 w-6 h-6 md:w-7 md:h-7"
                                            style={{ color: '#1A7A4A' }}
                                            strokeWidth={2}
                                        />
                                    )}
                                    We believe {b.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
                A4 — TEAM
            ═══════════════════════════════════════════ */}
            <section id="team" className="py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#080809]">
                <div className="max-w-[1300px] mx-auto">

                    {/* Header */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div className="flex flex-col gap-4">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55">
                                <span className="w-6 h-[1px] bg-white/40" />
                                The People
                            </motion.div>
                            <motion.h2 variants={fadeUp} custom={1}
                                className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
                                The Team Behind{' '}
                                <span className="font-serif italic font-normal text-white/35">the Work</span>
                            </motion.h2>
                        </div>
                        <motion.div variants={fadeUp} custom={2}>
                            <Link to="/careers"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-white/55 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                Join the Team
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Team grid — asymmetric, founder card taller */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {TEAM.map((member, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                variants={fadeUp}
                                custom={i}
                                className={`group flex flex-col gap-0 bg-[#0F0F0F] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.18] transition-all duration-500
                                    ${member.isFounder ? 'lg:row-span-1' : ''}`}
                            >
                                {/* Photo */}
                                <div className={`relative overflow-hidden ${member.isFounder ? 'aspect-[3/4]' : 'aspect-[3/3.5]'}`}>
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover object-top
                                            scale-[1.02] group-hover:scale-[1.06]
                                            transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/80 via-transparent to-transparent" />
                                </div>

                                {/* Info */}
                                <div className="p-6 flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="text-base font-bold text-white">{member.name}</h3>
                                        <ArrowUpRight
                                            className="w-4 h-4 text-white/20 group-hover:text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0"
                                            strokeWidth={2}
                                        />
                                    </div>
                                    <p className="text-[11px] font-mono tracking-wide text-white/40 uppercase">{member.role}</p>
                                    <p className="text-sm text-[#F5F3EE]/50 leading-snug mt-1 font-light italic">{member.tagline}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
                A5 — NUMBERS & PROOF
            ═══════════════════════════════════════════ */}
            <section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] border-t border-white/[0.06]">
                <div className="max-w-[1300px] mx-auto">

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                        className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-16">
                        <motion.span variants={fadeUp} className="w-6 h-[1px] bg-white/40 inline-block" />
                        <motion.span variants={fadeUp}>By the Numbers</motion.span>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
                        {[
                            { target: 9, suffix: '+', label: 'Years of Experience', sublabel: 'Since 2016' },
                            { target: 20, suffix: '+', label: 'Projects Delivered', sublabel: 'Across 10+ industries' },
                            { target: 10, suffix: '+', label: 'Industries Served', sublabel: 'B2B, SaaS, Retail & more' },
                            { target: 10, suffix: 'L+', label: 'Client Revenue Enabled', sublabel: '₹ across our portfolio', prefix: '₹' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                variants={fadeUp}
                                custom={i * 0.5}
                                className="bg-[#0A0A0A] p-8 md:p-10 lg:p-12 flex flex-col gap-3"
                            >
                                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/35">{stat.sublabel}</span>
                                <div className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold tracking-tighter text-white leading-none">
                                    {stat.prefix && stat.prefix}
                                    <StatCounter target={stat.target} suffix={stat.suffix} />
                                </div>
                                <span className="text-sm text-[#F5F3EE]/50 font-medium">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cities served — text-based map */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
                        className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/30">Cities served</span>
                        {['Hyderabad', 'Visakhapatnam', 'Bengaluru', 'Mumbai', 'Delhi', 'Chennai', 'Dubai', 'Singapore'].map(city => (
                            <span key={city} className="text-xs text-white/40 font-medium hover:text-white/75 transition-colors cursor-default">
                                {city}
                            </span>
                        ))}
                    </motion.div>

                </div>
            </section>

            {/* ═══════════════════════════════════════════
                A6 — STUDIO CULTURE & VALUES
            ═══════════════════════════════════════════ */}
            <section className="py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#080809]">
                <div className="max-w-[1300px] mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
                            className="flex flex-col gap-4">
                            <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55">
                                <span className="w-6 h-[1px] bg-white/40" />
                                Studio Culture
                            </motion.div>
                            <motion.h2 variants={fadeUp} custom={1}
                                className="text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight">
                                What It's Like to{' '}
                                <span className="font-serif italic font-normal text-white/35">Work With Us</span>
                            </motion.h2>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
                            <Link to="/contact"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:scale-[1.03] transition-all duration-200">
                                Work With Us
                                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                            </Link>
                        </motion.div>
                    </div>

                    {/* 3 value cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
                        {VALUES.map((v, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-60px' }}
                                variants={fadeUp}
                                custom={i}
                                className="group bg-[#0F0F0F] border border-white/[0.07] rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:border-white/[0.18] transition-all duration-500"
                            >
                                <span className="text-3xl text-white/20 group-hover:text-white/40 transition-colors duration-500">{v.symbol}</span>
                                <div className="flex flex-col gap-2 flex-1">
                                    <h3 className="text-xl font-bold text-white tracking-tight">{v.title}</h3>
                                    <p className="text-sm text-[#F5F3EE]/50 leading-relaxed font-light">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Studio imagery strip */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.9 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                            { src: '/grox.webp', alt: 'Grox Digital project', span: 'md:col-span-2' },
                            { src: '/sherpal.webp', alt: 'Sherpal project', span: '' },
                            { src: '/deltahrms.webp', alt: 'Delta HRMS project', span: '' },
                        ].map((img, i) => (
                            <div key={i} className={`relative aspect-video rounded-xl overflow-hidden group ${img.span}`}>
                                <img src={img.src} alt={img.alt} loading="lazy"
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700" />
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>

        </div>
    );
}
