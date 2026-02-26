import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ArrowRight, X } from 'lucide-react';

const Events = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const categories = ["All", "Conferences", "Workshops", "Webinars"];

    const eventData = [
        {
            title: "Coffee Social Sip",
            date: "February 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/Untitled-1-1024x1024.png",
            category: "Workshops",
            attendees: "100+ Attendees",
            desc: "The Social Sip event was a resounding success, bringing together a diverse group of women to network, share experiences, and support one another in their professional journeys. It was an afternoon filled with inspiration, meaningful conversations, and new connections.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/1.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/2.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/3.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/4.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/6.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/7.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/8.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/9.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/10.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/11.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/12.jpg"
            ]
        },
        {
            title: "March Forward 25",
            date: "March 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2024/12/Website-Banner-1920x1280-1-1024x683.jpg",
            category: "Conferences",
            attendees: "1,500+ Registered",
            desc: "March Forward 2025 is SheMatters’ annual flagship conference, dedicated to empowering women, fostering inclusion, and driving impactful change. Industry leaders, policymakers, and change-makers discussed diversity, digital enablement, and financial inclusion.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/5_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/1_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/4_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/2_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/3_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/6_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/7_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/8_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/9_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/11_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/12_(1).jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/10_(1).jpg"
            ]
        },
        {
            title: "CCL x SheMatters Empower BeWell",
            date: "January 2025",
            img: "https://hankerglobal.com/ccl-event/1.jpg",
            category: "Workshops",
            attendees: "300+ Attendees",
            desc: "CCL x SheMatters Empower BeWell was an impactful session dedicated to mental health and physical well-being. It provided a platform for women to learn from health experts and share their wellness journeys in a supportive environment.",
            gallery: [
                "https://hankerglobal.com/ccl-event/1.jpg",
                "https://hankerglobal.com/ccl-event/2.jpg",
                "https://hankerglobal.com/ccl-event/3.jpg",
                "https://hankerglobal.com/ccl-event/4.jpg",
                "https://hankerglobal.com/ccl-event/5.jpg",
                "https://hankerglobal.com/Shematters-pulse/6.jpg",
                "https://hankerglobal.com/ccl-event/7.jpg",
                "https://hankerglobal.com/ccl-event/8.jpg"
            ]
        },
        {
            title: "Cracking The Code",
            date: "January 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/01/collab-3.webp",
            category: "Conferences",
            attendees: "450+ Attendees",
            desc: "Cracking the Code focuses on empowering women in tech and leadership, bridging the gap through innovation, digital literacy, and specialized feminine coaching for success in all elements.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/1_(1)_(1)_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/5_(1)_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/4_(1)_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/2_(1)_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/3_(1)_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/6_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/7_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/9_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/8_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/11_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/10_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/13_(1)_(1).png"
            ]
        },
        {
            title: "AWE at Lincoln Centre",
            date: "November 2024",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/iluykno6wafka2u8nilu-1024x1024.webp",
            category: "Conferences",
            attendees: "1,000+ Participants",
            desc: "Celebrating the resilience and innovation of women entrepreneurs, AWE at Lincoln Centre featured keynote speeches and networking opportunities to empower women to build sustainable businesses.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/1_(1)_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/2_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/3_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/5_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/6_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/7_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/8_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/9_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/10_(1).png"
            ]
        },
        {
            title: "Shematters Pulse",
            date: "December 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/12/she-matter-banner-1-1024x576.jpg",
            category: "Webinars",
            attendees: "800+ Live",
            desc: "A rhythmic deep dive into the pulse of women's health and tech-enabled wellness strategies.",
            gallery: [
                "https://hankerglobal.com/Shematters-pulse/1.jpg",
                "https://hankerglobal.com/Shematters-pulse/2.jpg",
                "https://hankerglobal.com/Shematters-pulse/4.jpg",
                "https://hankerglobal.com/Shematters-pulse/5.jpg",
                "https://hankerglobal.com/Shematters-pulse/6.jpg",
                "https://hankerglobal.com/Shematters-pulse/7.jpg",
                "https://hankerglobal.com/Shematters-pulse/8.jpg"
            ]
        },
        {
            title: "SheMatters Launch",
            date: "May 2024",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/DSC02846-1024x1024.webp",
            category: "Conferences",
            attendees: "500+ Guests",
            desc: "The official launch event of SheMatters, a platform dedicated to the professional and personal growth of women through community, coaching, and collaboration.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02864.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02865.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02867.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02782.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02872.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02888.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02884.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02899.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02846.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02905.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02907.webp",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/DSC02910.webp"
            ]
        },
        {
            title: "Celebrating Voices",
            date: "September 2024",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/s1lqcj3wbuxvh6k7qgpm.webp",
            category: "Workshops",
            attendees: "200+ Voices",
            desc: "Dedicated to amplifying the unheard narratives of resilient women leaders through specialized coaching and storytelling.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-38.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-39.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-381.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-401.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-391.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-411.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-40.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-41.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-402.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-421.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-42.jpg",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/PHOTO-2023-06-18-11-32-431.jpg"
            ]
        },
        {
            title: "Count Her In",
            date: "March 2024",
            img: "https://shemattersofficial.com/wp-content/uploads/2024/12/ZAZ00025-1024x681.jpg",
            category: "Conferences",
            attendees: "500+ Strong",
            desc: "The International Women's Day celebration of 2024 focusing on digital inclusion and financial equity for women globally.",
            gallery: [
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/1_(1)_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/2_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/3_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/6.png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/7.png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/4_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/8.png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/5_(1).png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/12.png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/10.png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/11.png",
                "https://shemattersofficial.com/wp-content/uploads/photo-gallery/9.png"
            ]
        },
        {
            title: "SheMatters at LUMS",
            date: "May 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/Untitled-design-2025-05-30T162818.150-1024x1024.webp",
            category: "Workshops",
            attendees: "250+ Students",
            desc: "SheMatters at LUMS brought together aspiring women leaders and students to discuss leadership, career growth, and the importance of community support in academic and professional settings.",
            gallery: []
        },
        {
            title: "Mental Well-Being Seminar",
            date: "May 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/482359059_970559675218195_2135555791880207464_n-1024x1024.webp",
            category: "Workshops",
            attendees: "150+ Participants",
            desc: "A specialized seminar focused on mental health, resilience, and emotional well-being for women, featuring expert speakers and interactive sessions to promote self-care and professional balance.",
            gallery: []
        },
        {
            title: "EmpowerHer at LCCI",
            date: "June 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/2-1024x1024.webp",
            category: "Conferences",
            attendees: "400+ Business Leaders",
            desc: "EmpowerHer at the Lahore Chamber of Commerce & Industry (LCCI) focused on economic empowerment, entrepreneurship, and bridging the gap for women in the business landscape through networking and policy advocacy.",
            gallery: []
        },
        {
            title: "FoodPanda Digital Enablement",
            date: "July 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/image_50434561-1024x1024.webp",
            category: "Workshops",
            attendees: "300+ Partners",
            desc: "An impactful collaboration with FoodPanda to discuss digital enablement, commercial growth, and opportunities for women in the Q-commerce sector through specialized training and support.",
            gallery: []
        },
        {
            title: "HBL P@sha Talk",
            date: "August 2025",
            img: "https://shemattersofficial.com/wp-content/uploads/2025/05/483369459_971588601781969_2175939055927921183_n-1024x1024.webp",
            category: "Webinars",
            attendees: "1,000+ Online",
            desc: "A dynamic discussion in partnership with HBL and P@SHA on the intersection of finance, technology, and women's participation in the digital economy, focusing on digital banking and tech leadership.",
            gallery: []
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
                                        <span className="flex items-center gap-2 text-gray-400 font-medium">
                                            <Calendar size={16} /> {event.date}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setSelectedEvent(event)}
                                        className="flex items-center gap-2 text-primary font-black hover:text-secondary transition-all group-hover:gap-4 uppercase tracking-widest text-xs"
                                    >
                                        More Details <ArrowRight size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {selectedEvent && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/95 backdrop-blur-xl"
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[4rem] overflow-hidden relative shadow-2xl flex flex-col lg:flex-row"
                            >
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="absolute top-8 right-8 z-10 bg-primary/10 hover:bg-secondary hover:text-white p-3 rounded-2xl transition-all text-primary"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left: Content */}
                                <div className="flex-1 p-12 lg:p-20 overflow-y-auto custom-scrollbar">
                                    <div className="flex items-center gap-3 mb-8">
                                        <span className="bg-secondary px-6 py-2 rounded-full text-xs font-black text-white uppercase tracking-widest">
                                            {selectedEvent.category}
                                        </span>
                                        <span className="flex items-center gap-2 text-primary/60 text-sm font-bold bg-primary/5 px-4 py-2 rounded-full">
                                            <Users size={16} className="text-secondary" /> {selectedEvent.attendees}
                                        </span>
                                    </div>

                                    <h2 className="text-5xl lg:text-7xl font-black text-primary mb-8 leading-none tracking-tighter">
                                        {selectedEvent.title}
                                    </h2>

                                    <div className="mb-12">
                                        <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl w-fit">
                                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                                                <Calendar size={24} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Date</p>
                                                <p className="text-lg font-bold text-primary">{selectedEvent.date}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="prose prose-xl prose-primary">
                                        <p className="text-gray-600 leading-relaxed font-medium">
                                            {selectedEvent.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Gallery */}
                                <div className="flex-1 bg-gray-50 p-12 lg:p-20 overflow-y-auto custom-scrollbar">
                                    <h3 className="text-2xl font-black text-primary mb-10 uppercase tracking-widest flex items-center gap-4">
                                        Event <span className="text-secondary">Gallery</span>
                                        <div className="flex-1 h-px bg-primary/10"></div>
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        {selectedEvent.gallery ? (
                                            selectedEvent.gallery.map((img, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="aspect-square rounded-3xl overflow-hidden shadow-lg border-4 border-white"
                                                >
                                                    <img src={img} className="w-full h-full object-cover" alt={`Gallery ${idx}`} />
                                                </motion.div>
                                            ))
                                        ) : (
                                            <div className="col-span-2 aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                                                <img src={selectedEvent.img} className="w-full h-full object-cover" alt={selectedEvent.title} />
                                            </div>
                                        )}
                                    </div>

                                    {selectedEvent.gallery && selectedEvent.gallery.length > 0 && (
                                        <p className="mt-8 text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
                                            + More moments captured
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

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
