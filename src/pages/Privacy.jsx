import { motion } from 'framer-motion';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white pt-40 pb-24">
            <div className="container px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-primary mb-12"
                    >
                        Privacy <span className="text-secondary">Policy.</span>
                    </motion.h1>

                    <div className="prose prose-lg prose-primary max-w-none text-gray-600 space-y-10">
                        <section>
                            <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-wider">1. Data Collection</h2>
                            <p className="leading-relaxed">
                                we collect minimal personal information necessary to provide our services, such as your name and email address when you register for events or contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-wider">2. Data Usage</h2>
                            <p className="leading-relaxed">
                                Your data is used exclusively for communication, event coordination, and improving our impact. We never sell your personal information to third parties.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-wider">3. Security</h2>
                            <p className="leading-relaxed">
                                We implement industry-standard security measures to protect your data from unauthorized access or disclosure.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
