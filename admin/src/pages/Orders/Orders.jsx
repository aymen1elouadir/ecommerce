// import React, { useState, useEffect } from 'react'
// // import { toast } from 'react-toastify'
// import axios from 'axios'
// import { assets } from '../../assets/assets'

// const Orders = ({ url }) => {

//   const [orders, setOrders] = useState([]);

//   // جلب جميع الطلبات من الباكيند
//   const fetchAllOrders = async () => {
//     const response = await axios.get(url + "/api/order/list");
//     if (response.data.success) {
//       setOrders(response.data.data);
//     } else {
//       toast.error("Error fetching orders");
//     }
//   }

//   // تحديث حالة الطلب (Status)
//   const statusHandler = async (event, orderId) => {
//     const response = await axios.post(url + "/api/order/status", {
//       orderId,
//       status: event.target.value
//     })
//     if (response.data.success) {
//       await fetchAllOrders();
//     }
//   }

//   useEffect(() => {
//     fetchAllOrders();
//   }, [])

//   return (
//     <div className='order add'>
//       <h3>Order Page</h3>
//       <div className="order-list">
//         {orders.map((order, index) => (
//           <div key={index} className='order-item'>
//             <img src={assets.parcel_icon} alt="" />
//             <div>
//               <p className='order-item-food'>
//                 {order.items.map((item, index) => {
//                   if (index === order.items.length - 1) {
//                     return item.name + " x " + item.quantity
//                   } else {
//                     return item.name + " x " + item.quantity + ", "
//                   }
//                 })}
//               </p>
//               <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
//               <div className='order-item-address'>
//                 <p>{order.address.street + ","}</p>
//                 <p>{order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
//               </div>
//               <p className='order-item-phone'>{order.address.phone}</p>
//             </div>
//             <p>Items: {order.items.length}</p>
//             <p>${order.amount}</p>
//             <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
//               <option value="Food Processing">Food Processing</option>
//               <option value="Out for delivery">Out for delivery</option>
//               <option value="Delivered">Delivered</option>
//             </select>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Orders

import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets';
import NeomorphicSelectAdmin from '../../components/NeomorphicSelect/NeomorphicSelect';
import { motion } from 'framer-motion';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      toast.error("Failed to fetch orders");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Order status updated!");
      } else {
        toast.error(response.data.message || "Failed to update status");
      }
    } catch (error) {
      toast.error("Error updating status");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case 'Design Preparation':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-300';
      case 'Out for delivery':
        return 'bg-blue-100 text-blue-700 border border-blue-300';
      case 'Delivered':
        return 'bg-green-100 text-green-700 border border-green-300';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-300';
    }
  };

  return (
    <div className="flex-1 max-w-[1400px] mt-12 mb-20 ml-8 md:ml-12 flex flex-col gap-8">
      
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em]">Management</p>
        <h3 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight">Client Orders</h3>
        <p className="text-sm text-gray-500 mt-2">Total: <span className="font-bold text-indigo-600">{orders.length}</span> orders</p>
      </div>
      
      {/* Orders List */}
      <div className="flex flex-col gap-6">
        {loading ? (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-gray-400">Loading orders...</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="py-20 text-center flex flex-col gap-3 bg-[#E0E5EC] rounded-[2.5rem] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]">
            <p className="text-xl font-bold text-gray-400 uppercase tracking-widest">No orders yet</p>
            <p className="text-sm text-gray-500 italic">When clients purchase Zellige designs, they will appear here.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <motion.div
              key={order._id || index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-[#E0E5EC] rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] overflow-hidden hover:shadow-[25px_25px_70px_#bebebe,-25px_-25px_70px_#ffffff] transition-all"
            >
              
              {/* Header Row with Order ID, Date, Status */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest">Order ID</p>
                  <p className="font-mono text-white font-bold text-lg">{order._id?.substring(0, 12) || 'N/A'}...</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-white/80 uppercase tracking-widest">Date Placed</p>
                  <p className="text-white font-bold">{formatDate(order.createdAt)}</p>
                </div>
                
                <div className="ml-auto">
                  <span className={`px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-8 flex flex-col lg:flex-row gap-8">

                {/* Left: Customer & Items Info */}
                <div className="flex-1 flex flex-col gap-6">

                  {/* Customer Information */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Customer Details</p>
                    <div className="bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-start gap-3">
                      <div className="w-12 h-12 flex-shrink-0 bg-indigo-600 rounded-full flex items-center justify-center text-white font-black text-lg">
                        {order.address.firstName.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <p className="font-black text-gray-800 text-lg">{order.address.firstName} {order.address.lastName}</p>
                        <p className="text-sm text-gray-600 font-medium">{order.address.email || 'N/A'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">📍 Delivery Address</p>
                    <div className="bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                      <p className="font-medium text-gray-800">{order.address.street}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {order.address.city}, {order.address.zipcode}, {order.address.state}
                      </p>
                      <p className="text-sm text-gray-600">{order.address.country}</p>
                      <p className="font-bold text-indigo-600 mt-2 flex items-center gap-2">
                        <span>📞</span> {order.address.phone}
                      </p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Items Ordered</p>
                    <div className="bg-[#e0e5ec] p-5 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] space-y-2">
                      {order.items && order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-300 last:border-0">
                          <p className="font-bold text-gray-800">{item.name}</p>
                          <div className="text-right">
                            <p className="font-bold text-indigo-600">Qty: {item.quantity}</p>
                            <p className="text-sm text-gray-600">{item.price} DH</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right: Summary & Status Control */}
                <div className="w-full lg:w-80 flex flex-col gap-6">

                  {/* Order Summary */}
                  <div className="flex flex-col gap-4 bg-[#e0e5ec] p-6 rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Order Summary</p>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600 font-medium">Subtotal</p>
                      <p className="font-black text-gray-800">{(order.amount - 20).toFixed(2)} DH</p>
                    </div>
                    
                    <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                      <p className="text-gray-600 font-medium">Delivery Fee</p>
                      <p className="font-black text-gray-800">20 DH</p>
                    </div>
                    
                    <div className="flex justify-between items-center pt-1">
                      <p className="font-bold text-gray-800">Total Amount</p>
                      <p className="font-black text-xl text-indigo-600">{order.amount} DH</p>
                    </div>
                  </div>

                  {/* Payment Status */}
                  <div className="flex flex-col gap-2 bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-xs font-bold text-green-700 uppercase tracking-widest">✓ Payment Status</p>
                    <p className="font-bold text-green-700">Paid Successfully</p>
                  </div>

                  {/* Status Update Dropdown */}
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Update Status</p>
                    <NeomorphicSelectAdmin
                      value={order.status}
                      onChange={(event) => statusHandler(event, order._id)}
                      name="status"
                      options={[
                        { value: 'Design Preparation', label: '🎨 Design Preparation' },
                        { value: 'Out for delivery', label: '🚚 Out for delivery' },
                        { value: 'Delivered', label: '✓ Delivered' }
                      ]}
                    />
                  </div>

                </div>

              </div>

            </motion.div>
          ))
        )}
      </div>

    </div>
  );
};

export default Orders;