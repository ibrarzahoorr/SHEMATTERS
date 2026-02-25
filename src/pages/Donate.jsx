import { motion } from 'framer-motion';
import { ChevronRight, CreditCard, Building2, Smartphone, Landmark, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Donate = () => {
    const paymentMethods = [
        {
            name: "JazzCash",
            icon: Smartphone,
            color: "bg-[#F7B016]/10 text-[#F7B016]",
            detail: "0300 1234567",
            accountHolder: "SheMatters Global",
            description: "Instant mobile wallet transfer"
        },
        {
            name: "Easypaisa",
            icon: Smartphone,
            color: "bg-[#3EB349]/10 text-[#3EB349]",
            detail: "0300 1234567",
            accountHolder: "SheMatters Global",
            description: "Direct mobile payment"
        },
        {
            name: "Bank Transfer",
            icon: Building2,
            color: "bg-blue-50 text-blue-600",
            detail: "Bank Alfalah - 012345678901",
            accountHolder: "SheMatters Global",
            description: "Secure bank to bank transfer"
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
                        Support Our Mission
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary mt-4 mb-6"
                    >
                        Empower Through <span className="text-secondary">Giving.</span>
                    </motion.h1>
                    <p className="text-gray-500 text-lg md:text-xl font-medium">
                        Your contributions directly fund digital inclusion programs and leadership advocacy for women. Choose your preferred payment method below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {paymentMethods.map((method, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-primary/5 border border-gray-100 hover:border-secondary/30 transition-all group flex flex-col items-center text-center"
                        >
                            <div className={`w-20 h-20 rounded-3xl ${method.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                <method.icon size={40} />
                            </div>
                            <h3 className="text-2xl font-black text-primary mb-2">{method.name}</h3>
                            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6">{method.description}</p>

                            <div className="w-full bg-gray-50 rounded-2xl p-6 space-y-4 text-left">
                                <div>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Account Holder</p>
                                    <p className="text-primary font-bold">{method.accountHolder}</p>
                                </div>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Details</p>
                                    <p className="text-secondary font-black text-xl break-all">{method.detail}</p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-2 text-green-500 font-bold text-xs">
                                <CheckCircle2 size={16} />
                                Verified Official Account
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Important Notice */}
                <div className="mt-20 max-w-3xl mx-auto bg-primary p-12 rounded-[3.5rem] text-white overflow-hidden relative group">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                            <Landmark size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black mb-2">After Transfer</h3>
                            <p className="text-white/70 font-medium">Please send a screenshot of your transaction to <span className="text-secondary-light font-bold">hello@shemattersofficial.com</span> or via WhatsApp to confirm your donation.</p>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-mesh opacity-20 -z-0"></div>
                </div>

                <div className="mt-16 text-center">
                    <Link to="/contact-us" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                        Need help with donations? Contact Us <ChevronRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Donate;
