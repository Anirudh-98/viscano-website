import React, { useEffect, useRef, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Search } from 'lucide-react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

gsap.registerPlugin(ScrollTrigger);

// Removed static roles array

const perks = [
    { emoji: '🌍', title: 'Work from anywhere', desc: 'Fully distributed team. Build from wherever you do your best thinking.' },
    { emoji: '🧠', title: 'Learning budget', desc: '$2,000/year for courses, books, conferences, and anything that makes you sharper.' },
    { emoji: '⚡', title: 'Fast ship culture', desc: 'No bureaucracy. Ideas move from concept to live in weeks, not quarters.' },
    { emoji: '🎯', title: 'Equity for impact', desc: 'We share upside. Key hires receive meaningful equity in the studio.' },
    { emoji: '🏖️', title: 'Flexible time off', desc: 'Unlimited PTO that we actually encourage you to use. Minimum 20 days.' },
    { emoji: '🤝', title: 'Maker community', desc: 'Work alongside world-class designers, engineers, and strategists daily.' },
];

export default function Careers() {
    const pageRef = useRef(null);
    const [openRole, setOpenRole] = useState(null);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch roles from Firestore (one-shot — no persistent WebSocket)
    useEffect(() => {
        const q = query(collection(db, 'jobOpenings'), orderBy('createdAt', 'desc'));
        getDocs(q)
            .then((snapshot) => {
                const data = [];
                snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
                setRoles(data);
                ScrollTrigger.refresh();
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero lines wipe up
            gsap.fromTo('.car-line',
                { yPercent: 115, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.13, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );
            gsap.fromTo('.car-sub',
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, stagger: 0.1, duration: 0.9, ease: 'power3.out', delay: 0.85 }
            );

            // Scroll-triggered reveals
            gsap.utils.toArray('.car-reveal').forEach((el) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 36 },
                    { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
                );
            });

            // Perks stagger
            gsap.fromTo('.perk-card',
                { opacity: 0, y: 30 },
                {
                    opacity: 1, y: 0, stagger: 0.08, duration: 0.7, ease: 'power3.out',
                    scrollTrigger: { trigger: '.perks-section', start: 'top 80%' }
                }
            );

            // Roles stagger
            gsap.fromTo('.role-row',
                { opacity: 0, x: -20 },
                {
                    opacity: 1, x: 0, stagger: 0.1, duration: 0.7, ease: 'power3.out',
                    scrollTrigger: { trigger: '.roles-section', start: 'top 78%' }
                }
            );
        }, pageRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="bg-white text-black font-sans min-h-screen selection:bg-black selection:text-white">
            <SEOHead
                title="Careers — Join Viscano Creative Studio | Hyderabad & Visakhapatnam"
                description="Join Viscano, a growing creative studio based in Hyderabad. We're hiring designers, engineers, and strategists across Hyderabad, Visakhapatnam, and remote roles across India."
                keywords="design jobs Hyderabad, creative studio careers, UI UX designer jobs Hyderabad, web developer jobs Vizag, design agency jobs Visakhapatnam, Viscano careers"
                canonical="https://viscano.com/careers"
            />

            {/* ── HERO ── */}
            <section className="pt-36 pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto">

                <div className="car-sub flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-black/55 mb-10">
                    <span className="w-6 h-[1px] bg-black/20" />
                    Careers at Viscano
                </div>

                <div className="overflow-hidden mb-3">
                    <h1 className="car-line text-[clamp(3.2rem,8vw,8rem)] font-serif font-light text-black leading-[1.05] tracking-tight">
                        Build the future
                    </h1>
                </div>
                <div className="overflow-hidden mb-16">
                    <h1 className="car-line text-[clamp(3.2rem,8vw,8rem)] font-serif italic font-light text-black/20 leading-[1.05] tracking-tight">
                        with us.
                    </h1>
                </div>

                <div className="h-[1px] bg-black/8 mb-12 car-sub" />

                <div className="car-sub grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
                    <p className="text-base text-black/50 font-light leading-relaxed md:col-span-2 max-w-xl">
                        We're a small, experienced team building things that matter for ambitious brands. We move fast, care deeply about craft, and believe the best work comes from people who are trusted and given space to own their domain.
                    </p>
                    <div className="flex md:justify-end">
                        <a href="mailto:careers@viscano.com"
                            className="group inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all">
                            Send your work
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── MANIFESTO STRIP ── */}
            <section className="car-reveal border-y border-black/8 py-20 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Our way of working
                        </p>
                        <h2 className="text-3xl md:text-4xl font-serif font-light text-black leading-tight mb-8 tracking-tight">
                            We don't hire for roles.<br />We hire for potential.
                        </h2>
                        <p className="text-black/50 font-light leading-relaxed mb-6">
                            Every person at Viscano is a decision-maker. There are no coordinators — only owners. We expect you to act with full accountability and to bring your opinion loudly to the table.
                        </p>
                        <p className="text-black/50 font-light leading-relaxed">
                            In return, you get rare access to the full picture — client strategy, creative direction, and business outcomes. We build generalists who think like founders.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { n: '12', l: 'Team members worldwide' },
                            { n: '5+', l: 'Years avg. experience' },
                            { n: '94%', l: 'Team retention rate' },
                            { n: '0', l: 'Bureaucratic layers' },
                        ].map((s, i) => (
                            <div key={i} className="bg-[#F8F8F8] rounded-2xl p-6">
                                <div className="text-4xl font-serif font-light text-black mb-1">{s.n}</div>
                                <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PERKS ── */}
            <section className="perks-section py-24 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="car-reveal mb-14">
                    <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 mb-3 flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-black/20" /> Why it's good here
                    </p>
                    <h2 className="text-3xl font-extrabold tracking-tight text-black">What you get</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {perks.map((p, i) => (
                        <div key={i} className="perk-card bg-[#F8F8F8] hover:bg-black group rounded-2xl p-7 transition-all duration-300 cursor-default">
                            <div className="text-3xl mb-4">{p.emoji}</div>
                            <h3 className="text-base font-bold text-black group-hover:text-white mb-2 transition-colors">{p.title}</h3>
                            <p className="text-sm text-black/50 group-hover:text-white/60 font-light leading-relaxed transition-colors">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── OPEN ROLES ── */}
            <section className="roles-section pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto min-h-[400px]">
                <div className="car-reveal flex items-end justify-between mb-12">
                    <div>
                        <p className="text-[10px] tracking-[0.22em] uppercase text-black/30 mb-3 flex items-center gap-3">
                            <span className="w-6 h-[1px] bg-black/20" /> Open positions
                        </p>
                        <h2 className="text-3xl font-extrabold tracking-tight text-black">Roles we're hiring for</h2>
                    </div>
                    <span className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-black/30">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        {roles.length} open roles
                    </span>
                </div>

                {loading ? (
                    <div className="py-20 flex flex-col items-center justify-center text-black/30 border-t border-black/8">
                        <div className="w-8 h-8 rounded-full border-2 border-black/10 border-t-black/40 animate-spin mb-4" />
                        <p className="text-xs uppercase tracking-widest font-medium text-black/40">Loading positions</p>
                    </div>
                ) : roles.length === 0 ? (
                    <div className="py-24 flex flex-col items-center text-center border-t border-black/8 bg-[#F8F8F8] rounded-3xl mt-4">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
                            <Search className="w-6 h-6 text-black/30" />
                        </div>
                        <h3 className="text-xl font-medium text-black mb-2">Currently we are not hiring</h3>
                        <p className="text-black/50 font-light max-w-sm">We don't have any open positions at the moment, but we're always looking to connect with exceptional talent for future opportunities.</p>
                    </div>
                ) : (
                    <div className="border-t border-black/8">
                        {roles.map((role, index) => {
                            const displayNumber = String(index + 1).padStart(2, '0');
                            return (
                                <div key={role.id} className="role-row">
                                    {/* Row header */}
                                    <button
                                        onClick={() => setOpenRole(openRole === role.id ? null : role.id)}
                                        className="group w-full text-left border-b border-black/8 py-7 flex items-center justify-between gap-6 hover:bg-[#F8F8F8] transition-all duration-200 px-4 -mx-4 rounded-xl"
                                    >
                                        <div className="flex items-center gap-6 min-w-0">
                                            <span className="text-xs font-mono text-black/20 shrink-0">{displayNumber}</span>
                                            <div className="min-w-0">
                                                <div className="text-lg font-bold text-black group-hover:text-black mb-0.5 truncate">{role.title}</div>
                                                <div className="flex flex-wrap items-center gap-3 text-[11px] text-black/40">
                                                    <span className="px-2.5 py-1 rounded-full bg-black/5 font-medium">{role.department}</span>
                                                    <span>{role.type}</span>
                                                    <span>·</span>
                                                    <span>{role.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${openRole === role.id ? 'bg-black border-black' : 'border-black/15 group-hover:border-black'
                                            }`}>
                                            <svg className={`w-4 h-4 transition-all duration-300 ${openRole === role.id ? 'text-white rotate-45' : 'text-black'}`}
                                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </button>

                                    {/* Expanded content */}
                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openRole === role.id ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="px-4 py-7 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start border-b border-black/8">
                                            <div>
                                                <p className="text-black/60 font-light leading-relaxed mb-6 max-w-2xl">{role.desc}</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {role.skills?.map(s => (
                                                        <span key={s} className="px-3.5 py-1.5 rounded-full border border-black/10 text-xs font-medium text-black/60">{s}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <a href={`mailto:careers@viscano.com?subject=${encodeURIComponent('Application: ' + role.title)}`}
                                                className="group shrink-0 inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all">
                                                Apply now
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>

            {/* ── OPEN APPLICATION ── */}
            <section className="car-reveal pb-24 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="bg-[#F8F8F8] rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-4">Don't see your role?</p>
                        <h3 className="text-2xl md:text-3xl font-serif font-light text-black leading-tight mb-3">
                            Send us your work anyway.
                        </h3>
                        <p className="text-sm text-black/40 font-light max-w-md leading-relaxed">
                            We hire people before we post roles. If your work is exceptional, we'll make space for you. Send your portfolio and a note on what you want to build.
                        </p>
                    </div>
                    <a href="mailto:careers@viscano.com"
                        className="group shrink-0 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black/80 transition-all">
                        careers@viscano.com
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="car-reveal pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                    <div>
                        <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Viscano Studio</p>
                        <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight">
                            We're building the creative studio<br className="hidden md:block" /> of the next decade.
                        </h3>
                    </div>
                    <Link to="/about"
                        className="group shrink-0 flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/80 transition-all">
                        Our story
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* Bottom strip */}
            <div className="border-t border-black/8 px-6 lg:px-20 py-8 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-black/30">
                <span>© 2024 Viscano Studio</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {roles.length} open roles · Hiring now
                </span>
            </div>

        </div>
    );
}
