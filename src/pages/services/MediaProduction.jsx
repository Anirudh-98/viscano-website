import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
    'Brand Film (up to 4 min)',
    'Product Photography Suite',
    'Social Content Package (30+ assets)',
    'Campaign Hero Imagery',
    'Behind-the-Scenes Footage',
    'Motion Graphics & Animations',
    'Podcast / Audio Production',
    'Full Licensing & RAW Files',
];

const process = [
    { step: '01', title: 'Creative Brief', desc: 'We extract your brand story, campaign goals, and target audience to develop a sharp creative brief that guides every production decision.' },
    { step: '02', title: 'Concept & Pre-Production', desc: 'Mood boards, shot lists, casting, location scouting — we do the hard work before a camera ever rolls.' },
    { step: '03', title: 'Shoot Days', desc: 'Our production crew brings world-class equipment and direction to every shoot — from intimate brand portraits to cinematic campaign films.' },
    { step: '04', title: 'Post-Production', desc: 'Editing, color grading, retouching, sound design, and motion graphics — all handled in-house for consistent quality.' },
    { step: '05', title: 'Delivery & Distribution', desc: 'We deliver assets formatted for every channel and help you plan a content calendar that maximizes impact.' },
];

const formats = ['Photography', 'Brand Films', 'Product Videos', 'Social Reels', 'Motion Graphics', 'Podcasts', 'Event Coverage', 'Documentary'];

export default function MediaProduction() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.mp-hero-line',
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );
            gsap.fromTo('.mp-hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.8, stagger: 0.1 }
            );
            gsap.utils.toArray('.mp-reveal').forEach((el) => {
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
                    <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80" alt="" className="w-full h-full object-cover grayscale opacity-25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                <div className="relative z-10 max-w-[1400px] w-full">
                    <div className="overflow-hidden mb-3">
                        <h1 className="mp-hero-line text-[clamp(3rem,8vw,8rem)] font-serif font-light text-white leading-[0.92] tracking-tight">Digital</h1>
                    </div>
                    <div className="overflow-hidden mb-16">
                        <h1 className="mp-hero-line text-[clamp(3rem,8vw,8rem)] font-serif italic font-light text-white/40 leading-[0.92] tracking-tight">Content</h1>
                    </div>
                    <div className="mp-hero-sub pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        <div className="md:col-span-2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/60 mb-6">Creative</span>
                            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                                High-end content that tells your story — from award-worthy brand films to high-converting product photography, built for global campaigns.
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
                    <div className="mp-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> What We Believe
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight tracking-tight">
                            Content isn't king. Content with a strategy and soul is.
                        </h2>
                    </div>
                    <div className="mp-reveal space-y-5 text-base text-black/55 font-light leading-relaxed lg:pt-16">
                        <p>Anyone can make content. Very few can make content that moves people, drives action, and holds up over time. Our production team combines cinematic craft with strategic thinking to ensure every piece of content earns its place in your brand ecosystem.</p>
                        <p>We work with brands of all sizes — from intimate product launch shoots to multi-day global campaign films — always with the same obsessive attention to light, story, and detail.</p>
                    </div>
                </div>
            </section>

            {/* ── PHOTO GALLERY ── */}
            <div className="mp-reveal px-6 lg:px-20 max-w-[1400px] mx-auto pb-20">
                <div className="grid grid-cols-3 gap-4 h-[420px]">
                    <div className="rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </div>

            {/* ── STATS ── */}
            <div className="border-y border-black/8 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="mp-reveal grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8">
                    {[{ n: '500+', l: 'Campaigns Shot' }, { n: '18', l: 'Countries' }, { n: '4K / 8K', l: 'Camera Quality' }, { n: '72h', l: 'First Cut TAT' }].map((s, i) => (
                        <div key={i} className="py-10 px-8 first:pl-0 last:pr-0">
                            <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                            <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PROCESS ── */}
            <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="mp-reveal flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-black/30 mb-16">
                    <span className="w-6 h-[1px] bg-black/20" /> Production Process
                </div>
                <div className="space-y-0">
                    {process.map((p, i) => (
                        <div key={i} className="mp-reveal grid grid-cols-[auto_1fr_1fr] gap-8 py-10 border-b border-black/8 group hover:bg-black/[0.02] transition-colors rounded-xl px-4 -mx-4 cursor-default">
                            <span className="font-serif text-black/20 text-2xl font-light w-12">{p.step}</span>
                            <h3 className="font-medium text-lg tracking-tight self-center">{p.title}</h3>
                            <p className="text-black/50 font-light leading-relaxed text-sm self-center">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── DELIVERABLES + FORMATS ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="mp-reveal">
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
                    <div className="mp-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Content Formats
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {formats.map((t) => (
                                <span key={t} className="px-4 py-2 rounded-full border border-black/15 text-sm font-medium text-black/60 hover:border-black hover:text-black transition-colors">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="mp-reveal bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div>
                        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Ready to create?</p>
                        <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight">Let's tell your story — beautifully.</h3>
                    </div>
                    <Link to="/contact" className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all shrink-0">
                        Book a shoot
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
