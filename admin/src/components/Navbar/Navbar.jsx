// import React from 'react'
// import './Navbar.css'
// import { assets } from '../../assets/assets'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <img className='logo' src={assets.logo} alt="Logo" />
//       <img className='profile' src={assets.profile_image} alt="Profile" />
//     </div>
//   )
// }

// export default Navbar

import React from 'react';
import { assets } from '../../assets/assets';
import { Hexagon } from 'lucide-react'; 

const Navbar = () => {
  return (
    // Centered, floating neomorphic navbar
    <div className="w-[95%] max-w-[1440px] mx-auto mt-6 mb-8 flex justify-between items-center py-4 px-8 bg-[#E0E5EC] rounded-2xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]">
      
      {/* --- BADRA CERAM LOGO (ADMIN VERSION) --- */}
      <div className="flex items-center gap-3 cursor-pointer transition-transform hover:scale-105 group">
        {/* Neomorphic Hexagon Icon */}
        <div className="w-10 h-10 flex items-center justify-center bg-[#E0E5EC] rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all">
          {/* Rje3t l-icon Indigo bach t-kon consistent m3a l-site kaml */}
          <Hexagon size={22} className="text-indigo-600" strokeWidth={2.5} />
        </div>
        
        {/* Text Logo */}
        <div className="flex flex-col justify-center leading-none">
          <span className="text-xl font-black text-gray-800 tracking-tight leading-none uppercase">Badra</span>
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.3em] uppercase leading-none mt-1">Admin Panel</span>
        </div>
      </div>
      
      {/* Profile Image with an inset ring effect */}
      <div className="p-1 rounded-full bg-[#E0E5EC] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]">
        <img 
          className="w-10 h-10 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity" 
          src={assets.profile_image} 
          alt="Profile" 
        />
      </div>
    </div>
  );
};

export default Navbar;