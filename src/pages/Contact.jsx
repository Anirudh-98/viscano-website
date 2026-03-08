import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = ['Brand Identity', 'Web Development', 'Growth Strategy', 'Content Production', 'UI / UX Design', 'Other'];

const socials = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Dribbble', href: '#' },
];

export default function Contact() {
    const heroRef = useRef(null);
    const headlineRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    const [selected, setSelected] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const toggleService = (s) => {
        setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        gsap.to(formRef.current, {
            opacity: 0, y: -20, duration: 0.4, ease: 'power2.in',
            onComplete: () => setSubmitted(true)
        });
    };

    // ── GSAP Animations ──
    useEffect(() => {
        const ctx = gsap.context(() => {

            // Hero line wipe-in
            gsap.fromTo('.hero-line',
                { yPercent: 110, opacity: 0 },
                { yPercent: 0, opacity: 1, stagger: 0.12, duration: 1.1, ease: 'power4.out', delay: 0.2 }
            );

            // Tag fade
            gsap.fromTo('.hero-tag',
                { opacity: 0, x: -20 },
                { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.1 }
            );

            // Divider line grow
            gsap.fromTo('.hero-divider',
                { scaleX: 0, transformOrigin: 'left' },
                { scaleX: 1, duration: 1.2, ease: 'power4.inOut', delay: 0.6 }
            );

            // Hero sub-row fade
            gsap.fromTo('.hero-sub',
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9, stagger: 0.1 }
            );

            // Form section slides in on scroll
            gsap.fromTo(formRef.current,
                { opacity: 0, y: 60 },
                {
                    opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: formRef.current, start: 'top 80%' }
                }
            );

            // Info section slides in
            gsap.fromTo(infoRef.current,
                { opacity: 0, x: 40 },
                {
                    opacity: 1, x: 0, duration: 1, ease: 'power3.out',
                    scrollTrigger: { trigger: infoRef.current, start: 'top 80%' }
                }
            );

            // Stat counters
            gsap.utils.toArray('.stat-item').forEach((el, i) => {
                gsap.fromTo(el,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: i * 0.1,
                        scrollTrigger: { trigger: el, start: 'top 85%' }
                    }
                );
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    // Animate success message in
    useEffect(() => {
        if (submitted) {
            gsap.fromTo('.success-msg',
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' }
            );
        }
    }, [submitted]);

    return (
        <div ref={heroRef} className="bg-white text-black min-h-screen overflow-hidden font-sans selection:bg-black selection:text-white">

            {/* ── HERO ── */}
            <section className="pt-36 pb-20 px-6 lg:px-20 max-w-[1400px] mx-auto">

                {/* Tag row */}
                <div className="hero-tag flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-black/40 mb-10">
                    <span className="w-6 h-[1px] bg-black/30" />
                    Get In Touch · Viscano Studio
                </div>

                {/* Big headline */}
                <div className="overflow-hidden mb-4">
                    <h1 className="hero-line text-[clamp(3.5rem,8.5vw,8.5rem)] font-serif font-light text-black leading-[1.2] tracking-tight">
                        Let's work
                    </h1>
                </div>
                <div className="overflow-hidden mb-16">
                    <h1 className="hero-line text-[clamp(3.5rem,8.5vw,8.5rem)] font-serif italic font-light text-black/30 leading-[1.2] tracking-tight">
                        together.
                    </h1>
                </div>

                {/* Divider */}
                <div className="hero-divider h-[1px] bg-black/10 mb-12" />

                {/* Sub row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-end">
                    <p className="hero-sub text-base text-black/50 font-light leading-relaxed max-w-xs">
                        We'd love to hear about your project. Tell us what you need and we'll get back within 24 hours.
                    </p>
                    <div className="hero-sub md:col-span-2 flex flex-wrap gap-4 md:justify-end">
                        <a href="mailto:hello@viscano.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
                            connect@viscano.com
                            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                        <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/15 text-sm font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 group">
                            +91 6301361466
                            <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ── MAIN SECTION ── */}
            <section className="pb-40 px-6 lg:px-20 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 items-start">

                    {/* ── FORM ── */}
                    <div ref={formRef}>
                        {submitted ? (
                            <div className="success-msg py-20 flex flex-col items-start">
                                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-8">
                                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h2 className="text-4xl font-serif font-light mb-4 tracking-tight">Message received.</h2>
                                <p className="text-black/50 font-light text-lg mb-10">We'll be in touch within 24 hours.</p>
                                <button onClick={() => setSubmitted(false)}
                                    className="text-xs tracking-[0.15em] uppercase font-medium border-b border-black/30 pb-1 hover:border-black transition-colors">
                                    Send another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-0">

                                {/* Name */}
                                <div className={`relative border-b transition-colors duration-300 ${focusedField === 'name' ? 'border-black' : 'border-black/10'}`}>
                                    <label className={`absolute top-6 left-0 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none ${focusedField === 'name' || form.name ? 'opacity-100 text-black/40' : 'opacity-0'}`}>
                                        Your Name
                                    </label>
                                    <input
                                        type="text" required placeholder="Your name"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        onFocus={() => setFocusedField('name')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pt-10 pb-5 text-xl font-light bg-transparent outline-none placeholder:text-black/20 text-black"
                                    />
                                </div>

                                {/* Email */}
                                <div className={`relative border-b transition-colors duration-300 ${focusedField === 'email' ? 'border-black' : 'border-black/10'}`}>
                                    <label className={`absolute top-6 left-0 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none ${focusedField === 'email' || form.email ? 'opacity-100 text-black/40' : 'opacity-0'}`}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email" required placeholder="Email address"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pt-10 pb-5 text-xl font-light bg-transparent outline-none placeholder:text-black/20 text-black"
                                    />
                                </div>

                                {/* Services */}
                                <div className="pt-10 pb-8 border-b border-black/10">
                                    <p className="text-[10px] tracking-[0.2em] uppercase text-black/40 mb-5">I need help with</p>
                                    <div className="flex flex-wrap gap-3">
                                        {services.map((s) => (
                                            <button
                                                type="button" key={s}
                                                onClick={() => toggleService(s)}
                                                className={`px-5 py-2.5 rounded-full text-xs tracking-wide font-medium border transition-all duration-250 ${selected.includes(s)
                                                    ? 'bg-black text-white border-black'
                                                    : 'bg-transparent text-black/60 border-black/15 hover:border-black hover:text-black'
                                                    }`}
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className={`relative border-b transition-colors duration-300 ${focusedField === 'message' ? 'border-black' : 'border-black/10'}`}>
                                    <label className={`absolute top-6 left-0 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none ${focusedField === 'message' || form.message ? 'opacity-100 text-black/40' : 'opacity-0'}`}>
                                        Your Message
                                    </label>
                                    <textarea
                                        required rows={4} placeholder="Tell us about your project…"
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        className="w-full pt-10 pb-5 text-xl font-light bg-transparent outline-none resize-none placeholder:text-black/20 text-black"
                                    />
                                </div>

                                {/* Submit */}
                                <div className="pt-10">
                                    <button
                                        type="submit"
                                        className="group w-full md:w-auto flex items-center justify-between md:justify-start gap-8 bg-black text-white px-10 py-5 rounded-full text-sm font-bold tracking-wide hover:bg-black/80 transition-all duration-300"
                                    >
                                        Send message
                                        <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                                            <ArrowUpRight className="w-4 h-4 group-hover:text-black transition-colors duration-300" />
                                        </span>
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* ── INFO PANEL ── */}
                    <aside ref={infoRef} className="lg:pt-6 space-y-16">

                        {/* Contact details */}
                        <div>
                            <p className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8">Contact Details</p>
                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: 'Email', value: 'connect@viscano.com', href: 'mailto:connect@viscano.com' },
                                    { icon: Phone, label: 'Phone', value: '+91 6301361466', href: 'tel:+916301361466, +91 7396973640' },
                                    { icon: MapPin, label: 'Location', value: 'HYDERABAD, INDIA', href: '#' },
                                ].map(({ icon: Icon, label, value, href }) => (
                                    <a key={label} href={href}
                                        className="flex items-start gap-4 group cursor-pointer">
                                        <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:border-black transition-all duration-300">
                                            <Icon className="w-4 h-4 text-black/40 group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-0.5">{label}</p>
                                            <p className="text-base font-medium group-hover:text-black/60 transition-colors">{value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] bg-black/8" />

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { n: '24h', l: 'Response time' },
                                { n: '98%', l: 'Client retention' },
                                { n: '10+', l: 'Projects done' },
                                { n: '9+', l: 'Years active' },
                            ].map((s, i) => (
                                <div key={i} className="stat-item">
                                    <div className="text-4xl font-serif font-light mb-1">{s.n}</div>
                                    <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
                                </div>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] bg-black/8" />

                        {/* Socials */}
                        <div>
                            <p className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6">Follow Us</p>
                            <div className="space-y-1">
                                {socials.map(({ label, href }) => (
                                    <a key={label} href={href}
                                        className="group flex items-center justify-between py-3 border-b border-black/[0.06] hover:border-black/20 transition-colors">
                                        <span className="text-sm font-medium text-black/60 group-hover:text-black transition-colors">{label}</span>
                                        <ArrowUpRight className="w-4 h-4 text-black/20 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                    </a>
                                ))}
                            </div>
                        </div>

                    </aside>
                </div>
            </section>

            {/* ── BOTTOM CTA STRIP ── */}
            {/* <div className="border-t border-black/8 px-6 lg:px-20 py-8 max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest uppercase text-black/30">
                <span>© 2024 Viscano Studio — All Rights Reserved</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Currently accepting projects
                </span>
            </div> */}
        </div>
    );
}
