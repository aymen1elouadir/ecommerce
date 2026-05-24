import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { motion } from 'framer-motion';

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
      if (response.data.success) {
        setData(response.data.data);
      } else {
        setData([]);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      setData([]);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const getStatusColor = (status) => {
    switch(status) {
      case "Design Preparation": return "bg-yellow-100 text-yellow-700";
      case "Out for delivery": return "bg-blue-100 text-blue-700";
      case "Delivered": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mt-10 flex flex-col gap-8 pb-12"
    >
      <div>
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em]">Order History</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight mt-1">
          My <span className="text-indigo-600">Orders</span>
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        {data && data.length > 0 ? data.map((order, index) => {
          const orderDate = formatDate(order.date);
          const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#e0e5ec] rounded-2xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] overflow-hidden hover:shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] transition-all"
            >
              {/* Order Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <p className="text-xs text-indigo-100 font-bold uppercase tracking-wide">Order ID</p>
                  <p className="text-white font-bold text-lg">{order._id.slice(-8).toUpperCase()}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-xs text-indigo-100 font-bold uppercase tracking-wide">Placed On</p>
                    <p className="text-white font-bold">{orderDate}</p>
                  </div>
                  <div className={`px-4 py-2 rounded-full font-bold text-sm ${getStatusColor(order.status)}`}>
                    {order.status}
                  </div>
                </div>
              </div>

              {/* Order Content */}
              <div className="p-6 flex flex-col gap-6">
                
                {/* Items List */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Design Items</p>
                  <div className="flex flex-col gap-2">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-300/40">
                        <span className="text-gray-700 font-medium">{item.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-500">Qty: {item.quantity}</span>
                          <span className="font-bold text-gray-800 min-w-fit">{(item.price * item.quantity).toFixed(0)} DH</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Delivery Address</p>
                  <div className="bg-[#d0d8e8] rounded-lg p-4 text-sm text-gray-700 font-medium">
                    <p className="font-bold text-gray-800 mb-1">{order.address.firstName} {order.address.lastName}</p>
                    <p>{order.address.street}</p>
                    <p>{order.address.city}, {order.address.state} {order.address.zipcode}</p>
                    <p>{order.address.country}</p>
                    <p className="mt-2 font-bold">📞 {order.address.phone}</p>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-[#d0d8e8] rounded-lg p-4">
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-400/40">
                    <span className="text-gray-700">Subtotal ({totalItems} items)</span>
                    <span className="font-bold text-gray-800">{(order.amount - 20).toFixed(0)} DH</span>
                  </div>
                  <div className="flex justify-between mb-3 pb-3 border-b border-gray-400/40">
                    <span className="text-gray-700">Delivery Fee</span>
                    <span className="font-bold text-gray-800">20 DH</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-black text-gray-800">Total Amount</span>
                    <span className="font-black text-indigo-600 text-xl">{order.amount.toFixed(0)} DH</span>
                  </div>
                </div>

                {/* Payment Status */}
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-600">
                    Payment Status: 
                    <span className={`ml-2 font-black ${order.payment ? 'text-green-600' : 'text-orange-600'}`}>
                      {order.payment ? '✓ Paid' : 'Pending'}
                    </span>
                  </p>
                  <motion.button 
                    onClick={fetchOrders}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:bg-indigo-700 transition-all text-sm"
                  >
                    Refresh Status
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        }) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center flex flex-col gap-4 bg-[#e0e5ec] rounded-2xl p-8"
          >
            <p className="text-2xl font-bold text-gray-400">No Orders Yet</p>
            <p className="text-gray-500 font-medium">Start shopping to place your first order!</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MyOrders;