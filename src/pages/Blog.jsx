import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Clock, Tag } from 'lucide-react';
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

const TAGS = ['All', 'Brand', 'Design', 'Development', 'Strategy', 'Motion'];

const POSTS = [
    {
        id: 0,
        slug: 'leading-creative-studio-hyderabad-visakhapatnam',
        tag: 'Agency',
        title: 'Elevating Digital Experiences: Why Viscano is the Premier Creative Studio in Hyderabad & Visakhapatnam',
        excerpt: "In a crowded digital landscape, aesthetic alone isn't enough. Here is how Viscano is building highly converting, beautifully tailored brand identities and digital platforms.",
        author: 'Anirudh',
        date: 'March 9, 2026',
        readTime: '6 min read',
        featured: true,
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
    },
    {
        id: 1,
        slug: 'why-your-logo-is-the-last-thing-your-brand-needs',
        tag: 'Brand',
        title: 'Why your logo is the last thing your brand needs',
        excerpt: "Most founders start with a logo. We start with the story. Here's why that order matters more than you think.",
        author: 'Anirudh',
        date: 'Feb 28, 2025',
        readTime: '5 min read',
        featured: false,
        img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
    },
    {
        id: 2,
        slug: 'the-5-second-rule-for-ui-that-converts',
        tag: 'Design',
        title: 'The 5-second rule for UI that converts',
        excerpt: "If a new user can't understand your product in five seconds, you've already lost them. Here's how to fix that.",
        author: 'Chaitanya',
        date: 'Feb 18, 2025',
        readTime: '4 min read',
        featured: false,
        img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
        id: 3,
        slug: 'building-fast-vite-react-and-shipping-on-day-1',
        tag: 'Development',
        title: 'Building fast: Vite, React, and shipping on Day 1',
        excerpt: 'Our internal stack for going from brief to deployed in record time — without cutting corners on quality.',
        author: 'Srujitha',
        date: 'Feb 10, 2025',
        readTime: '6 min read',
        featured: false,
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    },
    {
        id: 4,
        slug: 'the-prd-as-a-design-brief-how-we-scope-projects-differently',
        tag: 'Strategy',
        title: 'The PRD as a design brief: how we scope projects differently',
        excerpt: "A Product Requirements Document isn't just for engineers. We use it as the foundation for every brand engagement.",
        author: 'Harish Rokkam',
        date: 'Jan 30, 2025',
        readTime: '7 min read',
        featured: false,
        img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',
    },
    {
        id: 5,
        slug: 'motion-design-isnt-decoration-its-communication',
        tag: 'Motion',
        title: "Motion design isn't decoration — it's communication",
        excerpt: "The difference between a brand that feels premium and one that doesn't often comes down to how it moves.",
        author: 'Prakash',
        date: 'Jan 20, 2025',
        readTime: '5 min read',
        featured: false,
        img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    },
    {
        id: 6,
        slug: 'rebranding-without-losing-your-audience',
        tag: 'Brand',
        title: 'Rebranding without losing your audience',
        excerpt: 'The art of evolving a brand without alienating the customers who made you who you are today.',
        author: 'Anirudh',
        date: 'Jan 12, 2025',
        readTime: '6 min read',
        featured: false,
        img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    },
];

