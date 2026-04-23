import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── Animation presets ───────────────────── */
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

/* ── Team data ───────────────────────────── */
const TEAM = [
    {
        name: 'Anirudh',
        role: 'Founder & Creative Director',
        dept: 'Leadership',
        bio: 'Drives the vision behind every brand Viscano builds. 9+ years turning ambitious ideas into market-defining identities.',
        img: '/ani.webp',
        linkedin: '#',
        email: 'chaitanya@viscano.com',
    },
    {
        name: 'Chaitanya',
        role: 'Head of Product Design',
        dept: 'Design',
        bio: 'Crafts interfaces that feel inevitable. Obsessed with the gap between good design and great design.',
        img: '/chaitanya.webp',
        linkedin: '#',
        email: 'arjun@viscano.com',
    },
    {
        name: 'Harish Rokkam',
        role: 'Lead Brand Strategist',
        dept: 'Strategy',
        bio: 'Translates research, market signals, and gut instinct into brand strategy that actually sticks.',
        img: '/harish.jpeg',
        linkedin: '#',
        email: 'priya@viscano.com',
    },
    {
        name: 'Srujitha',
        role: 'Full-Stack Developer',
        dept: 'Engineering',
        bio: 'Builds products that scale. Equally comfortable in the terminal and a Figma handoff doc.',
        img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
        linkedin: '#',
        email: 'rohan@viscano.com',
    },
    {
        name: 'Prakash',
        role: 'Motion & Content Lead',
        dept: 'Content',
        bio: 'Makes brands move. From 3-second reels to full brand films — every frame is intentional.',
        img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80',
        linkedin: '#',
        email: 'aisha@viscano.com',
    },
    {
        name: 'Vinay',
        role: 'UI/UX Designer',
        dept: 'Design',
        bio: 'Prototypes faster than most people brainstorm. Turns wireframes into experiences users remember.',
        img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80',
        linkedin: '#',
        email: 'vikram@viscano.com',
    },
];

const DEPTS = ['All', ...Array.from(new Set(TEAM.map(m => m.dept)))];

const VALUES = [
    { num: '01', title: 'Quality over quantity', desc: 'We take fewer projects and do them exceptionally well.' },
    { num: '02', title: 'Ownership at every level', desc: 'Every team member leads their domain — no hand-holding, no micro-management.' },
    { num: '03', title: 'Relentless curiosity', desc: 'We question the brief, explore the edge cases, and push past the obvious answer.' },
    { num: '04', title: 'Radical transparency', desc: 'Honest timelines, honest feedback, honest pricing. Always.' },
];

/* ── Member Card ─────────────────────────── */
function MemberCard({ member, index }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            variants={fadeUp}
            custom={index}
            className="group relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Photo */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-white/[0.03]">
                <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Dept tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] tracking-[0.2em] uppercase text-white/60 font-semibold">
                    {member.dept}
                </div>

                {/* Action buttons emerging on hover */}
                <div className={`absolute bottom-5 left-5 right-5 flex items-center gap-2 transition-all duration-500 ${hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                    <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        <Mail className="w-3 h-3" /> Email
                    </a>
                    <a
                        href={member.linkedin}
                        className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-medium px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        <Linkedin className="w-3 h-3" /> LinkedIn
                    </a>
                </div>
            </div>

            {/* Info */}
            <div>
                <h3 className="text-lg font-semibold tracking-tight text-white mb-0.5">{member.name}</h3>
                <p className="text-xs font-medium text-white/40 tracking-wide mb-2">{member.role}</p>
                <p className={`text-xs text-white/30 leading-relaxed font-light transition-all duration-500 ${hovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    {member.bio}
                </p>
            </div>
        </motion.div>
    );
}

