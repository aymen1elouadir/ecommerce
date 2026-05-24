import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/frontend_assets/assets';

const CollectionPage = () => {
  const { foodList, url, addToCart, cartItems, removeFromCart } = useContext(StoreContext);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [priceRange, setPriceRange] = useState([100, 800]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(6);
  
  // Transform foodList to match required format
  const products = foodList.map(product => ({
    ...product,
    id: product._id,
    priceDisplay: `${product.price} DH / m²`,
    image: product.image ? `${url}/images/${product.image}` : '',
    details: product.description,
    desc: `${product.color ? product.color.toUpperCase() : ''} ${product.size ? '• ' + product.size.toUpperCase() : ''}`.trim(),
    type: product.category // backend uses 'category' field
  }));
  
  const toggleColor = (color) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const toggleType = (type) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleSize = (size) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const filteredProducts = products.filter(product => {
    const colorMatch = selectedColors.length === 0 || (product.color && selectedColors.includes(product.color));
    const typeMatch = selectedTypes.length === 0 || (product.category && selectedTypes.includes(product.category));
    const sizeMatch = selectedSizes.length === 0 || (product.size && selectedSizes.includes(product.size));
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return colorMatch && typeMatch && sizeMatch && priceMatch;
  });

  const displayedProducts = filteredProducts.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow(prev => prev + 6);
  };

  // Reset items to show when filters change
  useEffect(() => {
    setItemsToShow(6);
  }, [selectedColors, selectedTypes, selectedSizes, priceRange]);

  return (
    <>
      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          width: 100%;
          height: 12px;
          background: transparent;
          cursor: pointer;
        }
        
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e0e5ec;
          cursor: grab;
          box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff;
          border: none;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #e0e5ec;
          cursor: grab;
          box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff;
          border: none;
        }
        
        input[type="range"]:active::-webkit-slider-thumb {
          box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff;
        }
        
        input[type="range"]:active::-moz-range-thumb {
          box-shadow: inset 2px 2px 4px #bebebe, inset -2px -2px 4px #ffffff;
        }
      `}</style>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-12 w-full mt-6"
      >
      {/* --- NEUMORPHIC PAGE HEADER --- */}
      <div className="w-full bg-[#e0e5ec] p-8 md:p-12 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <p className="text-sm font-bold tracking-widest text-indigo-600 uppercase mb-2">
            Handcrafted in Morocco
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 tracking-tight">
            The <span className="text-indigo-600">Products</span>
          </h2>
        </div>
        <p className="max-w-md text-gray-500 font-medium leading-relaxed">
          Explore our curated gallery of authentic Zellige. Each tile is hand-chiselled using traditional techniques passed down through generations.
        </p>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        
        {/* --- NEUMORPHIC SIDEBAR FILTERS --- */}
        <aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-10 bg-[#e0e5ec] p-8 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] h-fit">
          
          {/* Color Palette */}
          <div>
            <h3 className="text-sm font-black text-gray-800 uppercase tracking-wider mb-5">Color Palette</h3>
            <ul className="flex flex-col gap-4 text-gray-600 font-medium">
              {[
                { name: 'Emerald', code: 'bg-[#1e4d3b]' },
                { name: 'Royal Blue', code: 'bg-[#314a6b]' },
                { name: 'Terracotta', code: 'bg-[#dd7d47]' },
                { name: 'Antique White', code: 'bg-[#e5e5e5]' }
              ].map((color, idx) => (
                <li 
                  key={idx} 
                  onClick={() => toggleColor(color.name)}
                  className={`flex items-center gap-4 cursor-pointer group transition-all ${selectedColors.includes(color.name) ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}
                >
                  <span className={`w-6 h-6 rounded-full ${color.code} shadow-[inset_2px_2px_4px_rgba(0,0,0,0.4)] group-hover:scale-110 transition-transform ${selectedColors.includes(color.name) ? 'ring-2 ring-indigo-600' : ''}`}></span> 
                  {color.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>

          {/* Zellige Type */}
          <div>
            <h3 className="text-sm font-black text-gray-800 uppercase tracking-wider mb-5">Zellige Type</h3>
            <ul className="flex flex-col gap-3 text-gray-600 font-medium">
              {['Zellige Fassi', 'Bejmat', 'Khatam', 'Darj W Ktaf', 'Mseddes', 'Zellige Tetouani', 'Mutamman', 'Tawriq', 'Modern'].map((type, idx) => (
                <li 
                  key={idx} 
                  onClick={() => toggleType(type)}
                  className={`flex items-center gap-3 cursor-pointer group transition-all ${selectedTypes.includes(type) ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}
                >
                  <div className={`w-5 h-5 rounded bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center transition-all ${selectedTypes.includes(type) ? 'bg-indigo-600 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]' : ''}`}>
                    <div className={`w-2 h-2 rounded-full ${selectedTypes.includes(type) ? 'bg-white' : 'bg-indigo-600 opacity-0 group-hover:opacity-100'} transition-all`}></div>
                  </div>
                  {type}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>

          {/* Tile Size */}
          <div>
            <h3 className="text-sm font-black text-gray-800 uppercase tracking-wider mb-5">Tile Size</h3>
            <ul className="flex flex-col gap-3 text-gray-600 font-medium">
              {['5x5cm', '10x10cm', '5x15cm', '15x15cm'].map((size, idx) => (
                <li 
                  key={idx} 
                  onClick={() => toggleSize(size)}
                  className={`flex items-center gap-3 cursor-pointer group transition-all ${selectedSizes.includes(size) ? 'text-indigo-600 font-bold' : 'hover:text-indigo-600'}`}
                >
                  <div className={`w-5 h-5 rounded bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center transition-all ${selectedSizes.includes(size) ? 'bg-indigo-600 shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]' : ''}`}>
                    <div className={`w-2 h-2 rounded-full ${selectedSizes.includes(size) ? 'bg-white' : 'bg-indigo-600 opacity-0 group-hover:opacity-100'} transition-all`}></div>
                  </div>
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full h-[2px] bg-[#e0e5ec] shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] rounded-full"></div>

          {/* Price Range Tracker */}
          <div>
            <h3 className="text-sm font-black text-gray-800 uppercase tracking-wider mb-5">Price Range</h3>
            
            {/* Range Sliders */}
            <div className="relative mb-6 pt-2 pb-4">
              {/* Min Price Input */}
              <input
                type="range"
                min="100"
                max="800"
                value={priceRange[0]}
                onChange={(e) => {
                  const newMin = Math.min(parseInt(e.target.value), priceRange[1]);
                  setPriceRange([newMin, priceRange[1]]);
                }}
                className="absolute w-full h-3 bg-transparent rounded-full appearance-none cursor-pointer z-20"
                style={{
                  top: '8px'
                }}
              />
              
              {/* Max Price Input */}
              <input
                type="range"
                min="100"
                max="800"
                value={priceRange[1]}
                onChange={(e) => {
                  const newMax = Math.max(parseInt(e.target.value), priceRange[0]);
                  setPriceRange([priceRange[0], newMax]);
                }}
                className="absolute w-full h-3 bg-transparent rounded-full appearance-none cursor-pointer z-21"
                style={{
                  top: '8px'
                }}
              />
              
              {/* Visual Track */}
              <div className="h-3 w-full bg-[#e0e5ec] rounded-full shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] pointer-events-none relative z-10">
                <div 
                  className="absolute h-full bg-indigo-500 rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]"
                  style={{
                    left: `${((priceRange[0] - 100) / 700) * 100}%`,
                    right: `${((800 - priceRange[1]) / 700) * 100}%`
                  }}
                ></div>
              </div>
            </div>
            
            {/* Price Display */}
            <div className="flex justify-between text-sm font-bold text-gray-600 bg-[#d0d8e8] p-3 rounded-lg">
              <span>{priceRange[0]} DH</span>
              <span>{priceRange[1]} DH</span>
            </div>
          </div>
        </aside>

        {/* --- NEUMORPHIC PRODUCT GRID --- */}
        <div className="flex-1 flex flex-col items-center">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
                {displayedProducts.map((product) => (
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    key={product.id} 
                    className="group cursor-pointer flex flex-col bg-[#e0e5ec] p-4 rounded-3xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] transition-all duration-300 hover:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff]"
                  >
                    {/* Image Rendering with Floating Add to Cart */}
                    <div className="w-full aspect-square rounded-2xl mb-5 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.2)] overflow-hidden bg-gray-200 relative">
                       <img 
                         src={product.image} 
                         alt={product.name} 
                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                       />
                       
                       {/* Floating Cart Control */}
                       <div className='absolute bottom-4 right-4'>
                         {!cartItems[product.id]
                           ? (
                               // INITIAL ADD BUTTON
                               <div 
                                 onClick={() => addToCart(product.id)} 
                                 className='w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-full cursor-pointer shadow-[0_10px_20px_rgba(79,70,229,0.5)] hover:bg-indigo-500 hover:scale-110 transition-all duration-300 active:scale-95'
                               >
                                 <img className='w-6' src={assets.add_icon_white} alt="Add" />
                               </div>
                           )
                           : (
                               // COUNTER PILL
                               <div className='flex items-center gap-3 bg-[#e0e5ec] p-2 rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] border border-white/50'>
                                 
                                 {/* Remove Button */}
                                 <div 
                                   onClick={() => removeFromCart(product.id)}
                                   className='w-9 h-9 flex items-center justify-center bg-[#e0e5ec] rounded-full cursor-pointer shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] hover:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all'
                                 >
                                   <img className='w-4' src={assets.remove_icon_red} alt="Remove" /> 
                                 </div>
                                 
                                 {/* Quantity */}
                                 <p className='font-black text-indigo-600 w-5 text-center text-lg'>{cartItems[product.id]}</p>
                                 
                                 {/* Add Button */}
                                 <div 
                                   onClick={() => addToCart(product.id)}
                                   className='w-9 h-9 flex items-center justify-center bg-[#e0e5ec] rounded-full cursor-pointer shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] hover:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all'
                                 >
                                   <img className='w-4' src={assets.add_icon_green} alt="Add" />
                                 </div>
                               </div>
                           )
                         }
                       </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="px-2 flex flex-col gap-1 mb-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-lg font-black text-gray-800 leading-tight">{product.name}</h4>
                        <p className="text-sm font-bold text-indigo-600 whitespace-nowrap">{product.priceDisplay}</p>
                      </div>
                      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                        {product.desc}
                      </p>
                    </div>

                    {/* Neomorphic Details Button */}
                    <motion.button 
                      onClick={() => setSelectedProduct(product)}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full py-3 bg-[#e0e5ec] text-indigo-600 font-bold rounded-xl shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all"
                    >
                      View Details
                    </motion.button>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              {displayedProducts.length < filteredProducts.length && (
                <motion.button 
                  onClick={handleLoadMore}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-16 px-10 py-4 bg-[#e0e5ec] text-indigo-600 font-bold rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
                >
                  Load More Pieces
                </motion.button>
              )}
            </>
          ) : (
            <div className="w-full py-16 text-center">
              <p className="text-gray-500 font-bold text-lg">No products match your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* --- PRODUCT DETAILS MODAL --- */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#e0e5ec] rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 hover:bg-white/20 rounded-full transition-all"
            >
              <X size={24} className="text-gray-800" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="flex items-center justify-center">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto rounded-2xl shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff]"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-4xl font-black text-gray-800 mb-2 tracking-tight">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
                    {selectedProduct.desc}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-indigo-600">
                    {selectedProduct.priceDisplay}
                  </span>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-sm font-black uppercase tracking-wider text-gray-800 mb-3">
                    About This Piece
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {selectedProduct.details}
                  </p>
                </div>

                {/* Specifications */}
                <div className="bg-[#d0d8e8] rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Color:</span>
                    <span className="text-gray-600 font-medium">{selectedProduct.color || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Zellige Type:</span>
                    <span className="text-gray-600 font-medium">{selectedProduct.category || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Size:</span>
                    <span className="text-gray-600 font-medium">{selectedProduct.size || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-700">Price per m²:</span>
                    <span className="font-bold text-indigo-600">{selectedProduct.priceDisplay}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <motion.button
                    onClick={() => {
                      addToCart(selectedProduct.id);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
                  >
                    Add to Cart
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 py-4 bg-[#d0d8e8] text-gray-800 font-bold rounded-2xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] hover:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-all"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
    </>
  );
};

export default CollectionPage;