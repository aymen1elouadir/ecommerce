// import React, { useState } from 'react'
// import { assets } from '../../assets/assets'
// import axios from "axios"
// import { useEffect } from 'react'
// import { toast } from 'react-toastify'

// const Add = ({url}) => {

//     const [image, setImage] = useState(false);
//     const [data, setData] = useState({
//         name: "",
//         description: "",
//         price: "",
//         category: "Salad"
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }


//     // useEffect(() => {
//     //     console.log(data)
//     // }, [data])


//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append("name", data.name)
//         formData.append("description", data.description)
//         formData.append("price", Number(data.price))
//         formData.append("category", data.category)
//         formData.append("image", image)

//         const response = await axios.post(`${url}/api/food/add`, formData);
        
//         if (response.data.success) {
//             setData({
//                 name: "",
//                 description: "",
//                 price: "",
//                 category: "Salad"
//             })
//             setImage(false)
//             toast.success(response.data.message)
//         } else {
//             toast.error(response.data.message)
//         }
//     }

//     return (
//         <div className='add'>
//             <form className='flex-col' onSubmit={onSubmitHandler}>
//                 <div className="add-img-upload flex-col">
//                     <p>Upload Image</p>
//                     <label htmlFor="image">
//                         <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
//                     </label>
//                     <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
//                 </div>
//                 <div className="add-product-name flex-col">
//                     <p>Product name</p>
//                     <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required />
//                 </div>
//                 <div className="add-product-description flex-col">
//                     <p>Product description</p>
//                     <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
//                 </div>
//                 <div className="add-category-price">
//                     <div className="add-category flex-col">
//                         <p>Product category</p>
//                         <select onChange={onChangeHandler} name="category">
//                             <option value="Salad">Salad</option>
//                             <option value="Rolls">Rolls</option>
//                             <option value="Deserts">Deserts</option>
//                             <option value="Sandwich">Sandwich</option>
//                             <option value="Cake">Cake</option>
//                             <option value="Pure Veg">Pure Veg</option>
//                             <option value="Pasta">Pasta</option>
//                             <option value="Noodles">Noodles</option>
//                         </select>
//                     </div>
//                     <div className="add-price flex-col">
//                         <p>Product price</p>
//                         <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' required />
//                     </div>
//                 </div>
//                 <button type='submit' className='add-btn'>ADD</button>
//             </form>
//         </div>
//     )
// }

// export default Add

// import React, { useState } from 'react';
// import { assets } from '../../assets/assets';
// import axios from "axios";
// import { toast } from 'react-toastify';

// const Add = ({ url }) => {
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad"
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("image", image);

//     try {
//       const response = await axios.post(`${url}/api/food/add`, formData);
//       if (response.data.success) {
//         setData({ name: "", description: "", price: "", category: "Salad" });
//         setImage(false);
//         toast.success(response.data.message);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("An error occurred while adding the product.");
//     }
//   };

//   // Reusable Neumorphic Input Style (Inset shadow for carved look)
//   const inputStyle = "w-full bg-[#E0E5EC] text-gray-700 font-medium px-5 py-4 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all";
  
//   // Reusable Label Style
//   const labelStyle = "font-black text-gray-500 uppercase tracking-widest text-xs mb-3 block";

//   return (
//     <div className="flex-1 max-w-[800px] mt-12 mb-20 ml-8 md:ml-12">
//       {/* 3D Container Card */}
//       <div className="bg-[#E0E5EC] p-8 md:p-12 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
//         <h3 className="text-3xl font-black text-gray-800 tracking-tight mb-8">
//           Add New <span className="text-orange-500">Item</span>
//         </h3>

//         <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
          
