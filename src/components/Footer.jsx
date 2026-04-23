import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const wrapRef = useRef(null);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        // Set starting state immediately
        el.style.transform = 'translateY(80px)';
        el.style.opacity = '0';
        el.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s ease';

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.style.transform = 'translateY(0px)';
                    el.style.opacity = '1';
                    observer.disconnect();
                }
            },
            { threshold: 0.05 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={wrapRef} style={{ willChange: 'transform, opacity' }}>
            {/* White strip so rounded dark top corners stand out */}
            <div className="bg-white w-full h-10" />
            <footer className="bg-[#0A0A0A] text-white pt-24 pb-12 px-8 md:px-12 lg:px-24 relative z-20 rounded-tl-[2.5rem] rounded-tr-[2.5rem] -mt-10 shadow-[0_-20px_70px_rgba(0,0,0,0.7)]">
                <div className="max-w-[1600px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-24">

                        {/* Left Column */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Stay connected</h3>
                            <p className="text-white/60 text-sm md:text-base font-medium max-w-[280px]">
                                Join our newsletter for tips, updates, and project highlights—only the good stuff.
                            </p>
                            <div className="mt-4 relative max-w-[320px]">
                                <input
                                    type="email"
                                    placeholder="Enter email address*"
                                    className="w-full bg-[#151515] border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white/30 transition-colors"
                                />
                                <button aria-label="Subscribe to newsletter" className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </button>
                            </div>
                        </div>

                        {/* Middle Columns */}
                        <div className="md:col-span-4 flex flex-wrap gap-16 md:gap-24">
                            <div className="flex flex-col gap-5">
                                <h4 className="text-white/40 font-medium text-sm mb-2">Main links</h4>
                                <Link to="/" className="text-white text-sm font-semibold hover:text-white/70 transition-colors">Home</Link>
                                <Link to="/about" className="text-white/70 text-sm font-medium hover:text-white transition-colors">About us</Link>
                                <Link to="/results" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Cases</Link>
                                <Link to="/careers" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Careers</Link>
                            </div>
                            <div className="flex flex-col gap-5 pt-12">
                                <Link to="/contact" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Contact us</Link>
                                <Link to="/services" className="text-white/70 text-sm font-medium hover:text-white transition-colors">Services</Link>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="md:col-span-4 flex flex-col gap-12">
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white/40 font-medium text-sm">Get in touch</h4>
                                <a href="tel:+916301361466" className="text-white font-bold text-lg hover:text-white/80 transition-colors">+91 6301361466</a>
                                <a href="mailto:connect@viscano.com" className="text-white font-bold text-lg hover:text-white/80 transition-colors">connect@viscano.com</a>
                            </div>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-white/40 font-medium text-sm">Offline</h4>
                                <p className="text-white font-bold text-base">Viscano creative studio</p>
                                <p className="text-white/60 text-sm font-medium max-w-[280px] leading-relaxed">
                                    Saina Enclave, MIG-II-301, Kukatpally Housing Board Colony, K P H B Phase 9, Kukatpally, Hyderabad, Telangana 500085
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Social Links & Big Text */}
                    <div className="flex flex-col lg:flex-row justify-between items-end border-t border-white/5 pt-16 mb-8 gap-12 lg:gap-0">
                        <div className="w-full lg:w-1/4 flex flex-col">
                            {[
                                { name: 'Facebook', url: '#', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/viscano', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></> },
                                { name: 'Twitter/X', url: '#', icon: <path d="M4 4l16 16m0-16L4 20"></path> },
                                { name: 'Instagram', url: 'https://www.instagram.com/viscano.global?igsh=MmNsZXZwbWVuNTJl', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> }
                            ].map((social, idx) => (
                                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group py-5 border-b border-white/5 last:border-b-0 w-full md:w-64">
                                    <span className="flex items-center gap-3 text-white/70 font-medium text-sm group-hover:text-white transition-colors">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50 group-hover:text-white transition-colors">{social.icon}</svg>
                                        {social.name}
                                    </span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </a>
                            ))}
                        </div>
                        <div className="w-full lg:w-3/4 flex justify-start lg:justify-end overflow-visible pb-8">
                            <h1 className="text-[12vw] sm:text-[15vw] lg:text-[14rem] font-black leading-[0.75] tracking-tighter text-white uppercase ml-[-0.05em]">
                                VISCANO
                            </h1>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-white/40 font-medium pt-8 border-t border-white/10 mt-8 gap-4 md:gap-0">
                        <p>Designed by Viscano.</p>
                        <div className="flex items-center gap-4">
                            <p>© {new Date().getFullYear()} Viscano. All rights reserved <span className="mx-2">•</span> <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
