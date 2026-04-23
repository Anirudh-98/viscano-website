import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BookOpen, Users, Video, Star, Zap, Globe, Award, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
    {
        icon: BookOpen,
        title: 'Premium Online Courses',
        desc: 'Structured, self-paced courses built by practitioners — not just teachers. Every lesson is rooted in real projects.',
        span: 'md:col-span-2',
        tall: false,
    },
    {
        icon: Video,
        title: 'Live Classes',
        desc: 'Interactive sessions where you build alongside mentors in real time. Ask questions. Get instant feedback.',
        span: 'md:col-span-1',
        tall: true,
    },
    {
        icon: Users,
        title: 'Expert Mentorship',
        desc: '1-on-1 guidance from working professionals at Viscano and beyond.',
        span: 'md:col-span-1',
        tall: false,
    },
    {
        icon: Award,
        title: 'Career-Focused',
        desc: 'Everything we teach is aligned to what the industry actually hires for. Portfolio-ready outcomes, always.',
        span: 'md:col-span-1',
        tall: false,
    },
];

const TRACKS = [
    { label: 'Brand Identity', color: 'from-violet-500/20 to-purple-900/10', dot: 'bg-violet-400' },
    { label: 'UI / UX Design', color: 'from-blue-500/20 to-blue-900/10', dot: 'bg-blue-400' },
    { label: 'Web Development', color: 'from-emerald-500/20 to-green-900/10', dot: 'bg-emerald-400' },
    { label: 'Motion Design', color: 'from-orange-500/20 to-amber-900/10', dot: 'bg-orange-400' },
    { label: 'Pitch Decks', color: 'from-pink-500/20 to-rose-900/10', dot: 'bg-pink-400' },
    { label: 'Social Media', color: 'from-cyan-500/20 to-sky-900/10', dot: 'bg-cyan-400' },
];

const STATS = [
    { value: '10+', label: 'Expert Instructors' },
    { value: '6+', label: 'Learning Tracks' },
    { value: 'Live', label: 'Interactive Classes' },
    { value: '∞', label: 'Lifetime Access' },
];

