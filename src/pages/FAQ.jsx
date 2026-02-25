import { motion } from 'framer-motion';
import { ChevronRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const faqs = [
        {
            q: "What is SheMatters?",
            a: "SheMatters is a global movement and platform dedicated to the digital inclusion and economic empowerment of women, particularly in Pakistan and developing regions."
        },
        {
            q: "How can I join the community?",
            a: "You can join by registering for our events, following us on social media, or applying to be a volunteer or ambassador through our Involvement page."
        },
        {
            q: "Do you offer mentorship?",
            a: "Yes, we provide mentorship opportunities through our conferences and targeted programs where industry leaders guide emerging female professionals."
        },
        {
            q: "Where are your hubs located?",
            a: "We have over 20 regional hubs across Pakistan, with plans for further global expansion to support women locally."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBFD] pt-40 pb-24">
            <div className="container">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-secondary font-black tracking-widest uppercase text-sm"
                    >
                        Knowledge Base
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary mt-4 mb-6"
                    >
                        Frequently Asked <span className="text-secondary">Questions.</span>
                    </motion.h1>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:border-secondary/20 transition-all"
                        >
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                                    <HelpCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-primary mb-3">{faq.q}</h3>
                                    <p className="text-gray-500 leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="text-gray-400 font-bold mb-8">Still have questions?</p>
                    <Link to="/contact-us" className="btn bg-primary text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary transition-all shadow-xl shadow-primary/20">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
