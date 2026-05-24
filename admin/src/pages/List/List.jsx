// import React, { useEffect, useState } from 'react'
// import './List.css'
// import axios from "axios"
// // import { toast } from "react-toastify"

// const List = ({ url }) => {

//   const [list, setList] = useState([]);

//   // جلب قائمة الطعام من الباكيند
//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/food/list`);
//     if (response.data.success) {
//       setList(response.data.data);
//     } else {
//       toast.error("Error fetching list");
//     }
//   }

//   // حذف منتج معين
//   const removeFood = async (foodId) => {
//     const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
//     await fetchList(); // تحديث القائمة بعد الحذف
//     if (response.data.success) {
//       toast.success(response.data.message);
//     } else {
//       toast.error("Error");
//     }
//   }

//   useEffect(() => {
//     fetchList();
//   }, [])

//   return (
//     <div className='list add flex-col'>
//       <p>All Foods List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.map((item, index) => {
//           return (
//             <div key={index} className='list-table-format'>
//               <img src={`${url}/images/` + item.image} alt="" />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>${item.price}</p>
//               <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default List

// import React, { useEffect, useState } from 'react';
// import axios from "axios";
// import { toast } from "react-toastify"; 

// const List = ({ url }) => {
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/food/list`);
//     if (response.data.success) {
//       setList(response.data.data);
//     } else {
//       toast.error("Error fetching list");
//     }
//   };

//   const removeFood = async (foodId) => {
//     const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
//     await fetchList(); 
//     if (response.data.success) {
//       toast.success(response.data.message);
//     } else {
//       toast.error("Error deleting product");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   const gridLayout = "grid grid-cols-[80px_2fr_1.5fr_1fr_80px] items-center gap-6 px-4 py-3";

//   return (
//     <div className="flex-1 bg-[#E0E5EC] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col gap-6 w-full mb-12">
//       <h3 className="text-3xl font-black text-gray-800 tracking-tight">All Foods List</h3>
      
//       {/* Table Header */}
//       <div className={`${gridLayout} font-black text-gray-400 uppercase tracking-widest text-xs`}>
//         <p>Image</p>
//         <p>Name</p>
//         <p>Category</p>
//         <p>Price</p>
//         <p className="text-center">Action</p>
//       </div>

//       {/* Engraved Divider */}
//       <div className="w-full h-[2px] bg-[#E0E5EC] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full mb-2"></div>

//       {/* Table Rows */}
//       <div className="flex flex-col gap-5">
//         {list.map((item, index) => (
//           <div 
//             key={index} 
//             className={`${gridLayout} bg-[#E0E5EC] rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] text-gray-700 text-sm md:text-base font-medium`}
//           >
//             {/* Image */}
//             <div className="p-1 rounded-xl bg-[#E0E5EC] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
//               <img src={`${url}/images/` + item.image} alt={item.name} className="w-full h-14 object-cover rounded-lg" />
//             </div>
            
//             <p className="font-bold text-gray-800">{item.name}</p>
//             <p className="text-gray-500">{item.category}</p>
//             <p className="font-bold text-orange-500">${item.price}</p>
            
//             {/* 3D Neumorphic Delete Button */}
//             <button 
//               onClick={() => removeFood(item._id)} 
//               className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E0E5EC] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] text-red-500 font-bold transition-all mx-auto active:scale-95"
//               title="Remove Item"
//             >
//               ✕
//             </button>
//           </div>
//         ))}

//         {list.length === 0 && (
//           <div className="py-12 text-center text-gray-500 font-medium">
//             No items found. Add some foods!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from "react-toastify";
import { X } from 'lucide-react';
import NeomorphicSelectAdmin from '../../components/NeomorphicSelect/NeomorphicSelect';

const List = ({ url }) => {
  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [colorOptions, setColorOptions] = useState(() => {
    const savedColors = localStorage.getItem('zelligeColors');
    if (savedColors) {
      try {
        return JSON.parse(savedColors);
      } catch (e) {
        return ['Multi-color', 'Emerald', 'Royal Blue', 'Terracotta', 'Antique White'];
      }
    }
    return ['Multi-color', 'Emerald', 'Royal Blue', 'Terracotta', 'Antique White'];
  });
  const [editData, setEditData] = useState(null);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching collection");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    if (response.data.success) {
      toast.success("Design removed successfully");
      setDeleteConfirmId(null);
      await fetchList();
    } else {
      toast.error("Error deleting product");
    }
  };

  const confirmDelete = async () => {
    if (deleteConfirmId) {
      await removeFood(deleteConfirmId);
    }
  };

  const startEdit = (item) => {
    setEditingId(item._id);
    setEditData({ ...item });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditData(null);
  };

  const handleEditChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const saveEdit = async () => {
    if (!editData.name.trim() || !editData.description.trim() || !editData.price) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      const response = await axios.post(`${url}/api/food/update`, {
        id: editingId,
        name: editData.name,
        description: editData.description,
        price: Number(editData.price),
        category: editData.category,
        size: editData.size,
        color: editData.color
      });

      if (response.data.success) {
        toast.success('Design updated successfully');
        setEditingId(null);
        setEditData(null);
        await fetchList();
      } else {
        toast.error(response.data.message || 'Error updating product');
      }
    } catch (error) {
      console.error('Error details:', error);
      toast.error(error.response?.data?.message || error.message || 'Error updating product');
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  const inputStyle = "w-full bg-[#E0E5EC] text-gray-700 font-medium px-4 py-3 rounded-lg outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all text-sm";
  const labelStyle = "font-black text-gray-400 uppercase tracking-widest text-[9px] mb-2 block";

  return (
    <div className="flex-1 bg-[#E0E5EC] p-8 md:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col gap-6 w-full mb-12">
      
      <div className="flex flex-col gap-1">
        <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em]">Inventory Management</p>
        <h3 className="text-3xl font-black text-gray-800 tracking-tight">Artisanal Catalog</h3>
      </div>
      
      {/* Product Cards */}
      <div className="flex flex-col gap-6">
        {list.map((item) => (
          <div key={item._id} className={`bg-[#E0E5EC] rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] border border-gray-300/20 ${editingId === item._id ? 'overflow-visible' : 'overflow-hidden'}`}>
            
            {editingId === item._id ? (
              // Edit Mode - Scrollable Container
              <div className="p-6 flex flex-col gap-5 max-h-[500px] overflow-y-auto">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-800">Edit Design</h4>
                  <button onClick={cancelEdit} className="text-gray-500 hover:text-gray-700">
                    <X size={20} />
                  </button>
                </div>

                <div>
                  <label className={labelStyle}>Design Name</label>
                  <input 
                    type="text"
                    value={editData.name}
                    onChange={(e) => handleEditChange('name', e.target.value)}
                    className={inputStyle}
                    placeholder="Design name"
                  />
                </div>

                <div>
                  <label className={labelStyle}>Description</label>
                  <textarea
                    value={editData.description}
                    onChange={(e) => handleEditChange('description', e.target.value)}
                    className={`${inputStyle} resize-none`}
                    rows="3"
                    placeholder="Description"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className={labelStyle}>Price (DH)</label>
                    <input 
                      type="number"
                      value={editData.price}
                      onChange={(e) => handleEditChange('price', e.target.value)}
                      className={inputStyle}
                      placeholder="250"
                      min="0"
                    />
                  </div>

                  <div>
                    <NeomorphicSelectAdmin
                      label="Zellige Type"
                      value={editData.category}
                      onChange={(e) => handleEditChange('category', e.target.value)}
                      options={['Zellige Fassi', 'Bejmat', 'Khatam', 'Darj W Ktaf', 'Mseddes', 'Zellige Tetouani', 'Mutamman', 'Tawriq', 'Modern'].map(cat => ({
                        value: cat,
                        label: cat
                      }))}
                    />
                  </div>

                  <div>
                    <NeomorphicSelectAdmin
                      label="Tile Size"
                      value={editData.size}
                      onChange={(e) => handleEditChange('size', e.target.value)}
                      options={['5x5cm', '10x10cm', '5x15cm', '15x15cm'].map(size => ({
                        value: size,
                        label: size
                      }))}
                    />
                  </div>
                </div>

                <div>
                  <NeomorphicSelectAdmin
                    label="Color"
                    value={editData.color}
                    onChange={(e) => handleEditChange('color', e.target.value)}
                    options={colorOptions.map(color => ({
                      value: color,
                      label: color
                    }))}
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button 
                    onClick={saveEdit}
                    className="flex-1 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:bg-indigo-700 transition-all"
                  >
                    Save Changes
                  </button>
                  <button 
                    onClick={cancelEdit}
                    className="flex-1 py-3 bg-[#E0E5EC] text-gray-700 font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              // View Mode
              <div className="p-6 flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="sm:w-32 flex-shrink-0">
                  <div className="rounded-lg overflow-hidden shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]">
                    <img src={`${url}/images/${item.image}`} alt={item.name} className="w-full h-32 object-cover" />
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col gap-3">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Design Name</p>
                    <p className="text-lg font-bold text-gray-800">{item.name}</p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Description</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Price</p>
                      <p className="text-sm font-bold text-indigo-600">{item.price} DH</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Type</p>
                      <p className="text-sm font-medium text-gray-700">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Size</p>
                      <p className="text-sm font-medium text-gray-700">{item.size}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Color</p>
                      <p className="text-sm font-medium text-gray-700">{item.color}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-shrink-0">
                  <button 
                    onClick={() => startEdit(item)}
                    className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:bg-indigo-700 transition-all text-sm whitespace-nowrap"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => setDeleteConfirmId(item._id)}
                    className="px-6 py-2 bg-[#E0E5EC] text-red-600 font-bold rounded-lg shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {list.length === 0 && (
          <div className="py-20 text-center flex flex-col gap-3">
            <p className="text-xl font-bold text-gray-400 uppercase tracking-widest">No designs found</p>
            <p className="text-sm text-gray-500">Your artisanal catalog is currently empty.</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-[#E0E5EC] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 max-w-sm w-full">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl text-red-600">⚠️</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-800 mb-2">Delete Design</h3>
                <p className="text-sm text-gray-600">Are you sure you want to delete this design? This action cannot be undone.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button 
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-3 bg-[#E0E5EC] text-gray-700 font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="flex-1 py-3 bg-red-600 text-white font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:bg-red-700 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;