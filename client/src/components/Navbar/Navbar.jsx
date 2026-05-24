// import './Navbar.css'
// import { assets } from "../../assets/frontend_assets/assets"
// import { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext'
// const Navbar = ({ setShowLogin }) => {

//     const [menu, setMenu] = useState("home");


//     const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem("token");
//         setToken("");
//         navigate("/");
//     }
//     return (
//         <div className='navbar'>
//             <Link to='/'><img src={assets.logo} alt="" className='logo' /></Link>

//             <ul className="navbar-menu">
//                 <Link to='/'>
//                     <li
//                         onClick={() => setMenu("home")}
//                         className={menu === "home" ? "active" : ""}
//                     >
//                         home
//                     </li>
//                 </Link>
//                 <li
//                     onClick={() => setMenu("menu")}
//                     className={menu === "menu" ? "active" : ""}
//                 >
//                     menu
//                 </li>
//                 <li
//                     onClick={() => setMenu("mobile-app")}
//                     className={menu === "mobile-app" ? "active" : ""}
//                 >
//                     mobile-app
//                 </li>
//                 <li
//                     onClick={() => setMenu("contact-us")}
//                     className={menu === "contact-us" ? "active" : ""}
//                 >
//                     contact us
//                 </li>
//             </ul>

//             <div className="navbar-right">
//                 <img src={assets.search_icon} alt="" />
//                 <div className="navbar-search-icon">
//                     <Link to='/cart'><img src={assets.basket_icon} /></Link>
//                     <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
//                 </div>
//                 {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
//                     : <div className='navbar-profile'>
//                         <img src={assets.profile_icon} alt="" />
//                         <ul className="nav-profile-dropdown">
//                             <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
//                             <hr />
//                             <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
//                         </ul>
//                     </div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default Navbar
// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import { assets } from "../../assets/frontend_assets/assets"; // Keeping this just for your Logo
// import { ShoppingBag, Search, LogOut, User, ShoppingBasket } from 'lucide-react';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     navigate("/");
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100] flex justify-between items-center py-4 px-8 bg-[#e0e5ec]/80 backdrop-blur-md rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
//     >
//       {/* Logo */}
//       <Link to='/'>
//         <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer transition-transform hover:scale-105" />
//         {/* If you prefer the text logo from your example instead, delete the img tag above and uncomment this: */}
//         {/* <span className="text-xl font-black tracking-tighter text-indigo-600">NEO<span className="text-gray-800">STORE</span></span> */}
//       </Link>

//       {/* Navigation Links */}
//       <ul className="hidden md:flex gap-10 text-gray-500 font-medium">
//         {['home', 'menu', 'mobile-app', 'contact-us'].map((item) => (
//           <li
//             key={item}
//             onClick={() => setMenu(item)}
//             className="relative cursor-pointer hover:text-indigo-600 transition-colors capitalize"
//           >
//             <Link to={item === 'home' ? '/' : `/${item}`} className="pb-1">
//               {item.replace('-', ' ')}
//             </Link>
//             {menu === item && (
//               <motion.div 
//                 layoutId="activeTab"
//                 className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
//               />
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Icons & Auth */}
//       <div className="flex items-center gap-4 text-gray-600">
        
//         {/* Search Icon */}
//         <div className="p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all cursor-pointer">
//           <Search size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//         </div>
        
//         {/* Cart Icon & Dot Notification */}
//         <Link to="/cart" className="relative p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
//           <ShoppingBag size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//           {getTotalCartAmount() !== 0 && (
//             <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-2 ring-[#e0e5ec]"></span>
//           )}
//         </Link>

//         {/* Auth Logic */}
//         <div className="flex items-center gap-3 ml-2">
//           {!token ? (
//             <button
//               onClick={() => setShowLogin(true)}
//               className="flex items-center gap-2 px-6 py-2 bg-indigo-600 shadow-lg shadow-indigo-200 rounded-xl text-white font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95"
//             >
//               Sign In
//             </button>
//           ) : (
//             <div className="relative group cursor-pointer p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
//               <User size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
              
