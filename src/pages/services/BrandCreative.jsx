import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const deliverables = [
    'Brand Strategy & Positioning',
    'Visual Identity System',
    'Logo Design & Brand Mark',
    'Typography & Color System',
    'UI Component Library',
    'Brand Guidelines Document',
    'Product Interface Design',
    'Motion & Animation Language',
];

const process = [
    { step: '01', title: 'Research & Discovery', desc: 'We deep-dive into your market, competitors, and audience to uncover the positioning opportunity that truly differentiates you.' },
    { step: '02', title: 'Strategic Framework', desc: 'From mission and values to voice and visual direction, we build the strategic platform your brand will live on.' },
    { step: '03', title: 'Visual Exploration', desc: 'Our designers develop multiple creative directions — each a fully realized aesthetic world, not just logo sketches.' },
    { step: '04', title: 'System Build', desc: 'We expand the chosen direction into a comprehensive visual system: typography, color, icons, photography style, and more.' },
    { step: '05', title: 'Handoff & Rollout', desc: 'We deliver clear, production-ready guidelines and assets — and support your team as you roll out the brand across every touchpoint.' },
];

const outputs = ['Logo Suite', 'Color Palette', 'Type System', 'Iconography', 'Illustration Style', 'Photography Direction', 'Motion Principles', 'Brand Voice Guide'];

export default function BrandCreative() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.bc-hero-line',
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );
            gsap.fromTo('.bc-hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.8, stagger: 0.1 }
            );
            gsap.utils.toArray('.bc-reveal').forEach((el) => {
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
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=80" alt="" className="w-full h-full object-cover grayscale opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
                </div>

                <div className="relative z-10 max-w-[1400px] w-full">
                    <div className="overflow-hidden mb-3">
                        <h1 className="bc-hero-line text-[clamp(3rem,8vw,8rem)] font-serif font-light text-white leading-[0.92] tracking-tight">Brand &amp;</h1>
                    </div>
                    <div className="overflow-hidden mb-16">
                        <h1 className="bc-hero-line text-[clamp(3rem,8vw,8rem)] font-serif italic font-light text-white/40 leading-[0.92] tracking-tight">Product</h1>
                    </div>
                    <div className="bc-hero-sub pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                        <div className="md:col-span-2">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-[0.2em] uppercase text-white/60 mb-6">Design</span>
                            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
                                Visual systems that command attention. Interfaces that create friction-less journeys. Brands that people don't just recognize — they remember.
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
                    <div className="bc-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Our Approach
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight tracking-tight">
                            Brand is not a logo. It's the feeling you leave behind.
                        </h2>
                    </div>
                    <div className="bc-reveal space-y-5 text-base text-black/55 font-light leading-relaxed lg:pt-16">
                        <p>We approach every brand project as a strategic exercise first, a creative one second. That means digging deep into your market position, audience psychology, and competitive landscape before a single pixel is placed.</p>
                        <p>The result is a visual identity that isn't just beautiful — it's intentional. Every choice, from typeface weight to secondary color, carries meaning that earns trust and drives recognition.</p>
                    </div>
                </div>
            </section>

            {/* ── IMAGE GALLERY ROW ── */}
            <div className="bc-reveal px-6 lg:px-20 max-w-[1400px] mx-auto pb-20">
                <div className="grid grid-cols-3 gap-4 h-[400px]">
                    <div className="col-span-2 rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="rounded-2xl overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80" alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </div>

            {/* ── STATS ── */}
            <div className="border-y border-black/8 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="bc-reveal grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8">
                    {[{ n: '80+', l: 'Brands Built' }, { n: '12', l: 'Design Awards' }, { n: '94%', l: 'Client Renewal' }, { n: '6wks', l: 'Identity Launch' }].map((s, i) => (
                        <div key={i} className="py-10 px-8 first:pl-0 last:pr-0">
                            <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                            <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── PROCESS ── */}
            <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="bc-reveal flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-black/30 mb-16">
                    <span className="w-6 h-[1px] bg-black/20" /> Our Process
                </div>
                <div className="space-y-0">
                    {process.map((p, i) => (
                        <div key={i} className="bc-reveal grid grid-cols-[auto_1fr_1fr] gap-8 py-10 border-b border-black/8 group hover:bg-black/[0.02] transition-colors rounded-xl px-4 -mx-4 cursor-default">
                            <span className="font-serif text-black/20 text-2xl font-light w-12">{p.step}</span>
                            <h3 className="font-medium text-lg tracking-tight self-center">{p.title}</h3>
                            <p className="text-black/50 font-light leading-relaxed text-sm self-center">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── DELIVERABLES + OUTPUTS ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="bc-reveal">
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
                    <div className="bc-reveal">
                        <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Brand Elements
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {outputs.map((t) => (
                                <span key={t} className="px-4 py-2 rounded-full border border-black/15 text-sm font-medium text-black/60 hover:border-black hover:text-black transition-colors">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="bc-reveal bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div>
                        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Ready to stand out?</p>
                        <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight">Let's build a brand worth remembering.</h3>
                    </div>
                    <Link to="/contact" className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all shrink-0">
                        Start the conversation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
