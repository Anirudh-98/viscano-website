import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, KeyRound } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import SEOHead from '../../components/SEOHead';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Successfully logged in');
            navigate('/admin');
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Failed to login. Please check credentials.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-center relative overflow-hidden font-sans">
            <SEOHead title="Admin Login | Viscano" description="Secure dashboard access." />
            <Toaster position="bottom-center" />

            {/* Grain & Glow */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" /></filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
            <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="w-full max-w-md mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4" /> Back to Site
                    </Link>

                    <div className="bg-[#111113] border border-white/[0.08] p-8 md:p-10 rounded-3xl shadow-2xl">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6">
                            <KeyRound className="w-5 h-5 text-white/70" />
                        </div>
                        <h1 className="text-3xl font-serif font-light text-white mb-2">Admin Portal</h1>
                        <p className="text-white/40 text-sm font-light mb-8">Sign in to access the Viscano dashboard.</p>

                        <form onSubmit={handleLogin} className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors font-medium"
                                    placeholder="admin@viscano.com"
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold flex justify-between">
                                    Password
                                    <Link to="/admin/forgot-password" className="text-white/30 hover:text-white transition-colors normal-case tracking-normal">Forgot password?</Link>
                                </label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-medium"
                                    placeholder="••••••••"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="mt-4 w-full bg-white text-black py-3.5 rounded-xl text-sm font-bold hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span> : 'Sign In'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
