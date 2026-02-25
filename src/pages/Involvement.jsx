import { motion } from 'framer-motion';
import { Users, Heart, Handshake, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Involvement = () => {
    const opportunities = [
        {
            title: "Volunteer",
            description: "Join our dedicated team of volunteers and contribute your skills to empower women across the globe.",
            icon: Users,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Partnership",
            description: "Collaborate with SheMatters to create sustainable impact through corporate social responsibility and strategic alliances.",
            icon: Handshake,
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Donation",
            description: "Your financial support enables us to reach more women and provide them with essential digital tools and resources.",
            icon: Heart,
            color: "bg-pink-50 text-pink-600"
        },
        {
            title: "Ambassador",
            description: "Become a voice for SheMatters in your community and help us spread our mission of digital inclusion.",
            icon: Star,
            color: "bg-amber-50 text-amber-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white pt-40 pb-24">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-secondary font-black tracking-widest uppercase text-sm"
                    >
                        Get Involved
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary mt-4 mb-6"
                    >
                        Be the Change <span className="text-secondary">Together.</span>
                    </motion.h1>
                    <p className="text-gray-500 text-lg md:text-xl font-medium">
                        Join our movement and help us bridge the digital gender gap. Whether you're an individual or an organization, there's a place for you here.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {opportunities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 hover:border-secondary/30 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-4">{item.title}</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                                {item.description}
                            </p>
                            <Link to="/contact-us" className="inline-flex items-center gap-2 text-secondary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                                Apply Now <ChevronRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-32 text-center bg-primary p-16 rounded-[4rem] text-white overflow-hidden relative group">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Ready to make a global <span className="text-secondary text-gradient brightness-150">impact?</span></h2>
                        <Link to="/contact-us" className="bg-white text-primary px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl inline-block">
                            Contact Our Team
                        </Link>
                    </div>
                    <div className="absolute inset-0 bg-mesh opacity-20 -z-0"></div>
                </div>
            </div>
        </div>
    );
};

export default Involvement;
