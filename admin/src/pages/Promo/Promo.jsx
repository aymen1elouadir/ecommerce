import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { motion } from 'framer-motion';
import NeomorphicSelectAdmin from '../../components/NeomorphicSelect/NeomorphicSelect';

const Promo = ({ url }) => {
  const [promos, setPromos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    code: "",
    discount: "",
    maxUses: "",
    expiryDate: ""
  });

  useEffect(() => {
    fetchPromos();
  }, []);

  const fetchPromos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url + "/api/promo/list");
      if (response.data.success) {
        setPromos(response.data.data);
      }
    } catch (error) {
      toast.error("Error fetching promo codes");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      code: "",
      discount: "",
      maxUses: "",
      expiryDate: ""
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.code.trim() || !formData.discount || !formData.maxUses || !formData.expiryDate) {
      toast.error("All fields are required");
      return;
    }

    try {
      if (editingId) {
        const response = await axios.put(url + `/api/promo/update/${editingId}`, {
          discount: Number(formData.discount),
          maxUses: Number(formData.maxUses),
          expiryDate: formData.expiryDate
        });

        if (response.data.success) {
          toast.success("Promo code updated successfully!");
          fetchPromos();
          resetForm();
        } else {
          toast.error(response.data.message || "Error updating promo code");
        }
      } else {
        const response = await axios.post(url + "/api/promo/create", {
          code: formData.code.toUpperCase(),
          discount: Number(formData.discount),
          maxUses: Number(formData.maxUses),
          expiryDate: formData.expiryDate
        });

        if (response.data.success) {
          toast.success("Promo code created successfully!");
          fetchPromos();
          resetForm();
        } else {
          toast.error(response.data.message || "Error creating promo code");
        }
      }
    } catch (error) {
      toast.error("Error saving promo code");
      console.error(error);
    }
  };

  const handleDelete = async (promoId) => {
    if (window.confirm("Are you sure you want to delete this promo code?")) {
      try {
        const response = await axios.delete(url + `/api/promo/delete/${promoId}`);
        if (response.data.success) {
          toast.success("Promo code deleted successfully!");
          fetchPromos();
        } else {
          toast.error(response.data.message || "Error deleting promo code");
        }
      } catch (error) {
        toast.error("Error deleting promo code");
        console.error(error);
      }
    }
  };

  const handleEdit = (promo) => {
    setFormData({
      code: promo.code,
      discount: promo.discount,
      maxUses: promo.maxUses,
      expiryDate: promo.expiryDate.split('T')[0]
    });
    setEditingId(promo._id);
    setShowForm(true);
  };

  const isExpired = (expiryDate) => new Date(expiryDate) < new Date();
  const isAlmostExpired = (expiryDate) => {
    const days = Math.ceil((new Date(expiryDate) - new Date()) / (1000 * 60 * 60 * 24));
    return days > 0 && days <= 7;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const inputStyles = "w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all";

  return (
    <div className="flex-1 max-w-[1400px] mt-12 mb-20 ml-8 md:ml-12 flex flex-col gap-8">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em]">Marketing</p>
          <h3 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight">Promo Codes</h3>
          <p className="text-sm text-gray-500 mt-2">Manage discount codes and offers</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            resetForm();
            setShowForm(true);
          }}
          className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition-colors w-fit"
        >
          + Create New Promo
        </motion.button>
      </div>

      {/* Create/Edit Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#E0E5EC] rounded-[2.5rem] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]"
        >
          <h4 className="text-2xl font-black text-gray-800 mb-6">
            {editingId ? "Edit Promo Code" : "Create New Promo Code"}
          </h4>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {!editingId && (
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Code</label>
                <input
                  type="text"
                  name="code"
                  value={formData.code}
                  onChange={handleInputChange}
                  placeholder="e.g., SUMMER50"
                  className={inputStyles}
                  disabled={editingId !== null}
                  required
                />
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Discount (%)</label>
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                placeholder="e.g., 15"
                min="0"
                max="100"
                className={inputStyles}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Max Uses</label>
              <input
                type="number"
                name="maxUses"
                value={formData.maxUses}
                onChange={handleInputChange}
                placeholder="e.g., 100"
                min="1"
                className={inputStyles}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Expiry Date</label>
              <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                className={inputStyles}
                required
              />
            </div>

            <div className="flex gap-3 md:col-span-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition-colors"
              >
                {editingId ? "Update" : "Create"} Promo Code
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={resetForm}
                className="flex-1 py-3 bg-gray-400 text-white font-bold rounded-xl shadow-lg shadow-gray-300 hover:bg-gray-500 transition-colors"
              >
                Cancel
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Promo List */}
      <div className="flex flex-col gap-6">
        {loading ? (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-gray-400">Loading promo codes...</p>
          </div>
        ) : promos.length === 0 ? (
          <div className="py-20 text-center flex flex-col gap-3 bg-[#E0E5EC] rounded-[2.5rem] shadow-[inset_10px_10px_20px_#bebebe,inset_-10px_-10px_20px_#ffffff]">
            <p className="text-xl font-bold text-gray-400 uppercase tracking-widest">No Promo Codes Yet</p>
            <p className="text-sm text-gray-500 italic">Click "Create New Promo" to get started</p>
          </div>
        ) : (
          promos.map((promo, index) => (
            <motion.div
              key={promo._id || index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="bg-[#E0E5EC] rounded-[2.5rem] p-8 shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] hover:shadow-[25px_25px_70px_#bebebe,-25px_-25px_70px_#ffffff] transition-all"
            >
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

                {/* Left: Code & Status */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <p className="text-4xl font-black text-indigo-600">{promo.code}</p>
                    <div className="flex gap-2">
                      {isExpired(promo.expiryDate) && (
                        <span className="px-3 py-1 bg-red-100 text-red-700 font-bold text-xs rounded-full uppercase tracking-wide border border-red-300">Expired</span>
                      )}
                      {isAlmostExpired(promo.expiryDate) && !isExpired(promo.expiryDate) && (
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 font-bold text-xs rounded-full uppercase tracking-wide border border-yellow-300">Expiring Soon</span>
                      )}
                      {!promo.isActive && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 font-bold text-xs rounded-full uppercase tracking-wide border border-gray-300">Inactive</span>
                      )}
                      {promo.isActive && !isExpired(promo.expiryDate) && (
                        <span className="px-3 py-1 bg-green-100 text-green-700 font-bold text-xs rounded-full uppercase tracking-wide border border-green-300">Active</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Discount: <span className="font-black text-indigo-600">{promo.discount}%</span> | 
                    Uses: <span className="font-black text-gray-800">{promo.usedCount}/{promo.maxUses}</span> | 
                    Expires: <span className="font-black text-gray-800">{formatDate(promo.expiryDate)}</span>
                  </p>
                </div>

                {/* Right: Progress Bar */}
                <div className="w-full lg:w-64 flex flex-col gap-2">
                  <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden shadow-[inset_2px_2px_4px_#bebebe]">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 transition-all"
                      style={{ width: `${(promo.usedCount / promo.maxUses) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 text-center font-bold">
                    {Math.round((promo.usedCount / promo.maxUses) * 100)}% Used
                  </p>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex gap-3 w-full lg:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEdit(promo)}
                    className="flex-1 lg:flex-none px-6 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-300 hover:bg-blue-700 transition-colors"
                  >
                    Edit
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDelete(promo._id)}
                    className="flex-1 lg:flex-none px-6 py-3 bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-300 hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))
        )}
      </div>

    </div>
  );
};

export default Promo;
