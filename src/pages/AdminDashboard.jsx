import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LogOut, Plus, Trash2, Key, Users, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [admins, setAdmins] = useState([]);
    const [role, setRole] = useState('');
    const [newAdmin, setNewAdmin] = useState({ name: '', password: '', role: 'ADMIN' });
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        // Auth Check
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin-login');
            return;
        }
        setRole(localStorage.getItem('adminRole'));

        // Load simulated admins
        const savedAdmins = JSON.parse(localStorage.getItem('simulatedAdmins') || '[]');
        if (savedAdmins.length === 0) {
            const initialAdmins = [
                { id: 1, name: 'System Owner', role: 'OWNER', status: 'Active' },
                { id: 2, name: 'Lead Content', role: 'ADMIN', status: 'Active' }
            ];
            setAdmins(initialAdmins);
            localStorage.setItem('simulatedAdmins', JSON.stringify(initialAdmins));
        } else {
            setAdmins(savedAdmins);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminRole');
        navigate('/admin-login');
    };

    const addAdmin = (e) => {
        e.preventDefault();
        const updated = [...admins, { ...newAdmin, id: Date.now(), status: 'Active' }];
        setAdmins(updated);
        localStorage.setItem('simulatedAdmins', JSON.stringify(updated));
        setNewAdmin({ name: '', password: '', role: 'ADMIN' });
        setIsAdding(false);
    };

    const deleteAdmin = (id) => {
        const updated = admins.filter(a => a.id !== id);
        setAdmins(updated);
        localStorage.setItem('simulatedAdmins', JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="container px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <span className="text-secondary font-black tracking-widest uppercase text-xs">Admin Dashboard</span>
                        </div>
                        <h1 className="text-4xl font-black text-primary">Emergency <span className="text-secondary">Access Control</span></h1>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-white text-red-500 px-6 py-3 rounded-2xl font-bold border border-red-100 hover:bg-red-50 transition-all shadow-sm"
                    >
                        <LogOut size={20} />
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Stats / Status */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-primary text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h3 className="text-sm font-black uppercase tracking-widest text-white/60 mb-1">Your Status</h3>
                                <div className="text-3xl font-black mb-4">{role} ROLE</div>
                                <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    Emergency Secure
                                </div>
                            </div>
                            <Users className="absolute -bottom-6 -right-6 text-white/5" size={160} />
                        </div>

                        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-black text-primary uppercase tracking-widest text-xs">Access Keys</h3>
                                <Key size={20} className="text-secondary" />
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                                    <p className="text-[10px] font-black uppercase text-gray-400 mb-1">Master Access Key</p>
                                    <p className="font-mono text-sm font-bold text-gray-700">MASTER_SHE_2026</p>
                                </div>
                                <p className="text-xs text-gray-400 font-medium">Use this key in the password field of the login page if you ever forget your credentials.</p>
                            </div>
                        </div>
                    </div>

                    {/* Admin Management */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white rounded-[3rem] p-8 md:p-10 shadow-xl border border-gray-100">
                            <div className="flex items-center justify-between mb-10">
                                <h2 className="text-2xl font-black text-primary">Manage <span className="text-secondary">Administrators</span></h2>
                                <button
                                    onClick={() => setIsAdding(true)}
                                    className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-secondary/20"
                                >
                                    <Plus size={24} />
                                </button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-100">
                                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Admin Name</th>
                                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Role</th>
                                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Status</th>
                                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {admins.map((admin) => (
                                            <tr key={admin.id} className="group">
                                                <td className="py-5 font-bold text-primary">{admin.name}</td>
                                                <td className="py-5">
                                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${admin.role === 'OWNER' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'
                                                        }`}>
                                                        {admin.role}
                                                    </span>
                                                </td>
                                                <td className="py-5">
                                                    <span className="text-xs font-bold text-green-500">{admin.status}</span>
                                                </td>
                                                <td className="py-5 text-right">
                                                    {admin.role !== 'OWNER' && (
                                                        <button
                                                            onClick={() => deleteAdmin(admin.id)}
                                                            className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Add Admin Modal (Simple Form) */}
                        {isAdding && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white rounded-[3rem] p-8 md:p-10 shadow-2xl border-2 border-secondary/20 ring-4 ring-secondary/5"
                            >
                                <h3 className="text-xl font-black text-primary mb-6">Register New Admin</h3>
                                <form onSubmit={addAdmin} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input
                                        required
                                        className="bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none font-bold placeholder:text-gray-300"
                                        placeholder="Admin Name"
                                        value={newAdmin.name}
                                        onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                                    />
                                    <input
                                        required
                                        type="password"
                                        className="bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none font-bold placeholder:text-gray-300"
                                        placeholder="Setup Password"
                                        value={newAdmin.password}
                                        onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                                    />
                                    <div className="md:col-span-2 flex items-center gap-4">
                                        <button type="submit" className="btn-primary flex-1 py-4 px-10 rounded-2xl font-black uppercase tracking-widest text-xs">Create Admin</button>
                                        <button onClick={() => setIsAdding(false)} className="px-6 py-4 rounded-2xl font-black text-gray-400 uppercase tracking-widest text-xs">Cancel</button>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