export default function Blog() {
    const [activeTag, setActiveTag] = useState('All');

    const featured = POSTS.find(p => p.featured);
    const allFiltered = activeTag === 'All'
        ? POSTS.filter(p => !p.featured)
        : POSTS.filter(p => !p.featured && p.tag === activeTag);

    return (
        <div className="min-h-screen bg-[#080808] text-white overflow-hidden">
            <SEOHead
                title="Blog & Insights — Design, Branding & Tech | Viscano Hyderabad"
                description="Read Viscano's journal on brand identity, UI/UX design, web development, and creative strategy. Insights from a Hyderabad-based design studio serving India."
                keywords="design blog Hyderabad, branding insights India, UI UX articles, web design tips, creative studio blog Hyderabad, Viscano journal"
                canonical="https://viscano.com/blog"
            />

            {/* ── HERO ── */}
            <section className="relative w-full pt-40 pb-20 px-6 lg:px-16 max-w-[1400px] mx-auto">
                <motion.div initial="hidden" animate="visible" variants={stagger}>
                    <motion.div variants={fadeUp} className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-10">
                        <span className="w-8 h-[1px] bg-white/40" />
                        Viscano Journal
                    </motion.div>
                    <div className="overflow-visible pb-2 mb-2">
                        <motion.h1
                            variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } } }}
                            className="text-[clamp(3rem,9vw,9rem)] font-serif font-light text-white leading-[1.1] tracking-tight"
                        >
                            Insights &
                        </motion.h1>
                    </div>
                    <div className="overflow-visible pb-2 mb-14">
                        <motion.h1
                            variants={{ hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } } }}
                            className="text-[clamp(3rem,9vw,9rem)] font-serif italic font-light text-white/30 leading-[1.1] tracking-tight"
                        >
                            Perspectives.
                        </motion.h1>
                    </div>
                    <motion.div
                        variants={fadeUp}
                        className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6"
                    >
                        <p className="text-white/40 font-light text-base leading-relaxed max-w-sm">
                            Ideas, craft, and the occasional honest opinion on design, brand, and building things that last.
                        </p>
                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/20">{POSTS.length} articles · Updated Feb 2025</span>
                    </motion.div>
                </motion.div>
            </section>

            {/* ── FEATURED POST ── */}
            {featured && (
                <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-16">
                    <Link to={featured.slug ? `/blog/${featured.slug}` : '#'}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ duration: 0.9 }}
                            className="group relative w-full h-[55vh] md:h-[65vh] rounded-3xl overflow-hidden border border-white/[0.07] cursor-pointer"
                        >
                            <img src={featured.img} alt={featured.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-70" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Top badges */}
                            <div className="absolute top-6 left-6 flex items-center gap-3">
                                <span className="px-3 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-widest uppercase">Featured</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/70 text-[10px] font-semibold tracking-widest uppercase backdrop-blur-md">{featured.tag}</span>
                            </div>
                            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                                <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-white/40 mb-4">
                                    <span>{featured.author}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/40" />
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featured.readTime}</span>
                                    <span className="w-1 h-1 rounded-full bg-white/40" />
                                    <span>{featured.date}</span>
                                </div>
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-light tracking-tight text-white leading-[1.1] max-w-2xl mb-4 group-hover:text-white/90 transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-white/50 text-sm leading-relaxed max-w-xl font-light">{featured.excerpt}</p>
                                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-white/60 group-hover:text-white transition-colors">
                                    Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </section>
            )}

            {/* ── TAG FILTER ── */}
            <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-8">
                <div className="flex flex-wrap gap-2">
                    {TAGS.map(t => (
                        <button
                            key={t}
                            onClick={() => setActiveTag(t)}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200
                                ${activeTag === t
                                    ? 'bg-white text-black border-white'
                                    : 'bg-white/[0.04] text-white/50 border-white/10 hover:border-white/25 hover:text-white/80'
                                }`}
                        >
                            {t !== 'All' && <Tag className="w-2.5 h-2.5" />}
                            {t}
                        </button>
                    ))}
                </div>
            </section>

            {/* ── POST GRID ── */}
            <section className="px-6 lg:px-16 max-w-[1400px] mx-auto pb-32">
                <motion.div
                    layout
                    variants={stagger}
                    initial="hidden" animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                >
                    {allFiltered.map(p => (
                        <Link to={p.slug ? `/blog/${p.slug}` : '#'} key={p.id}>
                            <motion.article
                                layout
                                variants={fadeUp}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/[0.03] border border-white/[0.06]">
                                    <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                    {/* Gradient overlay to ensure top badges are readable */}
                                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent opacity-80" />

                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-black/40 border border-white/20 text-white/90 text-[9px] font-bold tracking-widest uppercase backdrop-blur-md">
                                            {p.tag}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 border border-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="w-3 h-3 text-white" />
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-[9px] font-bold tracking-widest uppercase text-white/30 mb-4">
                                        <span>{p.author}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/40" />
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-serif font-light tracking-tight text-white mb-3 group-hover:text-white/80 transition-colors leading-[1.2]">
                                        {p.title}
                                    </h3>
                                    <p className="text-white/40 text-sm font-light leading-relaxed mb-6 mt-auto">
                                        {p.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors mt-auto">
                                        Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </motion.div>

                {allFiltered.length === 0 && (
                    <div className="py-24 text-center text-white/20 text-sm font-light">
                        No articles in this category yet.
                    </div>
                )}
            </section>

            {/* ── NEWSLETTER CTA ── */}
            <section className="px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.9 }}
                    className="relative rounded-[2rem] bg-white/[0.03] border border-white/[0.08] p-8 sm:p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10 hover:bg-white/[0.05] transition-all duration-500"
                >
                    <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
                    <div className="relative z-10">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light tracking-tight mb-3">
                            Get new ideas in your inbox.<br />
                            <span className="italic text-white/40">No noise, ever.</span>
                        </h3>
                        <p className="text-xs text-white/30 font-light leading-relaxed max-w-sm">
                            One email when we publish something worth reading. Unsubscribe any time.
                        </p>
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="you@company.com"
                            className="w-full sm:w-64 bg-white/[0.05] border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all font-medium"
                        />
                        <button className="w-full sm:w-auto bg-white text-black text-xs font-bold px-6 py-3 rounded-full hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shrink-0">
                            Subscribe <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </motion.div>
            </section>

        </div>
    );
}