//               {/* Profile Dropdown */}
//               <ul className="absolute right-0 top-12 hidden group-hover:flex flex-col gap-3 bg-[#e0e5ec] p-4 rounded-xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border border-white/50 z-50 min-w-[140px]">
//                 <li 
//                   onClick={() => navigate('/myorders')} 
//                   className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
//                 >
//                   <ShoppingBasket size={18} />
//                   <p className="font-medium text-sm">Orders</p>
//                 </li>
//                 <hr className="border-gray-300" />
//                 <li 
//                   onClick={logout} 
//                   className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
//                 >
//                   <LogOut size={18} />
//                   <p className="font-medium text-sm">Logout</p>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import { assets } from "../../assets/frontend_assets/assets"; 
// import { ShoppingBag, Search, LogOut, User, ShoppingBasket } from 'lucide-react';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   // 1. Zidna had state bach nt7ekmo f l'menu dyal profile
//   const [showProfileMenu, setShowProfileMenu] = useState(false); 
  
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setShowProfileMenu(false); // Nsdo l'menu mni ydir logout
//     navigate("/");
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100] flex justify-between items-center py-4 px-8 bg-[#e0e5ec]/80 backdrop-blur-md rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
//     >
//       {/* Logo */}
//       <Link to='/'>
//         <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer transition-transform hover:scale-105" />
//       </Link>

//       {/* Navigation Links */}
//       <ul className="hidden md:flex gap-10 text-gray-500 font-medium">
//         {['home', 'menu', 'mobile-app', 'contact-us'].map((item) => (
//           <li
//             key={item}
//             onClick={() => setMenu(item)}
//             className="relative cursor-pointer hover:text-indigo-600 transition-colors capitalize"
//           >
//             <Link to={item === 'home' ? '/' : `/${item}`} className="pb-1">
//               {item.replace('-', ' ')}
//             </Link>
//             {menu === item && (
//               <motion.div 
//                 layoutId="activeTab"
//                 className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
//               />
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Icons & Auth */}
//       <div className="flex items-center gap-4 text-gray-600">
        
//         {/* Search Icon */}
//         <div className="p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all cursor-pointer">
//           <Search size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//         </div>
        
//         {/* Cart Icon */}
//         <Link to="/cart" className="relative p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
//           <ShoppingBag size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//           {getTotalCartAmount() !== 0 && (
//             <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-2 ring-[#e0e5ec]"></span>
//           )}
//         </Link>

//         {/* Auth Logic */}
//         <div className="flex items-center gap-3 ml-2">
//           {!token ? (
//             <button
//               onClick={() => setShowLogin(true)}
//               className="flex items-center gap-2 px-6 py-2 bg-indigo-600 shadow-lg shadow-indigo-200 rounded-xl text-white font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95"
//             >
//               Sign In
//             </button>
//           ) : (
//             // 2. 7iydna "group" mn hna w zidna onClick
//             <div 
//               onClick={() => setShowProfileMenu(!showProfileMenu)}
//               className="relative cursor-pointer p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
//             >
//               <User size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
              
//               {/* Profile Dropdown */}
//               {/* 3. 7iydna "hidden group-hover:flex" w darna condition (showProfileMenu && ...) */}
//               {showProfileMenu && (
//                 <ul className="absolute right-0 top-[120%] mt-2 flex flex-col gap-3 bg-[#e0e5ec] p-4 rounded-xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border border-white/50 z-50 min-w-[140px]">
//                   <li 
//                     onClick={() => { navigate('/myorders'); setShowProfileMenu(false); }} 
//                     className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
//                   >
//                     <ShoppingBasket size={18} />
//                     <p className="font-medium text-sm">Orders</p>
//                   </li>
//                   <hr className="border-gray-300" />
//                   <li 
//                     onClick={logout} 
//                     className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
//                   >
//                     <LogOut size={18} />
//                     <p className="font-medium text-sm">Logout</p>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import { assets } from "../../assets/frontend_assets/assets"; 
// import { ShoppingBag, Search, LogOut, User, ShoppingBasket } from 'lucide-react';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const [showProfileMenu, setShowProfileMenu] = useState(false); 
  
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setShowProfileMenu(false);
//     navigate("/");
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100] flex justify-between items-center py-4 px-8 bg-[#e0e5ec]/80 backdrop-blur-md rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
//     >
//       {/* Logo */}
//       <Link to='/'>
//         <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer transition-transform hover:scale-105" />
//       </Link>

//       {/* Navigation Links */}
//       <ul className="hidden md:flex gap-10 text-gray-500 font-medium">
//         {/* Zidna 'collection' blast 'menu' hna */}
//         {['home', 'collection', 'mobile-app', 'contact-us'].map((item) => (
//           <li
//             key={item}
//             onClick={() => setMenu(item)}
//             className="relative cursor-pointer hover:text-indigo-600 transition-colors capitalize"
//           >
//             {/* Hada ghadi ysifet l user l '/collection' mni yklicki */}
//             <Link to={item === 'home' ? '/' : `/${item}`} className="pb-1">
//               {item.replace('-', ' ')}
//             </Link>
//             {menu === item && (
//               <motion.div 
//                 layoutId="activeTab"
//                 className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
//               />
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Icons & Auth */}
//       <div className="flex items-center gap-4 text-gray-600">
        
