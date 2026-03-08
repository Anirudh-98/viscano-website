import React from 'react';
import { motion } from 'framer-motion';

// Mock UI for Discover - Moodboard / Brand Identity Collage
const DiscoverGraphic = () => (
    <div className="absolute inset-x-4 bottom-4 h-48 bg-[#111] rounded-xl border border-white/10 p-3 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
        <div className="relative w-full h-full">
            <motion.div
                initial={{ rotate: -15, y: 20, opacity: 0 }}
                whileInView={{ rotate: -5, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute top-2 left-2 w-20 h-24 sm:w-24 sm:h-28 bg-[#1a1a1a] p-1.5 pb-6 border border-white/10 shadow-xl rounded-sm z-10 hover:z-30 hover:scale-105 transition-all"
            >
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40 object-cover rounded-sm"></div>
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-white/50">Mood 01</div>
            </motion.div>

            <motion.div
                initial={{ rotate: 10, y: 20, opacity: 0 }}
                whileInView={{ rotate: 15, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="absolute top-8 right-2 w-16 h-20 sm:w-20 sm:h-24 bg-[#1a1a1a] p-1.5 pb-6 border border-white/10 shadow-xl rounded-sm z-20 hover:z-30 hover:scale-105 transition-all"
            >
                <div className="w-full h-full bg-gradient-to-br from-emerald-500/40 to-teal-500/40 object-cover rounded-sm"></div>
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-white/50">Color</div>
            </motion.div>

            <motion.div
                initial={{ rotate: 0, y: 20, opacity: 0 }}
                whileInView={{ rotate: -2, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute bottom-2 left-8 sm:left-12 w-24 sm:w-28 h-14 sm:h-16 bg-[#222] border border-white/5 shadow-2xl rounded-md z-30 p-2 flex gap-2 hover:scale-105 transition-transform"
            >
                {/* Color swatches */}
                <div className="w-3 sm:w-4 h-full bg-[#fdfdfd] rounded-[2px]"></div>
                <div className="w-3 sm:w-4 h-full bg-[#333] rounded-[2px]"></div>
                <div className="w-3 sm:w-4 h-full bg-[#8B5CF6] rounded-[2px]"></div>
                <div className="flex-1 flex flex-col gap-1 justify-center px-1">
                    <div className="w-full h-1 bg-white/20 rounded-full"></div>
                    <div className="w-2/3 h-1 bg-white/20 rounded-full"></div>
                </div>
            </motion.div>
        </div>
    </div>
);

// Mock UI for Design - Wireframe Bento Box Grid
const DesignGraphic = () => (
    <div className="absolute inset-x-4 bottom-4 h-48 bg-[#111] rounded-xl border border-white/10 p-3 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 perspective-[1000px]">
        <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full flex flex-col gap-2 transform-style-3d"
        >
            <div className="w-full h-1/3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-white/5 flex items-center p-3 gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                <div className="flex-1 flex flex-col gap-2">
                    <div className="w-full h-2 bg-white/20 rounded-full"></div>
                    <div className="w-1/2 h-2 bg-white/10 rounded-full"></div>
                </div>
            </div>
            <div className="w-full flex-1 flex gap-2">
                <div className="w-1/2 h-full bg-white/5 rounded-lg border border-white/5 p-3 flex flex-col gap-2">
                    <div className="w-full h-2 bg-white/10 rounded-full"></div>
                    <div className="w-2/3 h-2 bg-white/10 rounded-full"></div>
                    <div className="w-full flex-1 bg-white/5 rounded-md mt-auto"></div>
                </div>
                <div className="w-1/2 h-full flex flex-col gap-2">
                    <div className="w-full h-1/2 bg-[#00FF66]/10 rounded-lg border border-[#00FF66]/20 overflow-hidden relative">
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: "200%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                        />
                    </div>
                    <div className="w-full h-1/2 bg-[#00DDFF]/10 rounded-lg border border-[#00DDFF]/20 flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-[#00DDFF]/50" strokeWidth="2"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon></svg>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
);

// Mock UI for Develop - Code Editor
const DevelopGraphic = () => (
    <div className="absolute inset-x-4 bottom-4 h-48 bg-[#0a0a0a] rounded-xl border border-white/10 p-3 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 font-mono text-[10px] flex flex-col shadow-inner">
        {/* Editor tab */}
        <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-white/40">app.tsx</span>
            </div>
            <span className="text-white/20">UTF-8</span>
        </div>
        <div className="flex flex-col gap-1.5 text-white/70 tracking-wide">
            <div className="flex"><span className="text-[#FF7B72] w-12">import</span><span className="text-white">&nbsp;Reaction&nbsp;</span><span className="text-[#FF7B72]">from</span><span className="text-[#A5D6FF]">&nbsp;'core'</span></div>
            <div className="flex mt-1"><span className="text-[#FF7B72] w-12">const</span><span className="text-[#D2A8FF]">init</span>&nbsp;=&nbsp;<span className="text-[#FF7B72]">async</span>&nbsp;()&nbsp;<span className="text-[#FF7B72]">=gt;</span>&nbsp;&#123;</div>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
                className="flex pl-4 overflow-hidden whitespace-nowrap"
            >
                <span className="text-[#FF7B72]">await</span>&nbsp;<span className="text-[#D2A8FF]">Reaction</span>.<span className="text-[#79C0FF]">start</span>();
            </motion.div>
            <div className="flex">&#125;</div>
        </div>
        {/* Terminal mock */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5 }}
            className="mt-auto bg-[#1a1a1a] rounded-md border border-white/5 p-2 text-[#7EE787]"
        >
            <div className="flex gap-2 items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>build completed (124ms)</span>
            </div>
        </motion.div>
    </div>
);

// Mock UI for Launch - Dashboard / Circular Progress
const LaunchGraphic = () => (
    <div className="absolute inset-x-4 bottom-4 h-48 bg-[#111] rounded-xl border border-white/10 p-4 overflow-hidden group-hover:-translate-y-2 transition-transform duration-500 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        {/* Circular Progress Gauge */}
        <div className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center z-10">
            {/* Background ring */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <motion.circle
                    initial={{ strokeDasharray: "0 264" }}
                    whileInView={{ strokeDasharray: "230 264" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    cx="50" cy="50" r="42" fill="none" stroke="#10B981" strokeWidth="8" strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[9px] text-white/50 uppercase tracking-widest font-bold mb-1">Score</span>
                <span className="text-2xl font-mono text-white/90">98</span>
            </div>
        </div>

        {/* Small rising line chart below */}
        <div className="absolute bottom-4 left-4 right-4 h-8 flex items-end gap-1 opacity-60">
            {[10, 20, 15, 30, 25, 40, 35, 50, 45, 60, 55, 70, 80].map((h, i) => (
                <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 + 0.5 }}
                    className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-400 rounded-t-sm"
                />
            ))}
        </div>
    </div>
);

export default function OurProcessInfographic() {

    const processes = [
        {
            id: '/01',
            title: 'Discover',
            desc: 'Create visual identities that align with your voice and make lasting impressions.',
            graphic: <DiscoverGraphic />
        },
        {
            id: '/02',
            title: 'Design',
            desc: 'Shape powerful experiences with purpose-driven creativity and thoughtful execution.',
            graphic: <DesignGraphic />
        },
        {
            id: '/03',
            title: 'Develop',
            desc: 'Build scalable solutions that bring your vision to life with precision and performance.',
            graphic: <DevelopGraphic />
        },
        {
            id: '/04',
            title: 'Launch & Grow',
            desc: 'Introduce your brand with impact through strategic rollouts that captivate and convert.',
            graphic: <LaunchGraphic />
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#0A0A0A] relative z-20 mx-auto max-w-[1400px] border-t border-white/10 px-6 md:px-12 lg:px-24">

            {/* Outline Top Pill */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 w-fit mb-12 opacity-80 backdrop-blur-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span className="text-xs font-semibold text-white/90 tracking-wide uppercase">Our Process</span>
            </div>

            {/* Header Content */}
            <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-8">
                <h2 className="text-5xl md:text-7xl lg:text-[80px] font-medium tracking-tight text-white/90 leading-[1.05]">
                    <span className="font-serif italic font-light text-white block pr-2">The Journey</span> to a <br />Successful<br />Product
                </h2>
                <p className="text-sm md:text-base text-white/50 font-medium max-w-[320px] leading-relaxed pt-3">
                    We keep things lean and collaborative — so ideas go from concept to launch without the chaos.
                    <span className="block mt-4 text-white/30 text-xs uppercase tracking-widest font-bold">Driven by AI</span>
                </p>
            </div>

            {/* 4 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {processes.map((process, i) => (
                    <motion.div
                        key={process.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="relative flex flex-col bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden group hover:border-[#333] transition-colors shadow-2xl p-8 pb-[240px] h-[480px]"
                    >
                        {/* Top: Text Content */}
                        <div className="flex flex-col items-start justify-start relative z-10">
                            <span className="text-xs font-bold font-sans text-white/90 mb-6 block border border-white/10 px-3 py-1 rounded-full bg-white/5">{process.id}</span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">{process.title}</h3>
                            <p className="text-[#888] text-sm md:text-[13px] leading-relaxed font-medium">
                                {process.desc}
                            </p>
                        </div>

                        {/* Interactive Infographic Graphic inside the Bento Box */}
                        {process.graphic}

                        {/* Decorative background glow behind the graphic */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-t from-white/5 to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none blur-3xl"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
