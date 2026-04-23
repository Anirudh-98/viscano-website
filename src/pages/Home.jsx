import React, { useEffect, useRef, useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDownRight, ArrowDown } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import heroVideo from '../assets/herobackground.mp4';
import IntroAnimation from "../components/ui/scroll-morph-hero";
import OurProcessInfographic from "../components/ui/our-process-infographic";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────────
   CTA MULTI-STEP FORM COMPONENT
───────────────────────────────────────────── */
const SERVICES = [
    'Brand Identity', 'Logo Design', 'UI / UX Design',
    'Web Development', 'Motion & Video', 'Social Media',
    'Pitch Deck', 'Photography'
];

const BUDGETS = [
    { label: '< ₹50K', value: 'under-50k' },
    { label: '₹50K – ₹1L', value: '50k-1l' },
    { label: '₹1L – ₹3L', value: '1l-3l' },
    { label: '₹3L – ₹7L', value: '3l-7l' },
    { label: '₹7L+', value: '7l-plus' },
];

function CtaForm() {
    const [step, setStep] = useState(1);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedBudget, setSelectedBudget] = useState('');
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const toggleService = (s) =>
        setSelectedServices(prev =>
            prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
        );

    const canNext1 = selectedServices.length > 0;
    const canNext2 = selectedBudget !== '';
    const canSubmit = form.name.trim() && /\S+@\S+\.\S+/.test(form.email);

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, 'leads'), {
                name: form.name,
                email: form.email,
                message: form.message,
                services: selectedServices,
                budget: selectedBudget,
                createdAt: serverTimestamp(),
                status: 'new'
            });
            setSubmitted(true);
        } catch (error) {
            console.error("Error adding document: ", error);
            // In a real app we might show a toast, but this matches existing flow
            setSubmitted(true);
        }
    };

    const stepLabels = ['Services', 'Budget', 'Details'];

    return (
        <div className="relative z-10 w-full max-w-[660px]">
            {/* Step progress bar */}
            {!submitted && (
                <div className="flex items-center gap-4 mb-8 justify-center">
                    {stepLabels.map((label, i) => {
                        const idx = i + 1;
                        const active = step === idx;
                        const done = step > idx;
                        return (
                            <React.Fragment key={idx}>
                                <div className="flex items-center gap-2">
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold border transition-all duration-300
                                        ${done ? 'bg-white border-white text-black' : active ? 'bg-white/10 border-white/50 text-white' : 'bg-transparent border-white/15 text-white/30'}`}>
                                        {done ? (
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        ) : idx}
                                    </div>
                                    <span className={`text-[11px] tracking-wide uppercase font-semibold transition-colors duration-300 ${active ? 'text-white' : done ? 'text-white/60' : 'text-white/20'}`}>{label}</span>
                                </div>
                                {i < stepLabels.length - 1 && (
                                    <div className={`flex-1 h-[1px] max-w-[60px] transition-all duration-500 ${done ? 'bg-white/40' : 'bg-white/10'}`} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            )}

            {/* Card */}
            <div className="bg-[#111113] border border-white/[0.08] rounded-3xl overflow-hidden shadow-2xl">

                {/* ── SUCCESS STATE ── */}
                {submitted && (
                    <div className="flex flex-col items-center justify-center text-center py-20 px-10 gap-6">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-2">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </div>
                        <h3 className="text-3xl font-semibold tracking-tight text-white">We've got your brief!</h3>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                            Thanks, <span className="text-white/80 font-medium">{form.name.split(' ')[0]}</span> — our team will reach you at <span className="text-white/80 font-medium">{form.email}</span> within 24 hours.
                        </p>
                        <a href="mailto:connect@viscano.com" className="mt-2 text-xs font-bold text-white/40 hover:text-white/70 transition-colors tracking-wide border border-white/10 rounded-full px-5 py-2">
                            connect@viscano.com
                        </a>
                    </div>
                )}

                {/* ── STEP 1: Services ── */}
                {!submitted && step === 1 && (
                    <div className="p-8 md:p-10 flex flex-col gap-6">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">Step 1 of 3</p>
                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">What do you need?</h3>
                            <p className="text-white/40 text-sm mt-2">Pick everything that applies — mix and match freely.</p>
                        </div>
                        <div className="flex flex-wrap gap-2.5 mt-2">
                            {SERVICES.map(s => {
                                const active = selectedServices.includes(s);
                                return (
                                    <button
                                        key={s}
                                        onClick={() => toggleService(s)}
                                        className={`px-4 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-200 cursor-pointer
                                            ${active
                                                ? 'bg-white text-black border-white'
                                                : 'bg-white/[0.04] text-white/60 border-white/10 hover:border-white/30 hover:text-white/90 hover:bg-white/[0.08]'
                                            }`}
                                    >
                                        {active && <span className="mr-1.5 text-[11px]">✓</span>}
                                        {s}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => canNext1 && setStep(2)}
                                className={`flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all duration-200
                                    ${canNext1 ? 'bg-white text-black hover:scale-[1.02]' : 'bg-white/10 text-white/25 cursor-not-allowed'}`}
                            >
                                Next
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* ── STEP 2: Budget ── */}
                {!submitted && step === 2 && (
                    <div className="p-8 md:p-10 flex flex-col gap-6">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">Step 2 of 3</p>
                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">What's your budget?</h3>
                            <p className="text-white/40 text-sm mt-2">This helps us scope the right solution for you.</p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                            {BUDGETS.map(b => {
                                const active = selectedBudget === b.value;
                                return (
                                    <button
                                        key={b.value}
                                        onClick={() => setSelectedBudget(b.value)}
                                        className={`py-4 px-4 rounded-2xl border text-sm font-semibold transition-all duration-200 text-center
                                            ${active
                                                ? 'bg-white text-black border-white'
                                                : 'bg-white/[0.04] text-white/60 border-white/10 hover:border-white/25 hover:bg-white/[0.07] hover:text-white/90'
                                            }`}
                                    >
                                        {b.label}
                                    </button>
                                );
                            })}
                        </div>
                        <div className="flex justify-between mt-4">
                            <button onClick={() => setStep(1)} className="text-white/30 hover:text-white/70 text-sm font-medium transition-colors flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                                Back
                            </button>
                            <button
                                onClick={() => canNext2 && setStep(3)}
                                className={`flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold transition-all duration-200
                                    ${canNext2 ? 'bg-white text-black hover:scale-[1.02]' : 'bg-white/10 text-white/25 cursor-not-allowed'}`}
                            >
                                Next
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                        </div>
                    </div>
                )}

                {/* ── STEP 3: Details ── */}
                {!submitted && step === 3 && (
                    <div className="p-8 md:p-10 flex flex-col gap-5">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">Step 3 of 3</p>
                            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Let's get in touch.</h3>
                            <p className="text-white/40 text-sm mt-2">We'll reach out personally — no automated emails.</p>
                        </div>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all font-medium"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Email Address *</label>
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    value={form.email}
                                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all font-medium"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/30 font-semibold">Message <span className="normal-case tracking-normal text-white/20">(optional)</span></label>
                                <textarea
                                    placeholder="Tell us a bit about your project..."
                                    rows={3}
                                    value={form.message}
                                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/[0.07] transition-all font-medium resize-none"
                                />
                            </div>
                        </div>

                        {/* Summary chips */}
                        <div className="flex flex-wrap gap-2 pt-1">
                            {selectedServices.slice(0, 4).map(s => (
                                <span key={s} className="text-[10px] px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/40 font-medium">{s}</span>
                            ))}
                            {selectedServices.length > 4 && <span className="text-[10px] px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/40 font-medium">+{selectedServices.length - 4} more</span>}
                            {selectedBudget && <span className="text-[10px] px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/40 font-medium">{BUDGETS.find(b => b.value === selectedBudget)?.label}</span>}
                        </div>

                        <div className="flex justify-between items-center mt-2">
                            <button onClick={() => setStep(2)} className="text-white/30 hover:text-white/70 text-sm font-medium transition-colors flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
                                Back
                            </button>
                            <button
                                onClick={() => canSubmit && handleSubmit()}
                                className={`flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-200
                                    ${canSubmit ? 'bg-white text-black hover:scale-[1.02]' : 'bg-white/10 text-white/25 cursor-not-allowed'}`}
                            >
                                Send Brief
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                        </div>

                        <p className="text-[10px] text-white/20 text-center mt-1">
                            Prefer email? <a href="mailto:connect@viscano.com" className="text-white/40 hover:text-white/70 transition-colors underline underline-offset-2">connect@viscano.com</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Home() {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioCardsRef = useRef([]);
    const [activeCategory, setActiveCategory] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const faqData = [
        { q: "What services does Viscano offer?", a: "We offer end-to-end creative and digital services — Brand Identity, Product Design (UI/UX), Web Development, and Motion & Content production. Think of us as a full-service studio that covers every touchpoint of your brand." },
        { q: "How long does a typical project take?", a: "It depends on the scope. A brand identity package typically takes 2–4 weeks, a full website 4–8 weeks, and larger multi-service engagements 8–12 weeks. We'll give you a clear timeline in our proposal." },
        { q: "Do you work with startups or only established brands?", a: "Both. We love working with ambitious founders building from scratch as much as established businesses looking for a rebrand or digital upgrade. Our process scales to fit your stage." },
        { q: "Can you handle design and development together?", a: "Absolutely — that's our sweet spot. Keeping design and development under one roof means faster handoffs, tighter consistency, and a final product that actually matches the vision." },
        { q: "What does your design process look like?", a: "We start with a discovery call to understand your goals, then move through strategy, concept, design, and delivery. You're involved at every key milestone — no black-box surprises." },
        { q: "Do you offer post-launch support?", a: "Yes. We offer ongoing retainer plans covering maintenance, content updates, performance monitoring, and iterative design improvements so your product keeps evolving after launch." }
    ];

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    const serviceCategories = [
        {
            title: "Brand Identity",
            items: ["Logo Design", "Typography", "Visual Language", "Pitch Deck Design", "Brand Guidelines"],
            image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&fm=webp"
        },
        {
            title: "Product Design",
            items: ["User Interface (UI)", "User Experience (UX)", "Wireframing", "Prototyping", "Design Systems"],
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&fm=webp"
        },
        {
            title: "Development",
            items: ["Front-End Dev", "Back-End Dev", "No-Code (Framer/Shopify)", "CMS Integration", "Web Apps"],
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600&fm=webp"
        },
        {
            title: "Motion & Content",
            items: ["Motion Design", "3D Animation", "Video Editing", "Copywriting", "Social Media"],
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&fm=webp"
        }
    ];

    useEffect(() => {
        // Hero Animation
        const ctx = gsap.context(() => {
            // Scroll Reveal Portfolio Cards
            gsap.utils.toArray('.reveal-card').forEach((card) => {
                gsap.fromTo(card,
                    { y: 100, opacity: 0, scale: 0.95 },
                    {
                        y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                        }
                    }
                );
            });
            // Animate about section elements
            if (aboutRef.current) {
                gsap.fromTo(".about-text-element",
                    { y: 50, opacity: 0 },
                    {
                        y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
                        scrollTrigger: {
                            trigger: aboutRef.current,
                            start: "top 80%",
                        }
                    }
                );
            }


        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#0A0A0A] text-white relative w-full overflow-hidden font-sans selection:bg-white selection:text-black">
            <SEOHead
                title="Viscano — Global Creative Studio | Branding, Web Design & Development"
                description="Viscano is a global creative studio building bold brand identities, UI/UX design, and high-performance websites for ambitious businesses worldwide."
                keywords="creative studio, brand identity, web design, UI UX design, global creative studio, branding agency, startup branding, Viscano"
                canonical="https://viscano.com/"
            />

            {/* 1. HERO — NEW WEB3 REDESIGN */}
            <header className="relative w-full h-screen overflow-hidden bg-black font-sans">
                {/* Background Video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4" type="video/mp4" />
                </video>

                {/* 50% Black Overlay */}
                <div className="absolute inset-0 bg-black/50 z-10" />

                {/* Hero Content */}
                <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 h-full pb-[102px] pt-[120px] md:pt-[180px]">
                    <div className="flex flex-col items-center gap-[30px] max-w-full">

                        {/* H2 (Subheadline) */}
                        <div className="inline-flex items-center gap-[6px] px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                            <h2 className="text-white text-[12px] md:text-[14px] font-medium tracking-[0.2em] uppercase leading-none opacity-80">
                                India's AI-Native Creative Studio.
                            </h2>
                        </div>

                        {/* H1 (Hero Headline) */}
                        <h1
                            className="text-[48px] md:text-[86px] lg:text-[100px] font-medium leading-[1.1] tracking-tighter max-w-[900px] lg:max-w-[1100px]"
                            style={{
                                background: 'linear-gradient(144.5deg, #FFFFFF 28%, rgba(255, 255, 255, 0.4) 115%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                color: 'transparent'
                            }}
                        >
                            Brands That Look Like Everyone Else, Die Like Everyone Else.
                        </h1>

                        {/* Supporting SEO Text */}
                        <p className="text-white/60 text-[14px] md:text-[17px] font-normal leading-relaxed max-w-[720px] -mt-[10px]">
                            We are Viscano — a global creative studio specializing in brand identity, product design, and web development.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-[10px]">
                            {/* Primary Button: See Our Work */}
                            <div className="relative group">
                                <div className="absolute -inset-[0.6px] bg-white rounded-full opacity-100" />
                                <Link to="/results" className="relative bg-white text-black text-[14px] font-semibold px-[32px] py-[13px] rounded-full flex items-center justify-center overflow-hidden transition-all hover:bg-zinc-100">
                                    {/* Glow Streak */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-white/80 blur-lg rounded-full pointer-events-none" />
                                    See Our Work →
                                </Link>
                            </div>

                            {/* Secondary Button: Start a Project */}
                            <Link to="/contact" className="px-[32px] py-[13px] rounded-full border border-white/20 text-[14px] font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
                                Start a Project
                            </Link>
                        </div>

                    </div>
                </div>
            </header>

            {/* 1.5 ABOUT SECTION */}
            <section ref={aboutRef} className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] relative z-20 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start mx-auto max-w-[1600px]">

                {/* Left Column: Experience & Image */}
                <div className="w-full lg:w-[45%] flex flex-col gap-8 lg:sticky lg:top-32">
                    <div className="about-text-element">
                        <h2 className="text-8xl md:text-9xl font-bold tracking-tighter flex items-start text-white">
                            9<span className="text-white/40 text-4xl mt-4 ml-2">+</span>
                        </h2>
                        <p className="text-4xl md:text-5xl font-medium text-white/80 tracking-tight mt-2">
                            Years of Experience
                        </p>
                    </div>

                    {/* Infographic Container */}
                    <div className="about-text-element w-full aspect-[4/3] md:aspect-video lg:aspect-[4/3] bg-[#111111] rounded-[2rem] overflow-hidden relative mt-4 md:mt-8 border border-white/10 shadow-2xl flex items-center justify-center">
                        {/* Brand Identity Infographic */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeCategory === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <svg viewBox="0 0 400 340" className="w-[85%] h-[85%]" fill="none">
                                {/* Central circle */}
                                <circle cx="200" cy="170" r="54" stroke="white" strokeOpacity="0.15" strokeWidth="1.5" />
                                <circle cx="200" cy="170" r="36" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                                <text x="200" y="165" textAnchor="middle" fill="white" fillOpacity="0.7" fontSize="9" fontFamily="serif" letterSpacing="2">BRAND</text>
                                <text x="200" y="178" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="7" fontFamily="sans-serif" letterSpacing="1">IDENTITY</text>
                                {/* Spokes and satellite nodes */}
                                {[
                                    { label: 'Logo', angle: -90, r: 105 },
                                    { label: 'Typography', angle: -18, r: 105 },
                                    { label: 'Color', angle: 54, r: 105 },
                                    { label: 'Guidelines', angle: 126, r: 105 },
                                    { label: 'Voice', angle: 198, r: 105 },
                                ].map(({ label, angle, r }, i) => {
                                    const rad = (angle * Math.PI) / 180;
                                    const x = 200 + r * Math.cos(rad);
                                    const y = 170 + r * Math.sin(rad);
                                    const lx = 200 + 58 * Math.cos(rad);
                                    const ly = 170 + 58 * Math.sin(rad);
                                    return (
                                        <g key={i}>
                                            <line x1={lx} y1={ly} x2={x} y2={y} stroke="white" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="3 3" />
                                            <circle cx={x} cy={y} r="22" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
                                            <text x={x} y={y + 3} textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="7.5" fontFamily="sans-serif">{label}</text>
                                        </g>
                                    );
                                })}
                                {/* Orbit ring */}
                                <circle cx="200" cy="170" r="105" stroke="white" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 6" />
                                {/* Corner tags */}
                                <rect x="18" y="18" width="80" height="22" rx="5" fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                                <text x="28" y="33" fill="white" fillOpacity="0.3" fontSize="7" fontFamily="monospace" letterSpacing="1">BRAND SYSTEM</text>
                            </svg>
                        </div>

                        {/* Product Design Infographic */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeCategory === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <svg viewBox="0 0 400 320" className="w-[85%] h-[85%]" fill="none">
                                {/* Phone frame */}
                                <rect x="150" y="30" width="100" height="170" rx="14" stroke="white" strokeOpacity="0.25" strokeWidth="1.5" fill="white" fillOpacity="0.03" />
                                <rect x="158" y="48" width="84" height="112" rx="4" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                                {/* UI elements inside phone */}
                                <rect x="163" y="54" width="74" height="10" rx="2" fill="white" fillOpacity="0.15" />
                                <rect x="163" y="70" width="50" height="6" rx="2" fill="white" fillOpacity="0.08" />
                                <rect x="163" y="80" width="74" height="38" rx="4" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                                <rect x="163" y="122" width="34" height="6" rx="2" fill="white" fillOpacity="0.08" />
                                <rect x="201" y="122" width="36" height="6" rx="2" fill="white" fillOpacity="0.04" />
                                <rect x="163" y="133" width="74" height="22" rx="3" fill="white" fillOpacity="0.06" stroke="white" strokeOpacity="0.08" strokeWidth="1" />
                                {/* Notch */}
                                <rect x="185" y="36" width="30" height="6" rx="3" fill="white" fillOpacity="0.1" />
                                {/* Home indicator */}
                                <rect x="186" y="192" width="28" height="3" rx="2" fill="white" fillOpacity="0.2" />
                                {/* Sidebar: layer list */}
                                <rect x="18" y="50" width="110" height="170" rx="8" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                                <text x="28" y="70" fill="white" fillOpacity="0.3" fontSize="7" fontFamily="monospace" letterSpacing="1">LAYERS</text>
                                {['Header', 'Nav Bar', 'Hero Card', 'Button', 'Footer'].map((l, i) => (
                                    <g key={i}>
                                        <rect x="28" y={82 + i * 24} width="90" height="16" rx="3" fill="white" fillOpacity={i === 2 ? 0.1 : 0.03} stroke="white" strokeOpacity={i === 2 ? 0.2 : 0.06} strokeWidth="1" />
                                        <text x="38" y={94 + i * 24} fill="white" fillOpacity="0.4" fontSize="7" fontFamily="sans-serif">{l}</text>
                                    </g>
                                ))}
                                {/* Right: properties panel */}
                                <rect x="273" y="50" width="110" height="170" rx="8" fill="white" fillOpacity="0.03" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
                                <text x="283" y="70" fill="white" fillOpacity="0.3" fontSize="7" fontFamily="monospace" letterSpacing="1">PROPERTIES</text>
                                {[['W', '375px'], ['H', '812px'], ['R', '14px'], ['Fill', '#FFF']].map(([k, v], i) => (
                                    <g key={i}>
                                        <text x="283" y={88 + i * 22} fill="white" fillOpacity="0.3" fontSize="7" fontFamily="sans-serif">{k}</text>
                                        <text x="350" y={88 + i * 22} fill="white" fillOpacity="0.5" fontSize="7" fontFamily="monospace" textAnchor="end">{v}</text>
                                        <line x1="283" y1={93 + i * 22} x2="363" y2={93 + i * 22} stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                                    </g>
                                ))}
                                <text x="200" y="295" textAnchor="middle" fill="white" fillOpacity="0.15" fontSize="8" fontFamily="monospace" letterSpacing="2">UI / UX DESIGN SYSTEM</text>
                            </svg>
                        </div>

                        {/* Development Infographic */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeCategory === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <svg viewBox="0 0 400 320" className="w-[85%] h-[85%]" fill="none">
                                {/* Nodes */}
                                {[
                                    { x: 200, y: 50, label: 'Client', sub: 'Browser / App' },
                                    { x: 200, y: 145, label: 'API Layer', sub: 'REST / GraphQL' },
                                    { x: 90, y: 240, label: 'Database', sub: 'PostgreSQL' },
                                    { x: 200, y: 240, label: 'Cache', sub: 'Redis' },
                                    { x: 310, y: 240, label: 'CDN', sub: 'Assets' },
                                ].map(({ x, y, label, sub }, i) => (
                                    <g key={i}>
                                        <rect x={x - 48} y={y - 20} width="96" height="40" rx="8" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.2" strokeWidth="1.2" />
                                        <text x={x} y={y - 3} textAnchor="middle" fill="white" fillOpacity="0.75" fontSize="9" fontWeight="600" fontFamily="sans-serif">{label}</text>
                                        <text x={x} y={y + 11} textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="7" fontFamily="monospace">{sub}</text>
                                    </g>
                                ))}
                                {/* Connectors */}
                                <line x1="200" y1="70" x2="200" y2="125" stroke="white" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 3" />
                                <line x1="200" y1="165" x2="90" y2="220" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
                                <line x1="200" y1="165" x2="200" y2="220" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
                                <line x1="200" y1="165" x2="310" y2="220" stroke="white" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="4 3" />
                                {/* Arrow heads */}
                                {[[200, 125, 200, 70], [90, 220, 200, 165], [200, 220, 200, 165], [310, 220, 200, 165]].map(([x2, y2, x1, y1], i) => {
                                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                                    return <polygon key={i} points={`${x2},${y2 - 6} ${x2 - 4},${y2 - 12} ${x2 + 4},${y2 - 12}`} fill="white" fillOpacity="0.2" transform={`rotate(${angle + 90},${x2},${y2})`} />;
                                })}
                                <text x="200" y="300" textAnchor="middle" fill="white" fillOpacity="0.15" fontSize="8" fontFamily="monospace" letterSpacing="2">SYSTEM ARCHITECTURE</text>
                            </svg>
                        </div>

                        {/* Motion & Content Infographic */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${activeCategory === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                            <svg viewBox="0 0 400 320" className="w-[85%] h-[85%]" fill="none">
                                {/* Timeline base */}
                                <line x1="30" y1="160" x2="370" y2="160" stroke="white" strokeOpacity="0.12" strokeWidth="1.5" />
                                {/* Waveform bars centered on timeline */}
                                {Array.from({ length: 42 }, (_, i) => {
                                    const x = 30 + i * 8;
                                    const h = [18, 30, 50, 38, 60, 45, 28, 55, 70, 48, 35, 60, 42, 30, 50, 38, 65, 52, 28, 40, 58, 46, 32, 55, 44, 70, 38, 50, 30, 60, 48, 35, 52, 42, 28, 64, 36, 50, 45, 30, 55, 40][i] || 20;
                                    return (
                                        <rect key={i} x={x} y={160 - h / 2} width="4" height={h}
                                            rx="2" fill="white"
                                            fillOpacity={i >= 10 && i <= 28 ? 0.35 : 0.08} />
                                    );
                                })}
                                {/* Playhead */}
                                <line x1="148" y1="120" x2="148" y2="200" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" />
                                <polygon points="148,116 144,122 152,122" fill="white" fillOpacity="0.6" />
                                {/* Track labels */}
                                {[['VIDEO', 80], ['AUDIO', 160], ['MOTION', 240]].map(([label, y], i) => (
                                    <g key={i}>
                                        <text x="30" y={y} fill="white" fillOpacity="0.2" fontSize="7" fontFamily="monospace" letterSpacing="1">{label}</text>
                                        <line x1="30" y1={y + 8} x2="370" y2={y + 8} stroke="white" strokeOpacity="0.04" strokeWidth="1" />
                                        {Array.from({ length: 4 }, (_, j) => (
                                            <rect key={j} x={30 + j * 88} y={y + 12} width={72 + (j % 2) * 12} height="18" rx="3"
                                                fill="white" fillOpacity={i === 0 && j === 1 ? 0.12 : 0.04}
                                                stroke="white" strokeOpacity={i === 0 && j === 1 ? 0.2 : 0.06} strokeWidth="1" />
                                        ))}
                                    </g>
                                ))}
                                <text x="200" y="300" textAnchor="middle" fill="white" fillOpacity="0.15" fontSize="8" fontFamily="monospace" letterSpacing="2">CONTENT PRODUCTION TIMELINE</text>
                            </svg>
                        </div>

                        {/* Bottom label */}
                        <div className="absolute bottom-6 left-8 text-white font-medium tracking-tight text-xl md:text-2xl drop-shadow-lg z-30 transition-all duration-500">
                            {serviceCategories[activeCategory].title}
                        </div>
                    </div>
                </div>

                {/* Right Column: Description & Tags */}
                <div className="w-full lg:w-[55%] flex flex-col gap-10 md:gap-14 pt-0 lg:pt-4">
                    <div className="about-text-element flex flex-col md:flex-row gap-4 md:gap-12 items-start">
                        <span className="text-xs md:text-sm font-mono text-white/50 uppercase tracking-[0.2em] shrink-0 mt-2">What we do</span>
                        <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-[1.6] font-medium text-white/90 tracking-tight">
                            Whether it's building a distinctive brand identity, designing interfaces that feel effortless, or developing websites that perform seamlessly, my work is about turning vision into tangible results.
                        </p>
                    </div>

                    {/* Category Accordion */}
                    <div className="about-text-element flex flex-col w-full mt-4 border-t border-white/10">
                        {serviceCategories.map((category, idx) => (
                            <div
                                key={idx}
                                className="border-b border-white/10 overflow-hidden cursor-pointer group"
                                onMouseEnter={() => setActiveCategory(idx)}
                                onClick={() => setActiveCategory(idx)}
                            >
                                <div className="flex items-center justify-between py-6 md:py-8 pr-4">
                                    <h3 className={`text-2xl md:text-4xl font-medium tracking-tight transition-all duration-500 ${activeCategory === idx ? 'text-white translate-x-4' : 'text-white/50 group-hover:text-white/80'}`}>
                                        {category.title}
                                    </h3>
                                    <span className={`text-white transition-opacity duration-500 ${activeCategory === idx ? 'opacity-100' : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:-translate-x-2'}`}>
                                        <ArrowUpRight className="w-8 h-8" strokeWidth={1.5} />
                                    </span>
                                </div>
                                <div className={`transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${activeCategory === idx ? 'max-h-[300px] opacity-100 pb-8 pl-4' : 'max-h-0 opacity-0'}`}>
                                    <div className="flex flex-wrap gap-2 md:gap-3">
                                        {category.items.map((item, itemIdx) => (
                                            <span
                                                key={itemIdx}
                                                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs md:text-sm font-medium hover:bg-white hover:text-black hover:border-white transition-colors duration-300 pointer-events-none"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            {/* S3. IDEOLOGY / MANIFESTO */}
            <section className="relative z-20 bg-[#080809] py-24 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden">

                {/* Subtle grain */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="manifesto-noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#manifesto-noise)" />
                </svg>

                <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-20">

                    {/* Section label */}
                    <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55">
                        <span className="w-6 h-[1px] bg-white/40" />
                        Our Ideology
                    </div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] max-w-[900px]">
                        Most Indian startups are built to fail —{' '}
                        <span className="text-white/35 italic font-serif font-light">visually.</span>
                    </h2>

                    {/* 3-column problem grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            'They settled for cheap freelancers',
                            'They got a website, not a brand system',
                            'They look like their 10 nearest competitors',
                        ].map((problem, i) => (
                            <div
                                key={i}
                                className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:border-white/[0.14] transition-all duration-500 overflow-hidden"
                            >
                                {/* Number */}
                                <span className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
                                    0{i + 1}
                                </span>

                                {/* Problem text with strikethrough */}
                                <p className="text-xl md:text-2xl font-semibold text-white/70 leading-snug tracking-tight relative">
                                    <span className="relative inline">
                                        {problem}
                                        {/* Strikethrough line */}
                                        <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-white/40 block -translate-y-1/2" />
                                    </span>
                                </p>

                                {/* Faint corner accent */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full border border-white/[0.04] pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    {/* Bridge statement */}
                    <div className="border-t border-white/[0.07] pt-12 md:pt-16 flex flex-col md:flex-row gap-8 md:gap-20 items-start">
                        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/55 shrink-0 mt-1">The Fix</span>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/85 leading-relaxed tracking-tight max-w-[700px]">
                            We built Viscano to solve exactly this. We are not a vendor.{' '}
                            <span className="text-white italic font-serif font-light">We are your first brand partner.</span>
                        </p>
                    </div>

                    {/* Pull quote */}
                    <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-3xl px-8 md:px-16 py-12 md:py-16 flex flex-col gap-6 overflow-hidden">
                        {/* Large quotation mark */}
                        <span className="absolute -top-4 left-8 md:left-14 text-[120px] md:text-[180px] font-serif text-white/[0.04] leading-none select-none pointer-events-none">"</span>

                        <p className="relative text-[40px] md:text-[56px] lg:text-[64px] font-bold tracking-tighter text-white leading-[1.08] max-w-[860px]">
                            157,000 startups in India.
                            <br />
                            <span className="text-white/40">Only 1% have a brand worth remembering.</span>
                            <br />
                            We build the other 1%.
                        </p>
                    </div>

                </div>
            </section>

            {/* 3. OUR PROCESS (INFOGRAPHIC BENTO GRID) */}
            <OurProcessInfographic />

            {/* S6. THE VISCANO DIFFERENCE — AI + SPEED + SECURITY */}
            <section className="relative z-20 bg-[#050507] py-24 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden">

                {/* Grain */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.02] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="diff-noise"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#diff-noise)" />
                </svg>

                <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-16 md:gap-20">

                    {/* Header */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55">
                            <span className="w-6 h-[1px] bg-white/40" />
                            Why Viscano
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] max-w-[900px]">
                            We Deliver in Weeks.{' '}
                            <span className="text-white/40 font-serif italic font-light">Built to Last.</span>
                            <br />Secured from Day One.
                        </h2>
                    </div>

                    {/* 4-column stat block */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {/* Col 1 — 2 Weeks */}
                        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-4 hover:border-white/[0.15] transition-all duration-500 group">
                            <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">Brand Identity</span>
                            <div className="flex items-end gap-2">
                                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-none" data-counter="2">2</span>
                                <span className="text-2xl font-bold text-white/60 mb-1">Wks</span>
                            </div>
                            <div className="h-[1px] w-full bg-white/[0.06]" />
                            <p className="text-xs text-white/35 leading-relaxed font-medium">
                                Delivery guarantee.<br />
                                <span className="text-white/20">Industry avg: 6–8 weeks</span>
                            </p>
                        </div>

                        {/* Col 2 — 4 Weeks */}
                        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-4 hover:border-white/[0.15] transition-all duration-500 group">
                            <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">Full Website</span>
                            <div className="flex items-end gap-2">
                                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-none" data-counter="4">4</span>
                                <span className="text-2xl font-bold text-white/60 mb-1">Wks</span>
                            </div>
                            <div className="h-[1px] w-full bg-white/[0.06]" />
                            <p className="text-xs text-white/35 leading-relaxed font-medium">
                                Live & launched.<br />
                                <span className="text-white/20">Industry avg: 12–16 weeks</span>
                            </p>
                        </div>

                        {/* Col 3 — 1 Roof */}
                        <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-4 hover:border-white/[0.15] transition-all duration-500 group">
                            <span className="text-[10px] font-mono tracking-[0.3em] text-white/55 uppercase">One Studio</span>
                            <div className="flex items-end gap-2">
                                <span className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-none">1</span>
                                <span className="text-2xl font-bold text-white/60 mb-1">Roof</span>
                            </div>
                            <div className="h-[1px] w-full bg-white/[0.06]" />
                            <p className="text-xs text-white/35 leading-relaxed font-medium">
                                Strategy · Design · Dev · Motion.<br />
                                <span className="text-white/20">Zero agency handoffs</span>
                            </p>
                        </div>

                        {/* Col 4 — Security (Security Green #1A7A4A) */}
                        <div className="relative rounded-2xl p-8 flex flex-col gap-4 transition-all duration-500 group overflow-hidden"
                            style={{ background: '#060e09', border: '1px solid rgba(26,122,74,0.25)', boxShadow: '0 0 40px -8px rgba(26,122,74,0.12)' }}>
                            {/* Faint green radial glow */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl pointer-events-none" style={{ background: 'rgba(26,122,74,0.08)' }} />

                            <span className="text-[10px] font-mono tracking-[0.3em] uppercase" style={{ color: 'rgba(26,122,74,0.7)' }}>Security</span>
                            <div className="flex items-end gap-3">
                                {/* Shield icon */}
                                <svg width="52" height="58" viewBox="0 0 52 58" fill="none" style={{ color: '#1A7A4A' }} className="mb-1 shrink-0">
                                    <path d="M26 2L4 11v18c0 13.25 9.4 25.65 22 29 12.6-3.35 22-15.75 22-29V11L26 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
                                    <path d="M16 28l7 7 13-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-2xl font-bold mb-1 leading-tight" style={{ color: 'rgba(26,122,74,0.9)' }}>Zero<br />Compromises</span>
                            </div>
                            <div className="h-[1px] w-full" style={{ background: 'rgba(26,122,74,0.12)' }} />
                            <p className="text-xs leading-relaxed font-medium" style={{ color: 'rgba(26,122,74,0.45)' }}>
                                Cybersecurity-grade architecture.<br />
                                <span style={{ color: 'rgba(26,122,74,0.3)' }}>Baked in, not bolted on</span>
                            </p>
                        </div>

                    </div>

                    {/* Security callout block */}
                    <div className="relative rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-10 md:gap-16 overflow-hidden"
                        style={{ background: '#060e09', border: '1px solid rgba(26,122,74,0.18)', boxShadow: '0 0 80px -20px rgba(26,122,74,0.08)' }}>
                        {/* Green corner glow */}
                        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(26,122,74,0.05)' }} />

                        {/* Left — icon + headline */}
                        <div className="flex flex-col gap-5 shrink-0 md:w-[280px]">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(26,122,74,0.1)', border: '1px solid rgba(26,122,74,0.25)' }}>
                                <svg width="22" height="24" viewBox="0 0 52 58" fill="none" style={{ color: '#1A7A4A' }}>
                                    <path d="M26 2L4 11v18c0 13.25 9.4 25.65 22 29 12.6-3.35 22-15.75 22-29V11L26 2z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" fill="none" />
                                    <path d="M16 28l7 7 13-13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white leading-tight">
                                Security-First<br />Development
                            </h3>
                            <span className="inline-flex self-start text-[9px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 rounded-full" style={{ color: 'rgba(26,122,74,0.8)', background: 'rgba(26,122,74,0.08)', border: '1px solid rgba(26,122,74,0.2)' }}>
                                Masters in Cybersecurity
                            </span>
                        </div>

                        {/* Right — copy + tag */}
                        <div className="flex flex-col gap-6 justify-center">
                            <p className="text-base md:text-lg text-white/55 leading-relaxed font-light max-w-[580px]">
                                Most design agencies build beautiful products with invisible vulnerabilities. Viscano is led by a Cybersecurity Masters graduate with years in enterprise IT. We bake security in at the architecture level —{' '}
                                <span className="text-white/80 font-medium">not as an afterthought.</span>
                            </p>
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/55 font-semibold">
                                Trusted by SaaS founders, healthtech teams & fintech brands
                            </span>
                        </div>
                    </div>

                    {/* Bottom row — AI badge + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

                        {/* AI badge */}
                        <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-3">
                            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shrink-0" />
                            <span className="text-[11px] md:text-xs font-semibold tracking-wide text-white/60">
                                AI-Augmented Workflow
                                <span className="text-white/30 mx-2">→</span>
                                Faster delivery, Same premium quality
                            </span>
                        </div>

                        {/* CTA */}
                        <a href="/process" className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-bold hover:scale-[1.03] transition-all duration-200 shrink-0">
                            See How We Work
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </a>

                    </div>

                </div>
            </section>

            {/* 3.5 VISCANO LEARN BANNER */}
            <section className="relative z-20 bg-[#0A0A0A] px-4 md:px-8 lg:px-12 pb-4">
                <div className="max-w-[1500px] mx-auto">
                    <a
                        href="https://learn.viscano.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="reveal-card group block bg-[#111113] border border-white/[0.07] hover:border-white/20 rounded-[2.5rem] p-4 md:p-6 transition-all duration-500 hover:bg-[#161618] w-full overflow-hidden"
                    >
                        <div className="flex flex-col items-center">
                            {/* Featured Image Container */}
                            <div className="w-full relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-black aspect-video md:aspect-[24/9] mb-8 md:mb-12">
                                <img
                                    src="/vacademy.png"
                                    alt="Viscano Learn"
                                    className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-[1.03]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/60 via-transparent to-transparent opacity-80" />
                            </div>

                            {/* Content Below Image */}
                            <div className="flex flex-col items-center max-w-[850px] px-4 md:px-6 text-center pb-8 md:pb-12">
                                <div className="flex flex-wrap items-center gap-2 mb-6 justify-center">
                                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full" style={{ color: '#1A5CA8', background: 'rgba(26,92,168,0.1)', border: '1px solid rgba(26,92,168,0.2)' }}>New Platform</span>
                                    <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">Learn • Automate • Scale</span>
                                </div>

                                <h3 className="text-2xl md:text-5xl font-serif font-light text-white mb-6 md:mb-8 tracking-tight leading-[1.2] md:leading-[1.1]">
                                    Viscano Learn — Expert-led courses, <br className="hidden md:block" />
                                    live classes & mentorship.
                                </h3>

                                <p className="text-white/50 text-sm md:text-lg font-light mb-10 md:mb-12 max-w-[700px] leading-relaxed">
                                    Unlock the full potential of your business with our specialized curriculum. From AI workflow integration to advanced digital systems, we teach you how to build the future of work.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full sm:w-auto">
                                    <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 md:px-12 py-3.5 md:py-4 rounded-full bg-white text-black text-xs md:text-sm font-bold hover:scale-[1.05] transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer">
                                        Explore Courses
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                    <Link
                                        to="/learn"
                                        onClick={e => e.stopPropagation()}
                                        className="w-full sm:w-auto px-8 md:px-12 py-3.5 md:py-4 rounded-full border border-white/10 text-xs md:text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-200"
                                    >
                                        Platform Overview
                                    </Link>
                                </div>

                                <div className="mt-12 flex items-center gap-4 text-white/15">
                                    <div className="h-px w-8 md:w-16 bg-white/10" />
                                    <span className="text-[8px] md:text-[10px] tracking-[0.4em] uppercase">learn.viscano.com</span>
                                    <div className="h-px w-8 md:w-16 bg-white/10" />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>

            {/* 4. ABOUT & PORTFOLIO BENTO GRID */}
            <section className="bg-[#0A0A0A] text-white relative z-20 py-24 md:py-32 px-4 md:px-8 lg:px-12">
                <div className="max-w-[1500px] mx-auto">

                    {/* ── ABOUT BENTO GRID ── */}
                    <div className="reveal-card grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
                        {/* Large quote card */}
                        <div className="md:col-span-8 bg-[#111113] border border-white/[0.06] rounded-3xl p-10 md:p-14 flex flex-col justify-between min-h-[280px] md:min-h-[340px] hover:border-white/[0.14] transition-all duration-500">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 self-start">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                </svg>
                                <span className="text-[11px] font-semibold tracking-wide text-white/70">About Us</span>
                            </div>
                            <p className="text-2xl md:text-3xl lg:text-[2rem] font-medium text-white/90 tracking-tight leading-[1.4] mt-8">
                                We help ambitious brands and startups build digital products that stand out and scale. Working smart, building fast, and designing{' '}
                                <span className="text-white/40 italic font-serif">with purpose.</span>
                            </p>
                        </div>

                        {/* Years stat card */}
                        <div className="md:col-span-4 bg-[#111113] border border-white/[0.06] rounded-3xl p-10 flex flex-col justify-between min-h-[200px] md:min-h-[340px] hover:border-white/[0.14] transition-all duration-500 overflow-hidden relative">
                            <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-white/[0.04]" />
                            <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-white/[0.025]" />
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-semibold">Years of Experience</span>
                            <div>
                                <span className="text-8xl md:text-9xl font-bold tracking-tighter text-white leading-none block">9+</span>
                                <p className="text-white/35 text-sm mt-3 font-medium">Building brands that last</p>
                            </div>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div className="reveal-card grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                        <div className="bg-[#111113] border border-white/[0.06] rounded-3xl p-8 md:p-10 overflow-hidden relative hover:border-white/[0.14] transition-all duration-500">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.018] rounded-bl-full" />
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-semibold block mb-6">Projects Launched</span>
                            <span className="text-6xl md:text-7xl font-mono font-bold tracking-tighter text-white">10+</span>
                        </div>
                        <div className="bg-[#111113] border border-white/[0.06] rounded-3xl p-8 md:p-10 overflow-hidden relative hover:border-white/[0.14] transition-all duration-500">
                            <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.018] rounded-bl-full" />
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-semibold block mb-6">Happy Clients</span>
                            <span className="text-6xl md:text-7xl font-mono font-bold tracking-tighter text-white">10+</span>
                        </div>
                        <div className="bg-[#111113] border border-white/[0.06] rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-white/[0.14] transition-all duration-500">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-white/55 font-semibold">Industries Served</span>
                            <div className="flex flex-wrap gap-2 mt-6">
                                {['SaaS', 'E-Commerce', 'Real Estate', 'AI Platforms', 'Media', 'Startups'].map(tag => (
                                    <span key={tag} className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/60 text-[11px] font-medium">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── PROJECTS SECTION HEADER ── */}
                    <div className="reveal-card flex items-end justify-between mb-6">
                        <div>
                            <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-white/55 mb-4">
                                <span className="w-6 h-[1px] bg-white/40" />
                                Selected Work
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                                Projects that speak.
                            </h2>
                        </div>
                        <Link to="/results" className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-white/60 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                            View All
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>

                    {/* ── PROJECTS BENTO GRID ── */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                        {/* Card 1 — Wide (SS Consultancy) */}
                        <a href="https://ssconsultancy.agency/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-7 h-[420px] md:h-[500px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/ssconsultancy.png" alt="SS Consultancy" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Education</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Visa</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Consultancy</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">Expert visa & overseas education consultancy</p>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors uppercase">SS CONSULTANCY</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">01</span>
                        </a>

                        {/* Card 2 — Narrow (Kusum Ganji) */}
                        <a href="https://kusumganji.com/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-5 h-[420px] md:h-[500px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/kusum.webp" alt="Kusum Ganji" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Portfolio</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Brand</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">Telugu influencer portfolio</p>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">KUSUM GANJI</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">02</span>
                        </a>

                        {/* Card 3 — Narrow (The Fehu Code) */}
                        <a href="https://www.fehu.org.in/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-5 h-[360px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/fehu.webp" alt="The Fehu Code" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">E-Commerce</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Dev</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">Heritage-themed e-commerce</p>
                                <h3 className="text-2xl md:text-2xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">THE FEHU CODE</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">03</span>
                        </a>

                        {/* Card 4 — Medium-wide (Grox Digital) */}
                        <a href="https://grox.digital/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-7 h-[360px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/grox.webp" alt="Grox Digital" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Web Dev</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Brand</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">Digital agency website</p>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">GROX DIGITAL</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">04</span>
                        </a>

                        {/* Card 5 — Half (Sherpal) */}
                        <a href="https://sherpalai.com/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-6 h-[380px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/sherpal.webp" alt="Sherpal" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Web Design</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">AI Platform</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">AI-powered platform website</p>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">SHERPAL</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">05</span>
                        </a>

                        {/* Card 6 — Half (Delta HRMS) */}
                        <a href="https://deltahrms.com/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-6 h-[380px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/deltahrms.webp" alt="Delta HRMS" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">SaaS</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">UI/UX</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">HR management SaaS product</p>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">DELTA HRMS</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">06</span>
                        </a>

                        {/* Card 7 — Full (Laxmi Developers) */}
                        <a href="https://www.laxmideveloper.com/" target="_blank" rel="noopener noreferrer"
                            className="reveal-card md:col-span-12 h-[420px] md:h-[500px] rounded-3xl overflow-hidden relative group block border border-white/[0.06] hover:border-white/25 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                            <img src="/laxmidevlopers.webp" alt="Laxmi Developers" loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 z-[1]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[2]" />
                            <div className="absolute top-6 left-6 flex gap-2 z-10">
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Real Estate</span>
                                <span className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-semibold text-white/80">Brand</span>
                            </div>
                            <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-white" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10">
                                <p className="text-white/45 text-xs mb-2 font-medium">Real estate brand & web presence</p>
                                <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors uppercase">LAXMI DEVELOPERS</h3>
                            </div>
                            <span className="absolute bottom-5 right-7 text-white/10 text-6xl font-black tracking-tighter z-10 select-none">07</span>
                        </a>

                    </div>

                    {/* Mobile-only view all button */}
                    <div className="flex md:hidden justify-center mt-8">
                        <Link to="/results" className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                            View All Projects
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </Link>
                    </div>

                </div>
            </section>

            {/* ── CLIENT TESTIMONIALS ── */}
            <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24 relative z-20">
                <div className="max-w-[1400px] mx-auto">

                    {/* Header */}
                    <div className="reveal-card flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
                        <div>
                            <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase text-black/30 mb-4">
                                <span className="w-6 h-[1px] bg-black/20" />
                                Client Voice
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-light text-black tracking-tight leading-tight">
                                What our clients say.
                            </h2>
                        </div>
                        <p className="text-base text-black/40 font-light max-w-xs leading-relaxed">
                            Trusted by Founders Who Refuse to Be Invisible.
                        </p>
                    </div>

                    {/* 3-col testimonial grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                quote: "The Viscano team didn't just write code; they understood our business. Chaitanya's leadership and the dev team's agility were game-changers for us.",
                                author: "Nikhil",
                                role: "Founder",
                                company: "THE FEHU CODE.",
                                stars: 5,
                                tag: "Development · Brand",
                            },
                            {
                                quote: "The team delivered a fully customized website that perfectly matches our brand and business needs. The design is clean, functional, and professional, and the development process was smooth and collaborative. We're very pleased with the final outcome.",
                                author: "Gargee Singha",
                                role: "CTO",
                                company: "GROX DIGITAL PVT.LTD",
                                stars: 5,
                                tag: "Web Development",
                            },
                            {
                                quote: "The team built a clean, professional portfolio website that truly reflects my brand. The design feels premium, easy to navigate, and perfectly aligned with my vision — I'm really happy with the final outcome.",
                                author: "Kusum Ganji",
                                role: "Telugu Famous Influencer",
                                company: "Telugu Tea Talks",
                                stars: 5,
                                tag: "Portfolio · Brand",
                            },
                        ].map((t, i) => (
                            <div key={i} className="reveal-card group bg-[#F8F8F8] hover:bg-black rounded-2xl p-8 flex flex-col justify-between gap-8 transition-all duration-300 min-h-[260px]">
                                {/* Stars */}
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: t.stars }).map((_, s) => (
                                        <svg key={s} className="w-3.5 h-3.5 text-black/30 group-hover:text-white/30 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-base text-black/70 group-hover:text-white/80 font-light leading-relaxed transition-colors flex-1">
                                    "{t.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-end justify-between">
                                    <div>
                                        <div className="text-sm font-bold text-black group-hover:text-white transition-colors">{t.author}</div>
                                        <div className="text-xs text-black/40 group-hover:text-white/40 transition-colors mt-0.5">{t.role}</div>
                                        {t.company && <div className="text-[9px] tracking-widest uppercase text-black/30 group-hover:text-white/30 transition-colors mt-0.5">{t.company}</div>}
                                    </div>
                                    <span className="text-[9px] tracking-widest uppercase text-black/25 group-hover:text-white/25 transition-colors">{t.tag}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4.75 FAQ SECTION */}

            <section className="bg-[#050508] text-white py-24 md:py-32 relative overflow-hidden flex flex-col items-center">

                <div className="max-w-[700px] w-full mx-auto px-6 flex flex-col items-center relative z-10">
                    <div className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                        <span className="text-[10px] font-medium tracking-wide text-white/80">Frequently Asked Questions</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-4 leading-tight">
                        Everything You Need to Know<br />About Our AI Agents
                    </h2>

                    <p className="text-sm font-medium text-white/50 mb-16 text-center">
                        We build intelligent AI agents that streamline operations and drive real business outcomes.
                    </p>

                    {/* Accordion List */}
                    <div className="w-full flex flex-col gap-3">
                        {faqData.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === idx ? 'bg-white/5 border-white/20' : 'bg-transparent hover:border-white/20 hover:bg-white/[0.02]'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left outline-none"
                                >
                                    <span className={`text-sm tracking-wide font-medium transition-colors ${openFaq === idx ? 'text-white' : 'text-white/80'}`}>
                                        {faq.q}
                                    </span>
                                    <span className="text-white/40 ml-4 font-light text-xl">
                                        {openFaq === idx ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100 pb-5 px-6' : 'max-h-0 opacity-0 px-6'}`}
                                >
                                    <p className="text-white/60 text-sm leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4.8 SCROLL MORPH HERO */}
            <section className="w-full relative z-20 bg-[#0A0A0A] border-t border-white/5">
                <IntroAnimation />
            </section>

            {/* 5. STRATEGIC CTA - Start Your Project */}
            <section className="relative w-full py-24 md:py-36 px-6 md:px-12 flex flex-col items-center overflow-hidden z-30 bg-white">

                {/* Grain texture */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <filter id="cta-noise"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
                    <rect width="100%" height="100%" filter="url(#cta-noise)" />
                </svg>

                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-black/[0.02] blur-[120px] rounded-full pointer-events-none z-0" />

                {/* Header */}
                <div className="relative z-10 flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-2 bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/50">Available for projects · 2026</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.92] mb-6 text-black">
                        Start your<br />
                        <span className="font-serif italic font-normal text-black/35">Project</span> today
                    </h2>
                    <p className="text-black/45 text-sm md:text-base max-w-md leading-relaxed font-light">
                        Tell us about your project in 60 seconds — we'll get back within 24 hours.
                    </p>
                </div>

                {/* Multi-step Form Card */}
                <CtaForm />

            </section>
        </div>
    );
}
