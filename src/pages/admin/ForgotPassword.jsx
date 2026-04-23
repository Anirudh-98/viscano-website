import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import toast, { Toaster } from 'react-hot-toast';
import SEOHead from '../../components/SEOHead';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleReset = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const methods = await fetchSignInMethodsForEmail(auth, email);
            if (methods.length === 0) {
                toast.error('No account found with this email address.');
                setIsLoading(false);
                return;
            }
            await sendPasswordResetEmail(auth, email);
            setIsSent(true);
            toast.success('Password reset email sent!');
        } catch (error) {
            console.error(error);
            toast.error(error.message || 'Failed to send reset email.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col justify-center relative overflow-hidden font-sans">
            <SEOHead title="Reset Password | Viscano" description="Reset admin password." />
            <Toaster position="bottom-center" />

            <div className="w-full max-w-md mx-auto px-6 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <Link to="/admin/login" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/40 hover:text-white transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4" /> Back to Login
                    </Link>

                    <div className="bg-[#111113] border border-white/[0.08] p-8 md:p-10 rounded-3xl shadow-2xl">
                        <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6">
                            <Mail className="w-5 h-5 text-white/70" />
                        </div>
                        <h1 className="text-3xl font-serif font-light text-white mb-2">Reset Password</h1>
                        <p className="text-white/40 text-sm font-light mb-8">Enter your email address to receive a secure password reset link.</p>

                        {isSent ? (
                            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                                <p className="text-sm text-white/70 font-light leading-relaxed">We've sent an email to <strong className="text-white">{email}</strong> with a link to reset your password.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleReset} className="flex flex-col gap-5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-semibold">Account Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors font-medium"
                                        placeholder="Enter your email"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="mt-4 w-full bg-white text-black py-3.5 rounded-xl text-sm font-bold hover:bg-white/90 transition-all disabled:opacity-50 flex items-center justify-center"
                                >
                                    {isLoading ? <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span> : 'Send Reset Link'}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
