import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Events & Conferences', path: '/events-conferences' },
        { name: 'She Media', path: '/she-media' },
        { name: 'Merchandise', path: '/merchandise' },
        { name: 'Contact Us', path: '/contact-us' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${(scrolled || !isHomePage) ? 'glass-nav py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="flex-shrink-0">
                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        src="https://shemattersofficial.com/wp-content/uploads/2024/12/shematters-e1767871390156.png"
                        alt="SheMatters Logo"
                        className={`h-11 w-auto transition-transform ${scrolled ? 'scale-90' : 'scale-100'}`}
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 relative group overflow-hidden ${isActive
                                    ? 'text-white'
                                    : (scrolled || !isHomePage) ? 'text-primary hover:text-secondary' : 'text-white hover:text-white/70'
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-secondary shadow-lg shadow-secondary/30"
                                        transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                    <div className="pl-6">
                        <Link to="/involvement" className="btn bg-primary text-white text-[10px] uppercase font-black tracking-widest px-8 py-3.5 hover:bg-secondary shadow-xl transition-all">
                            Get Involved
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X size={32} className="text-primary" />
                    ) : (
                        <Menu size={32} className={(scrolled || !isHomePage) ? 'text-primary' : 'text-secondary bg-white/20 rounded-lg p-1'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden border-t border-gray-100"
                    >
                        <div className="container py-12 flex flex-col items-center space-y-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-2xl font-black uppercase tracking-tighter ${location.pathname === link.path ? 'text-secondary' : 'text-primary'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/involvement" onClick={() => setIsOpen(false)} className="btn bg-primary text-white w-full py-5 text-lg font-black uppercase tracking-widest">
                                Get Involved
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
