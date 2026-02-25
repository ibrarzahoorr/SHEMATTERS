import { motion } from 'framer-motion';
import { Target, Award, Heart, CheckCircle2 } from 'lucide-react';

const About = () => {
    return (
        <div className="w-full">
            {/* Premium Header */}
            <section className="pt-48 pb-20 bg-mesh relative overflow-hidden">
                <div className="container relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter"
                    >
                        The <span className="text-secondary underline decoration-8 underline-offset-8 decoration-white/20">Movement</span>
                    </motion.h1>
                    <p className="text-xl text-white/70 max-w-3xl mx-auto font-light leading-relaxed">
                        More than just a platform, we are a global beacon for women's professional and personal evolution.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <span className="text-secondary font-black tracking-widest text-sm uppercase mb-4 block">How Did We Start?</span>
                            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">Born from a vision of <span className="text-gradient">Limitless</span> Potential.</h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Founded by <span className="font-bold text-primary">Syma Arshad</span>, SheMatters emerged from a critical realization: that while women across the globe possess unparalleled talent, they often lack the structured support systems to scale their impact.
                                </p>
                                <p>
                                    Today, we provide the tools, the network, and the advocacy to ensure no woman is left behind in the digital economy.
                                </p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8">
                                <div className="p-6 bg-gray-50 rounded-3xl">
                                    <h3 className="text-3xl font-black text-secondary mb-1">50K+</h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Active Members</p>
                                </div>
                                <div className="p-6 bg-gray-50 rounded-3xl">
                                    <h3 className="text-3xl font-black text-primary mb-1">100+</h3>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Masterclasses</p>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 relative">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(46,11,85,0.3)] aspect-[4/5]"
                            >
                                <img src="https://shemattersofficial.com/wp-content/uploads/2025/01/collab-4.webp" className="w-full h-full object-cover" alt="Founder" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-primary/90 to-transparent text-white">
                                    <p className="font-bold text-xl mb-1">Syma Arshad</p>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Founder & Visionary</p>
                                </div>
                            </motion.div>
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-50">
                <div className="container">
                    <div className="flex flex-col md:flex-row gap-8">
                        {[
                            { icon: Target, title: "Mission", text: "To enable women to participate fully in the global digital economy through literacy and leadership development." },
                            { icon: Award, title: "Vision", text: "A world where gender parity in professional leadership is the global standard." },
                            { icon: Heart, title: "Values", text: "Inclusivity, transparency, and relentless advocacy for the rights of women everywhere." }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="flex-1 bg-white p-10 rounded-[2.5rem] shadow-xl border border-white hover:border-secondary/20 transition-all group"
                            >
                                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                                    <v.icon size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-primary mb-4">{v.title}</h4>
                                <p className="text-gray-500 leading-relaxed font-medium">{v.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