//         {/* Search Icon */}
//         <div className="p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all cursor-pointer">
//           <Search size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//         </div>
        
//         {/* Cart Icon */}
//         <Link to="/cart" className="relative p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
//           <ShoppingBag size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//           {getTotalCartAmount() !== 0 && (
//             <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-2 ring-[#e0e5ec]"></span>
//           )}
//         </Link>

//         {/* Auth Logic */}
//         <div className="flex items-center gap-3 ml-2">
//           {!token ? (
//             <button
//               onClick={() => setShowLogin(true)}
//               className="flex items-center gap-2 px-6 py-2 bg-indigo-600 shadow-lg shadow-indigo-200 rounded-xl text-white font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95"
//             >
//               Sign In
//             </button>
//           ) : (
//             <div 
//               onClick={() => setShowProfileMenu(!showProfileMenu)}
//               className="relative cursor-pointer p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
//             >
//               <User size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
              
//               {/* Profile Dropdown */}
//               {showProfileMenu && (
//                 <ul className="absolute right-0 top-[120%] mt-2 flex flex-col gap-3 bg-[#e0e5ec] p-4 rounded-xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border border-white/50 z-50 min-w-[140px]">
//                   <li 
//                     onClick={() => { navigate('/myorders'); setShowProfileMenu(false); }} 
//                     className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
//                   >
//                     <ShoppingBasket size={18} />
//                     <p className="font-medium text-sm">Orders</p>
//                   </li>
//                   <hr className="border-gray-300" />
//                   <li 
//                     onClick={logout} 
//                     className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
//                   >
//                     <LogOut size={18} />
//                     <p className="font-medium text-sm">Logout</p>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;

// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import { assets } from "../../assets/frontend_assets/assets"; 
// import { ShoppingBag, Search, LogOut, User, ShoppingBasket } from 'lucide-react';

// const Navbar = ({ setShowLogin }) => {
//   const [menu, setMenu] = useState("home");
//   const [showProfileMenu, setShowProfileMenu] = useState(false); 
  
//   const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     setToken("");
//     setShowProfileMenu(false);
//     navigate("/");
//   };

//   return (
//     <motion.nav 
//       initial={{ y: -20, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100] flex justify-between items-center py-4 px-8 bg-[#e0e5ec]/80 backdrop-blur-md rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
//     >
//       {/* Logo */}
//       <Link to='/'>
//         <img src={assets.logo} alt="Logo" className="w-32 cursor-pointer transition-transform hover:scale-105" />
//       </Link>

//       {/* Navigation Links */}
//       <ul className="hidden md:flex gap-10 text-gray-500 font-medium">
//         {/* Changed 'contact-us' to 'contact' right here! */}
//         {['home', 'collection', 'mobile-app', 'contact'].map((item) => (
//           <li
//             key={item}
//             onClick={() => setMenu(item)}
//             className="relative cursor-pointer hover:text-indigo-600 transition-colors capitalize"
//           >
//             <Link to={item === 'home' ? '/' : `/${item}`} className="pb-1">
//               {item.replace('-', ' ')}
//             </Link>
//             {menu === item && (
//               <motion.div 
//                 layoutId="activeTab"
//                 className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
//               />
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Right Side Icons & Auth */}
//       <div className="flex items-center gap-4 text-gray-600">
        