//           {/* Image Upload */}
//           <div>
//             <span className={labelStyle}>Upload Image</span>
//             <label htmlFor="image" className="cursor-pointer inline-block">
//               {image ? (
//                 <img 
//                   src={URL.createObjectURL(image)} 
//                   alt="Upload preview" 
//                   className="w-36 h-36 object-cover rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:scale-105 transition-transform" 
//                 />
//               ) : (
//                 <div className="w-36 h-36 flex items-center justify-center bg-[#E0E5EC] rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all">
//                   <img src={assets.upload_area} alt="Upload icon" className="w-12 opacity-50" />
//                 </div>
//               )}
//             </label>
//             <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
//           </div>

//           {/* Product Name */}
//           <div>
//             <label className={labelStyle}>Product name</label>
//             <input 
//               onChange={onChangeHandler} 
//               value={data.name} 
//               type="text" 
//               name="name" 
//               placeholder="e.g., Greek Salad" 
//               required 
//               className={inputStyle} 
//             />
//           </div>

//           {/* Product Description */}
//           <div>
//             <label className={labelStyle}>Product description</label>
//             <textarea 
//               onChange={onChangeHandler} 
//               value={data.description} 
//               name="description" 
//               rows="4" 
//               placeholder="Describe the ingredients and taste..." 
//               required 
//               className={`${inputStyle} resize-none`}
//             ></textarea>
//           </div>

//           {/* Category & Price Grid */}
//           <div className="flex flex-col sm:flex-row gap-8 w-full">
//             <div className="w-full sm:w-1/2">
//               <label className={labelStyle}>Category</label>
//               <select 
//                 onChange={onChangeHandler} 
//                 name="category" 
//                 value={data.category} 
//                 className={`${inputStyle} cursor-pointer appearance-none`}
//               >
//                 {['Salad', 'Rolls', 'Deserts', 'Sandwich', 'Cake', 'Pure Veg', 'Pasta', 'Noodles'].map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="w-full sm:w-1/2">
//               <label className={labelStyle}>Price ($)</label>
//               <input 
//                 onChange={onChangeHandler} 
//                 value={data.price} 
//                 type="number" 
//                 name="price" 
//                 placeholder="20" 
//                 min="0"
//                 required 
//                 className={inputStyle} 
//               />
//             </div>
//           </div>

//           {/* Engraved Divider */}
//           <div className="w-full h-[2px] bg-[#E0E5EC] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full my-2"></div>

//           {/* Submit Button (3D Pop-out to Press-in) */}
//           <button 
//             type="submit" 
//             className="w-full sm:w-auto px-12 py-4 bg-[#E0E5EC] text-orange-500 font-black tracking-widest uppercase rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all active:scale-95"
//           >
//             Add Item
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;
// import React, { useState } from 'react';
// import { assets } from '../../assets/assets';
// import axios from "axios";
// import { toast } from 'react-toastify';

// const Add = ({ url }) => {
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     // 1. Bdelna l'valeur par défaut hna
//     category: "Zellige Fassi" 
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("image", image);

//     try {
//       const response = await axios.post(`${url}/api/food/add`, formData);
//       if (response.data.success) {
//         // 2. Bdelna l'valeur dyal reset hna
//         setData({ name: "", description: "", price: "", category: "Zellige Fassi" });
//         setImage(false);
//         toast.success(response.data.message);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("An error occurred while adding the product.");
//     }
//   };

//   // Reusable Neumorphic Input Style (Inset shadow for carved look)
//   const inputStyle = "w-full bg-[#E0E5EC] text-gray-700 font-medium px-5 py-4 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all";
  
//   // Reusable Label Style
//   const labelStyle = "font-black text-gray-500 uppercase tracking-widest text-xs mb-3 block";

//   return (
//     <div className="flex-1 max-w-[800px] mt-12 mb-20 ml-8 md:ml-12">
//       {/* 3D Container Card */}
//       <div className="bg-[#E0E5EC] p-8 md:p-12 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
//         <h3 className="text-3xl font-black text-gray-800 tracking-tight mb-8">
//           Add New <span className="text-orange-500">Item</span>
//         </h3>

//         <form className="flex flex-col gap-8" onSubmit={onSubmitHandler}>
          
