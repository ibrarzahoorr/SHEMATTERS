import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const SheMedia = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://shemattersofficial.com/wp-content/uploads/2024/12/Website-Banner-1920x1280-1.jpg"
                        alt="She Media Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#692D91]/80 backdrop-blur-[2px]"></div>
                </div>

                <div className="container relative z-10 text-center text-white pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
                    >
                        She Media
                    </motion.h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium opacity-90">
                        <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                        <ChevronRight size={16} />
                        <span>She Media</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Left: Image Collage Placeholder (Matching official style) */}
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="https://shemattersofficial.com/wp-content/uploads/2025/01/collab-1.webp" className="w-full rounded-2xl shadow-lg" alt="" />
                                <img src="https://shemattersofficial.com/wp-content/uploads/2025/01/collab-3.webp" className="w-full rounded-2xl shadow-lg" alt="" />
                            </div>
                            <div className="pt-8 space-y-4">
                                <img src="https://shemattersofficial.com/wp-content/uploads/2025/01/collab-4.webp" className="w-full rounded-2xl shadow-lg" alt="" />
                                <img src="https://shemattersofficial.com/wp-content/uploads/2024/12/DSC00913-scaled.jpg" className="w-full rounded-2xl shadow-lg" alt="" />
                            </div>
                        </div>

                        {/* Right: Text Content */}
                        <div className="flex-1 lg:pt-8">
                            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                                Reach & Amplify <br />
                                <span className="text-secondary italic font-serif">With shemedia!</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                                Welcome to SheMedia, our official YouTube channel. Here, you'll find a collection of inspiring videos, event highlights, insightful discussions, and empowering stories from the She Matters community. Subscribe to stay up-to-date with our latest content and join the conversation!
                            </p>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-12">
                                {[
                                    "Community Building",
                                    "Enablement",
                                    "Impact",
                                    "Credibility",
                                    "Awareness",
                                    "Visibility"
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-primary font-bold text-lg">
                                        <CheckCircle2 size={24} className="text-secondary" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="bg-secondary text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-secondary/20">
                                Let's Collaborate
                            </button>
                        </div>
                    </div>

                    {/* Playlists Section */}
                    <div className="mt-32 text-center">
                        <h3 className="text-4xl md:text-5xl font-black text-primary mb-16">
                            Event's & Conferences Playlist Link
                        </h3>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: "SheMedia", url: "https://www.youtube.com/playlist?list=PLu6UuZ1YiHeAZNZNi2HW3zK9vwZcR3t69" },
                                { name: "Women Of Substance", url: "https://www.youtube.com/playlist?list=PLu6UuZ1YiHeAwsyf9Oq9qRTAtxxRvwKJn" },
                                { name: "March Forward Conference 2025", url: "https://www.youtube.com/playlist?list=PLu6UuZ1YiHeDektN3yv0uTdjXolgJmPuW" },
                                { name: "Empowering Entrepreneurs: A Women's Collective", url: "https://www.youtube.com/playlist?list=PLu6UuZ1YiHeC9vgJBu2K5RcfG7PbVC1uV" }
                            ].map((playlist) => (
                                <a
                                    key={playlist.name}
                                    href={playlist.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-secondary text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-secondary/20 inline-block"
                                >
                                    {playlist.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SheMedia;
