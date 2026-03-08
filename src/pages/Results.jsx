import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cases = [
    {
        id: '01',
        client: 'Kusum Ganji',
        category: 'Portfolio · Brand',
        title: 'Portfolio website for Telugu influencer Kusum Ganji.',
        outcome: 'Delivered a stunning personal brand platform',
        tags: ['Portfolio', 'Brand'],
        img: '/kusum.png',
        url: 'https://kusumganji.com/',
        size: 'large',
        bg: 'from-[#1A1A1A] to-[#0A0A0A]',
    },
    {
        id: '02',
        client: 'The Fehu Code',
        category: 'E-Commerce · Development',
        title: 'E-commerce platform for heritage-themed brand.',
        outcome: 'Full-stack e-commerce with cultural identity',
        tags: ['E-Commerce', 'Development'],
        img: '/fehu.png',
        url: 'https://www.fehu.org.in/',
        size: 'small',
        bg: 'from-[#151515] to-[#050505]',
    },
    {
        id: '03',
        client: 'Grox Digital',
        category: 'Web Development · Brand',
        title: 'Custom website for Grox Digital Pvt. Ltd.',
        outcome: 'Modern digital presence for a growing agency',
        tags: ['Web Development', 'Brand'],
        img: '/grox.png',
        url: 'https://grox.digital/',
        size: 'small',
        bg: 'from-[#1c1c1c] to-[#000000]',
    },
    {
        id: '04',
        client: 'Sherpal',
        category: 'Web Design · Development',
        title: 'AI-powered platform website for Sherpal.',
        outcome: 'Scalable SaaS product landing page',
        tags: ['Web Design', 'Development'],
        img: '/sherpal.png',
        url: 'https://sherpalai.com/',
        size: 'large',
        bg: 'from-[#111] to-[#050505]',
    },
    {
        id: '05',
        client: 'Delta HRMS',
        category: 'SaaS · UI/UX',
        title: 'HR management SaaS product website.',
        outcome: 'Clean, conversion-focused SaaS UI',
        tags: ['SaaS', 'UI/UX'],
        img: '/deltahrms.png',
        url: 'https://deltahrms.com/',
        size: 'small',
        bg: 'from-[#181818] to-[#080808]',
    },
    {
        id: '06',
        client: 'Laxmi Developers',
        category: 'Real Estate · Brand',
        title: 'Real estate developer brand & web presence.',
        outcome: 'Elevated brand trust for a property developer',
        tags: ['Real Estate', 'Brand'],
        img: '/laxmidevlopers.png',
        url: 'https://www.laxmideveloper.com/',
        size: 'small',
        bg: 'from-[#141414] to-[#000]',
    },
];

const stats = [
    { n: '10+', l: 'Projects Delivered' },
    { n: '₹ 1M+', l: 'Client Revenue' },
    { n: '94%', l: 'Client Renewal Rate' },
    { n: '9+', l: 'Years Active' },
];

const filters = ['All', 'Brand', 'Development', 'E-Commerce', 'SaaS', 'UI/UX'];

