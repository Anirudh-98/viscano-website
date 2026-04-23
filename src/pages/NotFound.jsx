import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SEOHead from '../components/SEOHead';
import { ArrowUpRight } from 'lucide-react';

export default function NotFound() {
    const containerRef = useRef(null);
    const cordRef = useRef(null);
    const sparksRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial sequence
            const tl = gsap.timeline();

            tl.fromTo('.text-reveal',
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
            );

            // Cord floating animation
            gsap.to(cordRef.current, {
                y: -15,
                rotation: 2,
                duration: 2.5,
                yoyo: true,
                repeat: -1,
                ease: 'sine.inOut'
            });

            // Random sporadic sparks
            const sparkInterval = setInterval(() => {
                if (Math.random() > 0.6) {
                    gsap.fromTo('.spark',
                        { scale: 0, opacity: 1 },
                        { scale: () => Math.random() * 1.5 + 0.5, opacity: 0, duration: 0.3, stagger: 0.05, ease: 'power2.out' }
                    );
                }
            }, 2000);

            return () => clearInterval(sparkInterval);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-white flex flex-col items-center justify-center p-6 pt-32 pb-20 relative overflow-hidden font-sans selection:bg-black selection:text-white">
            <SEOHead
                title="404 - Page Not Found | Viscano"
                description="The page you are looking for does not exist."
            />
            {/* Meta tags to discourage indexing of the 404 page */}
            <meta name="robots" content="noindex, nofollow" />

            <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center relative z-10">

                {/* Visual SVG Element (The unplugged cord idea adapted for dark theme) */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center">
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-black/[0.02] rounded-full blur-3xl"></div>

                    <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                        <defs>
                            <linearGradient id="cordGrad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0%" stopColor="#DDD" />
                                <stop offset="100%" stopColor="#999" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Static top cord */}
                        <path d="M 50 0 C 50 100, 200 100, 200 180" fill="none" stroke="url(#cordGrad)" strokeWidth="12" strokeLinecap="round" />
                        <rect x="180" y="160" width="40" height="25" rx="4" fill="#EEE" stroke="#CCC" strokeWidth="2" />
                        <rect x="188" y="185" width="8" height="15" fill="#AAA" />
                        <rect x="204" y="185" width="8" height="15" fill="#AAA" />

                        {/* Floating bottom cord */}
                        <g ref={cordRef}>
                            <path d="M 200 240 C 200 320, 350 320, 350 400" fill="none" stroke="url(#cordGrad)" strokeWidth="12" strokeLinecap="round" />
                            <rect x="180" y="240" width="40" height="35" rx="6" fill="#EEE" stroke="#CCC" strokeWidth="2" />
                            <path d="M 175 245 L 225 245" stroke="#999" strokeWidth="4" />
                            <circle cx="200" cy="258" r="4" fill="#999" />
                        </g>

                        {/* Sparks group */}
                        <g ref={sparksRef} transform="translate(200, 215)">
                            <circle className="spark opacity-0" cx="-15" cy="-5" r="3" fill="#000" filter="url(#glow)" />
                            <circle className="spark opacity-0" cx="15" cy="5" r="2" fill="#000" filter="url(#glow)" />
                            <circle className="spark opacity-0" cx="0" cy="10" r="4" fill="#222" filter="url(#glow)" />
                        </g>
                    </svg>
                </div>

                <div className="overflow-hidden mb-4">
                    <h1 className="text-reveal text-6xl md:text-[8rem] font-serif font-light text-black leading-none tracking-tighter">
                        404
                    </h1>
                </div>

                <div className="overflow-hidden mb-6">
                    <h2 className="text-reveal text-2xl md:text-3xl font-medium text-black/90">
                        Connection Lost.
                    </h2>
                </div>

                <div className="overflow-hidden mb-12">
                    <p className="text-reveal text-black/50 font-light max-w-sm mx-auto text-sm md:text-base leading-relaxed">
                        The page you're looking for was moved, removed, renamed, or might never have existed.
                    </p>
                </div>

                <div className="overflow-hidden">
                    <div className="text-reveal">
                        <Link
                            to="/"
                            className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-black/80 transition-all hover:scale-105"
                        >
                            Return to Homepage
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}
