// import React, { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext'

// const PlaceOrder = () => {

//     const { getTotalCartAmount } = useContext(StoreContext);

//     return (
//         <form className='place-order'>
//             <div className="place-order-left">
//                 <p className="title">Delivery Information</p>
//                 <div className="multi-fields">
//                     <input type="text" placeholder='First name' />
//                     <input type="text" placeholder='Last name' />
//                 </div>
//                 <input type="email" placeholder='Email address' />
//                 <input type="text" placeholder='Street' />
//                 <div className="multi-fields">
//                     <input type="text" placeholder='City' />
//                     <input type="text" placeholder='State' />
//                 </div>
//                 <div className="multi-fields">
//                     <input type="text" placeholder='Zip code' />
//                     <input type="text" placeholder='Country' />
//                 </div>
//                 <input type="text" placeholder='Phone' />
//             </div>

//             <div className="place-order-right">
//                 <div className="cart-total">
//                     <h2>Cart Totals</h2>
//                     <div>
//                         <div className="cart-total-details">
//                             <p>Subtotal</p>
//                             <p>${getTotalCartAmount()}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <p>Delivery Fee</p>
//                             <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//                         </div>
//                         <hr />
//                         <div className="cart-total-details">
//                             <b>Total</b>
//                             <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//                         </div>
//                     </div>
//                     <button type='submit'>PROCEED TO PAYMENT</button>
//                 </div>
//             </div>
//         </form>
//     )
// }

// export default PlaceOrder

import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, foodList, cartItems, url } = useContext(StoreContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "", lastName: "", email: "",
    street: "", city: "", state: "",
    zipcode: "", country: "", phone: ""
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [promoLoading, setPromoLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const validatePromoCode = async () => {
    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }

    setPromoLoading(true);
    setPromoError("");
    setPromoSuccess(false);

    try {
      const response = await axios.post(url + "/api/promo/validate", {
        code: promoCode,
        userId: token // token contains user info, admin should pass userId
      });

      if (response.data.success) {
        setDiscount(response.data.discount);
        setPromoSuccess(true);
        setPromoCode("");
        toast.success(response.data.message);
      } else {
        setPromoError(response.data.message);
        setDiscount(0);
        setPromoSuccess(false);
      }
    } catch (error) {
      setPromoError("Error validating promo code");
      setDiscount(0);
      setPromoSuccess(false);
    } finally {
      setPromoLoading(false);
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Guard: user must be logged in
    if (!token) {
      toast.error("Please log in to place an order");
      return;
    }

    // Guard: cart must not be empty
    if (getTotalCartAmount() === 0) {
      toast.error("Your cart is empty");
      return;
    }

    // Validate delivery information
    if (!data.firstName.trim() || !data.lastName.trim() || !data.email.trim() || 
        !data.street.trim() || !data.city.trim() || !data.phone.trim()) {
      toast.error("Please fill in all delivery information fields");
      return;
    }

    // Build the items array from cart
    let orderItems = [];
    foodList.forEach((item) => {
      if (cartItems[item._id] > 0) {
        orderItems.push({ 
          _id: item._id,
          name: item.name,
          price: item.price,
          quantity: cartItems[item._id],
          description: item.description
        });
      }
    });

    const subtotal = getTotalCartAmount();
    const deliveryFee = 20;
    let discountAmount = 0;
    
    if (discount > 0) {
      discountAmount = (subtotal * discount) / 100;
    }

    const totalAmount = subtotal + deliveryFee - discountAmount;

    const orderData = {
      address: data,
      items: orderItems,
      amount: totalAmount,
      discount: discount,
      discountAmount: discountAmount
    };

    console.log("Sending order data:", orderData);

    try {
      const response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token }
      });

      console.log("Order response:", response.data);

      if (response.data.success) {
        // Redirect to Stripe Checkout
        window.location.replace(response.data.session_url);
      } else {
        toast.error(response.data.message || "Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Order placement error:", error);
      const errorMessage = error.response?.data?.message || error.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  };

  // Reusable Tailwind class for all the neomorphic input fields
  const inputStyles = "w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3.5 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all";

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col lg:flex-row justify-between gap-12 mt-10 w-full"
    >
      {/* Left Side: Delivery Information Card */}
      <div className="w-full lg:w-3/5 flex flex-col gap-6 bg-[#e0e5ec] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight mb-2">
          Delivery <span className="text-indigo-600">Information</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <input type="text" name="firstName" value={data.firstName} onChange={onChangeHandler} placeholder="First name" className={inputStyles} required />
          <input type="text" name="lastName" value={data.lastName} onChange={onChangeHandler} placeholder="Last name" className={inputStyles} required />
        </div>
        
        <input type="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Email address" className={inputStyles} required />
        <input type="text" name="street" value={data.street} onChange={onChangeHandler} placeholder="Street address" className={inputStyles} required />
        
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <input type="text" name="city" value={data.city} onChange={onChangeHandler} placeholder="City" className={inputStyles} required />
          <input type="text" name="state" value={data.state} onChange={onChangeHandler} placeholder="State / Region" className={inputStyles} required />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full">
          <input type="text" name="zipcode" value={data.zipcode} onChange={onChangeHandler} placeholder="Zip code" className={inputStyles} required />
          <input type="text" name="country" value={data.country} onChange={onChangeHandler} placeholder="Country" className={inputStyles} required />
        </div>
        
        <input type="text" name="phone" value={data.phone} onChange={onChangeHandler} placeholder="Phone number" className={inputStyles} required />
      </div>

      {/* Right Side: Cart Totals Card */}
      <div className="w-full lg:w-2/5 flex flex-col gap-6 bg-[#e0e5ec] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] h-fit">
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

          {discount > 0 && (
            <>
              <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
              <div className="flex justify-between items-center text-green-600 font-bold">
                <p>Discount ({discount}%)</p>
                <p>-{((getTotalCartAmount() * discount) / 100).toFixed(2)} DH</p>
              </div>
            </>
          )}
          
          <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
          
          <div className="flex justify-between items-center text-gray-800 font-black text-lg">
            <p>Total</p>
            <p>{getTotalCartAmount() === 0 ? 0 : (getTotalCartAmount() + 20 - ((getTotalCartAmount() * discount) / 100)).toFixed(2)} DH</p>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="flex flex-col gap-3">
          <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>
          <p className="text-gray-500 font-medium text-sm">Have a promo code?</p>
          {promoSuccess ? (
            <div className="p-4 bg-green-50 border border-green-300 rounded-xl">
              <p className="text-green-700 font-bold text-sm">✓ Promo code applied successfully!</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="text" 
                  value={promoCode}
                  onChange={(e) => {
                    setPromoCode(e.target.value);
                    setPromoError("");
                  }}
                  placeholder="Enter promo code" 
                  className="flex-1 bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all text-sm"
                />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={validatePromoCode}
                  type="button"
                  disabled={promoLoading}
                  className="px-6 py-3 bg-gray-700 text-white font-bold rounded-xl shadow-lg shadow-gray-400 hover:bg-gray-800 transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {promoLoading ? "Validating..." : "Apply"}
                </motion.button>
              </div>
              {promoError && (
                <div className="p-3 bg-red-50 border border-red-300 rounded-xl">
                  <p className="text-red-700 font-bold text-sm">✗ {promoError}</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="mt-4 w-full py-4 bg-indigo-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition-colors"
        >
          PROCEED TO PAYMENT
        </motion.button>

        {!token && (
          <p className="text-center text-sm text-red-500 font-medium">
            Please log in to place an order.
          </p>
        )}
      </div>
    </motion.form>
  );
};

export default PlaceOrder;