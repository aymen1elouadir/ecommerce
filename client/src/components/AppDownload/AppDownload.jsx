// import React from 'react'

// import { assets } from '../../assets/frontend_assets/assets'

// const AppDownload = () => {
//     return (
//         <div className='app-download' id='app-download'>
//             <p>For Better Experience Download <br /> Tomato App</p>
//             <div className="app-download-platforms">
//                 <img src={assets.play_store} alt="Play Store" />
//                 <img src={assets.app_store} alt="App Store" />
//             </div>
//         </div>
//     )
// }

// export default AppDownload

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full flex flex-col items-center justify-center gap-8 mt-24 mb-16 p-10 md:p-16 rounded-3xl bg-[#e0e5ec] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] text-center"
      id="app-download"
    >
      {/* Engaging Typography adapted for Badra Ceram */}
      <h2 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight leading-tight">
        Explore Zellige on the Go. Download the <br />
        <span className="text-indigo-600">Badra Ceram App</span>
      </h2>
      
      {/* Neomorphic Interactive Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-2xl bg-[#e0e5ec] p-3 md:p-4 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
        >
          <img src={assets.play_store} alt="Play Store" className="w-36 md:w-44 transition-opacity hover:opacity-80" />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer rounded-2xl bg-[#e0e5ec] p-3 md:p-4 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all duration-300 flex items-center justify-center"
        >
          <img src={assets.app_store} alt="App Store" className="w-36 md:w-44 transition-opacity hover:opacity-80" />
        </motion.div>
        
      </div>
    </motion.div>
  );
};

export default AppDownload;