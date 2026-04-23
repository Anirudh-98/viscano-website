import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: d * 0.08 } }) };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

export default function BlogPRD() {
    return (
        <div className="min-h-screen bg-white text-black overflow-hidden font-sans">
            <SEOHead
                title="The PRD as a Design Brief: How We Scope Projects | Viscano"
                description="Learn why Viscano replaces traditional design briefs with Product Requirements Documents (PRDs) for accurate, fixed-price project scoping."
                keywords="web design pricing, product requirements document, creative agency scoping, brand strategy India, fixed price web development, Viscano process"
                canonical="https://viscano.com/blog/the-prd-as-a-design-brief-how-we-scope-projects-differently"
            />
            <section className="relative w-full pt-40 pb-16 px-6 lg:px-16 max-w-[1000px] mx-auto">
                <motion.div initial="hidden" animate="visible" variants={stagger}>
                    <motion.div variants={fadeUp} className="mb-8">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-black/40 hover:text-black transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Journal</Link>
                    </motion.div>
                    <motion.div variants={fadeUp} className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-black/50 mb-6">
                        <span className="px-3 py-1 rounded-full bg-black/5 border border-black/10 text-black/80 font-bold backdrop-blur-md">Strategy</span>
                        <span>Harish Rokkam</span><span className="w-1 h-1 rounded-full bg-black/20" /><span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 7 min read</span><span className="w-1 h-1 rounded-full bg-black/20" /><span>Jan 30, 2025</span>
                    </motion.div>
                    <div className="overflow-visible pb-2 mb-8">
                        <motion.h1 variants={{ hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }} className="text-[clamp(2.5rem,6vw,4.5rem)] font-serif font-light text-black leading-[1.1] tracking-tight">The PRD as a design brief: how we scope projects differently</motion.h1>
                    </div>
                    <motion.p variants={fadeUp} className="text-xl font-light text-black/60 leading-relaxed max-w-3xl">A Product Requirements Document isn't just for engineers. We use it as the foundation for every brand engagement to guarantee accurate pricing.</motion.p>
                </motion.div>
            </section>
            <section className="px-6 lg:px-16 max-w-[1200px] mx-auto pb-16">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-black/[0.03] border border-black/[0.05]">
                    <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80" alt="Strategy and Scoping Session" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                </motion.div>
            </section>
            <section className="px-6 lg:px-16 max-w-[800px] mx-auto pb-32">
                <article className="prose prose-lg max-w-none text-black/70 font-light leading-loose prose-h2:font-serif prose-h2:font-light prose-h2:text-4xl prose-h2:text-black prose-h2:tracking-tight prose-h2:mt-16 prose-h2:mb-6 prose-p:mb-8 prose-p:text-lg">
                    <p>Pricing in the creative industry is notoriously opaque. Most agencies rely on arbitrary value-based pricing or endless hourly billing models. At Viscano, we reject this. We provide exact, fixed-price quotes—and it is entirely powered by the Product Requirements Document (PRD).</p>
                    <h2>What is a PRD?</h2>
                    <p>Traditionally utilized in software engineering, a PRD outlines the exact specifications of a product: its purpose, features, user flows, and technical constraints. We realized that porting this methodology to <strong>web design and branding</strong> eliminates 90% of scope creep.</p>
                    <h2>Precision Over Guesswork</h2>
                    <p>When a client submits a detailed PRD (or works with our strategy team to build one during discovery), we know exactly how many unique templates, animations, and database schemas are required. This translates to an honest invoice. No padding. No surprises.</p>

                    <div className="bg-[#F8F8F8] border border-black/10 rounded-2xl p-8 my-12">
                        <h4 className="text-sm tracking-widest uppercase font-semibold text-black/80 mb-4 flex items-center gap-3">
                            <Tag className="w-4 h-4" /> Why Choose Viscano?
                        </h4>
                        <ul className="list-disc pl-5 space-y-3 text-base text-black/60">
                            <li><strong>Zero Templates:</strong> Every project is custom-designed for your specific audience.</li>
                            <li><strong>Direct Access:</strong> No account managers masking the process. You work directly with the creators.</li>
                            <li><strong>Performance First:</strong> We build with best-in-class technical SEO and loading speeds from day one.</li>
                            <li><strong>Local & Global:</strong> While we proudly serve the Hyderabad and Vizag markets, our work standards compete on a global stage.</li>
                        </ul>
                    </div>
                </article>

                {/* ── AUTHOR FOOTER ── */}
                <div className="mt-24 pt-10 border-t border-black/[0.08] flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img
                        src="/harish.jpeg"
                        alt="Harish Rokkam - Lead Brand Strategist"
                        className="w-20 h-20 rounded-full object-cover border border-black/20 grayscale"
                    />
                    <div>
                        <h4 className="text-xl font-serif font-light text-black mb-2">Harish Rokkam</h4>
                        <p className="text-xs tracking-widest uppercase text-black/40 font-medium mb-4">Lead Brand Strategist</p>
                        <p className="text-sm font-light text-black/50 leading-relaxed max-w-lg">
                            Translates research, market signals, and gut instinct into brand strategy that actually sticks.
                        </p>
                    </div>
                </div>

                {/* ── CTA ── */}
                <div className="mt-16 bg-[#F8F8F8] border border-black/[0.08] rounded-3xl p-10 flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-serif font-light text-black mb-4">Start your next project</h3>
                    <p className="text-black/40 text-sm font-light mb-8 max-w-sm">Bring your brief. Let's engineer an experience that converts.</p>
                    <Link to="/contact" className="group inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-black/80 transition-all">
                        Talk to our team
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
