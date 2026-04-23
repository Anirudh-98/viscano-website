import React, { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ─── Data ─────────────────────────────────── */
const SERVICE_CATEGORIES = [
  {
    id: 'development',
    label: 'Development',
    num: '01',
    tagline: 'We engineer high-performance digital products built to scale.',
    services: [
      {
        title: 'Web Development',
        desc: 'High-performance websites and web apps built for speed, scale, and longevity using modern frameworks.',
        tags: ['React', 'Next.js', 'Node.js'],
        href: '/services/web-development',
      },
      {
        title: 'SaaS Products',
        desc: 'End-to-end SaaS platforms with robust architecture, auth, billing, and analytics dashboards.',
        tags: ['Full-Stack', 'API Design', 'Cloud'],
        href: '/services/saas-products',
      },
      {
        title: 'E-commerce',
        desc: 'Custom online stores and headless commerce solutions engineered to maximize conversion.',
        tags: ['Shopify', 'Custom Builds', 'Payments'],
        href: '/services/ecommerce',
      },
      {
        title: 'Mobile Apps',
        desc: 'Cross-platform mobile experiences that feel native and perform beautifully on any device.',
        tags: ['React Native', 'iOS', 'Android'],
        href: '/services/mobile-apps',
      },
    ],
  },
  {
    id: 'design',
    label: 'Design & Brand',
    num: '02',
    tagline: 'We craft visual identities and interfaces that command attention.',
    services: [
      {
        title: 'Brand Identity',
        desc: 'Complete visual identities that communicate your values and differentiate you in any market.',
        tags: ['Strategy', 'Visual System', 'Guidelines'],
        href: '/services/brand-identity',
      },
      {
        title: 'Logo Design',
        desc: 'Distinctive logos crafted with intent — from concept exploration to production-ready files.',
        tags: ['Logomark', 'Wordmark', 'System'],
        href: '/services/logo-design',
      },
      {
        title: 'UI/UX Design',
        desc: 'Frictionless user journeys backed by research, wireframes, and high-fidelity prototypes.',
        tags: ['Figma', 'Prototyping', 'UX Research'],
        href: '/services/ui-ux-design',
      },
      {
        title: 'Pitch Deck Design',
        desc: 'Investor-ready decks that tell your story with clarity, confidence, and visual impact.',
        tags: ['Investor Decks', 'Storytelling', 'Data Viz'],
        href: '/services/pitch-deck',
      },
    ],
  },
  {
    id: 'content',
    label: 'Content & Media',
    num: '03',
    tagline: 'We produce content that stops the scroll and builds your brand.',
    services: [
      {
        title: 'Motion & Video',
        desc: 'Cinematic brand films, product reels, and motion graphics that captivate your audience.',
        tags: ['Brand Films', 'Reels', 'Animation'],
        href: '/services/rdf-motion-video',
      },
      {
        title: 'Photography',
        desc: 'Professional product, lifestyle, and corporate photography that elevates every touchpoint.',
        tags: ['Product', 'Lifestyle', 'Corporate'],
        href: '/services/photography',
      },
      {
        title: 'Social Media Content',
        desc: 'Scroll-stopping visuals and copy built for platform algorithms and sustained engagement.',
        tags: ['Instagram', 'LinkedIn', 'Short-form'],
        href: '/services/social-media-content',
      },
    ],
  },
  {
    id: 'growth',
    label: 'Growth & Strategy',
    num: '04',
    tagline: 'We scale your reach and maximize ROI with data-driven systems.',
    services: [
      {
        title: 'Digital Marketing',
        desc: 'Performance-led campaigns across paid, organic, and earned channels that drive real ROI.',
        tags: ['Paid Ads', 'SEO', 'Email Marketing'],
        href: '/services/digital-marketing',
      },
      {
        title: 'Analytics & Optimization',
        desc: 'CRO, A/B testing, and funnel optimization to maximize every rupee spent.',
        tags: ['CRO', 'A/B Testing', 'Funnel Analysis'],
        href: '/services/analytics-optimization',
      },
    ],
  },
];

const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(c =>
  c.services.map(s => ({ title: s.title, href: s.href, category: c.label }))
);

const PROCESS_STEPS = [
  { num: '01', label: 'Discovery', desc: 'Deep-dive into your goals, audience, and competitive landscape to define the right strategy.' },
  { num: '02', label: 'Strategy', desc: 'We craft a clear roadmap — brand architecture, technical specs, and project timeline.' },
  { num: '03', label: 'Execution', desc: 'Design, development, and content working in parallel with weekly check-ins.' },
  { num: '04', label: 'Launch & Scale', desc: 'We ship, measure, and iterate — then layer on growth systems to compound results.' },
];

const FAQS = [
  { q: 'How long do projects typically take?', a: 'Most projects range from 4 to 16 weeks. A brand identity takes 4–6 weeks; a full web platform typically 10–16 weeks depending on complexity.' },
  { q: 'Do you work with early-stage startups?', a: 'Absolutely. We love working with founders at idea stage — we can help with pitch decks, brand identity, and MVP websites to get you market-ready fast.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. We offer flexible post-launch retainers for support, content creation, and iterative growth marketing.' },
  { q: 'What is your pricing model?', a: 'We work on project-based pricing customized to your goals and scope. We share a detailed proposal after a discovery call — no surprises.' },
  { q: 'Do you work with clients outside Hyderabad?', a: 'Yes — we work with clients across India and internationally. Our process is fully remote-friendly with async collaboration tools.' },
];

const WORKS = [
  { title: 'SS Consultancy', desc: 'Expert visa & overseas education consultancy platform', tag: 'SS Consultancy · Education', img: '/ssconsultancy.png' },
  { title: 'Sherpal', desc: 'AI-powered platform website for Sherpal', tag: 'Sherpal · Web Design', img: '/sherpal.webp' },
  { title: 'Delta HRMS', desc: 'HR management SaaS product website', tag: 'Delta HRMS · SaaS', img: '/deltahrms.webp' },
];

/* ─── Animation variants ─────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: d * 0.1 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

/* ─── Component ──────────────────────────── */
export default function Solutions() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const [activeTab, setActiveTab] = useState('development');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const onMove = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const activeCategory = SERVICE_CATEGORIES.find(c => c.id === activeTab);

  const on = () => setCursorActive(true);
  const off = () => setCursorActive(false);

  return (
    <div
      className="bg-white text-[#111111] antialiased selection:bg-black selection:text-white font-sans min-h-screen relative"
      style={{ cursor: 'none' }}
    >
      <SEOHead
        title="Services — Web Design, Branding & Development | Viscano Hyderabad"
        description="Explore Viscano's full-service solutions: brand identity, logo design, UI/UX, web development, motion & video, social media, and digital growth strategies."
        keywords="web design services Hyderabad, brand identity design India, UI UX design, web development agency, digital marketing Hyderabad, motion design"
        canonical="https://viscano.com/services"
      />

      {/* ── Custom Cursor ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-md"
        animate={{
          x: mouse.x - 14, y: mouse.y - 14,
          scale: cursorActive ? 1.25 : 1,
          backgroundColor: cursorActive ? '#ffffff' : '#111111',
          width: 28, height: 28,
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.12 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke={cursorActive ? '#111111' : '#ffffff'}
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ width: 14, height: 14, flexShrink: 0 }}
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </motion.div>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative w-full min-h-screen bg-[#080808] flex flex-col overflow-hidden">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)', backgroundSize: '80px 80px' }}
        />

        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-[#6A4DFF]/[0.12] blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[80px] pointer-events-none" />

        {/* Top meta */}
        <div className="absolute top-28 left-6 lg:left-16 z-10 flex items-center gap-3 text-white/25 text-xs tracking-[0.22em] uppercase">
          <span className="w-6 h-[1px] bg-white/15" /> Full-Service Studio · Hyderabad
        </div>

        {/* Scroll indicator */}
        <div className="absolute top-28 right-6 lg:right-16 z-10 flex flex-col items-center gap-2 text-white/20 text-[10px] tracking-widest uppercase">
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute top-0 w-full h-1/3 bg-white/50"
            />
          </div>
          Scroll
        </div>

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col justify-end pb-24 max-w-[1400px] mx-auto w-full px-6 lg:px-16">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#6A4DFF] animate-pulse" />
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-mono">Services & Capabilities</span>
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-2">
              <motion.h1
                variants={{ hidden: { y: 110, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } } }}
                className="text-[clamp(3.2rem,8vw,8.5rem)] font-serif font-light text-white leading-[1.05] tracking-tight"
              >
                We build digital
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-16">
              <motion.h1
                variants={{ hidden: { y: 110, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 } } }}
                className="text-[clamp(3.2rem,8vw,8.5rem)] font-serif italic font-light text-white/25 leading-[1.05] tracking-tight"
              >
                brands &amp; experiences.
              </motion.h1>
            </div>

            {/* Bottom row */}
            <div className="pt-10 border-t border-white/[0.07] grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <motion.p variants={fadeUp} className="text-white/35 text-base leading-relaxed font-light max-w-md">
                From strategy to launch — we partner with ambitious founders and brands to engineer products, identities, and growth systems that last.
              </motion.p>

              {/* Service pills */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {['Web Dev', 'Brand Identity', 'UI/UX', 'Motion & Video', 'Social Media', 'Pitch Deck', 'Photography', 'Growth'].map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.06, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
                    className="px-3 py-1.5 rounded-full border border-white/10 text-white/35 text-xs font-medium hover:border-white/30 hover:text-white/70 transition-all cursor-default select-none"
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </div>

        {/* Fade to white */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent pointer-events-none" /> */}
      </section>

      {/* ════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════ */}
      <section id="services" className="py-28">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Section header */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.28em] uppercase text-black/25 mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/15" /> What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-black mb-4">
              Our Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 font-serif italic text-xl max-w-xl">
              Comprehensive solutions across every dimension of your digital presence.
            </motion.p>
          </motion.div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {SERVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                onMouseEnter={on} onMouseLeave={off}
                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === cat.id ? 'bg-black text-white shadow-lg shadow-black/10' : 'bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-black'}`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-[10px] font-mono opacity-40">{cat.num}</span>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>

          {/* Active category tagline */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab + '-tagline'}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 font-medium mb-8 text-sm"
            >
              {activeCategory.tagline}
            </motion.p>
          </AnimatePresence>

          {/* Service cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {activeCategory.services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={service.href}
                    onMouseEnter={on} onMouseLeave={off}
                    className="group relative bg-white border border-[#EBEBEB] rounded-2xl p-8 hover:shadow-2xl hover:shadow-black/[0.06] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col h-full block"
                  >
                    {/* Hover gradient wash */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6A4DFF]/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Header row */}
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-[10px] font-black tracking-widest uppercase bg-black text-white px-3 py-1.5 rounded-full">
                        {activeCategory.label}
                      </span>
                      <span className="text-5xl font-extrabold text-black/[0.05] group-hover:text-black/[0.09] transition-colors select-none">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title & desc */}
                    <h3 className="text-2xl font-extrabold text-black mb-3 tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 font-medium text-[0.9rem]">
                      {service.desc}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pb-10">
                      {service.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-mono px-2.5 py-1 bg-gray-50 text-gray-400 rounded-lg border border-gray-100">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Arrow icon */}
                    <div className="absolute bottom-8 right-8 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                      <svg className="w-4 h-4 text-black/25 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ── All Services Overview Strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="mt-20 pt-16 border-t border-gray-100"
          >
            <p className="text-[10px] tracking-[0.28em] uppercase text-black/20 mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/10" /> Everything We Do
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-3">
              {ALL_SERVICES.map(s => (
                <Link
                  key={s.title}
                  to={s.href}
                  onMouseEnter={on} onMouseLeave={off}
                  className="flex items-center gap-2.5 group py-1"
                >
                  <span className="w-1 h-1 rounded-full bg-black/15 group-hover:bg-[#6A4DFF] group-hover:scale-150 transition-all shrink-0" />
                  <span className="text-sm text-gray-500 group-hover:text-black transition-colors font-medium">
                    {s.title}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW WE WORK — dark section
      ════════════════════════════════════════ */}
      <section className="py-28 bg-[#080808] relative overflow-hidden">

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6A4DFF]/[0.05] blur-[120px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="mb-20"
          >
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.28em] uppercase text-white/20 mb-4 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-white/15" /> Our Process
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              How we work
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                onMouseEnter={on} onMouseLeave={off}
                className="group relative bg-[#080808] p-8 hover:bg-white/[0.03] transition-colors duration-500"
              >
                {/* Big number watermark */}
                <div className="text-[5rem] font-serif font-light text-white/[0.05] group-hover:text-white/[0.1] transition-colors leading-none mb-4 select-none">
                  {step.num}
                </div>

                {/* Accent line */}
                <div className="w-8 h-[2px] bg-white/15 mb-5 group-hover:w-14 group-hover:bg-[#6A4DFF]/70 transition-all duration-400" />

                <h3 className="text-white font-bold text-xl mb-3">{step.label}</h3>
                <p className="text-white/35 text-sm leading-relaxed">{step.desc}</p>

                {/* Corner tag */}
                <span className="absolute top-6 right-6 text-[10px] font-mono text-white/15">{step.num}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <section className="py-20 border-b border-gray-100 max-w-[1200px] mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { num: '150+', label: 'Projects Delivered' },
            { num: '12', label: 'Industry Awards' },
            { num: '5+', label: 'Years in Business' },
            { num: '98%', label: 'Client Retention' },
          ].map((stat, i) => (
            <motion.div
              variants={fadeUp}
              key={i}
              onMouseEnter={on} onMouseLeave={off}
              className="group"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-2 tracking-tight group-hover:scale-105 transition-transform origin-center inline-block">
                {stat.num}
              </h2>
              <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          SELECTED WORKS
      ════════════════════════════════════════ */}
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
          <Link
            to="/results"
            onMouseEnter={on} onMouseLeave={off}
            className="group hidden md:flex items-center gap-2 text-sm font-bold text-black/40 hover:text-black transition-colors"
          >
            View all cases
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            onMouseEnter={on} onMouseLeave={off}
            className="md:col-span-7 md:row-span-2 group relative h-[420px] md:h-auto rounded-2xl overflow-hidden cursor-pointer bg-black"
          >
            <img src={WORKS[0].img} alt={WORKS[0].title}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute top-6 left-6 flex gap-2 z-10">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-wide text-white/70 backdrop-blur-sm">Web &amp; App Design</span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] tracking-wide text-white/70 backdrop-blur-sm">Responsive</span>
            </div>
            <div className="absolute top-6 right-6 z-10">
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300">
                <svg className="w-4 h-4 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">{WORKS[0].tag}</div>
              <h3 className="text-2xl md:text-3xl font-serif font-light text-white leading-snug mb-3">{WORKS[0].title}</h3>
              <div className="flex items-center gap-2 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <span className="text-sm text-white/70 font-light">{WORKS[0].desc}</span>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-white/[0.05] text-8xl font-serif font-light leading-none select-none z-0">01</div>
          </motion.div>

          {/* Small card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            onMouseEnter={on} onMouseLeave={off}
            className="md:col-span-5 group relative h-[200px] rounded-2xl overflow-hidden cursor-pointer bg-black"
          >
            <img src={WORKS[1].img} alt={WORKS[1].title}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute top-5 right-5 z-10">
              <div className="w-8 h-8 rounded-full border border-white/25 flex items-center justify-center backdrop-blur-sm group-hover:bg-white group-hover:border-white transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-5 left-5 right-5 z-10">
              <div className="text-[9px] tracking-[0.2em] uppercase text-white/35 mb-1.5">{WORKS[1].tag}</div>
              <h3 className="text-lg font-serif font-light text-white">{WORKS[1].title}</h3>
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            onMouseEnter={on} onMouseLeave={off}
            className="md:col-span-5 group relative h-[200px] rounded-2xl overflow-hidden cursor-pointer bg-[#0f0f0f] border border-white/5 flex flex-col justify-between p-6"
          >
            <div className="flex items-start justify-between">
              <span className="text-[9px] tracking-[0.2em] uppercase text-white/30">Track Record</span>
              <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-white/50 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ n: '+312%', l: 'Avg. Revenue Lift' }, { n: '150+', l: 'Brands Served' }, { n: '3.1x', l: 'Avg. ROAS' }, { n: '94%', l: 'Client Renewal' }].map((s, i) => (
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

      {/* ════════════════════════════════════════
          CTA — dark
      ════════════════════════════════════════ */}
      <section className="py-36 bg-[#080808] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#6A4DFF]/[0.08] blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)', backgroundSize: '80px 80px' }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#6A4DFF] animate-pulse" />
              <span className="text-white/25 text-xs tracking-[0.35em] uppercase font-mono">Ready to begin?</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-5xl md:text-[5.5rem] font-extrabold text-white mb-6 max-w-3xl leading-tight tracking-tight">
              Let's build something significant.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-white/30 text-lg mb-14 max-w-lg font-light leading-relaxed">
              Tell us what you're working on — we'll come back with a clear plan, timeline, and estimate.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                onMouseEnter={on} onMouseLeave={off}
                className="bg-white text-black px-10 py-5 rounded-full font-bold text-base hover:bg-white/90 transition-all hover:scale-105 active:scale-95"
              >
                Start a project
              </Link>
              <Link
                to="/results"
                onMouseEnter={on} onMouseLeave={off}
                className="border border-white/15 text-white/60 px-10 py-5 rounded-full font-bold text-base hover:border-white/40 hover:text-white transition-all"
              >
                View our work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          FAQ
      ════════════════════════════════════════ */}
      <section className="py-24 max-w-3xl mx-auto px-6 mb-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-[10px] tracking-[0.28em] uppercase text-black/25 mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-black/10" /> Common Questions <span className="w-8 h-[1px] bg-black/10" />
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-black">FAQ</h2>
        </motion.div>

        <div className="space-y-2">
          {FAQS.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              className="border border-gray-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                onMouseEnter={on} onMouseLeave={off}
                className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
              >
                <span className="text-base font-bold text-black group-hover:text-gray-600 transition-colors pr-8 leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openFaq === idx ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-black transition-colors"
                >
                  <svg className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-gray-500 leading-relaxed font-medium text-sm">{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
