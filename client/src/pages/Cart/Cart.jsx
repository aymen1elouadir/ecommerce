// import React, { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {

//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   return (
//     <div className='cart'>
//       <div className="cart-items">

//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
        
//         <br />
//         <hr />


//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index}>
//                 <div className='cart-items-title cart-items-item'>
//                   <img src={url+"/images/"+item.image} alt="" />
//                   <p>{item.name}</p>
//                   <p>${item.price}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>${item.price * cartItems[item._id]}</p>
//                   <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
//                 </div>
//                 <hr />
//               </div>
//             )
//           }
//         })}
//       </div>

//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//             </div>
//           </div>
//           <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>

//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, Enter it here</p>
//             <div className='cart-promocode-input'>
//               <input type="text" placeholder='promo code' />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
   
//      </div>
//   )
// }

// export default Cart

// import React, { useContext } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
//   const navigate = useNavigate();

//   // Reusable grid layout for the table rows to keep columns perfectly aligned
//   const gridLayout = "grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-4 text-sm sm:text-base min-w-[600px]";

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       className="w-full mt-10 flex flex-col gap-12"
//     >
//       {/* Top Section: Cart Items Table */}
//       <div className="bg-[#e0e5ec] rounded-3xl p-6 md:p-10 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
//         {/* Table Header */}
//         <div className={`${gridLayout} font-black text-gray-500 tracking-wider uppercase mb-4 px-2`}>
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Qty</p>
//           <p>Total</p>
//           <p className="text-center">Remove</p>
//         </div>
        
//         {/* Neomorphic Engraved Divider */}
//         <div className="w-full min-w-[600px] h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full mb-6"></div>

//         {/* Table Rows */}
//         <div className="flex flex-col gap-4">
//           <AnimatePresence>
//             {food_list.map((item) => {
//               if (cartItems[item._id] > 0) {
//                 return (
//                   <motion.div 
//                     key={item._id}
//                     layout // This makes the list slide up smoothly when an item is removed!
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.8, x: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className={`${gridLayout} text-gray-700 font-medium px-2 py-2 bg-[#e0e5ec] rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]`}
//                   >
//                     <img 
//                       src={url + "/images/" + item.image} 
//                       alt={item.name} 
//                       className="w-14 h-14 rounded-xl object-cover shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]" 
//                     />
//                     <p className="font-bold">{item.name}</p>
//                     <p>${item.price}</p>
//                     <p className="w-8 h-8 flex items-center justify-center bg-[#e0e5ec] rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
//                       {cartItems[item._id]}
//                     </p>
//                     <p className="font-bold text-indigo-600">${item.price * cartItems[item._id]}</p>
                    
//                     {/* Interactive Remove Button */}
//                     <div className="flex justify-center">
//                       <motion.button 
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => removeFromCart(item._id)} 
//                         className="w-8 h-8 flex items-center justify-center font-bold text-red-500 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] cursor-pointer transition-shadow"
//                       >
//                         X
//                       </motion.button>
//                     </div>
//                   </motion.div>
//                 );
//               }
//               return null;
//             })}
//           </AnimatePresence>
          
//           {/* Empty Cart Message (Optional but good for UX) */}
//           {getTotalCartAmount() === 0 && (
//             <p className="text-center text-gray-500 font-medium py-8 min-w-[600px]">
//               Your cart is currently empty.
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Bottom Section: Totals and Promo Code */}
//       <div className="flex flex-col-reverse lg:flex-row gap-12 w-full">
        
//         {/* Left Side (on Desktop): Promo Code Box */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-4 bg-[#e0e5ec] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] h-fit">
//           <p className="text-gray-500 font-medium mb-2">If you have a promo code, enter it here:</p>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <input 
//               type="text" 
//               placeholder="Promo code" 
//               className="flex-1 bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-4 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
//             />
//             <motion.button 
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="px-8 py-4 bg-gray-800 text-white font-bold rounded-xl shadow-lg shadow-gray-400 hover:bg-black transition-colors"
//             >
//               Submit
//             </motion.button>
//           </div>
//         </div>

//         {/* Right Side (on Desktop): Cart Totals */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6 bg-[#e0e5ec] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
//           <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight mb-2">
//             Cart <span className="text-indigo-600">Totals</span>
//           </h2>
          
