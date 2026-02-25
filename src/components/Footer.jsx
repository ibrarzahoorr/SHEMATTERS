import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Mail, ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            await fetch("https://formsubmit.co/ajax/primelogicx@gmail.com", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, message: "Newsletter Subscription Request" })
            });
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error("Subscription error:", err);
            setStatus('idle');
        }
    };

    return (
        <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-white/20 to-secondary opacity-50"></div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-20">
                    {/* Brand Info */}
                    <div className="lg:col-span-5 space-y-10">
                        <Link to="/" className="inline-block relative group">
                            <img
                                src="https://shemattersofficial.com/wp-content/uploads/2024/12/shematters-e1767871390156.png"
                                alt="SheMatters Logo"
                                className="h-16 w-auto brightness-0 invert"
                            />
                            <div className="absolute -inset-4 bg-white/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform -z-10"></div>
                        </Link>

                        <h3 className="text-3xl md:text-4xl font-black leading-tight max-w-md">
                            Enable. Empower. <span className="text-secondary text-gradient brightness-150">Elevate.</span>
                        </h3>

                        <p className="text-white/60 text-lg font-light leading-relaxed max-w-sm">
                            Dedicated to the personal and professional evolution of women through digital inclusion and leadership advocacy.
                        </p>

                        <div className="flex gap-6">
                            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-secondary hover:scale-110 transition-all text-white/50 hover:text-white">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Nav groups */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        {[
                            { title: "Navigation", links: [{ name: "Home", p: "/" }, { name: "About Us", p: "/about-us" }, { name: "Events", p: "/events-conferences" }, { name: "She Media", p: "/she-media" }] },
                            { title: "Involvement", links: [{ name: "Volunteer", p: "/involvement" }, { name: "Partnership", p: "/involvement" }, { name: "Donation", p: "/donate" }, { name: "Ambassador", p: "/involvement" }] },
                            { title: "Resources", links: [{ name: "FAQ's", p: "/faq" }, { name: "Terms", p: "/terms" }, { name: "Privacy", p: "/privacy" }, { name: "Contact", p: "/contact-us" }] }
                        ].map((col, i) => (
                            <div key={i} className="space-y-8">
                                <h4 className="text-secondary font-black uppercase tracking-widest text-xs">{col.title}</h4>
                                <ul className="space-y-4">
                                    {col.links.map(l => (
                                        <li key={l.name}>
                                            <Link to={l.p} className="text-white/40 hover:text-white text-sm font-bold transition-colors block">
                                                {l.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter / CTA line */}
                <div className="border-y border-white/5 py-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                            <Mail size={24} />
                        </div>
                        <h4 className="text-xl font-black">Stay updated on our global missions.</h4>
                    </div>

                    <form onSubmit={handleSubscribe} className="flex-grow max-w-md w-full relative">
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={status === 'success' ? "Thanks for joining!" : "Email Address"}
                            className={`w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-sm outline-none transition-all pr-32 focus:ring-1 ${status === 'success' ? 'focus:ring-green-500 border-green-500/50' : 'focus:ring-secondary/50'}`}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`absolute right-2 top-2 bottom-2 px-6 rounded-full font-black text-xs uppercase tracking-widest transition-all ${status === 'success' ? 'bg-green-500 text-white' : 'bg-white text-primary hover:bg-secondary hover:text-white'}`}
                        >
                            {status === 'loading' ? '...' : status === 'success' ? 'Joined' : 'Subscribe'}
                        </button>
                    </form>
                </div>


                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/30">
                    <p>&copy; {new Date().getFullYear()} SheMatters Global. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link to="/admin-login" className="hover:text-white transition-colors">Admin Portal</Link>
                        <button className="hover:text-white transition-colors px-4 py-2 bg-white/5 rounded-lg border border-white/5 flex items-center gap-2 group" onClick={scrollToTop}>
                            Bottom to top <ArrowUp size={12} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 -z-0"></div>
        </footer>
    );
};

export default Footer;
