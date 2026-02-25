import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ShieldAlert, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // Emergency Access Credentials (In a real app, these would be in .env or Backend)
    const EMERGENCY_ACCESS_CODE = "MASTER_SHE_2026";

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        setTimeout(() => {
            // Check for Emergency Access Code or standard credentials
            if (credentials.password === EMERGENCY_ACCESS_CODE) {
                localStorage.setItem('adminToken', 'emergency_authenticated');
                localStorage.setItem('adminRole', 'OWNER');
                navigate('/admin/dashboard');
            } else if (credentials.username === 'admin' && credentials.password === 'shematters123') {
                localStorage.setItem('adminToken', 'standard_authenticated');
                localStorage.setItem('adminRole', 'ADMIN');
                navigate('/admin/dashboard');
            } else {
                setError('Invalid credentials. If you forgot your password, use your Emergency Access Code.');
            }
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen pt-40 pb-24 bg-primary flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white rounded-[3rem] p-10 shadow-2xl overflow-hidden relative"
            >
                {/* Decorative Background Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>

                <div className="text-center mb-10 relative z-10">
                    <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <ShieldAlert size={40} />
                    </div>
                    <h1 className="text-3xl font-black text-primary mb-2">Admin Portal</h1>
                    <p className="text-gray-500 font-medium">Secure Emergency Access</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Username</label>
                        <div className="relative">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Enter username"
                                className="w-full bg-gray-50 border-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none transition-all font-bold"
                                value={credentials.username}
                                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-primary ml-1">Password or Access Code</label>
                        <div className="relative">
                            <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-gray-50 border-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none transition-all font-bold"
                                value={credentials.password}
                                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            />
                        </div>
                    </div>

                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold border border-red-100"
                        >
                            {error}
                        </motion.div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-primary py-5 rounded-3xl text-lg font-black shadow-none flex items-center justify-center gap-3 active:scale-95 transition-transform"
                    >
                        {isLoading ? (
                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <>
                                <span>Gain Access</span>
                                <ArrowRight size={20} />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center text-xs text-gray-400 font-bold uppercase tracking-tighter">
                    <p>© 2026 SHEMATTERS GLOBAL SECURITY</p>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLogin;
