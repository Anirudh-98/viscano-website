import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

export default function Solutions() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorActive, setCursorActive] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const { scrollYProgress } = useScroll();
    const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    const toggleFaq = (idx) => {
        setOpenFaq(openFaq === idx ? null : idx);
    };

    const services = [
        {
            id: '01', tag: 'Development',
            title: 'Technical Infrastructure', subtitle: 'Scalable Systems & Engineering',
            desc: 'From headless commerce to complex SaaS architectures, we build high-performance web applications designed for longevity.',
            link: '/solutions/digital-platforms'
        },
        {
            id: '02', tag: 'Design',
            title: 'Brand & Product', subtitle: 'Visual Identity & Interface',
            desc: 'We craft visual systems that command attention and user interfaces that provide friction-less journeys for your customers.',
            link: '/solutions/brand-creative'
        },
        {
            id: '03', tag: 'Strategy',
            title: 'Growth Systems', subtitle: 'Optimization & Analytics',
            desc: 'Data-driven strategies designed to scale your reach and maximize conversion through meticulous testing and insight.',
            link: '/solutions/growth-distribution'
        },
        {
            id: '04', tag: 'Creative',
            title: 'Digital Content', subtitle: 'Production & Motion',
            desc: 'High-end content creation that tells your story through photography and cinematic video production for global campaigns.',
            link: '/solutions/media-production'
        }
    ];

    const works = [
        {
            title: 'Nexus Mobile Ecosystem', desc: '+45% Conversion Increase',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWmVAqdhi0vEnx3CyQWpmuDaUD66MxV8nzDPlzIFsLmyr-Bnoh-Ter2l49NswbSbK8zZZFczZ7EEmwRbT-XUl2H9bZiR9T60tPPMMf8YjjDSVNbR-77AeVEXmFvssEn_TASK28S93xznS_zWGrZ1XeS68P4WLM7_QPjif30VGZlGPGMrGvDEsBxDTzh2KbXAvdV0hQcjyxGjhzZs1KjjNU6niP7zqksXbiNOj0HBOhLZpQ1ZPbAa7P9OISSvEkSeCJmwqeB2JNfTF1'
        },
        {
            title: 'Luxe_Time Commerce', desc: 'Global Brand Expansion',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqCmMPxdbNODn9VfrAKPSZ1UGXTGEesLoF-0ds2cfqhGwHZm6Ll_TAj-Bk0DBaw6OmRUcgxdDLwv4pQDXVeDaUR3jUTGV9jxZnN2nEwr7tVIRiOxlVtUEEuCWN4tp6KaAlGIQS-1hABSP8Jej1gO1pVP8R0fwYizkMNdgO2DKhq1fwCdkuK_xIrkK4QrDS1dYLoXh42pEeGj5Pel6HKCf50vmaCWer8_MnfY9DYxPULTCAjFm7ksqcxYG36aKJ9tQH3ynyJpEA7-UD'
        }
    ];

    const faqs = [
        { q: 'How long do projects typically take?', a: 'Typical project timelines range from 8 to 16 weeks depending on the scope of work and complexity of the requirements.' },
        { q: 'Do you offer ongoing support?', a: 'Yes, we offer flexible post-launch support and growth retainers to ensure your product continues to evolve and perform.' },
        { q: 'What is your pricing model?', a: 'We work on a project-based or performance-based model, customized to the specific goals and scale of your business.' }
    ];

    return (
        <div className="bg-white text-[#111111] antialiased selection:bg-black selection:text-white font-sans min-h-screen relative" style={{ cursor: 'none' }}>

            {/* Custom Cursor — ArrowUpRight icon */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-md"
                animate={{
                    x: mousePosition.x - 14,
                    y: mousePosition.y - 14,
                    scale: cursorActive ? 1.25 : 1,
                    backgroundColor: cursorActive ? '#ffffff' : '#111111',
                    width: 28,
                    height: 28,
                }}
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.12 }}
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={cursorActive ? '#111111' : '#ffffff'}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 14, height: 14, flexShrink: 0 }}
                >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                </svg>
            </motion.div>

            {/* ── HERO SECTION — dark cinematic full-height ── */}
            <section className="relative w-full min-h-screen overflow-hidden bg-black flex items-end pb-16 md:pb-24">

                {/* Full-bleed background image */}
                <div className="absolute inset-0">
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgZMlJNCKgtEKIGuFGF2GqFJt9EQ5AHjw0qkiPMxltLYu5iibpQXNJDHwQxwLSkqkXnSuzLoEIF1MfqwyZWAHaRi1ci1_yC12XqrlvRU0HamSrc1a2Iu2xbUeCkC_irWiZ0lhQ5w3iKoJU52uuiz4QbYYFOhy1yR6HDqCEYEvdklBo_ZCQRU8YN0G5dIet2g9sBsJZBltfDeHO2XjHkOJGGEVMyZ8OIdRW2LxlwlkatwqFnMCHKUh-UyTgz5kDij_aMeuxazWxMUJD"
                        alt="Background"
                        className="w-full h-full object-cover grayscale opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                </div>

                {/* Floating tag top-left */}
                <div className="absolute top-28 left-6 lg:left-16 z-10 flex items-center gap-3 text-white/40 text-xs tracking-[0.2em] uppercase">
                    <span className="w-6 h-[1px] bg-white/30" />
                    Full-Service Creative Studio
                </div>

                {/* Scroll indicator */}
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

                        {/* Large headline — line 1 */}
                        <div className="overflow-hidden mb-4">
                            <motion.h1
                                variants={{ hidden: { y: 120, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
                                className="text-[clamp(3rem,9vw,9rem)] font-serif font-light text-white leading-[1.2] tracking-tight"
                            >
                                We build digital
                            </motion.h1>
                        </div>

                        {/* Large headline — line 2 italic */}
                        <div className="overflow-hidden mb-16">
                            <motion.h1
                                variants={{ hidden: { y: 120, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.12 } } }}
                                className="text-[clamp(3rem,9vw,9rem)] font-serif italic font-light text-white/40 leading-[1.2] tracking-tight"
                            >
                                products &amp; growth.
                            </motion.h1>
                        </div>

                        {/* Bottom row */}
                        <div className="pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-end">
                            <motion.p
                                variants={fadeIn}
                                className="text-white/50 text-base leading-relaxed font-light max-w-sm"
                            >
                                A multi-disciplinary studio partnering with ambitious brands to engineer experiences that convert and scale.
                            </motion.p>
                            <div className="lg:col-span-2 flex flex-wrap items-center gap-6 md:justify-end">
                                <motion.button
                                    variants={fadeIn}
                                    onMouseEnter={() => setCursorActive(true)}
                                    onMouseLeave={() => setCursorActive(false)}
                                    className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all"
                                >
                                    Start a project
                                </motion.button>
                                <motion.a
                                    variants={fadeIn}
                                    href="#services"
                                    onMouseEnter={() => setCursorActive(true)}
                                    onMouseLeave={() => setCursorActive(false)}
                                    className="text-white/60 font-medium text-sm border-b border-white/30 pb-1 hover:text-white hover:border-white transition-colors"
                                >
                                    Explore services
                                </motion.a>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <section id="services" className="py-24 border-t border-gray-100 max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="mb-16"
                >
                    <motion.h2 variants={fadeIn} className="text-4xl font-extrabold tracking-tight text-black mb-4">Our Capabilities</motion.h2>
                    <motion.p variants={fadeIn} className="text-gray-500 font-medium font-serif text-xl italic">Holistic solutions for the modern digital landscape.</motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* ── 01 Technical Infrastructure ── */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8 }}
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="group relative bg-white rounded-2xl p-8 border border-[#F2F2F2] hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
                        {/* Infographic */}
                        <div className="w-full h-44 bg-[#0f0f0f] rounded-xl mb-8 overflow-hidden relative flex items-center justify-center border border-white/5">
                            <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
                                {[{ x: 160, y: 28, l: 'Client', s: 'Browser' }, { x: 160, y: 82, l: 'API', s: 'GraphQL' },
                                { x: 72, y: 136, l: 'DB', s: 'Postgres' }, { x: 160, y: 136, l: 'Cache', s: 'Redis' }, { x: 248, y: 136, l: 'CDN', s: 'Assets' }
                                ].map(({ x, y, l, s }, i) => (
                                    <g key={i}>
                                        <rect x={x - 34} y={y - 14} width="68" height="28" rx="6" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
                                        <text x={x} y={y - 1} textAnchor="middle" fill="white" fillOpacity="0.75" fontSize="7.5" fontWeight="600">{l}</text>
                                        <text x={x} y={y + 10} textAnchor="middle" fill="white" fillOpacity="0.28" fontSize="6" fontFamily="monospace">{s}</text>
                                    </g>
                                ))}
                                <line x1="160" y1="42" x2="160" y2="68" stroke="white" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 2" />
                                <line x1="160" y1="96" x2="72" y2="122" stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 2" />
                                <line x1="160" y1="96" x2="160" y2="122" stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 2" />
                                <line x1="160" y1="96" x2="248" y2="122" stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 2" />
                                <rect x="8" y="8" width="72" height="14" rx="3" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                                <text x="14" y="18" fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace" letterSpacing="1">ARCHITECTURE</text>
                                <motion.circle cx="160" cy="28" r="4" fill="white" fillOpacity="0.6"
                                    animate={{ opacity: [0.6, 0.2, 0.6] }} transition={{ duration: 2.2, repeat: Infinity }} />
                            </svg>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Development</span>
                            <span className="text-6xl font-extrabold text-gray-100 group-hover:scale-110 group-hover:text-gray-200 transition-all duration-500">01</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-black mb-2 tracking-tight">Technical Infrastructure</h2>
                        <h3 className="text-lg font-bold text-gray-400 mb-6">Scalable Systems &amp; Engineering</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">From headless commerce to complex SaaS architectures, we build high-performance web applications designed for longevity.</p>
                        <Link to="/solutions/digital-platforms" className="flex items-center gap-2 font-bold text-black border-b border-black/20 pb-1 w-max group-hover:border-black transition-colors">
                            View Service <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </motion.div>

                    {/* ── 02 Brand & Product ── */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.1 }}
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="group relative bg-white rounded-2xl p-8 border border-[#F2F2F2] hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
                        {/* Infographic */}
                        <div className="w-full h-44 bg-[#0f0f0f] rounded-xl mb-8 overflow-hidden relative flex items-center justify-center border border-white/5">
                            <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
                                {/* Central brand circle */}
                                <circle cx="160" cy="80" r="28" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" />
                                <circle cx="160" cy="80" r="18" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                                <text x="160" y="78" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="7" fontFamily="serif" letterSpacing="1">BRAND</text>
                                <text x="160" y="88" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="5.5" letterSpacing="1">SYSTEM</text>
                                {/* Satellites */}
                                {[{ label: 'Logo', a: -90 }, { label: 'Type', a: -18 }, { label: 'Color', a: 54 }, { label: 'Voice', a: 126 }, { label: 'Guide', a: 198 }].map(({ label, a }, i) => {
                                    const rad = a * Math.PI / 180;
                                    const x = 160 + 56 * Math.cos(rad), y = 80 + 56 * Math.sin(rad);
                                    const lx = 160 + 30 * Math.cos(rad), ly = 80 + 30 * Math.sin(rad);
                                    return (<g key={i}>
                                        <line x1={lx} y1={ly} x2={x} y2={y} stroke="white" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="2 2" />
                                        <circle cx={x} cy={y} r="13" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.18" strokeWidth="1" />
                                        <text x={x} y={y + 3} textAnchor="middle" fill="white" fillOpacity="0.55" fontSize="6">{label}</text>
                                    </g>);
                                })}
                                <circle cx="160" cy="80" r="56" stroke="white" strokeOpacity="0.04" strokeWidth="1" strokeDasharray="3 5" />
                                <rect x="8" y="8" width="58" height="14" rx="3" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                                <text x="14" y="18" fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace" letterSpacing="1">IDENTITY</text>
                                <motion.circle cx="160" cy="24" r="3" fill="white" fillOpacity="0.5"
                                    animate={{ opacity: [0.5, 0.1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} />
                            </svg>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Design</span>
                            <span className="text-6xl font-extrabold text-gray-100 group-hover:scale-110 group-hover:text-gray-200 transition-all duration-500">02</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-black mb-2 tracking-tight">Brand &amp; Product</h2>
                        <h3 className="text-lg font-bold text-gray-400 mb-6">Visual Identity &amp; Interface</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">We craft visual systems that command attention and user interfaces that provide friction-less journeys for your customers.</p>
                        <Link to="/solutions/brand-creative" className="flex items-center gap-2 font-bold text-black border-b border-black/20 pb-1 w-max group-hover:border-black transition-colors">
                            View Service <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </motion.div>

                    {/* ── 03 Growth Systems ── */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.2 }}
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="group relative bg-white rounded-2xl p-8 border border-[#F2F2F2] hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
                        {/* Infographic – analytics bars + line chart */}
                        <div className="w-full h-44 bg-[#0f0f0f] rounded-xl mb-8 overflow-hidden relative flex items-center justify-center border border-white/5">
                            <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
                                {/* Grid lines */}
                                {[40, 70, 100, 130].map(y => <line key={y} x1="32" y1={y} x2="300" y2={y} stroke="white" strokeOpacity="0.05" strokeWidth="1" />)}
                                {/* Bar chart */}
                                {[{ x: 50, h: 60, o: 0.35 }, { x: 80, h: 40, o: 0.2 }, { x: 110, h: 80, o: 0.4 }, { x: 140, h: 55, o: 0.25 }, { x: 170, h: 90, o: 0.45 }, { x: 200, h: 65, o: 0.3 }, { x: 230, h: 100, o: 0.55 }, { x: 260, h: 75, o: 0.35 }].map(({ x, h, o }, i) => (
                                    <motion.rect key={i} x={x - 10} y={140 - h} width="20" height={h} rx="3"
                                        fill="white" fillOpacity={o}
                                        initial={{ scaleY: 0, transformOrigin: 'bottom' }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                                        style={{ transformOrigin: `${x}px 140px` }} />
                                ))}
                                {/* Line chart overlay */}
                                <polyline points="50,80 80,100 110,60 140,85 170,50 200,75 230,40 260,65"
                                    stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
                                {[{ x: 50, y: 80 }, { x: 110, y: 60 }, { x: 170, y: 50 }, { x: 230, y: 40 }].map(({ x, y }, i) => (
                                    <circle key={i} cx={x} cy={y} r="3" fill="white" fillOpacity="0.6" />
                                ))}
                                {/* Axes */}
                                <line x1="32" y1="16" x2="32" y2="140" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                                <line x1="32" y1="140" x2="300" y2="140" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                                {/* Label */}
                                <rect x="8" y="8" width="68" height="14" rx="3" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                                <text x="14" y="18" fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace" letterSpacing="1">ANALYTICS</text>
                                <motion.text x="248" y="34" fill="white" fillOpacity="0.4" fontSize="7" fontWeight="600"
                                    animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>↑ +312%</motion.text>
                            </svg>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Strategy</span>
                            <span className="text-6xl font-extrabold text-gray-100 group-hover:scale-110 group-hover:text-gray-200 transition-all duration-500">03</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-black mb-2 tracking-tight">Growth Systems</h2>
                        <h3 className="text-lg font-bold text-gray-400 mb-6">Optimization &amp; Analytics</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">Data-driven strategies designed to scale your reach and maximize conversion through meticulous testing and insight.</p>
                        <Link to="/solutions/growth-distribution" className="flex items-center gap-2 font-bold text-black border-b border-black/20 pb-1 w-max group-hover:border-black transition-colors">
                            View Service <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </motion.div>

                    {/* ── 04 Digital Content ── */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.8, delay: 0.3 }}
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="group relative bg-white rounded-2xl p-8 border border-[#F2F2F2] hover:shadow-xl hover:-translate-y-[6px] transition-all duration-500">
                        {/* Infographic – production timeline */}
                        <div className="w-full h-44 bg-[#0f0f0f] rounded-xl mb-8 overflow-hidden relative flex items-center justify-center border border-white/5">
                            <svg viewBox="0 0 320 160" className="w-full h-full" fill="none">
                                {/* Waveform */}
                                {Array.from({ length: 38 }, (_, i) => {
                                    const x = 20 + i * 7.5;
                                    const h = [12, 22, 38, 28, 48, 36, 20, 44, 56, 38, 28, 46, 32, 22, 40, 30, 52, 42, 20, 32, 46, 36, 24, 44, 34, 56, 30, 42, 22, 48, 38, 28, 42, 32, 20, 52, 28, 36][i] || 16;
                                    return <rect key={i} x={x} y={80 - h / 2} width="4" height={h} rx="2" fill="white" fillOpacity={i >= 8 && i <= 22 ? 0.4 : 0.08} />;
                                })}
                                {/* Playhead */}
                                <motion.g animate={{ x: [0, 60, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                                    <line x1="100" y1="50" x2="100" y2="110" stroke="white" strokeOpacity="0.7" strokeWidth="1.5" />
                                    <polygon points="100,46 96,52 104,52" fill="white" fillOpacity="0.7" />
                                </motion.g>
                                {/* Track rows */}
                                {[['VIDEO', 108], ['AUDIO', 124], ['MOTION', 140]].map(([label, y], i) => (
                                    <g key={i}>
                                        <text x="20" y={y} fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace" letterSpacing="1">{label}</text>
                                        {[0, 1, 2, 3].map(j => (
                                            <rect key={j} x={60 + j * 68} y={y + 3} width={54 + (j % 2) * 10} height="11" rx="2"
                                                fill="white" fillOpacity={i === 0 && j === 1 ? 0.14 : 0.04}
                                                stroke="white" strokeOpacity={i === 0 && j === 1 ? 0.22 : 0.06} strokeWidth="1" />
                                        ))}
                                    </g>
                                ))}
                                <rect x="8" y="8" width="72" height="14" rx="3" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                                <text x="14" y="18" fill="white" fillOpacity="0.2" fontSize="6" fontFamily="monospace" letterSpacing="1">PRODUCTION</text>
                            </svg>
                        </div>
                        <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Creative</span>
                            <span className="text-6xl font-extrabold text-gray-100 group-hover:scale-110 group-hover:text-gray-200 transition-all duration-500">04</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-black mb-2 tracking-tight">Digital Content</h2>
                        <h3 className="text-lg font-bold text-gray-400 mb-6">Production &amp; Motion</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed font-medium">High-end content creation that tells your story through photography and cinematic video production for global campaigns.</p>
                        <Link to="/solutions/media-production" className="flex items-center gap-2 font-bold text-black border-b border-black/20 pb-1 w-max group-hover:border-black transition-colors">
                            View Service <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </Link>
                    </motion.div>

                </div>
            </section>

            {/* ── STATS ROW ── */}
            <section className="py-16 border-y border-gray-100 max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
                >
                    {[{ num: '150+', label: 'Projects' }, { num: '12', label: 'Awards' }, { num: '10', label: 'Years' }, { num: '98%', label: 'Retention' }].map((stat, i) => (
                        <motion.div variants={fadeIn} key={i}>
                            <h2 className="text-5xl font-extrabold text-black mb-2 tracking-tight">{stat.num}</h2>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* ── SELECTED WORKS ── */}
            <section className="py-24 max-w-[1200px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="flex items-end justify-between mb-12"
                >
                    <div>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 mb-3 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Selected Work
                        </p>
                        <h2 className="text-4xl font-extrabold tracking-tight text-black">Recent Projects</h2>
                    </div>
                    <Link to="/results"
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="group hidden md:flex items-center gap-2 text-sm font-bold text-black/40 hover:text-black transition-colors">
                        View all cases
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                    {/* Large featured card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        onMouseEnter={() => { setCursorActive(true); }}
                        onMouseLeave={() => { setCursorActive(false); }}
                        className="md:col-span-7 md:row-span-2 group relative h-[420px] md:h-auto rounded-2xl overflow-hidden cursor-pointer bg-black"
                    >
                        <img src={works[0].img} alt={works[0].title}
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Tags */}
                        <div className="absolute top-6 left-6 flex gap-2 flex-wrap z-10">
                            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-wide text-white/70 backdrop-blur-sm">Web &amp; App Design</span>
                            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-wide text-white/70 backdrop-blur-sm">Responsive</span>
                        </div>

                        {/* Arrow */}
                        <div className="absolute top-6 right-6 z-10">
                            <div className={`w-9 h-9 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300`}>
                                <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </div>

                        {/* Bottom content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Nexus Commerce · Development</div>
                            <h3 className="text-2xl md:text-3xl font-serif font-light text-white leading-snug mb-3">{works[0].title}</h3>
                            <div className="flex items-center gap-2 overflow-hidden max-h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                                <span className="text-sm text-white/70 font-light">{works[0].desc}</span>
                            </div>
                        </div>

                        {/* Watermark */}
                        <div className="absolute bottom-6 right-6 text-white/[0.06] text-8xl font-serif font-light leading-none select-none z-10">01</div>
                    </motion.div>

                    {/* Small card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="md:col-span-5 group relative h-[200px] rounded-2xl overflow-hidden cursor-pointer bg-black"
                    >
                        <img src={works[1].img} alt={works[1].title}
                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-85 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                        <div className="absolute top-5 right-5 z-10">
                            <div className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center bg-white/8 backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300">
                                <svg className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 z-10">
                            <div className="text-[9px] tracking-[0.2em] uppercase text-white/35 mb-1.5">Aether Studio · Brand</div>
                            <h3 className="text-lg font-serif font-light text-white leading-snug">{works[1].title}</h3>
                        </div>
                        <div className="absolute bottom-5 right-5 text-white/[0.07] text-5xl font-serif font-light leading-none select-none z-10">02</div>
                    </motion.div>

                    {/* Small card 2 – stat/metric card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
                        onMouseEnter={() => setCursorActive(true)} onMouseLeave={() => setCursorActive(false)}
                        className="md:col-span-5 group relative h-[200px] rounded-2xl overflow-hidden cursor-pointer bg-[#0f0f0f] border border-white/5 flex flex-col justify-between p-6"
                    >
                        <div className="flex items-start justify-between">
                            <span className="text-[9px] tracking-[0.2em] uppercase text-white/30">Our Track Record</span>
                            <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                <svg className="w-3.5 h-3.5 text-white/50 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[{ n: '+312%', l: 'Avg. Revenue Lift' }, { n: '150+', l: 'Brands Served' }, { n: '3.1x', l: 'Average ROAS' }, { n: '94%', l: 'Client Renewal' }].map((s, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-serif font-light text-white mb-0.5">{s.n}</div>
                                    <div className="text-[9px] tracking-wide uppercase text-white/30">{s.l}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>

                {/* Mobile CTA */}
                <div className="mt-8 flex md:hidden justify-center">
                    <Link to="/results" className="inline-flex items-center gap-2 text-sm font-bold text-black/40 hover:text-black transition-colors">
                        View all cases
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-32 flex flex-col items-center text-center px-6">
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-col items-center">
                    <motion.p variants={fadeIn} className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-8">Ready to scale?</motion.p>
                    <motion.h2 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold text-black mb-12 max-w-3xl leading-tight tracking-tight">
                        Let's build something significant together.
                    </motion.h2>
                    <motion.button
                        variants={fadeIn}
                        onMouseEnter={() => setCursorActive(true)}
                        onMouseLeave={() => setCursorActive(false)}
                        className="bg-black text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-gray-800 transition-all"
                    >
                        Talk to our team
                    </motion.button>
                </motion.div>
            </section>

            {/* ── FAQ ACCORDION ── */}
            <section className="py-24 max-w-3xl mx-auto px-6 mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="text-4xl font-extrabold tracking-tight mb-16 text-center text-black"
                >
                    Questions
                </motion.h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx}
                            className="border-b border-gray-100"
                        >
                            <button
                                onClick={() => toggleFaq(idx)}
                                onMouseEnter={() => setCursorActive(true)}
                                onMouseLeave={() => setCursorActive(false)}
                                className="w-full flex justify-between items-center text-left py-6 focus:outline-none group"
                            >
                                <span className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors">{faq.q}</span>
                                <motion.div animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </motion.div>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <p className="pb-6 text-gray-600 leading-relaxed font-medium">{faq.a}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