//         {/* Search Icon */}
//         <div className="p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all cursor-pointer">
//           <Search size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//         </div>
        
//         {/* Cart Icon */}
//         <Link to="/cart" className="relative p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
//           <ShoppingBag size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
//           {getTotalCartAmount() !== 0 && (
//             <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-2 ring-[#e0e5ec]"></span>
//           )}
//         </Link>

//         {/* Auth Logic */}
//         <div className="flex items-center gap-3 ml-2">
//           {!token ? (
//             <button
//               onClick={() => setShowLogin(true)}
//               className="flex items-center gap-2 px-6 py-2 bg-indigo-600 shadow-lg shadow-indigo-200 rounded-xl text-white font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95"
//             >
//               Sign In
//             </button>
//           ) : (
//             <div 
//               onClick={() => setShowProfileMenu(!showProfileMenu)}
//               className="relative cursor-pointer p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
//             >
//               <User size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
              
//               {/* Profile Dropdown */}
//               {showProfileMenu && (
//                 <ul className="absolute right-0 top-[120%] mt-2 flex flex-col gap-3 bg-[#e0e5ec] p-4 rounded-xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border border-white/50 z-50 min-w-[140px]">
//                   <li 
//                     onClick={() => { navigate('/myorders'); setShowProfileMenu(false); }} 
//                     className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
//                   >
//                     <ShoppingBasket size={18} />
//                     <p className="font-medium text-sm">Orders</p>
//                   </li>
//                   <hr className="border-gray-300" />
//                   <li 
//                     onClick={logout} 
//                     className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
//                   >
//                     <LogOut size={18} />
//                     <p className="font-medium text-sm">Logout</p>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { StoreContext } from '../../context/StoreContext';
import { assets } from "../../assets/frontend_assets/assets"; 
// Zedt 'Hexagon' hna bach ndiroh f logo!
import { ShoppingBag, Search, LogOut, User, ShoppingBasket, Hexagon, X, ShoppingCart } from 'lucide-react';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const location = useLocation();
  
  // Update menu based on current route
  useEffect(() => {
    const pathname = location.pathname;
    if (pathname === '/') {
      setMenu('home');
    } else if (pathname === '/products' || pathname === '/collection') {
      setMenu('products');
    } else if (pathname === '/contact') {
      setMenu('contact');
    } else if (pathname === '/mobile-app') {
      setMenu('mobile-app');
    }
  }, [location.pathname]); 
  
  const { getTotalCartAmount, token, setToken, foodList } = useContext(StoreContext);
  const navigate = useNavigate();

  // Handle search input changes
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSearchResults([]);
    } else {
      // Filter products by name or description
      const results = foodList.filter(product =>
        product.name.toLowerCase().includes(query) ||
        (product.category && product.category.toLowerCase().includes(query)) ||
        (product.description && product.description.toLowerCase().includes(query))
      ).slice(0, 6); // Limit to 6 results
      
      setSearchResults(results);
    }
  };

  // Handle product click
  const handleProductClick = (product) => {
    setShowSearch(false);
    setSearchQuery("");
    setSearchResults([]);
    navigate('/products', { state: { searchProduct: product._id } });
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [showSearch]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setShowProfileMenu(false);
    navigate("/");
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-[100] flex justify-between items-center py-4 px-8 bg-[#e0e5ec]/80 backdrop-blur-md rounded-2xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
    >
      
      {/* --- NEW BADRA CERAM LOGO --- */}
      <Link to='/' className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105 group">
        {/* Hexagon Icon (Zellige Vibe) */}
        <div className="w-9 h-9 flex items-center justify-center bg-[#e0e5ec] rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] group-hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all">
          <Hexagon size={20} className="text-indigo-600" strokeWidth={2.5} />
        </div>
        {/* Typography */}
        <div className="flex flex-col justify-center leading-none">
          <span className="text-xl font-black text-gray-800 tracking-tight leading-none">BADRA</span>
          <span className="text-[10px] font-bold text-indigo-600 tracking-[0.3em] uppercase leading-none mt-1">Ceram</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-10 text-gray-500 font-medium">
        {['home', 'products', 'mobile-app', 'contact'].map((item) => (
          <li
            key={item}
            onClick={() => setMenu(item)}
            className="relative cursor-pointer hover:text-indigo-600 transition-colors capitalize"
          >
            <Link to={item === 'home' ? '/' : `/${item}`} className="pb-1">
              {item.replace('-', ' ')}
            </Link>
            {menu === item && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 rounded-full"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Right Side Icons & Auth */}
      <div className="flex items-center gap-4 text-gray-600">
        
        {/* Search Icon - Interactive */}
        <div ref={searchRef} className="relative">
          <div 
            onClick={() => setShowSearch(!showSearch)}
            className="p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all cursor-pointer"
          >
            <Search size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
          </div>

          {/* Search Modal */}
          <AnimatePresence>
            {showSearch && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[120%] right-0 w-96 mt-2 bg-[#e0e5ec] rounded-2xl shadow-[10px_10px_30px_#bebebe,-10px_-10px_30px_#ffffff] border border-white/50 z-50 overflow-hidden"
              >
                {/* Search Input */}
                <div className="p-4 border-b border-gray-300">
                  <div className="relative flex items-center">
                    <Search size={18} className="absolute left-3 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="w-full pl-10 pr-10 py-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                      autoFocus
                    />
                    {searchQuery && (
                      <button
                        onClick={() => {
                          setSearchQuery("");
                          setSearchResults([]);
                        }}
                        className="absolute right-3 text-gray-500 hover:text-gray-700"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <ul className="divide-y divide-gray-300">
                      {searchResults.map((product) => (
                        <motion.li
                          key={product._id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={() => handleProductClick(product)}
                          className="px-4 py-3 hover:bg-white/50 transition-colors cursor-pointer flex gap-3 items-center group"
                        >
                          {/* Product Image */}
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-white shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]">
                            <img 
                              src={product.image} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-800 text-sm group-hover:text-indigo-600 transition-colors truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-500 capitalize">
                              {product.category}
                            </p>
                          </div>

                          {/* Price */}
                          <div className="flex-shrink-0 px-3 py-1 bg-white rounded-lg shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]">
                            <p className="font-bold text-indigo-600 text-sm">
                              {product.price} DH
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  ) : searchQuery ? (
                    <div className="p-8 text-center">
                      <p className="text-gray-600 text-sm">No products found for "{searchQuery}"</p>
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <Search size={32} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-600 text-sm">Start typing to search products...</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Cart Icon */}
        <Link to="/cart" className="relative p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all">
          <ShoppingBag size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
          {getTotalCartAmount() !== 0 && (
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full ring-2 ring-[#e0e5ec]"></span>
          )}
        </Link>

        {/* Auth Logic */}
        <div className="flex items-center gap-3 ml-2">
          {!token ? (
            <button
              onClick={() => setShowLogin(true)}
              className="flex items-center gap-2 px-6 py-2 bg-indigo-600 shadow-lg shadow-indigo-200 rounded-xl text-white font-bold text-sm hover:bg-indigo-700 transition-all active:scale-95"
            >
              Sign In
            </button>
          ) : (
            <div 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="relative cursor-pointer p-2 rounded-xl hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
            >
              <User size={20} className="text-gray-600 hover:text-indigo-600 transition-colors" />
              
              {/* Profile Dropdown */}
              {showProfileMenu && (
                <ul className="absolute right-0 top-[120%] mt-2 flex flex-col gap-3 bg-[#e0e5ec] p-4 rounded-xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] border border-white/50 z-50 min-w-[140px]">
                  <li 
                    onClick={() => { navigate('/myorders'); setShowProfileMenu(false); }} 
                    className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    <ShoppingBasket size={18} />
                    <p className="font-medium text-sm">Orders</p>
                  </li>
                  <hr className="border-gray-300" />
                  <li 
                    onClick={logout} 
                    className="flex items-center gap-3 text-gray-600 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <LogOut size={18} />
                    <p className="font-medium text-sm">Logout</p>
                  </li>
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;