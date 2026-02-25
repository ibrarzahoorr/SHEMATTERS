import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [selectedSubject, setSelectedSubject] = useState('Partnership');
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/primelogicx@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.target.reset();
            } else {
                throw new Error("Form submission failed");
            }
        } catch (err) {
            console.error("Submission Error:", err);
            setError("Something went wrong. Please try again or email us directly at hello@shemattersofficial.com");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-40 pb-24 bg-gray-50">
            <div className="container">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-secondary font-black tracking-widest uppercase text-sm"
                        >
                            Contact Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-primary mt-4"
                        >
                            Let's Start a <span className="text-secondary">Conversation.</span>
                        </motion.h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {[
                                { icon: Mail, title: "Email Us", detail: "hello@shemattersofficial.com", color: "bg-blue-50 text-blue-600" },
                                { icon: Phone, title: "Call Us", detail: "+92 300 1234567", color: "bg-purple-50 text-purple-600" },
                                { icon: MapPin, title: "Visit Us", detail: "Innovation CityHub, Sector 5, PK", color: "bg-pink-50 text-pink-600" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex items-center gap-6 group hover:border-secondary/20 transition-all cursor-default"
                                >
                                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</h4>
                                        <p className="text-primary font-bold">{item.detail}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Premium Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="lg:col-span-2 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100 min-h-[500px] flex flex-col justify-center"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div className="w-24 h-24 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8">
                                        <Send size={48} />
                                    </div>
                                    <h2 className="text-3xl font-black text-primary mb-4">Message Received!</h2>
                                    <p className="text-gray-500 text-lg mb-8 max-w-sm mx-auto">
                                        Thank you for reaching out. Our team will get back to you shortly at <span className="text-secondary font-bold">primelogicx@gmail.com</span> and CC'd to SheMatters.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-secondary font-black uppercase tracking-widest text-xs hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form className="space-y-8" onSubmit={handleSubmit}>
                                    {/* FormSubmit Configuration for AJAX */}
                                    <input type="hidden" name="_subject" value="New Website Inquiry - SheMatters" />
                                    <input type="hidden" name="_cc" value="hello@shemattersofficial.com" />
                                    <input type="hidden" name="_bcc" value="primelogicx@gmail.com" />
                                    <input type="hidden" name="_template" value="table" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                placeholder="Jane Doe"
                                                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                placeholder="jane@company.com"
                                                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="text-sm font-bold text-primary ml-1">Subject</label>
                                        <input type="hidden" name="subject_tag" value={selectedSubject} />
                                        <div className="flex flex-wrap gap-3">
                                            {['Partnership', 'Support', 'Events', 'General'].map(tag => (
                                                <button
                                                    key={tag}
                                                    type="button"
                                                    onClick={() => setSelectedSubject(tag)}
                                                    className={`px-5 py-2 rounded-full border transition-all text-sm font-bold ${selectedSubject === tag
                                                        ? 'bg-secondary text-white border-secondary shadow-lg shadow-secondary/20'
                                                        : 'bg-white text-gray-400 border-gray-200 hover:border-secondary/50'
                                                        }`}
                                                >
                                                    {tag}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Your Message</label>
                                        <textarea
                                            required
                                            name="message"
                                            rows="6"
                                            placeholder="Tell us how we can help..."
                                            className="w-full bg-gray-50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-secondary/50 outline-none transition-all placeholder:text-gray-300 resize-none"
                                        ></textarea>
                                    </div>

                                    {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`w-full btn-primary py-5 rounded-3xl text-lg font-black shadow-none flex items-center justify-center gap-3 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isLoading ? (
                                            <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Send Information
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
