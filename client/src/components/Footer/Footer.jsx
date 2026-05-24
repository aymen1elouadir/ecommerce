// import React from 'react'

// import { assets } from '../../assets/frontend_assets/assets'

// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//             <img src={assets.logo} alt="" />
//             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
//             <div className="footer-social-icons">
//                 <img src={assets.facebook_icon} alt="" />
//                 <img src={assets.twitter_icon} alt="" />
//                 <img src={assets.linkedin_icon} alt="" />
//             </div>
//         </div>
//         <div className="footer-content-center">
//             <h2>COMPANY</h2>
//             <ul>
//                 <li>Home</li>
//                 <li>About us</li>
//                 <li>Delivery</li>
//                 <li>Privacy policy</li>
//             </ul>
//         </div>
//         <div className="footer-content-right">
//             <h2>GET IN TOUCH</h2>
//             <ul>
//                 <li>+1-212-456-7890</li>
//                 <li>contact@tomato.com</li>
//             </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
//     </div>
//   )
// }

// export default Footer

// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../../assets/frontend_assets/assets';
// import { Mail, Phone } from 'lucide-react'; // Only importing the safe, standard icons

// const Footer = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="w-full mt-24 mb-6 rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 md:p-12"
//       id="footer"
//     >
//       {/* Top Section: 3 Columns */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
//         {/* Left Column (Takes up 2 columns on large screens) */}
//         <div className="lg:col-span-2 flex flex-col gap-6">
//           <img src={assets.logo} alt="Logo" className="w-36" />
//           <p className="text-gray-500 font-medium leading-relaxed max-w-md">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
//           </p>
          
//           {/* Neomorphic Social Icons (Using your reliable image assets!) */}
//           <div className="flex gap-4 mt-2">
            
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="cursor-pointer p-3 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
//             >
//               <img src={assets.facebook_icon} alt="Facebook" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
//             </motion.div>
            
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="cursor-pointer p-3 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
//             >
//               <img src={assets.twitter_icon} alt="Twitter" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
//             </motion.div>
            
//             <motion.div 
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="cursor-pointer p-3 rounded-full bg-[#e0e5ec] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
//             >
//               <img src={assets.linkedin_icon} alt="LinkedIn" className="w-5 h-5 opacity-70 hover:opacity-100 transition-opacity" />
//             </motion.div>

//           </div>
//         </div>

//         {/* Center Column: Links */}
//         <div className="flex flex-col gap-6">
//           <h2 className="text-xl font-black text-gray-800 tracking-tight">COMPANY</h2>
//           <ul className="flex flex-col gap-3 text-gray-500 font-medium">
//             {['Home', 'About us', 'Delivery', 'Privacy policy'].map((link, index) => (
//               <li key={index} className="cursor-pointer hover:text-indigo-600 transition-colors w-max">
//                 {link}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Right Column: Contact */}
//         <div className="flex flex-col gap-6">
//           <h2 className="text-xl font-black text-gray-800 tracking-tight">GET IN TOUCH</h2>
//           <ul className="flex flex-col gap-4 text-gray-500 font-medium">
//             <li className="flex items-center gap-3 cursor-pointer hover:text-indigo-600 transition-colors">
//               <Phone size={18} />
//               <span>+1-212-456-7890</span>
//             </li>
//             <li className="flex items-center gap-3 cursor-pointer hover:text-indigo-600 transition-colors">
//               <Mail size={18} />
//               <span>contact@neostore.com</span>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Neomorphic Divider */}
//       <div className="w-full h-[2px] my-8 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
      
//       {/* Copyright */}
//       <p className="text-center text-gray-500 font-medium text-sm">
//         Copyright 2024 © NEOSTORE.com - All Rights Reserved.
//       </p>
      
//     </motion.div>
//   );
// };

// export default Footer;
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/frontend_assets/assets';
import { Mail, Phone, MapPin, Hexagon, Heart } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      // w-[96%] m3a mx-auto katkhali margin sghir f jnab (left & right)
      className="w-[96%] mx-auto mt-24 mb-10 rounded-[2.5rem] bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-10 md:p-20"
      id="footer"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        
        {/* Left Column: Logo & Social Media */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-[#e0e5ec] rounded-2xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
              <Hexagon size={24} className="text-indigo-600" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-3xl font-black text-gray-800 tracking-tight uppercase">Badra</span>
              <span className="text-[12px] font-bold text-indigo-600 tracking-[0.3em] uppercase mt-1">Ceram</span>
            </div>
          </div>

          <p className="text-gray-500 font-medium leading-relaxed max-w-md">
            Premium Moroccan Zellige and artisanal ceramics. We bring the heritage of Fes and Safi's craftsmanship to your modern architectural projects.
          </p>
          
          {/* --- SOCIAL ICONS --- */}
          <div className="flex gap-5 mt-4">
            <motion.div
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer p-4 rounded-2xl bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
              onClick={() => window.open('https://www.instagram.com/badraceram/', '_blank')}
            >
              {/* Instagram SVG Icon */}
              <svg 
                className="w-6 h-6 text-indigo-600" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.013-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110.002 2.881 1.44 1.44 0 01-.002-2.881z"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Center Column: Quick Links */}
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-black text-gray-800 tracking-widest uppercase border-l-4 border-indigo-600 pl-4">Company</h2>
          <ul className="flex flex-col gap-4 text-gray-500 font-medium">
            <li 
              onClick={() => { window.scrollTo(0, 0); navigate('/'); }}
              className="cursor-pointer hover:text-indigo-600 transition-all hover:translate-x-2 w-max"
            >
              Home
            </li>
            <li 
              onClick={() => { window.scrollTo(0, 0); navigate('/products'); }}
              className="cursor-pointer hover:text-indigo-600 transition-all hover:translate-x-2 w-max"
            >
              Products
            </li>
            <li 
              onClick={() => { window.scrollTo(0, 0); navigate('/about'); }}
              className="cursor-pointer hover:text-indigo-600 transition-all hover:translate-x-2 w-max"
            >
              About us
            </li>
            <li 
              onClick={() => { window.scrollTo(0, 0); navigate('/privacy'); }}
              className="cursor-pointer hover:text-indigo-600 transition-all hover:translate-x-2 w-max"
            >
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Right Column: Contact Detail */}
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-black text-gray-800 tracking-widest uppercase border-l-4 border-indigo-600 pl-4">Get in Touch</h2>
          <ul className="flex flex-col gap-5 text-gray-500 font-medium">
            <li className="flex items-start gap-4 group cursor-pointer">
              <Phone size={20} className="text-indigo-600 mt-1" />
              <span className="group-hover:text-gray-800 transition-colors">05 24 65 00 40</span>
            </li>
            <li className="flex items-start gap-4 group cursor-pointer">
              <Mail size={20} className="text-indigo-600 mt-1" />
              <span className="group-hover:text-gray-800 transition-colors">contact@badraceram.com</span>
            </li>
            <li className="flex items-start gap-4 group cursor-pointer">
              <MapPin size={20} className="text-indigo-600 mt-1" />
              <span className="group-hover:text-gray-800 transition-colors leading-relaxed">
                108 Kawki Rd, Safi 46000
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Engraved Divider */}
      <div className="max-w-[1440px] mx-auto h-[2px] mt-16 mb-8 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
      
      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 font-bold text-[10px] tracking-widest uppercase">
        <p>© 2026 BADRA CERAM. ALL RIGHTS RESERVED.</p>
        <p className="italic text-indigo-400">Handcrafted in Morocco</p>
      </div>
      
    </motion.div>
  );
};

export default Footer;