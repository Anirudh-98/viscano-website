import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
    'Custom Web Application',
    'Headless Commerce Integration',
    'API Architecture & Documentation',
    'CI/CD Pipeline Setup',
    'Cloud Infrastructure (AWS / GCP)',
    'Performance & SEO Optimization',
    'Security Audits & Hardening',
    'Ongoing Maintenance Plan',
];

const process = [
    { step: '01', title: 'Discovery & Audit', desc: 'We analyze your current stack, business goals, and technical debt to define the right architecture for scale.' },
    { step: '02', title: 'Architecture Design', desc: 'Our engineers design a robust, modular system — APIs, databases, cloud config — built for today and tomorrow.' },
    { step: '03', title: 'Sprint-Based Build', desc: 'We build in 2-week sprints with weekly demos, ensuring you see real progress and can course-correct fast.' },
    { step: '04', title: 'QA & Hardening', desc: 'Every feature undergoes automated testing, manual QA, and security checks before launch.' },
    { step: '05', title: 'Launch & Support', desc: 'We deploy with zero-downtime strategies and provide post-launch support to ensure everything runs flawlessly.' },
];

const techStack = ['React / Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'AWS / GCP', 'Docker', 'Shopify Plus', 'GraphQL'];

export default function DigitalPlatforms() {
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero wipe-in
            gsap.fromTo('.dp-hero-line',
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );
            gsap.fromTo('.dp-hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.8, stagger: 0.1 }
            );

            // Scroll-triggered sections
            gsap.utils.toArray('.dp-reveal').forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 82%' } }
                );
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">

            {/* ── HERO ── */}
            <section className="relative min-h-[85vh] flex flex-col justify-end pb-16 px-6 lg:px-20 overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" alt="" className="w-full h-full object-cover grayscale opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>



                <div className="relative z-10 max-w-[1400px] w-full">
                    <div className="overflow-hidden mb-3">
                        <h1 className="dp-hero-line text-[clamp(3rem,8vw,8rem)] font-serif font-light text-white leading-[0.92] tracking-tight">Technical</h1>
                    </div>
                    <div className="overflow-hidden mb-16">
                        <h1 className="dp-hero-line text-[clamp(3rem,8vw,8rem)] font-serif italic font-light text-white/40 leading-[0.92] tracking-tight">Infrastructure</h1>
                    </div>
                    <div className="dp-hero-sub pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        <div className="md:col-span-2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/60 mb-6">Development</span>
                            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                                From headless commerce to complex SaaS platforms — we engineer high-performance digital systems built to scale with your ambitions.
                            </p>
                        </div>
                        <div className="flex md:justify-end">
                            <Link to="/contact" className="group w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <ArrowUpRight className="w-6 h-6 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OVERVIEW ── */}
            <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <div className="dp-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> What We Do
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight tracking-tight mb-0">
                            Engineering systems that perform under pressure — every time.
                        </h2>
                    </div>
                    <div className="dp-reveal space-y-5 text-base text-black/55 font-light leading-relaxed lg:pt-16">
                        <p>We don't just write code — we architect digital ecosystems. Our engineering team specializes in building headless commerce solutions, SaaS platforms, and enterprise-grade web applications that handle millions of users without breaking a sweat.</p>
                        <p>Every decision is made with longevity in mind: scalable microservices, clean APIs, and infrastructure that grows with your business rather than against it.</p>
                    </div>
                </div>
            </section>

            {/* ── STATS ── */}
            <div className="border-y border-black/8 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="dp-reveal grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8">
                    {[{ n: '150+', l: 'Apps Built' }, { n: '99.9%', l: 'Uptime SLA' }, { n: '3x', l: 'Avg Speed Gain' }, { n: '8wks', l: 'MVP Timeline' }].map((s, i) => (
                        <div key={i} className="py-10 px-8 first:pl-0 last:pr-0">
                            <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                            <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PROCESS ── */}
            <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="dp-reveal flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-black/30 mb-16">
                    <span className="w-6 h-[1px] bg-black/20" /> Our Process
                </div>
                <div className="space-y-0">
                    {process.map((p, i) => (
                        <div key={i} className="dp-reveal grid grid-cols-[auto_1fr_1fr] gap-8 py-10 border-b border-black/8 group hover:bg-black/[0.02] transition-colors rounded-xl px-4 -mx-4 cursor-default">
                            <span className="font-serif text-black/20 text-2xl font-light w-12">{p.step}</span>
                            <h3 className="font-medium text-lg tracking-tight self-center">{p.title}</h3>
                            <p className="text-black/50 font-light leading-relaxed text-sm self-center">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── DELIVERABLES + TECH STACK ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="dp-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> What You Get
                        </div>
                        <div className="space-y-4">
                            {deliverables.map((d, i) => (
                                <div key={i} className="flex items-center gap-4 text-base font-light text-black/70">
                                    <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="dp-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Tech Stack
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {techStack.map((t) => (
                                <span key={t} className="px-4 py-2 rounded-full border border-black/15 text-sm font-medium text-black/60 hover:border-black hover:text-black transition-colors">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="dp-reveal bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div>
                        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Ready to build?</p>
                        <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight">Let's architect your next platform.</h3>
                    </div>
                    <Link to="/contact"
                        className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all shrink-0">
                        Start a project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

        </div>
    );
}
