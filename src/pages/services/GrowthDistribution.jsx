import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
    'Growth Audit & Baseline Report',
    'Conversion Rate Optimisation',
    'SEO Strategy & Implementation',
    'Performance Marketing Setup',
    'A/B Testing Framework',
    'Analytics Dashboard Build',
    'Email & Lifecycle Campaigns',
    'Monthly Growth Reports',
];

const process = [
    { step: '01', title: 'Baseline Audit', desc: 'We forensically audit your current funnel — traffic sources, drop-off points, conversion blockers, and revenue gaps.' },
    { step: '02', title: 'Strategy Build', desc: 'We design a 90-day growth roadmap with prioritized experiments ranked by effort vs. impact.' },
    { step: '03', title: 'Execution Sprints', desc: 'Our growth team runs structured bi-weekly sprints: launching tests, gathering data, and iterating rapidly.' },
    { step: '04', title: 'Measure & Iterate', desc: "We track every experiment in a shared dashboard and double down on what's working." },
    { step: '05', title: 'Scale & Sustain', desc: 'Once winning formulas are established, we operationalize them across channels for compounding returns.' },
];

const channels = ['Paid Search', 'Paid Social', 'SEO / Content', 'Email Marketing', 'CRO', 'Influencer', 'Affiliate', 'Analytics'];

export default function GrowthDistribution() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.gd-hero-line',
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );
            gsap.fromTo('.gd-hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.8, stagger: 0.1 }
            );
            gsap.utils.toArray('.gd-reveal').forEach((el) => {
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
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80" alt="" className="w-full h-full object-cover grayscale opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                <div className="relative z-10 max-w-[1400px] w-full">
                    <div className="overflow-hidden mb-3">
                        <h1 className="gd-hero-line text-[clamp(3rem,8vw,8rem)] font-serif font-light text-white leading-[0.92] tracking-tight">Growth</h1>
                    </div>
                    <div className="overflow-hidden mb-16">
                        <h1 className="gd-hero-line text-[clamp(3rem,8vw,8rem)] font-serif italic font-light text-white/40 leading-[0.92] tracking-tight">Systems</h1>
                    </div>
                    <div className="gd-hero-sub pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        <div className="md:col-span-2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/60 mb-6">Strategy</span>
                            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                                Data-driven strategies that scale your reach, maximize conversion, and build sustainable revenue — through meticulous testing and hard-earned insight.
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
                    <div className="gd-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Our Philosophy
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight tracking-tight">
                            Growth isn't luck. It's a system you build, test, and iterate.
                        </h2>
                    </div>
                    <div className="gd-reveal space-y-5 text-base text-black/55 font-light leading-relaxed lg:pt-16">
                        <p>Most agencies chase vanity metrics. We obsess over revenue. Our growth practice is built on a simple belief: every marketing dollar should be accountable, and every experiment should teach you something.</p>
                        <p>We combine performance marketing expertise with product thinking — optimizing your entire funnel from first impression to loyal customer, not just the ad click.</p>
                    </div>
                </div>
            </section>

            {/* ── METRICS SHOWCASE ── */}
            <div className="gd-reveal px-6 lg:px-20 max-w-[1400px] mx-auto pb-16">
                <div className="bg-black rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[{ n: '+312%', l: 'Avg. ROI increase in Year 1', desc: 'Across performance marketing accounts' },
                    { n: '2.8x', l: 'Conversion lift via CRO', desc: 'Average across e-commerce clients' },
                    { n: '-44%', l: 'Cost per acquisition reduction', desc: 'Through funnel optimization' }
                    ].map((m, i) => (
                        <div key={i} className={`${i < 2 ? 'md:border-r md:border-white/10 md:pr-10' : ''}`}>
                            <div className="text-5xl font-serif font-light text-white mb-3">{m.n}</div>
                            <div className="text-sm font-medium text-white/70 mb-1">{m.l}</div>
                            <div className="text-xs text-white/30 tracking-wide">{m.desc}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── STATS ── */}
            <div className="border-y border-black/8 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="gd-reveal grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8">
                    {[{ n: '90+', l: 'Brands Scaled' }, { n: '3.1x', l: 'Avg ROAS' }, { n: '$200M+', l: 'Revenue Generated' }, { n: '30d', l: 'First Wins' }].map((s, i) => (
                        <div key={i} className="py-10 px-8 first:pl-0 last:pr-0">
                            <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                            <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PROCESS ── */}
            <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="gd-reveal flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-black/30 mb-16">
                    <span className="w-6 h-[1px] bg-black/20" /> The Playbook
                </div>
                <div className="space-y-0">
                    {process.map((p, i) => (
                        <div key={i} className="gd-reveal grid grid-cols-[auto_1fr_1fr] gap-8 py-10 border-b border-black/8 group hover:bg-black/[0.02] transition-colors rounded-xl px-4 -mx-4 cursor-default">
                            <span className="font-serif text-black/20 text-2xl font-light w-12">{p.step}</span>
                            <h3 className="font-medium text-lg tracking-tight self-center">{p.title}</h3>
                            <p className="text-black/50 font-light leading-relaxed text-sm self-center">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── DELIVERABLES + CHANNELS ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="gd-reveal">
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
                    <div className="gd-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Channels We Operate
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {channels.map((t) => (
                                <span key={t} className="px-4 py-2 rounded-full border border-black/15 text-sm font-medium text-black/60 hover:border-black hover:text-black transition-colors">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="gd-reveal bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div>
                        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Ready to scale?</p>
                        <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight">Let's build your growth engine.</h3>
                    </div>
                    <Link to="/contact" className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all shrink-0">
                        Start growing
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