export default function Learn() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Hero word reveal
            gsap.fromTo('.learn-word',
                { y: 120, opacity: 0, rotateX: -25 },
                {
                    y: 0, opacity: 1, rotateX: 0,
                    duration: 1.1, stagger: 0.08,
                    ease: 'power4.out', delay: 0.1
                }
            );

            // Hero fade elements
            gsap.fromTo('.learn-fade',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.6, stagger: 0.1 }
            );

            // Floating badge
            gsap.to('.hero-float', {
                y: -10, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1
            });

            // Stats counter feel
            gsap.fromTo('.stat-item',
                { y: 40, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out',
                    scrollTrigger: { trigger: '.stats-section', start: 'top 80%' }
                }
            );

            // Feature cards
            gsap.utils.toArray('.feature-card').forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 60, opacity: 0, scale: 0.97 },
                    {
                        y: 0, opacity: 1, scale: 1,
                        duration: 0.9, ease: 'power3.out',
                        delay: i * 0.08,
                        scrollTrigger: { trigger: card, start: 'top 88%' }
                    }
                );
            });

            // Track pills
            gsap.fromTo('.track-pill',
                { x: -30, opacity: 0 },
                {
                    x: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out',
                    scrollTrigger: { trigger: '.tracks-section', start: 'top 82%' }
                }
            );

            // CTA section
            gsap.fromTo('.cta-element',
                { y: 50, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out',
                    scrollTrigger: { trigger: '.cta-section', start: 'top 80%' }
                }
            );

            // Marquee
            gsap.to('.marquee-inner', {
                x: '-50%', duration: 28, ease: 'none', repeat: -1
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#080808] text-white min-h-screen font-sans selection:bg-white selection:text-black overflow-hidden">
            <SEOHead
                title="Viscano Learn — Expert-Led Online Courses & Live Classes"
                description="An advanced educational platform offering premium online courses, interactive live classes, and expert mentorship for designers, developers, and brand builders."
                canonical="https://viscano.com/learn"
            />

            {/* ── HERO ── */}
            <section ref={heroRef} className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-24 overflow-hidden">

                {/* Background grid */}
                <div className="absolute inset-0 z-0 opacity-[0.025]"
                    style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

                {/* Radial glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-white/[0.04] blur-[140px] pointer-events-none z-0" />

                {/* Floating badge */}
                <div className="hero-float relative z-10 mb-10 flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-white/70">Now Live — Viscano Learn</span>
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-white/10 text-[9px] font-bold text-white/60 tracking-wide">BETA</span>
                </div>

                {/* Headline */}
                <div className="relative z-10 flex flex-col items-center text-center overflow-hidden" style={{ perspective: '1200px' }}>
                    <div className="overflow-hidden mb-2">
                        <h1 className="learn-word inline-block text-[clamp(3.5rem,10vw,8rem)] font-bold tracking-tighter leading-[0.9] text-white">
                            Learn from
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="learn-word inline-block text-[clamp(3.5rem,10vw,8rem)] font-bold tracking-tighter leading-[0.9]"
                            style={{
                                background: 'linear-gradient(135deg, #ffffff 20%, rgba(255,255,255,0.3) 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                            }}>
                            the builders.
                        </h1>
                    </div>
                </div>

                {/* Subtext */}
                <p className="learn-fade relative z-10 mt-8 text-white/50 text-base md:text-lg font-light leading-relaxed max-w-[520px] text-center">
                    Viscano Learn is an advanced educational platform offering premium courses, live classes, and expert mentorship — built by the same team behind the brands you admire.
                </p>

                {/* CTAs */}
                <div className="learn-fade relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-10">
                    <a
                        href="https://learn.viscano.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                    >
                        Explore Courses
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <a
                        href="https://learn.viscano.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-sm font-medium text-white/70 hover:border-white/40 hover:text-white transition-all duration-300"
                    >
                        View Live Classes
                    </a>
                </div>

                {/* Scroll hint */}
                <div className="learn-fade absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-40">
                    <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-white animate-pulse" />
                    <span className="text-[9px] tracking-[0.25em] uppercase font-medium">Scroll</span>
                </div>
            </section>

            {/* ── MARQUEE ── */}
            <div className="w-full overflow-hidden border-y border-white/[0.06] py-4 bg-[#0D0D0D]">
                <div className="marquee-inner flex gap-12 w-max">
                    {[...Array(2)].map((_, repeat) => (
                        <div key={repeat} className="flex gap-12 items-center">
                            {['Brand Identity', 'UI/UX Design', 'Web Development', 'Motion Design', 'Live Classes', 'Expert Mentorship', 'Career Growth', 'Pitch Decks', 'Social Media', 'Real Projects'].map((item, i) => (
                                <span key={i} className="flex items-center gap-4 text-white/25 text-xs font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
                                    <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                                    {item}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* ── STATS ── */}
            <section className="stats-section py-20 md:py-28 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {STATS.map((s, i) => (
                        <div key={i} className="stat-item flex flex-col gap-2 md:items-center md:text-center">
                            <span className="text-5xl md:text-6xl font-bold tracking-tighter text-white">{s.value}</span>
                            <span className="text-xs text-white/35 uppercase tracking-[0.2em] font-semibold">{s.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FEATURES BENTO ── */}
            <section className="px-4 md:px-8 lg:px-12 pb-24 max-w-[1500px] mx-auto">
                <div className="mb-10">
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-4">
                        <span className="w-6 h-[1px] bg-white/40" />
                        What You Get
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Built different.<br />Taught right.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Feature 1 — Wide */}
                    <div className="feature-card md:col-span-2 bg-[#111113] border border-white/[0.06] rounded-3xl p-10 md:p-12 flex flex-col justify-between min-h-[260px] hover:border-white/[0.14] transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-white/[0.018] border border-white/[0.04] group-hover:scale-110 transition-transform duration-700" />
                        <BookOpen className="w-8 h-8 text-white/40 mb-6" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">Premium Online Courses</h3>
                            <p className="text-white/45 text-sm md:text-base leading-relaxed max-w-lg">
                                Structured, self-paced courses built by practitioners — not just teachers. Every lesson is rooted in real-world projects and deliverables you can show in your portfolio.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2 — Tall */}
                    <div className="feature-card md:row-span-2 bg-[#111113] border border-white/[0.06] rounded-3xl p-10 flex flex-col justify-between min-h-[260px] md:min-h-0 hover:border-white/[0.14] transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/[0.015] border border-white/[0.035]" />
                        <Video className="w-8 h-8 text-white/40" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-3">Live Classes</h3>
                            <p className="text-white/45 text-sm leading-relaxed">
                                Interactive sessions where you build alongside mentors in real time. Ask questions, get instant feedback, and learn with a cohort.
                            </p>
                            <div className="mt-8 flex flex-col gap-3">
                                {['Weekly live sessions', 'Q&A with mentors', 'Cohort learning', 'Recordings included'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-sm text-white/50">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <a href="https://learn.viscano.com" target="_blank" rel="noopener noreferrer"
                            className="mt-8 flex items-center gap-2 text-xs font-semibold text-white/40 hover:text-white transition-colors group/link">
                            See schedule
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                    {/* Feature 3 */}
                    <div className="feature-card bg-[#111113] border border-white/[0.06] rounded-3xl p-10 flex flex-col justify-between min-h-[220px] hover:border-white/[0.14] transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.018] rounded-bl-full" />
                        <Users className="w-8 h-8 text-white/40" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-xl font-bold tracking-tight text-white mb-2">Expert Mentorship</h3>
                            <p className="text-white/45 text-sm leading-relaxed">
                                1-on-1 guidance from working professionals at Viscano and beyond. Real advice from people doing the work.
                            </p>
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="feature-card bg-[#111113] border border-white/[0.06] rounded-3xl p-10 flex flex-col justify-between min-h-[220px] hover:border-white/[0.14] transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.018] rounded-bl-full" />
                        <Award className="w-8 h-8 text-white/40" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-xl font-bold tracking-tight text-white mb-2">Career-Ready Outcomes</h3>
                            <p className="text-white/45 text-sm leading-relaxed">
                                Everything we teach is aligned to what the industry hires for. Portfolio-ready projects, every time.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── LEARNING TRACKS ── */}
            <section className="tracks-section py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0D0D0D] border-t border-white/[0.06]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-4">
                                <span className="w-6 h-[1px] bg-white/40" />
                                Learning Tracks
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">What you'll master.</h2>
                        </div>
                        <a href="https://learn.viscano.com" target="_blank" rel="noopener noreferrer"
                            className="self-start md:self-auto flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-xs font-semibold text-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                            Browse all courses
                            <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {TRACKS.map((track, i) => (
                            <a
                                key={i}
                                href="https://learn.viscano.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`track-pill flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-br ${track.color} border border-white/[0.06] hover:border-white/20 hover:scale-[1.03] transition-all duration-300 cursor-pointer group`}
                            >
                                <span className={`w-2 h-2 rounded-full ${track.dot} flex-shrink-0`} />
                                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{track.label}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </a>
                        ))}
                    </div>

                    {/* Who it's for */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: 'Aspiring Designers', desc: 'Build your first portfolio with guided projects in brand identity, UI/UX, and motion.' },
                            { title: 'Developers Levelling Up', desc: 'Go from code to full product — learn design systems, UX thinking, and front-end craft.' },
                            { title: 'Founders & PMs', desc: 'Understand enough design and dev to communicate better, move faster, and ship smarter.' },
                        ].map((item, i) => (
                            <div key={i} className="feature-card flex flex-col gap-4 p-8 rounded-2xl border border-white/[0.06] bg-[#111113] hover:border-white/[0.14] transition-all duration-400">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/25">For</span>
                                <h3 className="text-lg font-bold text-white tracking-tight">{item.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="cta-section relative py-32 md:py-40 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden bg-[#080808] border-t border-white/[0.06]">
                {/* Glow */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-[600px] h-[400px] bg-white/[0.03] rounded-full blur-[120px]" />
                </div>

                {/* Grid bg */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

                <div className="cta-element relative z-10 flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-10">
                    <Globe className="w-3.5 h-3.5 text-white/50" />
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">learn.viscano.com</span>
                </div>

                <h2 className="cta-element relative z-10 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-6 max-w-4xl">
                    Start learning.<br />
                    <span className="font-serif italic font-normal text-white/40">Build your future.</span>
                </h2>

                <p className="cta-element relative z-10 text-white/40 text-base md:text-lg max-w-md leading-relaxed mb-12 font-light">
                    Courses, live classes, and mentorship from the team behind some of India's boldest brands.
                </p>

                <div className="cta-element relative z-10 flex flex-col sm:flex-row items-center gap-4">
                    <a
                        href="https://learn.viscano.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-sm font-bold hover:scale-[1.03] transition-transform duration-300 shadow-[0_0_60px_rgba(255,255,255,0.12)]"
                    >
                        Go to Viscano Learn
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                    <Link
                        to="/contact"
                        className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 text-sm font-medium text-white/60 hover:border-white/40 hover:text-white transition-all duration-300"
                    >
                        Talk to us
                    </Link>
                </div>

                {/* Contact info */}
                <div className="cta-element relative z-10 mt-16 flex flex-col sm:flex-row items-center gap-6 text-xs text-white/25">
                    <a href="tel:+916301361466" className="hover:text-white/60 transition-colors">+91 6301 361 466</a>
                    <span className="hidden sm:block w-[1px] h-4 bg-white/10" />
                    <a href="mailto:connect@viscano.com" className="hover:text-white/60 transition-colors">connect@viscano.com</a>
                    <span className="hidden sm:block w-[1px] h-4 bg-white/10" />
                    <span>Hyderabad, Telangana</span>
                </div>
            </section>

        </div>
    );
}
