import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Team', path: '/team' },
    { label: 'Services', path: '/solutions' },
    { label: 'Cases', path: '/results' },
    { label: 'Blog', path: '/blog' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const menuVariants = {
        closed: { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
        open: {
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            opacity: 0,
            clipPath: 'inset(0% 0% 100% 0%)',
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 30 },
        open: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.07 }
        })
    };

    return (
        <>
            {/* ── MAIN NAV BAR ── */}
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

                    {/* Left Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.slice(0, 4).map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? 'text-white'
                                    : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Center Logo */}
                    <Link
                        to="/"
                        className="absolute left-1/2 -translate-x-1/2 z-50 flex items-center"
                    >
                        <img
                            src="/footerlogo.png"
                            alt="Viscano"
                            className="h-10 w-auto object-contain"
                        />
                    </Link>

                    {/* Right Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.slice(4).map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? 'text-white'
                                    : 'text-white/50 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <Link
                            to="/contact"
                            className="ml-4 px-5 py-2.5 rounded-full border border-white/20 text-xs tracking-[0.15em] uppercase font-medium text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center gap-2 group"
                        >
                            Start a Project
                            <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex flex-col gap-[5px] justify-center items-center w-10 h-10 z-[60] relative focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="block w-6 h-[1.5px] bg-white origin-center"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            transition={{ duration: 0.2 }}
                            className="block w-6 h-[1.5px] bg-white"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="block w-6 h-[1.5px] bg-white origin-center"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* ── MOBILE MENU OVERLAY ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        className="fixed inset-0 z-40 bg-black flex flex-col md:hidden"
                    >
                        {/* Top gradient */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {/* Nav links */}
                        <div className="flex flex-col justify-center flex-1 px-8 gap-1">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    custom={i}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="py-2.5 border-b border-white/[0.06]"
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-3xl sm:text-4xl font-serif font-light tracking-tight transition-colors flex items-center justify-between group ${location.pathname === link.path ? 'text-white' : 'text-white/40 hover:text-white'
                                            }`}
                                    >
                                        <span>{link.label}</span>
                                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom footer info */}
                        <div className="px-8 py-8 flex justify-between items-end text-white/30 text-xs tracking-widest uppercase">
                            <span>© 2024 Viscano</span>
                            <span>Full-Service Creative Agency</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
