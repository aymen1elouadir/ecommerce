import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NeomorphicSelect from '../NeomorphicSelect/NeomorphicSelect';
import img from '../../assets/back.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nature: '',
    message: ''
  });
  return (
    <div className="min-h-screen bg-[#e0e5ec] text-gray-800 font-sans pt-32 pb-20 overflow-hidden">
      
      {/* --- PAGE HEADER --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[1440px] mx-auto w-[92%] mb-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-4">
            Inquiry & Collaboration
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 tracking-tight leading-[1.1]">
            The Dialogue of <br /> <span className="text-indigo-600 italic">Clay & Form</span>
          </h1>
        </div>
        
        <div className="max-w-md lg:pb-3">
          <p className="text-base text-gray-500 font-medium leading-relaxed">
            Whether you are an architect envisioning a grand mosaic or a collector seeking a singular piece, our atelier in Safi is at your service.
          </p>
        </div>
      </motion.div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-[1440px] mx-auto w-[92%] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* LEFT COLUMN: NEUMORPHIC FORM */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 bg-[#e0e5ec] p-8 md:p-12 rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] h-fit"
        >
          <h2 className="text-2xl font-black text-gray-800 mb-8 uppercase tracking-widest border-l-4 border-indigo-600 pl-4">
            Send an Inquiry
          </h2>
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase ml-2">Full Name</label>
              <input 
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="E.g. Julianne Moore" 
                className="w-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase ml-2">Email Address</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="julianne@architecture.com" 
                className="w-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>

            {/* Nature of Interest - Using NeomorphicSelect */}
            <NeomorphicSelect
              label="Nature of Interest"
              value={formData.nature}
              onChange={(e) => setFormData({ ...formData, nature: e.target.value })}
              placeholder="Select your inquiry type"
              name="nature"
              options={[
                { value: '', label: 'Select your inquiry type' },
                { value: 'architectural', label: 'Architectural Consultation' },
                { value: 'tile-order', label: 'Custom Tile Order' },
                { value: 'atelier-visit', label: 'Atelier Visit' },
                { value: 'general', label: 'General Inquiry' }
              ]}
            />

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold tracking-widest text-gray-500 uppercase ml-2">Message</label>
              <textarea 
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your project..." 
                className="w-full bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] rounded-2xl px-5 py-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className="mt-4 w-full bg-indigo-600 text-white rounded-2xl shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:bg-indigo-700 font-bold tracking-widest uppercase py-4 transition-all duration-300"
            >
              Transmit Inquiry
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT COLUMN: IMAGE & ADDRESSES */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-7 flex flex-col pt-4"
        >
          
          {/* Image with Overlapping Neomorphic Quote */}
          <div className="relative w-full mb-20">
            <div className="rounded-3xl overflow-hidden shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]">
                <img 
                  src={img}
                  alt="Moroccan Architecture Safi" 
                  className="w-full aspect-[4/3] md:aspect-[16/9] object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>
            
            {/* Overlapping Quote Box */}
            <div className="absolute -bottom-10 right-4 md:right-10 bg-[#e0e5ec] p-6 md:p-8 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.1),-10px_-10px_20px_#ffffff] max-w-[280px] border border-white/40">
              <p className="font-bold text-indigo-600 text-sm md:text-base leading-relaxed italic">
                "Each tile is a signature of the earth, cut by hand, fired by heritage."
              </p>
            </div>
          </div>

          {/* Addresses Section (Updated for Safi) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-8 md:pl-4">
            
            {/* Safi Atelier */}
            <div className="flex flex-col p-6 rounded-3xl bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]">
              <p className="text-[10px] font-bold tracking-widest text-indigo-500 uppercase mb-3">
                Production Atelier
              </p>
              <h3 className="text-xl font-black text-gray-800 mb-3">Safi Headquarters</h3>
              <div className="text-sm font-medium text-gray-500 leading-loose">
                <p>108 Kawki Rd</p>
                <p>Safi 46000, Morocco</p>
                <p className="mt-2 text-indigo-600 cursor-pointer">Open in Maps →</p>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="flex flex-col p-6 rounded-3xl bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]">
              <p className="text-[10px] font-bold tracking-widest text-indigo-500 uppercase mb-3">
                Direct Contact
              </p>
              <h3 className="text-xl font-black text-gray-800 mb-3">Client Services</h3>
              <div className="text-sm font-medium text-gray-500 leading-loose">
                <p>+212 524 65 00 40</p>
                <p>contact@badraceram.com</p>
                <p className="mt-2">Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;