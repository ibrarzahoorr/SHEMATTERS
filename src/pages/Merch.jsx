import { motion } from 'framer-motion';
import { ChevronRight, ShoppingBag, Palette, Ruler, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';

const Merch = () => {
    const products = [
        { name: "Maroon- Deep Courage", img: "https://shemattersofficial.com/wp-content/uploads/2025/01/IMG_0462.webp", hex: "#800000" },
        { name: "Olive Green- Earthy Wisdom", img: "https://shemattersofficial.com/wp-content/uploads/2025/01/IMG_0464.webp", hex: "#556B2F" },
        { name: "Dark Blue - Visionary Blue", img: "https://shemattersofficial.com/wp-content/uploads/2025/01/IMG_0465.webp", hex: "#00008B" },
        { name: "Grey- Solid Foundation", img: "https://shemattersofficial.com/wp-content/uploads/2025/01/IMG_0466.webp", hex: "#808080" },
        { name: "Light Blue- Soaring Spirit", img: "https://shemattersofficial.com/wp-content/uploads/2025/01/IMG_0467.webp", hex: "#ADD8E6" },
        { name: "White- Pure Potential", img: "https://shemattersofficial.com/wp-content/uploads/2025/01/IMG_0468.webp", hex: "#FFFFFF" }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBFD]">
            {/* Hero Section */}
            <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://shemattersofficial.com/wp-content/uploads/2026/01/Website-Banner-02.jpg"
                        alt="Merchandise Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#2E0B55]/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="container relative z-10 text-center text-white pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-secondary-light font-black tracking-[0.4em] uppercase text-sm mb-4 block">Official Collection</span>
                        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
                            Wear Your <span className="text-secondary">Mission.</span>
                        </h1>
                        <div className="flex items-center justify-center gap-2 text-sm font-medium opacity-90">
                            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
                            <ChevronRight size={16} />
                            <span>Merchandise</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Merchandise Intro */}
            <section className="py-24 container">
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <p className="text-secondary font-black tracking-widest text-xs uppercase mb-6">Premium Apparel</p>
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-8 leading-tight">
                            Elevate your style with <span className="text-secondary italic font-serif lowercase">She Matters</span> official shirts.
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium mb-10">
                            We're excited to offer our stylish She Matters shirts—a perfect way to show your support and be part of our global community. Choose from a beautiful palette of 12 colors, to find the perfect match for you.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                    <Palette size={20} />
                                </div>
                                <span className="text-sm font-bold text-primary">12 Color Options</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
                                    <Ruler size={20} />
                                </div>
                                <span className="text-sm font-bold text-primary">All Sizes Available</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full lg:w-auto">
                        <div className="bg-primary p-10 rounded-[3rem] text-white">
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                                <ShoppingBag /> How to Order
                            </h3>
                            <ul className="space-y-6 text-white/70 font-medium">
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs shrink-0 mt-1">1</span>
                                    <span>Browse our core collection of 12 colors below.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs shrink-0 mt-1">2</span>
                                    <span>Contact us via the form or WhatsApp with your size and color choice.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-xs shrink-0 mt-1">3</span>
                                    <span>Delivery across Pakistan and select global regions.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="pb-32 container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 3) * 0.1 }}
                            className="group"
                        >
                            <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5 border border-gray-100 mb-8 relative flex items-center justify-center p-8 transition-all hover:shadow-secondary/20">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6 w-8 h-8 rounded-full border-2 border-white shadow-lg" style={{ backgroundColor: product.hex }}></div>
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-2xl font-black text-primary leading-tight group-hover:text-secondary transition-colors mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Premium Cotton Fabric</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Link to="/contact-us" className="bg-secondary text-white px-16 py-6 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-secondary/30 inline-flex items-center gap-4">
                        Contact to Order <ChevronRight size={24} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Merch;