export default function Results() {
    const heroRef = useRef(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.res-hero-line',
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );
            gsap.fromTo('.res-hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.8, stagger: 0.1 }
            );
            gsap.utils.toArray('.res-reveal').forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 40 },
                    { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%' } }
                );
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    const filtered = activeFilter === 'All'
        ? cases
        : cases.filter(c => c.category.toLowerCase().includes(activeFilter.toLowerCase()));

    return (
        <div ref={heroRef} className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">

            {/* ── HERO ── */}
            <section className="pt-36 pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-black/30 mb-10 res-hero-sub">
                    <span className="w-6 h-[1px] bg-black/20" />
                    Selected Cases · Viscano Studio
                </div>

                <div className="overflow-hidden mb-3">
                    <h1 className="res-hero-line text-[clamp(3.5rem,8.5vw,8.5rem)] font-serif font-light text-black leading-[1.2] tracking-tight">
                        Work that
                    </h1>
                </div>
                <div className="overflow-hidden mb-16">
                    <h1 className="res-hero-line text-[clamp(3.5rem,8.5vw,8.5rem)] font-serif italic font-light text-black/25 leading-[1.2] tracking-tight">
                        moves things.
                    </h1>
                </div>

                <div className="h-[1px] bg-black/8 mb-12 res-hero-sub" />

                <div className="res-hero-sub grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    <p className="text-base text-black/50 font-light leading-relaxed max-w-sm md:col-span-2">
                        Real outcomes for real businesses. Every number below is verified, every project shipped by our team.
                    </p>
                    <div className="flex md:justify-end">
                        <Link to="/contact"
                            className="group inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all">
                            Start a project
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <div className="border-y border-black/8 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="res-reveal grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8">
                    {stats.map((s, i) => (
                        <div key={i} className="py-10 px-8 first:pl-0 last:pr-0">
                            <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                            <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FILTER PILLS ── */}
            <div className="res-reveal flex flex-wrap gap-3 px-6 lg:px-20 max-w-[1400px] mx-auto pt-16 pb-10">
                {filters.map(f => (
                    <button key={f} onClick={() => setActiveFilter(f)}
                        className={`px-5 py-2.5 rounded-full text-xs tracking-wide font-medium border transition-all duration-200 ${activeFilter === f ? 'bg-black text-white border-black' : 'bg-transparent text-black/50 border-black/15 hover:border-black hover:text-black'
                            }`}>
                        {f}
                    </button>
                ))}
            </div>

            {/* ── CASES GRID ── */}
            <section className="pb-12 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[340px]">
                    {filtered.map((c, i) => (
                        <a
                            key={c.id}
                            href={c.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHovered(c.id)}
                            onMouseLeave={() => setHovered(null)}
                            className={`res-reveal group relative overflow-hidden rounded-2xl cursor-pointer block ${c.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
                                }`}
                        >
                            {/* Background gradient + image */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${c.bg}`} />
                            <img src={c.img} alt={c.title}
                                className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 opacity-80 group-hover:opacity-100 ${hovered === c.id ? 'scale-[1.03]' : 'scale-100'}`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Top row */}
                            <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
                                <div className="flex flex-wrap gap-2">
                                    {c.tags.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-wide text-white/70 backdrop-blur-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className={`w-9 h-9 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm transition-all duration-300 ${hovered === c.id ? 'bg-white border-white' : ''}`}>
                                    <ArrowUpRight className={`w-4 h-4 transition-colors ${hovered === c.id ? 'text-black' : 'text-white'}`} />
                                </div>
                            </div>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{c.client} · {c.category}</div>
                                <h3 className="text-xl md:text-2xl font-serif font-light text-white leading-snug mb-3 tracking-tight">{c.title}</h3>
                                <div className={`flex items-center gap-2 overflow-hidden transition-all duration-500 ${hovered === c.id ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                                    <span className="text-sm text-white/70 font-light">{c.outcome}</span>
                                </div>
                            </div>

                            {/* Case number */}
                            <div className="absolute bottom-6 right-6 text-white/10 text-6xl font-serif font-light leading-none z-10 select-none">
                                {c.id}
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="res-reveal text-[10px] tracking-[0.25em] uppercase text-black/30 mb-16 flex items-center gap-3">
                    <span className="w-6 h-[1px] bg-black/20" /> What clients say
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
                    {[
                        { quote: "Viscano didn't just deliver a website—they delivered a growth engine. Revenue tripled within the year.", author: 'James K.', role: 'CEO, Nexus Commerce' },
                        { quote: "The brand they built for us is something we're genuinely proud of. Every detail, from motion to typography, is considered.", author: 'Sara M.', role: 'Founder, Aether Studio' },
                        { quote: "They think like founders, not freelancers. The ROI from their growth work paid for the entire project in week one.", author: 'Tom R.', role: 'CMO, Luxe_Time' },
                    ].map((t, i) => (
                        <div key={i} className="res-reveal bg-white p-10">
                            <p className="text-xl font-serif font-light leading-relaxed text-black/80 mb-8 tracking-tight">"{t.quote}"</p>
                            <div>
                                <div className="text-sm font-medium">{t.author}</div>
                                <div className="text-xs text-black/40 tracking-wide mt-0.5">{t.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="res-reveal bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div>
                        <p className="text-white/40 text-sm tracking-widest uppercase mb-4">Ready to be next?</p>
                        <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight">
                            Let's build something worth<br />putting on this page.
                        </h3>
                    </div>
                    <Link to="/contact"
                        className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all shrink-0">
                        Start a project
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Bottom strip */}
            <div className="border-t border-black/8 px-6 lg:px-20 py-8 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-black/30">
                <span>© 2024 Viscano Studio — All Rights Reserved</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Currently accepting projects
                </span>
            </div>

        </div>
    );
}
