import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, LogOut, Settings, Users, FileText, Trash2, Briefcase } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { collection, onSnapshot, query, orderBy, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import SEOHead from '../../components/SEOHead';
import toast, { Toaster } from 'react-hot-toast';

export default function Dashboard() {
    const navigate = useNavigate();
    const [leads, setLeads] = React.useState([]);
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        // Listen to Leads
        const qLeads = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
        const unsubLeads = onSnapshot(qLeads, (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => data.push({ id: doc.id, type: 'lead', ...doc.data() }));
            setLeads(data);
        });

        // Listen to Contact Messages
        const qMessages = query(collection(db, 'contactMessages'), orderBy('createdAt', 'desc'));
        const unsubMessages = onSnapshot(qMessages, (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => data.push({ id: doc.id, type: 'contact', ...doc.data() }));
            setMessages(data);
        });

        return () => {
            unsubLeads();
            unsubMessages();
        };
    }, []);

    // Combine and sort by createdAt descending
    const allEnquiries = [...leads, ...messages].sort((a, b) => {
        const timeA = a.createdAt?.toMillis() || 0;
        const timeB = b.createdAt?.toMillis() || 0;
        return timeB - timeA;
    });

    const markAsRead = async (id, currentStatus, type) => {
        if (currentStatus === 'read') return;
        try {
            const collectionName = type === 'lead' ? 'leads' : 'contactMessages';
            await updateDoc(doc(db, collectionName, id), { status: 'read' });
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    const deleteEnquiry = async (e, id, type) => {
        e.stopPropagation();
        if (!window.confirm('Are you sure you want to delete this enquiry? This cannot be undone.')) return;
        try {
            const collectionName = type === 'lead' ? 'leads' : 'contactMessages';
            await deleteDoc(doc(db, collectionName, id));
            toast.success('Enquiry deleted');
        } catch (error) {
            console.error("Error deleting enquiry:", error);
            toast.error('Failed to delete enquiry');
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin/login');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const userEmail = auth.currentUser?.email || 'admin@viscano.com';

    return (
        <div className="flex h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden">
            <SEOHead title="Admin Dashboard | Viscano" description="Protected area." />
            <Toaster position="bottom-center" />

            {/* SIDEBAR */}
            <aside className="w-64 border-r border-white/[0.08] bg-[#0E0E10] flex flex-col justify-between hidden md:flex">
                <div>
                    <div className="p-8 pb-10">
                        <img src="/footerlogo.png" className="h-6 opacity-90 mx-auto" alt="Viscano" />
                    </div>
                    <nav className="flex flex-col gap-2 px-4">
                        <Link to="/admin" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 text-white text-sm font-medium">
                            <LayoutDashboard className="w-4 h-4" /> Overview
                        </Link>
                        <Link to="/admin/jobs" className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/[0.03] text-sm font-medium transition-colors">
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
            <main className="flex-1 flex flex-col overflow-y-auto">
                {/* Mobile Header */}
                <header className="md:hidden flex items-center justify-between p-6 border-b border-white/[0.08] bg-[#0E0E10]">
                    <img src="/footerlogo.png" className="h-5" alt="Viscano" />
                    <nav className="flex items-center gap-4 text-xs font-medium text-white/60">
                        <Link to="/admin" className="text-white">Overview</Link>
                        <Link to="/admin/jobs" className="hover:text-white">Jobs</Link>
                    </nav>
                </header>

                <div className="p-8 md:p-12 lg:p-16 max-w-5xl mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="text-4xl font-serif font-light tracking-tight mb-2">Welcome Back</h1>
                        <p className="text-white/40 font-light text-sm mb-12">Manage your creative agency operations from here.</p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.05] transition-colors" />
                                <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-3">Total Enquiries</p>
                                <p className="text-3xl font-serif font-light text-white">{allEnquiries.length}</p>
                            </div>
                            <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.05] transition-colors" />
                                <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-3">New / Unread</p>
                                <p className="text-3xl font-serif font-light text-green-400">{allEnquiries.filter(l => l.status === 'new').length}</p>
                            </div>
                            <div className="bg-[#111113] border border-white/[0.08] p-6 rounded-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/[0.05] transition-colors" />
                                <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-3">Avg. Monthly Value</p>
                                <p className="text-3xl font-serif font-light text-white">₹--</p>
                            </div>
                        </div>

                        {/* Leads Feed */}
                        <div className="flex flex-col gap-4">
                            <h2 className="text-lg font-medium text-white/80 mb-2">Recent Enquiries</h2>
                            {allEnquiries.length === 0 ? (
                                <div className="bg-[#111113] border border-white/[0.08] rounded-3xl p-16 flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6">
                                        <FileText className="w-6 h-6 text-white/20" />
                                    </div>
                                    <h3 className="text-xl font-medium text-white mb-2">No leads yet</h3>
                                    <p className="text-white/40 text-sm font-light max-w-sm">When someone fills out the brief form on the homepage or the contact page, it will appear here instantly.</p>
                                </div>
                            ) : (
                                allEnquiries.map((item) => {
                                    const date = item.createdAt?.toDate() ? new Intl.DateTimeFormat('en-IN', {
                                        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                    }).format(item.createdAt.toDate()) : 'Recent';

                                    const isNew = item.status === 'new';
                                    const isContact = item.type === 'contact';

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => markAsRead(item.id, item.status, item.type)}
                                            className={`bg-[#111113] border transition-colors rounded-2xl p-6 md:p-8 cursor-pointer relative overflow-hidden group
                                                ${isNew ? 'border-white/20 hover:border-white/40' : 'border-white/[0.05] hover:border-white/15'}`}
                                        >
                                            {isNew && <div className="absolute top-0 left-0 w-1 h-full bg-green-400" />}
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <h3 className={`text-xl font-medium ${isNew ? 'text-white' : 'text-white/70'}`}>{item.name}</h3>
                                                        <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${isContact ? 'bg-orange-400/10 text-orange-400' : 'bg-blue-400/10 text-blue-400'}`}>
                                                            {isContact ? 'Contact Form' : 'Project Brief'}
                                                        </span>
                                                        {isNew && <span className="text-[9px] bg-green-400/10 text-green-400 uppercase tracking-widest font-bold px-2 py-0.5 rounded">New</span>}
                                                    </div>
                                                    <a href={`mailto:${item.email}`} onClick={e => e.stopPropagation()} className="text-sm text-white/40 hover:text-white transition-colors underline underline-offset-2 decoration-white/20">{item.email}</a>

                                                    {item.message && (
                                                        <div className="mt-5 bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
                                                            <p className="text-sm font-light leading-relaxed text-white/80">"{item.message}"</p>
                                                        </div>
                                                    )}

                                                    <div className="flex flex-wrap gap-2 mt-5">
                                                        {item.services?.map(service => (
                                                            <span key={service} className="text-[10px] uppercase tracking-wider bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded text-white/60 font-medium">
                                                                {service}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:items-end gap-1 md:min-w-[120px]">
                                                    <div className="flex items-center gap-3">
                                                        <p className="text-xs text-white/40 font-medium">{date}</p>
                                                        <button
                                                            onClick={(e) => deleteEnquiry(e, item.id, item.type)}
                                                            className="text-white/20 hover:text-red-400 hover:bg-red-400/10 p-1.5 rounded-md transition-all opacity-0 group-hover:opacity-100"
                                                            title="Delete enquiry"
                                                        >
                                                            <Trash2 className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                    {!isContact && item.budget && (
                                                        <p className="text-sm font-medium text-white/90 mt-1 md:mt-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full">{item.budget}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            )}
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