/* ── Page ─────────────────────────────────── */
export default function Team() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All' ? TEAM : TEAM.filter(m => m.dept === activeFilter);

    return (
        <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
            <SEOHead
                title="Our Team — Designers & Developers at Viscano Hyderabad"
                description="Meet the Viscano team — a small, experienced group of designers, engineers, and strategists based in Hyderabad, building brands and digital products across India."
                keywords="design team Hyderabad, creative studio team India, UI UX designers Hyderabad, web developers Visakhapatnam, Viscano team"
                canonical="https://viscano.com/team"
            />

            {/* ── HERO ── */}
            <section className="relative w-full min-h-[75vh] flex flex-col justify-end pb-20 md:pb-28 overflow-hidden bg-[#080808]">

                {/* Noise grain */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="tn"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#tn)" />
                </svg>

                {/* Decorative top-right index */}
                <div className="absolute top-28 right-6 lg:right-16 z-10 text-[10px] tracking-[0.25em] uppercase text-white/20 flex flex-col items-end gap-2">
                    <span>Viscano / Team</span>
                    <div className="w-[1px] h-12 bg-white/10" />
                </div>

                {/* Left tag */}
                <div className="absolute top-28 left-6 lg:left-16 z-10 flex items-center gap-3 text-white/30 text-[10px] tracking-[0.2em] uppercase">
                    <span className="w-8 h-[1px] bg-white/40" />
                    The People Behind Viscano
                </div>

                {/* Headline */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16 pt-32 md:pt-40">
                    <motion.div initial="hidden" animate="visible" variants={stagger}>
                        <div className="overflow-hidden mb-2">
                            <motion.h1
                                variants={{ hidden: { y: 120, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } } }}
                                className="text-[clamp(3.5rem,10vw,10rem)] font-serif font-light text-white leading-[0.9] tracking-tight"
                            >
                                Our
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-14">
                            <motion.h1
                                variants={{ hidden: { y: 120, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } } }}
                                className="text-[clamp(3.5rem,10vw,10rem)] font-serif italic font-light text-white/30 leading-[0.9] tracking-tight"
                            >
                                Team.
                            </motion.h1>
                        </div>

                        <motion.div
                            variants={fadeUp}
                            className="pt-10 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end"
                        >
                            <p className="text-white/40 text-base font-light leading-relaxed max-w-md">
                                A small, senior team of designers, strategists, engineers, and creatives — each a specialist, together unstoppable.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {TEAM.slice(0, 4).map((m, i) => (
                                        <img key={i} src={m.img} alt={m.name} className="w-9 h-9 rounded-full object-cover border-2 border-[#080808] grayscale" />
                                    ))}
                                </div>
                                <span className="text-xs text-white/30 font-medium">{TEAM.length} people</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── TEAM GRID ── */}
            <section className="py-20 md:py-28 px-6 lg:px-16 max-w-[1400px] mx-auto">

                {/* Department filter pills */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }}
                    variants={stagger}
                    className="flex flex-wrap gap-2 mb-14"
                >
                    {DEPTS.map(dept => (
                        <motion.button
                            key={dept}
                            variants={fadeUp}
                            onClick={() => setActiveFilter(dept)}
                            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200
                                ${activeFilter === dept
                                    ? 'bg-white text-black border-white'
                                    : 'bg-white/[0.04] text-white/50 border-white/10 hover:border-white/30 hover:text-white/80'
                                }`}
                        >
                            {dept}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grid */}
                <motion.div
                    key={activeFilter}
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                >
                    {filtered.map((member, i) => (
                        <MemberCard key={member.name} member={member} index={i} />
                    ))}
                </motion.div>
            </section>

            {/* ── VALUES STRIP ── */}
            <section className="border-t border-white/[0.06] py-24 md:py-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
                    variants={stagger}
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-white/25 mb-12">
                        <span className="w-8 h-[1px] bg-white/15" />
                        How We Work
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {VALUES.map((v, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-7 flex flex-col justify-between min-h-[200px] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 group"
                            >
                                <span className="font-serif text-5xl text-white/[0.05] group-hover:text-white/[0.09] transition-colors leading-none">{v.num}</span>
                                <div className="mt-4">
                                    <h4 className="text-sm font-semibold tracking-tight text-white/80 mb-2">{v.title}</h4>
                                    <p className="text-xs text-white/30 font-light leading-relaxed">{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* ── CULTURE PHOTOS ── */}
            <section className="pb-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
                    className="grid grid-cols-6 gap-3 auto-rows-[180px] md:auto-rows-[240px]"
                >
                    <div className="col-span-6 md:col-span-4 row-span-2 rounded-3xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80" alt="Studio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-80" />
                    </div>
                    <div className="col-span-6 md:col-span-2 rounded-3xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-80" />
                    </div>
                    <div className="col-span-3 md:col-span-2 rounded-3xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800&q=80" alt="Workspace" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-80" />
                    </div>
                    <div className="col-span-3 hidden md:block rounded-3xl overflow-hidden group">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" alt="Design session" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-50 group-hover:opacity-80" />
                    </div>
                </motion.div>
            </section>

            {/* ── JOIN US CTA ── */}
            <section className="pb-32 px-6 lg:px-16 max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9 }}
                    className="relative rounded-[2rem] bg-white/[0.03] border border-white/[0.08] p-10 md:p-16 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-10 hover:bg-white/[0.05] hover:border-white/[0.14] transition-all duration-500 group"
                >
                    {/* BG glow */}
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

                    {/* Left */}
                    <div className="relative z-10 max-w-xl">
                        <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">
                            <span className="w-6 h-[1px] bg-white/40" />
                            Join the team
                        </div>
                        <h3 className="text-4xl md:text-5xl font-serif font-light leading-[1.1] tracking-tight mb-4">
                            We're always looking for<br />
                            <span className="italic text-white/40">exceptional</span> people.
                        </h3>
                        <p className="text-sm text-white/40 font-light leading-relaxed max-w-md">
                            If you do exceptional work and care deeply about craft, drop us a note. We don't always have open roles, but we always have time for great people.
                        </p>
                    </div>

                    {/* Right: actions */}
                    <div className="relative z-10 flex flex-col gap-4 shrink-0">
                        <Link to="/careers"
                            className="flex items-center gap-3 bg-white text-black px-7 py-4 rounded-full text-sm font-bold hover:scale-[1.02] transition-all"
                        >
                            View Open Roles
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <a href="mailto:connect@viscano.com"
                            className="flex items-center gap-3 border border-white/15 text-white/70 px-7 py-4 rounded-full text-sm font-medium hover:border-white/40 hover:text-white transition-all"
                        >
                            <Mail className="w-4 h-4" />
                            connect@viscano.com
                        </a>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
