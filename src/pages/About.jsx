import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: custom * 0.1 }
    })
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function About() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">

            {/* ── HERO ── */}
            <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-end pb-16 md:pb-24">
                {/* Full-bleed background image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
                        alt="Hero Background"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                </div>

                {/* Floating tag top-left */}
                <div className="absolute top-28 left-6 lg:left-16 z-10 flex items-center gap-3 text-white/40 text-xs tracking-[0.2em] uppercase">
                    <span className="w-6 h-[1px] bg-white/30" />
                    Full-Service Creative Agency
                </div>

                {/* Scroll indicator top-right */}
                <div className="absolute top-28 right-6 lg:right-16 z-10 flex flex-col items-center gap-3 text-white/30 text-[10px] tracking-widest uppercase">
                    <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                        <motion.div
                            animate={{ y: ['0%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                            className="absolute top-0 left-0 w-full h-1/3 bg-white/50"
                        />
                    </div>
                    Scroll
                </div>

                {/* Main hero content */}
                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-16">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

                        {/* Headline line 1 */}
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                variants={{ hidden: { y: 120, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                                className="text-[clamp(3rem,9vw,9rem)] font-serif font-light text-white leading-[0.9] tracking-tight"
                            >
                                About
                            </motion.h1>
                        </div>

                        {/* Headline line 2 italic */}
                        <div className="overflow-hidden mb-16">
                            <motion.h1
                                variants={{ hidden: { y: 120, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.12 } } }}
                                className="text-[clamp(3rem,9vw,9rem)] font-serif italic font-light text-white/40 leading-[0.9] tracking-tight"
                            >
                                Viscano.
                            </motion.h1>
                        </div>

                        {/* Bottom bar */}
                        <div className="pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
                            <motion.p variants={fadeIn} className="text-white/50 text-base leading-relaxed font-light max-w-sm">
                                We craft bold identities, unforgettable experiences, and digital ecosystems that make brands matter.
                            </motion.p>
                            <div className="lg:col-span-2 flex flex-wrap items-center gap-6 md:justify-end">
                                <motion.a variants={fadeIn} href="#brand-story"
                                    className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all">
                                    Our Story
                                </motion.a>
                                <motion.a variants={fadeIn} href="#team"
                                    className="text-white/60 font-medium text-sm border-b border-white/30 pb-1 hover:text-white hover:border-white transition-colors">
                                    Meet the team
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── BRAND STORY ── */}
            <section id="brand-story" className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

                    {/* Left */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}>
                        <motion.div variants={fadeIn} className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-white/30 mb-10">
                            <span className="w-8 h-[1px] bg-white/20" /> Our Story
                        </motion.div>
                        <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1] tracking-tight mb-16">
                            Building Brands<br />
                            That <span className="italic text-white/40">Actually</span><br />
                            Move People
                        </motion.h2>

                        <div className="grid grid-cols-5 gap-4">
                            <motion.div variants={fadeIn} custom={2} className="col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Agency Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                                        <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeIn} custom={3} className="col-span-3 relative aspect-[4/5] rounded-2xl overflow-hidden mt-12">
                                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Office" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer} className="lg:pt-32">
                        <div className="space-y-6 text-base md:text-lg font-light text-white/50 leading-relaxed mb-16">
                            <motion.p variants={fadeIn}>
                                At <strong className="font-medium text-white">Viscano</strong>, we are a full-service agency driven by one belief: great work changes everything. Founded over a decade ago, we have grown into a multidisciplinary team of strategists, designers, engineers, and storytellers.
                            </motion.p>
                            <motion.p variants={fadeIn}>
                                From brand identity to digital platforms, campaign strategy to content production — we bring every discipline under one roof so your brand never loses its thread.
                            </motion.p>
                            <motion.p variants={fadeIn}>
                                We don't just deliver deliverables. We build relationships, question assumptions, and make things that last.
                            </motion.p>
                        </div>

                        <motion.div variants={fadeIn} className="grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.08] mb-14">
                            {[{ n: '12+', l: 'Years' }, { n: '340', l: 'Projects' }, { n: '48', l: 'Team' }].map((s, i) => (
                                <div key={i}>
                                    <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                                    <div className="text-[10px] tracking-[0.2em] uppercase text-white/30">{s.l}</div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Link to="/results" className="inline-flex items-center gap-3 text-xs tracking-[0.15em] uppercase font-medium pb-2 border-b border-white/20 hover:border-white transition-colors group">
                                Explore Our Work
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="py-24 border-t border-white/[0.06]">
                <div className="px-6 lg:px-20 max-w-[1600px] mx-auto mb-20">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}
                        className="flex flex-col md:flex-row md:items-end gap-8 justify-between">
                        <div>
                            <motion.div variants={fadeIn} className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-6">What Drives Us</motion.div>
                            <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1] tracking-tight">
                                We Are<br /><span className="italic text-white/40">Different.</span>
                            </motion.h2>
                        </div>
                        <motion.p variants={fadeIn} className="text-white/40 max-w-xs text-sm font-light leading-relaxed md:pb-2">
                            Our approach defies the conventional agency model. We embed ourselves in your brand, think like owners.
                        </motion.p>
                    </motion.div>
                </div>

                <div className="px-6 lg:px-20 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: tall image with overlay list */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1 }}
                        className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Team" className="w-full h-full object-cover opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            {['Brand Strategy', 'Digital Experience', 'Content Production', 'Campaign & Media'].map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/10 last:border-0 text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors cursor-pointer group">
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                                    <span className="font-serif text-white/20 group-hover:text-white/50">0{i + 1}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: 2x2 value cards */}
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: 'Passion in Every Brief', desc: 'We treat every project as if it were our own brand on the line.', num: '01' },
                            { title: 'Collaboration on Top', desc: 'Your team and ours — one unified force toward the same vision.', num: '02' },
                            { title: 'Accountability Always', desc: 'Deadlines, budgets, commitments — we own every one of them.', num: '03' },
                            { title: 'Creativity Unleashed', desc: 'No templates. No safe choices. Work that genuinely stands out.', num: '04' }
                        ].map((val, i) => (
                            <motion.div variants={fadeIn} key={i}
                                className="bg-white/[0.03] border border-white/[0.06] p-8 rounded-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-500 group flex flex-col justify-between min-h-[200px]">
                                <span className="font-serif text-5xl text-white/[0.06] group-hover:text-white/10 transition-colors leading-none mb-auto">{val.num}</span>
                                <div>
                                    <h4 className="font-medium text-sm tracking-widest uppercase mb-2 text-white/80">{val.title}</h4>
                                    <p className="text-xs text-white/30 font-light leading-relaxed">{val.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section id="team" className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto border-t border-white/[0.06]">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}
                    className="flex flex-col md:flex-row md:items-end gap-6 justify-between mb-16">
                    <div>
                        <motion.div variants={fadeIn} className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">The People</motion.div>
                        <motion.h2 variants={fadeIn} className="text-5xl lg:text-7xl font-serif font-light leading-[1] tracking-tight">
                            Our Team of<br /><span className="italic text-white/40">Dedication</span>
                        </motion.h2>
                    </div>
                    <motion.p variants={fadeIn} className="text-white/40 max-w-xs text-sm font-light leading-relaxed md:pb-2">
                        Diverse minds, one shared obsession: building work we're proud of forever.
                    </motion.p>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { img: '/ani.png', name: 'Anirudh', role: 'Founder & CEO' },
                        { img: '/anudeep.png', name: 'Anudeep', role: 'Co-Founder' },
                        { img: '/harish.jpeg', name: 'Harish Rokkam', role: 'Chief Marketing Officer (CMO)' },
                        { img: '/chaitanya.png', name: 'Chaitanya', role: 'Tech & Engineering Lead' },
                    ].map((member, i) => (
                        <motion.div variants={fadeIn} key={i} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                                <img src={member.img} alt={member.name} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                                    <p className="text-xs tracking-widest uppercase text-white/60 font-medium">{member.role}</p>
                                </div>
                                <div className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <h3 className="font-serif text-xl font-light mb-0.5">{member.name}</h3>
                            <p className="text-xs italic text-white/40">{member.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── GALLERY ── */}
            <section className="px-6 lg:px-20 max-w-[1600px] mx-auto pb-16">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={staggerContainer}
                    className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/[0.06] pb-10 mb-10">
                    <div>
                        <motion.div variants={fadeIn} className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-4">Selected Work</motion.div>
                        <motion.h2 variants={fadeIn} className="text-5xl lg:text-6xl font-serif font-light leading-[1] tracking-tight">
                            Our <span className="italic text-white/40">Work</span>
                        </motion.h2>
                    </div>
                    <motion.p variants={fadeIn} className="text-white/40 max-w-xs text-sm font-light leading-relaxed md:pb-1">
                        A selection of projects — from global campaigns to intimate brand launches.
                    </motion.p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] md:auto-rows-[300px]">
                    <div className="rounded-2xl overflow-hidden group md:col-span-2 md:row-span-2">
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="rounded-2xl overflow-hidden group relative">
                        <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80" alt="Project" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" />
                    </div>
                    <div className="rounded-2xl overflow-hidden group relative">
                        <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80" alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                            <div className="text-xs tracking-widest uppercase font-medium mb-1">Viscano × Apex</div>
                            <div className="font-serif italic text-white/50 text-sm">2024</div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── CTA TEASER ── */}
            <section className="px-6 lg:px-20 max-w-[1600px] mx-auto pb-40 pt-16">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/[0.08] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 group hover:bg-white/[0.05] hover:border-white/[0.15] transition-all duration-500 cursor-pointer">
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
                    <div className="max-w-xl relative z-10">
                        <div className="flex flex-wrap gap-3 mb-8">
                            {['Branding', 'Digital', 'Strategy'].map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-white/40 bg-white/[0.03]">{tag}</span>
                            ))}
                        </div>
                        <h3 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] mb-6 tracking-tight">
                            Ready to build something that actually matters?
                        </h3>
                        <p className="text-xs text-white/30 tracking-[0.15em] uppercase flex items-center gap-3">
                            Start your project with Viscano <ArrowRight className="w-3.5 h-3.5" />
                        </p>
                    </div>
                    <div className="w-20 h-20 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-500 shrink-0 relative z-10">
                        <ArrowUpRight className="w-7 h-7 group-hover:text-black transition-colors duration-500" />
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
