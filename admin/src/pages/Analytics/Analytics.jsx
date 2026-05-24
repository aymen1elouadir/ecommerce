import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DollarSign, ShoppingBag, Clock, Package } from 'lucide-react';

const Analytics = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [foods, setFoods] = useState([]);

  // Njibo les commandes
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
      }
    } catch (error) {
      toast.error("Error fetching orders");
    }
  };

  // Njibo les produits (zellige/makla)
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      if (response.data.success) {
        setFoods(response.data.data);
      }
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchAllOrders();
    fetchFoodList();
  }, []);

  // L'7ssab (Calculations)
  const totalRevenue = orders.reduce((acc, order) => acc + order.amount, 0);
  const totalOrders = orders.length;
  // "Design Preparation" is the first status — matches the admin Orders dropdown and orderModel default
  const pendingOrders = orders.filter(order => order.status === "Design Preparation").length;
  const totalProducts = foods.length;

  // Design dyal les cartes Neomorphic
  const cardStyle = "flex items-center gap-6 p-8 bg-[#e0e5ec] rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]";
  const iconContainerStyle = "p-4 rounded-2xl bg-[#e0e5ec] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]";

  return (
    <div className="w-[85%] lg:w-[70%] ml-8 md:ml-12 mt-12 mb-20 flex flex-col gap-10">
      <h3 className="text-3xl font-black text-gray-800 tracking-tight">
        Dashboard <span className="text-indigo-600">Analytics</span>
      </h3>

      {/* Grid dyal les statistiques */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        
        {/* Total Revenue */}
        <div className={cardStyle}>
          <div className={`${iconContainerStyle} text-green-500`}>
            <DollarSign size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Total Revenue</p>
            <h4 className="text-3xl font-black text-gray-800">${totalRevenue}.00</h4>
          </div>
        </div>

        {/* Total Orders */}
        <div className={cardStyle}>
          <div className={`${iconContainerStyle} text-indigo-500`}>
            <ShoppingBag size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Total Orders</p>
            <h4 className="text-3xl font-black text-gray-800">{totalOrders}</h4>
          </div>
        </div>

        {/* Pending Orders */}
        <div className={cardStyle}>
          <div className={`${iconContainerStyle} text-orange-500`}>
            <Clock size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Pending Orders</p>
            <h4 className="text-3xl font-black text-gray-800">{pendingOrders}</h4>
          </div>
        </div>

        {/* Total Products */}
        <div className={cardStyle}>
          <div className={`${iconContainerStyle} text-blue-500`}>
            <Package size={32} />
          </div>
          <div>
            <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">Menu Items</p>
            <h4 className="text-3xl font-black text-gray-800">{totalProducts}</h4>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;