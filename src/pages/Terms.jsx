import { motion } from 'framer-motion';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white pt-40 pb-24">
            <div className="container px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-primary mb-12"
                    >
                        Terms of <span className="text-secondary">Service.</span>
                    </motion.h1>

                    <div className="prose prose-lg prose-primary max-w-none text-gray-600 space-y-10">
                        <section>
                            <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-wider">1. Acceptance of Terms</h2>
                            <p className="leading-relaxed">
                                By accessing and using the SheMatters website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please refrain from using our platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-wider">2. Use of Content</h2>
                            <p className="leading-relaxed">
                                All content on this platform, including text, images, and videos, is the property of SheMatters Global unless otherwise stated. Unauthorized use or reproduction is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-primary mb-4 uppercase tracking-wider">3. Community Guidelines</h2>
                            <p className="leading-relaxed">
                                Users are expected to maintain a respectful and professional environment. Any form of harassment, discrimination, or harmful behavior will result in immediate termination of access.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
