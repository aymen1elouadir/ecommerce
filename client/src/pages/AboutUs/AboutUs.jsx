import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Award, Users, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col gap-12 md:gap-16 py-8"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl bg-gradient-to-r from-indigo-50 to-purple-50 p-10 md:p-16"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            About <span className="text-indigo-600">Badra Ceram</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            We are proud custodians of Morocco's finest artisanal tradition. Badra Ceram specializes in authentic Moroccan Zellige—hand-crafted geometric tiles that carry centuries of heritage from the workshops of Fes and Safi.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every piece we create is a testament to the skill and dedication of our master artisans, bringing timeless beauty and cultural authenticity to modern architectural projects worldwide.
          </p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-10 md:p-16"
      >
        <h2 className="text-4xl font-black text-gray-800 mb-8">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Heritage & Tradition</h3>
            <p className="text-gray-700 leading-relaxed">
              Badra Ceram was founded on a mission to preserve and celebrate the timeless art of Moroccan Zellige craftsmanship. Our name, "Badra," reflects the beauty and brilliance of these traditional tiles that have adorned palaces, mosques, and homes throughout Morocco for centuries.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">Artisan Excellence</h3>
            <p className="text-gray-700 leading-relaxed">
              We work directly with master artisans in Fes and Safi, supporting traditional craftsmanship while bringing it to contemporary global markets. Each tile is hand-cut and hand-glazed with techniques passed down through generations, ensuring uniqueness and authenticity in every commission.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-4xl font-black text-gray-800 mb-8">Why Choose Badra Ceram</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Hexagon,
              title: "Authentic Craftsmanship",
              description: "Hand-crafted by master artisans using centuries-old techniques"
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Serving architects and designers worldwide with premium Zellige"
            },
            {
              icon: Award,
              title: "Quality Assured",
              description: "Every piece meets rigorous quality standards for durability and beauty"
            },
            {
              icon: Users,
              title: "Direct Collaboration",
              description: "Work directly with our team for custom designs and specifications"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] flex flex-col gap-4"
            >
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 w-fit">
                <item.icon size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-12 md:p-16 text-center text-white"
      >
        <h2 className="text-4xl font-black mb-4">Ready to Transform Your Space?</h2>
        <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
          Discover how authentic Moroccan Zellige can bring timeless elegance and cultural richness to your project.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = '/contact'}
          className="px-10 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all"
        >
          Get in Touch
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default AboutUs;
