// import React from 'react'

// import { menu_list } from '../../assets/frontend_assets/assets'

// const ExploreMenu = ({category, setCategory}) => {
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our menu</h1>
//       <p className='explore-menu-text'>Choose from a diverse menu...</p>


//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => {
//           return (
//             <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
//               <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
//               <p>{item.menu_name}</p>
//             </div>
//           )
//         })}
//       </div>
//       <hr />
//     </div>
//   )
// }
// export default ExploreMenu

// import React from 'react';
// import { motion } from 'framer-motion';
// import { menu_list } from '../../assets/frontend_assets/assets';

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="flex flex-col gap-6 py-12 w-full" 
//       id="explore-menu"
//     >
//       {/* Header Section */}
//       <div className="flex flex-col gap-3">
//         <h1 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight">
//           Explore our <span className="text-indigo-600">menu</span>
//         </h1>
//         <p className="text-gray-500 font-medium max-w-2xl text-base md:text-lg">
//           Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience.
//         </p>
//       </div>

//       {/* Horizontally Scrollable Menu List */}
//       {/* Note: The long class at the end hides the ugly default scrollbar but keeps the scroll functionality */}
//       <div className="flex gap-8 items-center overflow-x-auto py-8 px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
//         {menu_list.map((item, index) => {
//           const isActive = category === item.menu_name;

//           return (
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.4 }}
//               onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
//               key={index} 
//               className="flex flex-col items-center gap-4 cursor-pointer min-w-max snap-center group"
//             >
//               {/* Neomorphic Image Wrapper */}
//               <div 
//                 className={`w-24 h-24 md:w-28 md:h-28 rounded-full p-2 transition-all duration-300 flex items-center justify-center
//                   ${isActive 
//                     ? 'bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] ring-4 ring-indigo-500 scale-95' 
//                     : 'bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] group-hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]'
//                   }
//                 `}
//               >
//                 <img 
//                   src={item.menu_image} 
//                   alt={item.menu_name} 
//                   className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105" 
//                 />
//               </div>
              
//               {/* Menu Item Text */}
//               <p className={`text-base md:text-lg font-bold transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-800'}`}>
//                 {item.menu_name}
//               </p>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Neomorphic Divider Line */}
//       <div className="w-full h-[2px] mt-6 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
//     </motion.div>
//   );
// };

// export default ExploreMenu;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { menu_list } from '../../assets/frontend_assets/assets';

// const ExploreMenu = ({ category, setCategory }) => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="flex flex-col gap-10 py-12 w-full" 
//       id="explore-menu"
//     >
//       {/* Header Section (Zellige Themed) */}
//       <div className="flex flex-col items-center text-center gap-4">
//         <p className="text-xs font-bold tracking-[0.2em] text-[#c05c3d] uppercase">
//           Handcrafted Excellence
//         </p>
//         <h1 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">
//           Browse by <span className="text-[#c05c3d]">Pattern</span>
//         </h1>
//         <p className="text-gray-500 font-medium max-w-2xl text-sm md:text-base leading-relaxed mt-2 px-4">
//           Discover our authentic selection of hand-chiselled Moroccan zellige. From classic Fassi geometric stars to rustic Bejmat, find the perfect shape for your space.
//         </p>
//       </div>

//       {/* PERFECTLY CENTERED Menu List using Flex-Wrap */}
//       <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 w-full max-w-[1200px] mx-auto">
//         {menu_list.map((item, index) => {
//           const isActive = category === item.menu_name;

//           return (
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1, duration: 0.4 }}
//               onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
//               key={index} 
//               className="flex flex-col items-center gap-5 cursor-pointer group"
//             >
//               {/* Neomorphic 3D Image Wrapper */}
//               <div 
//                 className={`w-28 h-28 md:w-32 md:h-32 rounded-full p-2.5 transition-all duration-300 flex items-center justify-center
//                   ${isActive 
//                     ? 'bg-[#e0e5ec] shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] scale-95 ring-2 ring-[#c05c3d]/50' 
//                     : 'bg-[#e0e5ec] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] group-hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]'
//                   }
//                 `}
//               >
//                 <img 
//                   src={item.menu_image} 
//                   alt={item.menu_name} 
//                   className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2)]" 
//                 />
//               </div>
              
//               {/* Menu Item Text */}
//               <p className={`text-xs md:text-sm font-black tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-[#c05c3d]' : 'text-gray-500 group-hover:text-gray-800'}`}>
//                 {item.menu_name}
//               </p>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Neomorphic Engraved Divider Line */}
//       <div className="w-[80%] max-w-3xl mx-auto h-[2px] mt-4 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
//     </motion.div>
//   );
// };

// export default ExploreMenu;

import React from 'react';
import { motion } from 'framer-motion';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 py-12 w-full" 
      id="explore-menu"
    >
      {/* Header Section (Updated for Zellige) */}
      <div className="flex flex-col gap-3 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-black text-gray-800 tracking-tight">
          Browse by <span className="text-indigo-600">Shape</span>
        </h1>
        <p className="text-gray-500 font-medium max-w-2xl text-base md:text-lg mx-auto md:mx-0">
          Choose from a diverse collection featuring an exquisite array of authentic Moroccan Zellige. Our mission is to preserve traditional craftsmanship and elevate your architectural spaces.
        </p>
      </div>

      {/* CENTERED Menu List (flex-wrap and justify-center) */}
      <div className="flex flex-wrap justify-center items-center gap-8 py-8 px-4 w-full">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;

          return (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              key={index} 
              className="flex flex-col items-center gap-4 cursor-pointer group"
            >
              {/* Neomorphic Image Wrapper */}
              <div 
                className={`w-24 h-24 md:w-28 md:h-28 rounded-full p-2 transition-all duration-300 flex items-center justify-center
                  ${isActive 
                    ? 'bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] ring-4 ring-indigo-500 scale-95' 
                    : 'bg-[#e0e5ec] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] group-hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]'
                  }
                `}
              >
                <img 
                  src={item.menu_image} 
                  alt={item.menu_name} 
                  className="w-full h-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              
              {/* Menu Item Text */}
              <p className={`text-base md:text-lg font-bold transition-colors duration-300 ${isActive ? 'text-indigo-600' : 'text-gray-500 group-hover:text-gray-800'}`}>
                {item.menu_name}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Neomorphic Divider Line */}
      <div className="w-full h-[2px] mt-6 bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
    </motion.div>
  );
};

export default ExploreMenu;