//           {/* Image Upload */}
//           <div>
//             <span className={labelStyle}>Upload Image</span>
//             <label htmlFor="image" className="cursor-pointer inline-block">
//               {image ? (
//                 <img 
//                   src={URL.createObjectURL(image)} 
//                   alt="Upload preview" 
//                   className="w-36 h-36 object-cover rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:scale-105 transition-transform" 
//                 />
//               ) : (
//                 <div className="w-36 h-36 flex items-center justify-center bg-[#E0E5EC] rounded-2xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] hover:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all">
//                   <img src={assets.upload_area} alt="Upload icon" className="w-12 opacity-50" />
//                 </div>
//               )}
//             </label>
//             <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
//           </div>

//           {/* Product Name */}
//           <div>
//             <label className={labelStyle}>Product name</label>
//             <input 
//               onChange={onChangeHandler} 
//               value={data.name} 
//               type="text" 
//               name="name" 
//               placeholder="e.g., Zellige Fassi Bleu 10x10" 
//               required 
//               className={inputStyle} 
//             />
//           </div>

//           {/* Product Description */}
//           <div>
//             <label className={labelStyle}>Product description</label>
//             <textarea 
//               onChange={onChangeHandler} 
//               value={data.description} 
//               name="description" 
//               rows="4" 
//               placeholder="Describe the style, origin, and colors..." 
//               required 
//               className={`${inputStyle} resize-none`}
//             ></textarea>
//           </div>

//           {/* Category & Price Grid */}
//           <div className="flex flex-col sm:flex-row gap-8 w-full">
//             <div className="w-full sm:w-1/2">
//               <label className={labelStyle}>Category</label>
//               <select 
//                 onChange={onChangeHandler} 
//                 name="category" 
//                 value={data.category} 
//                 className={`${inputStyle} cursor-pointer appearance-none`}
//               >
//                 {/* 3. Bdelna l'Array hna b les noms jdad */}
//                 {['Zellige Fassi', 'Bejmat', 'Khatam', 'Darj W Ktaf', 'Mseddes', 'Zellige Tetouani', 'Mutamman', 'Tawriq'].map(cat => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="w-full sm:w-1/2">
//               <label className={labelStyle}>Price ($)</label>
//               <input 
//                 onChange={onChangeHandler} 
//                 value={data.price} 
//                 type="number" 
//                 name="price" 
//                 placeholder="20" 
//                 min="0"
//                 required 
//                 className={inputStyle} 
//               />
//             </div>
//           </div>

//           {/* Engraved Divider */}
//           <div className="w-full h-[2px] bg-[#E0E5EC] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full my-2"></div>

//           {/* Submit Button */}
//           <button 
//             type="submit" 
//             className="w-full sm:w-auto px-12 py-4 bg-[#E0E5EC] text-orange-500 font-black tracking-widest uppercase rounded-2xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all active:scale-95"
//           >
//             Add Item
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Add;
import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import axios from "axios";
import { toast } from 'react-toastify';
import NeomorphicSelectAdmin from '../../components/NeomorphicSelect/NeomorphicSelect';

