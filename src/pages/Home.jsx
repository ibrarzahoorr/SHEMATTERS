import { motion } from 'framer-motion';
import { ArrowRight, Users, Calendar, Globe, Target, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg';


const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const Home = () => {
    return (
        <div className="w-full">
            {/* Cinematic Hero - Buttons positioned at the base to avoid banner text overlap */}
            <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-20 bg-primary">
                <div className="absolute inset-0 z-0">
                    <img
                        src={bannerImg}
                        alt="Women Empowerment Hero"
                        className="w-full h-full object-cover object-center scale-100"
                    />
                    {/* Subtle gradient to ensure buttons are clickable/visible without obscuring the banner text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                </div>

                <div className="container relative z-10 px-6">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-2xl mb-12"
                    >
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
                            <Link to="/contact-us" className="btn bg-secondary text-white px-12 py-5 text-sm uppercase tracking-widest font-black shadow-[0_20px_50px_rgba(168,41,134,0.4)] hover:scale-105 transition-transform">
                                Join Conference
                            </Link>
                            <Link to="/about-us" className="btn border-2 border-white text-white font-black px-12 py-5 text-sm uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105">
                                Learn Our Vision
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section - Clean layout, no negative margin overlap */}
            <section className="py-24 bg-white relative">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-20">
                        {[
                            { icon: Users, count: "50K+", label: "Lives Impacted", color: "bg-blue-50 text-blue-600" },
                            { icon: Globe, count: "40%", label: "Digital Engagement", color: "bg-purple-50 text-purple-600" },
                            { icon: Target, count: "20+", label: "Regional Hubs", color: "bg-pink-50 text-pink-600" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-primary/10 border border-gray-50 group hover:border-secondary/30 transition-all duration-500 text-center"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${stat.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                                    <stat.icon size={24} />
                                </div>
                                <h3 className="text-5xl font-black text-primary mb-2 tracking-tighter">{stat.count}</h3>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How Did We Start? Section */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container">
                    <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
                        {/* Image Side */}
                        <div className="flex-1 relative order-2 lg:order-1">
                            <div className="relative group">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 w-full rounded-[6rem] rounded-bl-none overflow-hidden shadow-2xl border-2 border-gray-50"
                                >
                                    <img
                                        src="https://shemattersofficial.com/wp-content/uploads/2024/12/sayma.webp"
                                        alt="Syma Arshad"
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-16 -right-10 z-20 w-64 h-80 rounded-[4rem] border-[15px] border-white overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-white"
                                >
                                    <img
                                        src="https://shemattersofficial.com/wp-content/uploads/2025/01/kamran-1.webp"
                                        alt="Kamran Rizvi"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                <div className="absolute top-12 -left-12 w-full h-full bg-gray-50 rounded-[6rem] rounded-bl-none -z-0"></div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 order-1 lg:order-2">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-secondary font-black uppercase tracking-[0.4em] text-xs mb-6 block"
                            >
                                About Us
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-7xl font-black text-primary mb-12 leading-none tracking-tighter"
                            >
                                How Did We <span className="text-secondary">Start?</span>
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="border-l-8 border-secondary/20 pl-10 py-4 mb-12 bg-gray-50/50 rounded-r-3xl"
                            >
                                <p className="text-2xl md:text-3xl font-black text-primary/80 leading-tight italic tracking-tight">
                                    "SheMatters is a platform dedicated to enabling women in Pakistan. We address the significant gender gap in economic participation."
                                </p>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-gray-400 text-xl mb-12 leading-relaxed font-light"
                            >
                                Since our launch in 2017, we've organized over 50 events to inspire and support women in the workforce. Join us in creating a more inclusive and equitable society.
                            </motion.p>

                            <div className="flex flex-wrap gap-12 items-center">
                                <div className="flex items-center gap-5 group">
                                    <div className="relative">
                                        <img src="https://shemattersofficial.com/wp-content/uploads/2024/12/sayma.webp" className="w-16 h-16 rounded-full object-cover border-2 border-secondary group-hover:scale-110 transition-transform" alt="Syma Arshad" />
                                        <div className="absolute inset-0 rounded-full border border-secondary animate-ping opacity-20 group-hover:opacity-40"></div>
                                    </div>
                                    <div>
                                        <p className="font-black text-primary text-lg leading-none mb-1">Syma Arshad</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Founder & CEO</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="relative">
                                        <img src="https://shemattersofficial.com/wp-content/uploads/2025/01/kamran-1.webp" className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 group-hover:scale-110 transition-transform" alt="Kamran Rizvi" />
                                    </div>
                                    <div>
                                        <p className="font-black text-primary text-lg leading-none mb-1">Kamran Rizvi</p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em]">Co-Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Box */}
            <section className="py-32 container">
                <div className="bg-primary p-16 md:p-32 rounded-[5rem] text-center text-white relative overflow-hidden group">
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">Ready to join the <span className="text-gradient brightness-150">movement?</span></h2>
                        <p className="text-xl md:text-2xl text-white/70 mb-16 font-medium max-w-2xl mx-auto">
                            Become a member today and gain access to exclusive events, mentorship, and a global network.
                        </p>
                        <Link to="/contact-us" className="bg-white text-primary px-16 py-6 rounded-full font-black text-xl hover:bg-secondary hover:text-white transition-all duration-500 shadow-2xl inline-flex items-center gap-4">
                            Register Now <ArrowRight size={28} />
                        </Link>
                    </div>
                    <div className="absolute inset-0 bg-mesh opacity-20 group-hover:opacity-40 transition-opacity"></div>
                </div>
            </section>
        </div>
    );
};

export default Home;
