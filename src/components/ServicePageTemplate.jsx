import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ArrowLeft, CheckCircle2, Plus, Minus } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d * 0.08 },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ServicePageTemplate({
  tag,
  title,
  titleItalic,
  description,
  tagline,
  body,
  stats,
  benefits,
  process,
  deliverables,
  tools,
  toolsLabel = 'Tools & Technologies',
  ctaTitle,
  ctaDesc,
  accentColor = '#6A4DFF',
  relatedServices = [],
}) {
  const [openStep, setOpenStep] = useState(null);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-20 px-6 lg:px-20 overflow-hidden bg-[#080808]">

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(to right,white 1px,transparent 1px),linear-gradient(to bottom,white 1px,transparent 1px)', backgroundSize: '80px 80px' }}
        />

        {/* Accent glow orb */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
          style={{ backgroundColor: `${accentColor}1a` }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-40"
          style={{ backgroundColor: `${accentColor}0d` }}
        />

        {/* Back breadcrumb */}
        <div className="absolute top-28 left-6 lg:left-20 z-10">
          <Link
            to="/services"
            className="group flex items-center gap-2 text-white/25 text-xs tracking-wide hover:text-white/60 transition-colors"
          >
            <ArrowLeft size={12} className="group-hover:-translate-x-0.5 transition-transform" />
            All Services
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute top-28 right-6 lg:right-20 z-10 flex flex-col items-center gap-2 text-white/20 text-[10px] tracking-widest uppercase">
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <motion.div
              animate={{ y: ['0%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute top-0 w-full h-1/3 bg-white/50"
            />
          </div>
          Scroll
        </div>

        {/* Hero text */}
        <div className="relative z-10 max-w-[1400px] w-full">

          {/* Tag chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-white/40 text-xs tracking-[0.22em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              {tag}
            </span>
          </motion.div>

          {/* Title line 1 */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="text-[clamp(2.8rem,7.5vw,8rem)] font-serif font-light text-white leading-[0.92] tracking-tight"
            >
              {title}
            </motion.h1>
          </div>

          {/* Title line 2 italic */}
          <div className="overflow-hidden mb-16">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.46 }}
              className="text-[clamp(2.8rem,7.5vw,8rem)] font-serif italic font-light text-white/25 leading-[0.92] tracking-tight"
            >
              {titleItalic}
            </motion.h1>
          </div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="pt-10 border-t border-white/[0.07] grid grid-cols-1 md:grid-cols-3 gap-10 items-end"
          >
            <div className="md:col-span-2">
              <p className="text-white/40 text-base md:text-lg font-light leading-relaxed max-w-xl">{description}</p>
            </div>
            <div className="flex md:justify-end">
              <Link
                to="/contact"
                className="group w-14 h-14 rounded-full bg-white flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg"
              >
                <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OVERVIEW
      ════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-6 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/20" /> What We Do
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight tracking-tight">{tagline}</h2>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            custom={1}
            className="space-y-5 text-base text-black/55 font-light leading-relaxed lg:pt-16"
          >
            {Array.isArray(body) ? body.map((p, i) => <p key={i}>{p}</p>) : <p>{body}</p>}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS
      ════════════════════════════════════════ */}
      <div className="border-y border-black/[0.07] px-6 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/[0.07]"
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={fadeUp} className="py-10 px-6 first:pl-0 last:pr-0 group">
              <div
                className="text-4xl font-serif font-light mb-1 transition-colors"
                style={{ color: i === 0 ? accentColor : 'inherit' }}
              >
                {s.n}
              </div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-black/30">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ════════════════════════════════════════
          BENEFITS (3 cards)
      ════════════════════════════════════════ */}
      {benefits && benefits.length > 0 && (
        <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-12 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/20" /> Why Choose Us
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="group relative bg-[#F7F7F7] rounded-2xl p-8 hover:bg-black transition-colors duration-500 cursor-default"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 text-white text-lg font-bold"
                    style={{ backgroundColor: accentColor }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-black group-hover:text-white mb-3 transition-colors">{b.title}</h3>
                  <p className="text-black/50 group-hover:text-white/50 text-sm leading-relaxed transition-colors">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ════════════════════════════════════════
          PROCESS (Interactive Accordion)
      ════════════════════════════════════════ */}
      <section className="py-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-16 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-black/20" /> Our Process
          </motion.div>

          <div className="space-y-0">
            {process.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="border-b border-black/[0.07]"
              >
                <button
                  onClick={() => setOpenStep(openStep === i ? null : i)}
                  className="w-full grid grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_2fr_auto] gap-6 md:gap-8 py-8 text-left group items-start hover:bg-black/[0.02] transition-colors rounded-xl px-4 -mx-4"
                >
                  <span className="font-serif text-black/20 text-2xl font-light">{p.step}</span>
                  <h3 className="font-bold text-lg tracking-tight self-center group-hover:text-black transition-colors">{p.title}</h3>
                  <p className="hidden md:block text-black/40 font-light text-sm leading-relaxed self-center">{p.desc}</p>
                  <motion.div
                    animate={{ rotate: openStep === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="self-center text-black/30 group-hover:text-black transition-colors"
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                {/* Mobile expandable desc */}
                <AnimatePresence>
                  {openStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden md:hidden"
                    >
                      <p className="pb-6 px-4 text-black/50 text-sm leading-relaxed font-light">{p.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════
          DELIVERABLES + TOOLS
      ════════════════════════════════════════ */}
      <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Deliverables */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/20" /> What You Get
            </motion.div>
            <div className="space-y-3.5">
              {deliverables.map((d, i) => (
                <motion.div key={i} variants={fadeUp} custom={i} className="flex items-center gap-4 group cursor-default">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 transition-colors"
                    style={{ color: accentColor }}
                  />
                  <span className="text-black/65 font-light group-hover:text-black transition-colors">{d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-8 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/20" /> {toolsLabel}
            </motion.div>
            <div className="flex flex-wrap gap-3">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  variants={fadeUp}
                  custom={i * 0.5}
                  className="px-4 py-2 rounded-full border border-black/10 text-sm font-medium text-black/50 hover:border-black hover:text-black transition-all cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          RELATED SERVICES
      ════════════════════════════════════════ */}
      {relatedServices.length > 0 && (
        <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-black/30 mb-10 flex items-center gap-3">
              <span className="w-6 h-[1px] bg-black/20" /> Related Services
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((rs, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <Link
                    to={rs.href}
                    className="group flex items-center justify-between p-6 rounded-2xl border border-black/[0.08] hover:border-black hover:bg-black hover:text-white transition-all duration-400"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-black/30 group-hover:text-white/40 mb-1.5 transition-colors">{rs.tag}</p>
                      <p className="font-bold text-base leading-snug">{rs.title}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center shrink-0 ml-4 group-hover:bg-white/10 transition-all">
                      <ArrowUpRight size={16} className="text-black/30 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="pb-28 px-6 lg:px-20 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-black rounded-[2rem] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 overflow-hidden relative"
        >
          {/* Glow blob */}
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 pointer-events-none"
            style={{ backgroundColor: `${accentColor}40` }}
          />

          <div className="relative z-10">
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Ready to start?</p>
            <h3 className="text-3xl md:text-4xl font-serif font-light text-white leading-tight max-w-lg">{ctaTitle}</h3>
            {ctaDesc && <p className="text-white/35 text-sm mt-3 font-light max-w-md leading-relaxed">{ctaDesc}</p>}
          </div>

          <Link
            to="/contact"
            className="group relative z-10 flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm hover:bg-white/85 transition-all shrink-0 hover:scale-105 active:scale-95"
          >
            Start a project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