//           <div className="flex flex-col gap-4">
//             <div className="flex justify-between items-center text-gray-500 font-medium">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
            
//             <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
            
//             <div className="flex justify-between items-center text-gray-500 font-medium">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
            
//             <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
            
//             <div className="flex justify-between items-center text-gray-800 font-black text-lg">
//               <p>Total</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
//             </div>
//           </div>

//           <motion.button 
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => navigate('/order')}
//             disabled={getTotalCartAmount() === 0}
//             className={`mt-6 w-full py-4 text-white text-lg font-bold rounded-2xl transition-all ${
//               getTotalCartAmount() === 0 
//                 ? 'bg-gray-400 cursor-not-allowed shadow-none' 
//                 : 'bg-indigo-600 shadow-lg shadow-indigo-300 hover:bg-indigo-700'
//             }`}
//           >
//             PROCEED TO CHECKOUT
//           </motion.button>
//         </div>

//       </div>
//     </motion.div>
//   );
// };

// export default Cart;

import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // 1. S7e7na hna: bdelna food_list b foodList
  const { cartItems, foodList, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  // Reusable grid layout for the table rows to keep columns perfectly aligned
  const gridLayout = "grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-4 text-sm sm:text-base min-w-[600px]";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-10 flex flex-col gap-12"
    >
      {/* Top Section: Cart Items Table */}
      <div className="bg-[#e0e5ec] rounded-3xl p-6 md:p-10 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        
        {/* Table Header */}
        <div className={`${gridLayout} font-black text-gray-500 tracking-wider uppercase mb-4 px-2`}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p className="text-center">Remove</p>
        </div>
        
        {/* Neomorphic Engraved Divider */}
        <div className="w-full min-w-[600px] h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full mb-6"></div>

        {/* Table Rows */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {/* 2. S7e7na hna: darna foodList?.map */}
            {foodList?.map((item) => {
              if (cartItems[item._id] > 0) {
                return (
                  <motion.div 
                    key={item._id}
                    layout // This makes the list slide up smoothly when an item is removed!
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`${gridLayout} text-gray-700 font-medium px-2 py-2 bg-[#e0e5ec] rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]`}
                  >
                    <img 
                      src={url + "/images/" + item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-xl object-cover shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]" 
                    />
                    <p className="font-bold">{item.name}</p>
                    <p>{item.price} DH</p>
                    <p className="w-8 h-8 flex items-center justify-center bg-[#e0e5ec] rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
                      {cartItems[item._id]}
                    </p>
                    <p className="font-bold text-indigo-600">{item.price * cartItems[item._id]} DH</p>
                    
                    {/* Interactive Remove Button */}
                    <div className="flex justify-center">
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item._id)} 
                        className="w-8 h-8 flex items-center justify-center font-bold text-red-500 bg-[#e0e5ec] rounded-full shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] cursor-pointer transition-shadow"
                      >
                        X
                      </motion.button>
                    </div>
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>
          
          {/* Empty Cart Message (Optional but good for UX) */}
          {getTotalCartAmount() === 0 && (
            <p className="text-center text-gray-500 font-medium py-8 min-w-[600px]">
              Your cart is currently empty.
            </p>
          )}
        </div>
      </div>

      {/* Bottom Section: Cart Totals */}
      <div className="w-full flex justify-center">
        {/* Cart Totals Card - Centered */}
        <div className="w-full max-w-md flex flex-col gap-6 bg-[#e0e5ec] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight mb-2">
            Cart <span className="text-indigo-600">Totals</span>
          </h2>
          
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center text-gray-500 font-medium">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} DH</p>
            </div>
            
            <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
            
            <div className="flex justify-between items-center text-gray-500 font-medium">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 20} DH</p>
            </div>
            
            <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
            
            <div className="flex justify-between items-center text-gray-800 font-black text-lg">
              <p>Total</p>
              <p>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20} DH</p>
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/order')}
            disabled={getTotalCartAmount() === 0}
            className={`mt-6 w-full py-4 text-white text-lg font-bold rounded-2xl transition-all ${
              getTotalCartAmount() === 0 
                ? 'bg-gray-400 cursor-not-allowed shadow-none' 
                : 'bg-indigo-600 shadow-lg shadow-indigo-300 hover:bg-indigo-700'
            }`}
          >
            PROCEED TO CHECKOUT
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;