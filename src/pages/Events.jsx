import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const Events = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ["All", "Conferences", "Workshops", "Webinars"];

    const eventData = [
        {
            title: "March Forward 25",
            date: "March 2025",
            location: "Grand Hall, Karachi",
            img: "https://shemattersofficial.com/wp-content/uploads/2024/12/Website-Banner-1920x1280-1-1024x683.jpg",
            category: "Conferences",
            attendees: "1,500+ Registered",
            desc: "Our annual flagship event empowering women to take the lead in digital and professional spheres."
        },
        {
            title: "She Matters Pulse",
            date: "December 2025",
            location: "Virtual / Global",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/12/she-matter-banner-2-1024x576.jpg",
            category: "Webinars",
            attendees: "800+ Live",
            desc: "A rhythmic deep dive into the pulse of women's health and tech-enabled wellness strategies."
        },
        {
            title: "Coffee Social Sip",
            date: "October 2024",
            location: "Community Hub",
            img: "https://shemattersofficial.com/wp-content/uploads/2024/12/DSC00913-scaled.jpg",
            category: "Workshops",
            attendees: "50+ Participants",
            desc: "An intimate networking session for creative professionals to share sips and stories."
        },
        {
            title: "Celebrating Voices",
            date: "September 2024",
            location: "Convention Center",
            img: "https://shemattersofficial.com/wp-content/uploads/2024/12/DSC00780-scaled.jpg",
            category: "Workshops",
            attendees: "200+ Voices",
            desc: "Dedicated to amplifying the unheard narratives of resilient women leaders."
        },
        {
            title: "Count Her In",
            date: "March 2024",
            location: "Multipurpose Hall",
            img: "https://shemattersofficial.com/wp-content/uploads/2024/12/ZAZ00025-1024x681.jpg",
            category: "Conferences",
            attendees: "500+ Strong",
            desc: "The International Women's Day celebration of 2024 focusing on digital inclusion."
        }
    ];

    const filteredEvents = activeCategory === 'All'
        ? eventData
        : eventData.filter(event => event.category === activeCategory);

    return (
        <div className="min-h-screen pt-40 pb-20 bg-gray-50/50">
            <div className="container">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-10">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-secondary font-black tracking-[0.3em] uppercase text-xs block mb-4"
                        >
                            Calendar
                        </motion.span>
                        <h1 className="text-5xl md:text-7xl font-black text-primary mb-0 leading-none tracking-tighter">
                            Impactful <span className="text-secondary">Conferences</span> & Meetups.
                        </h1>
                    </div>

                    <div className="flex bg-white p-2 rounded-2xl shadow-xl shadow-primary/5 border border-gray-100 self-start">
                        {categories.map(c => (
                            <button
                                key={c}
                                onClick={() => setActiveCategory(c)}
                                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${activeCategory === c
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'text-gray-400 hover:text-primary'
                                    }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredEvents.map((event, i) => (
                            <motion.div
                                key={event.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group"
                            >
                                <div className="relative h-[500px] rounded-[3.5rem] overflow-hidden mb-8 shadow-2xl group-hover:shadow-secondary/20 transition-all duration-500">
                                    <img src={event.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={event.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent group-hover:via-primary/50 transition-all"></div>

                                    <div className="absolute top-10 left-10">
                                        <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-3xl text-white text-center">
                                            <p className="text-3xl font-black mb-0 tracking-tighter">{event.date.split(' ')[0][0] + event.date.split(' ')[0][1]}</p>
                                            <p className="text-[10px] font-black uppercase tracking-widest opacity-80">{event.date.split(' ')[0]}</p>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="bg-secondary px-4 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                                                {event.category}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-white/90 text-xs font-bold bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                                                <Users size={14} className="text-secondary" /> {event.attendees}
                                            </span>
                                        </div>
                                        <h3 className="text-4xl font-black text-white mb-3 leading-none tracking-tight">{event.title}</h3>
                                        <p className="text-white/70 text-sm font-medium line-clamp-2 max-w-md group-hover:text-white transition-colors">{event.desc}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between px-6">
                                    <div className="flex flex-col text-sm">
                                        <span className="flex items-center gap-2 text-primary font-bold">
                                            <MapPin size={18} className="text-secondary" /> {event.location}
                                        </span>
                                        <span className="flex items-center gap-2 text-gray-400 font-medium mt-1">
                                            <Calendar size={16} /> {event.date}
                                        </span>
                                    </div>
                                    <button className="flex items-center gap-2 text-primary font-black hover:text-secondary transition-all group-hover:gap-4 uppercase tracking-widest text-xs">
                                        More Details <ArrowRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredEvents.length === 0 && (
                    <div className="py-40 text-center">
                        <h3 className="text-3xl font-black text-primary/20 uppercase tracking-widest">No upcoming {activeCategory.toLowerCase()} found.</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Events;
