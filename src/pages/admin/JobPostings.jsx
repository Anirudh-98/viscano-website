import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, LogOut, Settings, Users, FileText, Trash2, Briefcase, Plus } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, query, orderBy, doc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import toast, { Toaster } from 'react-hot-toast';

export default function JobPostings() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [isCreating, setIsCreating] = useState(false);

    // Form state
    const [form, setForm] = useState({
        title: '',
        department: '',
        type: '',
        location: '',
        desc: '',
        skills: ''
    });

    useEffect(() => {
        const q = query(collection(db, 'jobOpenings'), orderBy('createdAt', 'desc'));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => data.push({ id: doc.id, ...doc.data() }));
            setJobs(data);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Delete this job posting? It will be removed from the public website immediately.')) return;
        try {
            await deleteDoc(doc(db, 'jobOpenings', id));
            toast.success('Job deleted successfully');
        } catch (error) {
            console.error("Error deleting job:", error);
            toast.error('Failed to delete job');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Convert comma separated string to array and trim whitespace
            const skillsArray = form.skills.split(',').map(s => s.trim()).filter(Boolean);

            await addDoc(collection(db, 'jobOpenings'), {
                title: form.title,
                department: form.department,
                type: form.type,
                location: form.location,
                desc: form.desc,
                skills: skillsArray,
                createdAt: serverTimestamp(),
            });

            toast.success('Job posted successfully to Careers page!');
            setForm({ title: '', department: '', type: '', location: '', desc: '', skills: '' });
            setIsCreating(false);
        } catch (error) {
            console.error("Error creating job:", error);
            toast.error('Failed to post job');
        }
    };

    const userEmail = auth.currentUser?.email || 'admin@viscano.com';

    return (
        <div className="flex h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
            <SEOHead title="Manage Jobs | Viscano Admin" description="Protected area." />
            <Toaster position="bottom-center" />

            {/* SIDEBAR */}
            <aside className="w-64 border-r border-white/[0.08] bg-[#0E0E10] flex flex-col justify-between hidden md:flex shrink-0">
                <div>
                    <div className="p-8 pb-10">
                        <img src="/footerlogo.png" className="h-6 opacity-90 mx-auto" alt="Viscano" />
                    </div>
                    <nav className="flex flex-col gap-2 px-4">
                        <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/[0.03] text-sm font-medium transition-colors">
                            <LayoutDashboard className="w-4 h-4" /> Overview
                        </Link>
                        <Link to="/admin/jobs" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white text-sm font-medium">
                            <Briefcase className="w-4 h-4" /> Job Postings
                        </Link>
                        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/[0.03] text-sm font-medium transition-colors">
                            <FileText className="w-4 h-4" /> Projects
                        </button>
                    </nav>
                </div>
                <div className="p-4 border-t border-white/[0.05]">
                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-stone-800 to-stone-600 flex items-center justify-center text-xs font-bold uppercase">
                                {userEmail.charAt(0)}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-semibold truncate text-white/90">{userEmail}</p>
                                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Admin</p>
                            </div>
                        </div>
                        <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-white/[0.05] hover:bg-white/10 text-white/70 text-xs font-semibold transition-colors">
                            <LogOut className="w-3.5 h-3.5" /> Sign out
                        </button>
                    </div>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 flex flex-col overflow-y-auto w-full">
                {/* Mobile Header */}
                <header className="md:hidden flex items-center justify-between p-6 border-b border-white/[0.08] bg-[#0E0E10] shrink-0">
                    <img src="/footerlogo.png" className="h-5" alt="Viscano" />
                    <nav className="flex items-center gap-4 text-xs font-medium text-white/60">
                        <Link to="/admin" className="hover:text-white">Overview</Link>
                        <Link to="/admin/jobs" className="text-white">Jobs</Link>
                    </nav>
                </header>

                <div className="p-8 md:p-12 lg:p-16 max-w-5xl mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h1 className="text-4xl font-serif font-light tracking-tight mb-2">Job Postings</h1>
                                <p className="text-white/40 font-light text-sm">Manage open roles displayed on the public Careers page.</p>
                            </div>
                            <button
                                onClick={() => setIsCreating(!isCreating)}
                                className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-bold hover:bg-white/80 transition-colors shrink-0"
                            >
                                {isCreating ? 'Cancel' : <><Plus className="w-4 h-4" /> Create Job</>}
                            </button>
                        </div>

                        {/* CREATE JOB FORM */}
                        {isCreating && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mb-12">
                                <form onSubmit={handleSubmit} className="bg-[#111113] border border-white/[0.08] rounded-2xl p-6 md:p-8 space-y-6">
                                    <h2 className="text-xl font-medium text-white border-b border-white/[0.08] pb-4">New Job Posting</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Job Title</label>
                                            <input required type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Senior Brand Designer" className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Department</label>
                                            <input required type="text" value={form.department} onChange={e => setForm({ ...form, department: e.target.value })} placeholder="e.g. Design, Engineering" className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Job Type</label>
                                            <input required type="text" value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} placeholder="e.g. Full-time · Remote" className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 outline-none transition-colors" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Location</label>
                                            <input required type="text" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="e.g. Hyderabad, India" className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 outline-none transition-colors" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Short Description</label>
                                        <textarea required rows={2} value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} placeholder="Give a 1-2 sentence overview of the impact this role will have." className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 outline-none transition-colors resize-none" />
                                    </div>

                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-white/40 mb-2">Key Skills (Comma Separated)</label>
                                        <input required type="text" value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })} placeholder="e.g. Figma, Typography, Motion Design" className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-white/30 outline-none transition-colors" />
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <button type="submit" className="bg-white text-black px-8 py-3 rounded-xl text-sm font-bold hover:bg-white/80 transition-colors">
                                            Publish to Live Site
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        )}

                        {/* ACTIVE JOBS LIST */}
                        <div className="flex flex-col gap-4">
                            <h2 className="text-lg font-medium text-white/80 mb-2">Active Roles ({jobs.length})</h2>
                            {jobs.length === 0 ? (
                                <div className="bg-[#111113] border border-white/[0.08] rounded-3xl p-16 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                                        <Briefcase className="w-6 h-6 text-white/20" />
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-2">No active jobs</h3>
                                    <p className="text-white/40 text-sm font-light max-w-sm">Create a new job posting above to make it visible on the public careers page.</p>
                                </div>
                            ) : (
                                jobs.map((job) => (
                                    <div key={job.id} className="bg-[#111113] border border-white/[0.05] rounded-2xl p-6 md:p-8 relative group">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl font-medium text-white mb-1 truncate">{job.title}</h3>
                                                <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/40 mb-4">
                                                    <span className="px-2.5 py-1 rounded-full bg-white/5 font-medium">{job.department}</span>
                                                    <span>{job.type}</span>
                                                    <span>·</span>
                                                    <span>{job.location}</span>
                                                </div>
                                                <p className="text-sm font-light leading-relaxed text-white/60 max-w-2xl mb-4">{job.desc}</p>

                                                <div className="flex flex-wrap gap-2">
                                                    {job.skills?.map(skill => (
                                                        <span key={skill} className="text-[10px] uppercase tracking-wider bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded text-white/40 font-medium">
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="md:min-w-[100px] flex md:justify-end">
                                                <button
                                                    onClick={() => handleDelete(job.id)}
                                                    className="flex items-center gap-2 text-xs font-medium text-white/40 hover:text-red-400 bg-white/[0.03] hover:bg-red-400/10 px-4 py-2 rounded-lg transition-colors border border-white/[0.05] hover:border-red-400/20"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" /> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                    </motion.div>
                </div>
            </main>
        </div>
    );
}
