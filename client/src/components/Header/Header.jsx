import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import bgImage from '../../assets/background.png' // Tswira d zellige wla architecture hna

const Header = () => {
    const navigate = useNavigate();
    
    // Variants dyal l-anmation bach tji l-khidma nqiya
    const fadeInRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
    };

    return (
        <section className="relative w-full min-h-[80vh] flex items-center px-[5%] md:px-[10%] overflow-hidden">
            
            {/* 1. Background Image Wrapper */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={bgImage} 
                    alt="Authentic Moroccan Zellige" 
                    className="w-full h-full object-cover object-right md:object-center opacity-40 md:opacity-100"
                />
                {/* Overlay bach t-ban l-ktiba clear */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#e0e5ec] via-[#e0e5ec]/80 to-transparent" />
            </div>

            {/* 2. Content Area */}
            <div className="relative z-10 w-full max-w-3xl">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInRight}
                >
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full"
                    >
                        🏺 Authentic Moroccan Craftsmanship
                    </motion.span>

                    <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
                        The Art of Zellige, <br />
                        <span className="text-indigo-600 italic drop-shadow-sm">
                            Masterfully Crafted.
                        </span>
                    </h1>

                    <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
                        Discover the timeless beauty of authentic Moroccan tiles. Hand-chiselled by master artisans in Fes and Safi, our Zellige brings centuries of heritage to your modern spaces.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <motion.button 
                            onClick={() => navigate('/products')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-indigo-600 text-white rounded-2xl shadow-xl shadow-indigo-200 font-bold text-lg hover:bg-indigo-700 transition-all"
                        >
                            Explore Products
                        </motion.button>

                        <motion.button 
                            onClick={() => navigate('/contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-4 bg-[#e0e5ec] text-gray-800 rounded-2xl shadow-[5px_5px_15px_#bebebe,-5px_-5px_15px_#ffffff] font-bold text-lg hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
                        >
                            Custom Orders
                        </motion.button>
                    </div>

                    {/* Simple Stats for social proof */}
                    <motion.div 
                        variants={fadeInUp}
                        className="mt-12 flex items-center gap-8 border-t border-gray-300/30 pt-8"
                    >
                        <div>
                            <p className="text-2xl font-black text-gray-900">15k+</p>
                            <p className="text-sm text-gray-500 font-semibold uppercase">Spaces Transformed</p>
                        </div>
                        <div className="w-px h-10 bg-gray-300" />
                        <div>
                            <p className="text-2xl font-black text-gray-900">100%</p>
                            <p className="text-sm text-gray-500 font-semibold uppercase">Handcrafted Authenticity</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* 3. Floating Decoration (Optional) */}
            <motion.div 
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden lg:block absolute right-[10%] top-[20%] w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none"
            />
        </section>
    )
}

export default Header