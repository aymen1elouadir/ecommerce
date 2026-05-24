import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Construction } from 'lucide-react';

const MobileApp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col items-center justify-center py-24 md:py-32"
    >
      {/* Icon Section */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
        className="w-24 h-24 flex items-center justify-center bg-[#e0e5ec] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] mb-8"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Smartphone size={48} className="text-indigo-600" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-black text-gray-800 mb-4 tracking-tight">
          Mobile App <span className="text-indigo-600">Coming Soon</span>
        </h1>
        
        <p className="text-xl text-gray-600 font-medium mb-8 leading-relaxed">
          We're working on bringing Badra Ceram to your pocket! Our mobile app is under development and will be available soon on iOS and Android.
        </p>

        {/* Construction Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="inline-flex items-center gap-3 bg-[#e0e5ec] px-8 py-4 rounded-2xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
        >
          <Construction size={20} className="text-indigo-600 animate-spin" />
          <span className="font-bold text-gray-700">Development in Progress</span>
        </motion.div>
      </motion.div>

      {/* Features Preview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl"
      >
        {[
          {
            title: 'Browse Collection',
            desc: 'Explore our entire Zellige collection on the go'
          },
          {
            title: 'Easy Checkout',
            desc: 'Seamless ordering experience right from your phone'
          },
          {
            title: 'Track Orders',
            desc: 'Real-time updates on your shipments and deliveries'
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#e0e5ec] p-6 rounded-2xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] text-center"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 font-medium text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Notify Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-16 bg-[#e0e5ec] p-8 md:p-12 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] max-w-2xl text-center"
      >
        <h2 className="text-2xl font-black text-gray-800 mb-4">Stay Updated</h2>
        <p className="text-gray-600 font-medium mb-6">
          Be the first to know when our mobile app launches!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-3 bg-white rounded-xl border-2 border-indigo-200 focus:outline-none focus:border-indigo-600 font-medium text-gray-700"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all whitespace-nowrap"
          >
            Notify Me
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileApp;