const Add = ({ url }) => {
  const [image, setImage] = useState(false);
  const [isAddingColor, setIsAddingColor] = useState(false);
  const [customColor, setCustomColor] = useState("");
  const [colorOptions, setColorOptions] = useState(() => {
    // Load from localStorage on initial render
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
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Zellige Fassi",
    size: "10x10cm",
    color: "Multi-color"
  });

  // Save colors to localStorage whenever colorOptions changes
  useEffect(() => {
    localStorage.setItem('zelligeColors', JSON.stringify(colorOptions));
  }, [colorOptions]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Allowed image types
      const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp', 'image/svg+xml'];
      
      if (allowedTypes.includes(file.type)) {
        setImage(file);
      } else {
        toast.error('Please upload an image file (PNG, JPG, JPEG, GIF, WebP, SVG)');
        e.target.value = '';
      }
    }
  };

  const handleAddColor = () => {
    if (customColor.trim()) {
      if (!colorOptions.includes(customColor)) {
        setColorOptions([...colorOptions, customColor]);
        toast.success(`"${customColor}" color added successfully!`);
      } else {
        toast.info(`"${customColor}" already exists in colors list`);
      }
      setData(data => ({ ...data, color: customColor }));
      setCustomColor("");
      setIsAddingColor(false);
    } else {
      toast.error('Please enter a color name');
    }
  };

  const validateForm = () => {
    // Validate all required fields
    if (!image) {
      toast.error('Please upload an image');
      return false;
    }
    if (!data.name.trim()) {
      toast.error('Please enter a design name');
      return false;
    }
    if (!data.description.trim()) {
      toast.error('Please enter a description');
      return false;
    }
    if (!data.price || Number(data.price) <= 0) {
      toast.error('Please enter a valid price');
      return false;
    }
    if (!data.size.trim()) {
      toast.error('Please select a tile size');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("size", data.size);
    formData.append("color", data.color);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setData({ name: "", description: "", price: "", category: "Zellige Fassi", size: "10x10cm", color: "Multi-color" });
        setImage(false);
        toast.success("Design added successfully to catalog!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while adding the product.");
    }
  };

  const handleKeyPress = (e) => {
    // Prevent form submission on Enter key for text inputs
    // Only allow Enter in textarea for line breaks
    if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
    }
  };

  const inputStyle = "w-full bg-[#E0E5EC] text-gray-700 font-medium px-5 py-4 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-all";
  const labelStyle = "font-black text-gray-400 uppercase tracking-widest text-[10px] mb-3 block";

  return (
    <div className="flex-1 max-w-[800px] mt-12 mb-20 ml-8 md:ml-12">
      {/* 3D Neumorphic Container */}
      <div className="bg-[#E0E5EC] p-8 md:p-12 rounded-[2.5rem] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        
        <div className="mb-10">
           <p className="text-xs font-bold text-indigo-600 uppercase tracking-[0.3em] mb-1">New Collection Piece</p>
           <h3 className="text-3xl font-black text-gray-800 tracking-tight">
             Add <span className="text-indigo-600">Design</span>
           </h3>
        </div>

        <form className="flex flex-col gap-6" onSubmit={onSubmitHandler} onKeyDown={(e) => {
          // Prevent form submission on Enter key everywhere except textarea
          if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
          }
        }}>
          
          {/* Image Upload Area - Full Width */}
          <div>
            <span className={labelStyle}>Piece Preview Image (PNG, JPG, JPEG)</span>
            <label htmlFor="image" className="cursor-pointer block w-full">
              {image ? (
                <div className="w-full p-4 rounded-3xl bg-[#E0E5EC] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
                  <img 
                    src={URL.createObjectURL(image)} 
                    alt="Upload preview" 
                    className="w-full h-60 object-cover rounded-2xl" 
                  />
                </div>
              ) : (
                <div className="w-full h-48 flex flex-col items-center justify-center bg-[#E0E5EC] rounded-3xl shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff] group transition-all border-2 border-dashed border-gray-300">
                  <img src={assets.upload_area} alt="Upload" className="w-16 opacity-30 group-hover:opacity-60 transition-opacity mb-3" />
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-tight">Click or drag image to upload</p>
                  <p className="text-xs font-medium text-gray-400 mt-1">PNG, JPG, JPEG - Maximum 5MB</p>
                </div>
              )}
            </label>
            <input onChange={handleImageChange} type="file" id="image" hidden required accept="image/*" />
          </div>

          {/* Design Name */}
          <div>
            <label className={labelStyle}>Design name</label>
            <input 
              onChange={onChangeHandler} 
              onKeyPress={handleKeyPress}
              value={data.name} 
              type="text" 
              name="name" 
              placeholder="e.g., Star of Fes - Royal Blue" 
              required 
              className={inputStyle} 
            />
          </div>

          {/* Design Description */}
          <div>
            <label className={labelStyle}>Technical description</label>
            <textarea 
              onChange={onChangeHandler} 
              value={data.description} 
              name="description" 
              rows="4" 
              placeholder="Specify clay type, glaze finish, and dimensions..." 
              required 
              className={`${inputStyle} resize-none`}
            ></textarea>
            <p className="text-[10px] text-gray-500 mt-1 italic">Press Enter for line breaks, not to save</p>
          </div>

          {/* Category & Size Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full items-start">
            <div className="sm:col-span-1">
              <NeomorphicSelectAdmin
                label="Zellige Type"
                value={data.category}
                onChange={onChangeHandler}
                name="category"
                options={['Zellige Fassi', 'Bejmat', 'Khatam', 'Darj W Ktaf', 'Mseddes', 'Zellige Tetouani', 'Mutamman', 'Tawriq', 'Modern'].map(cat => ({
                  value: cat,
                  label: cat
                }))}
              />
            </div>

            <div className="sm:col-span-1">
              <NeomorphicSelectAdmin
                label="Tile Size"
                value={data.size}
                onChange={onChangeHandler}
                name="size"
                options={['5x5cm', '10x10cm', '5x15cm', '15x15cm'].map(size => ({
                  value: size,
                  label: size
                }))}
              />
            </div>
          </div>

          {/* Price Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold tracking-widest text-gray-600 uppercase ml-2">Price (DH)</label>
            <input 
              onChange={onChangeHandler} 
              onKeyPress={handleKeyPress}
              value={data.price} 
              type="number" 
              name="price" 
              placeholder="250" 
              min="0"
              required 
              className={inputStyle} 
            />
          </div>

          {/* Color Selection with Add Color Option */}
          <div className="pt-2">
            {!isAddingColor ? (
              <NeomorphicSelectAdmin
                label="Color"
                value={data.color === "NEW_COLOR" ? "" : data.color}
                onChange={(e) => {
                  if (e.target.value === "ADD_COLOR") {
                    setIsAddingColor(true);
                  } else {
                    setData(data => ({ ...data, color: e.target.value }));
                  }
                }}
                name="color"
                options={[
                  { value: "ADD_COLOR", label: "+ Add New Color" },
                  ...colorOptions.map(color => ({
                    value: color,
                    label: color
                  }))
                ]}
              />
            ) : (
              <div>
                <label className={labelStyle}>Add New Color</label>
                <div className="flex gap-3 items-end">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      value={customColor} 
                      onChange={(e) => setCustomColor(e.target.value)} 
                      placeholder="e.g., Sunset Orange" 
                      className={inputStyle}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleAddColor();
                        }
                      }}
                      autoFocus
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={handleAddColor}
                    className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:bg-indigo-700 hover:shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] transition-all whitespace-nowrap"
                  >
                    Save
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      setIsAddingColor(false);
                      setCustomColor("");
                    }}
                    className="px-6 py-3 bg-[#E0E5EC] text-gray-700 font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all whitespace-nowrap"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="w-full h-[2px] bg-[#E0E5EC] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full my-2"></div>

          {/* Important Note */}
          <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4 rounded">
            <p className="text-xs font-bold text-indigo-700 tracking-wide">
              ⚠️ REMINDER: Clicking dropdowns, selecting colors, or typing in fields does NOT save the design. 
              You MUST click the "SAVE TO CATALOG" button below to save your work.
            </p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full sm:w-max px-16 py-4 bg-indigo-600 text-white font-black tracking-widest uppercase rounded-2xl shadow-[0_10px_20px_rgba(79,70,229,0.3)] hover:bg-indigo-700 hover:scale-[1.02] transition-all active:scale-95"
          >
            Save to Catalog
          </button>

        </form>
      </div>
    </div>
  );
};

export default Add;