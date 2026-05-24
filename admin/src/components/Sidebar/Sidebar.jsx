import React from 'react';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import { BarChart, PlusCircle, LayoutList, ShoppingCart, Tag } from 'lucide-react'; 

const Sidebar = () => {
  return (
    <div className="w-[18%] min-w-[220px] bg-[#E0E5EC] p-6 rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col h-fit mt-4">
      <div className="flex flex-col gap-6">

        {/* Add Designs */}
        <NavLink
          to='/add'
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold cursor-pointer ${isActive
              ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 scale-[0.98]"
              : "bg-[#E0E5EC] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-gray-500 hover:text-indigo-400"
            }`
          }
        >
          <PlusCircle className="w-5 h-5" />
          <p className="hidden md:block text-sm uppercase tracking-wider">Add Designs</p>
        </NavLink>

        {/* Catalog List */}
        <NavLink
          to='/list'
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold cursor-pointer ${isActive
              ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 scale-[0.98]"
              : "bg-[#E0E5EC] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-gray-500 hover:text-indigo-400"
            }`
          }
        >
          <LayoutList className="w-5 h-5" />
          <p className="hidden md:block text-sm uppercase tracking-wider">Catalog List</p>
        </NavLink>

        {/* Client Orders */}
        <NavLink
          to='/orders'
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold cursor-pointer ${isActive
              ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 scale-[0.98]"
              : "bg-[#E0E5EC] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-gray-500 hover:text-indigo-400"
            }`
          }
        >
          <ShoppingCart className="w-5 h-5" />
          <p className="hidden md:block text-sm uppercase tracking-wider">Client Orders</p>
        </NavLink>

        {/* Divider Neumorphic */}
        <div className="w-full h-[2px] bg-[#E0E5EC] shadow-[inset_1px_1px_2px_#bebebe,inset_-1px_-1px_2px_#ffffff] rounded-full my-2"></div>

        {/* Promo Codes */}
        <NavLink 
          to='/promo' 
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold cursor-pointer ${isActive
              ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 scale-[0.98]"
              : "bg-[#E0E5EC] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-gray-500 hover:text-indigo-400"
            }`
          }
        >
          <Tag className="w-5 h-5" />
          <p className="hidden md:block text-sm uppercase tracking-wider">Promo Codes</p>
        </NavLink>

        {/* Analytics */}
        <NavLink 
          to='/analytics' 
          className={({ isActive }) =>
            `flex items-center gap-4 px-5 py-4 rounded-2xl transition-all font-bold cursor-pointer ${isActive
              ? "bg-[#E0E5EC] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-indigo-600 scale-[0.98]"
              : "bg-[#E0E5EC] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-gray-500 hover:text-indigo-400"
            }`
          }
        >
          <BarChart className="w-5 h-5" />
          <p className="hidden md:block text-sm uppercase tracking-wider">Analytics</p>
        </NavLink>
        
      </div>
    </div>
  );
};

export default Sidebar;