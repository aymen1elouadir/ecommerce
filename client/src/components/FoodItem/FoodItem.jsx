// import React, { useContext } from 'react'
// import { assets } from '../../assets/frontend_assets/assets'
// import { StoreContext } from '../../context/StoreContext'

// const FoodItem = ({ id, name, price, description, image }) => {

//     // const [itemCount, setItemCount] = useState(0);
//     const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
//     return (
//         <div className='food-item'>
//             <div className='food-item-img-container'>
//                 {/* Image source points to backend URL if integrated, or local assets */}
//                 <img className='food-item-image' src={url+"/images/"+image} alt="" />
//                 {!cartItems[id]
//                     ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />  // +
//                     : <div className='food-item-counter'>
//                         <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" /> 
//                         <p>{cartItems[id]}</p>
//                         <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
//                     </div>
//                 } 

//                 {/* {!itemCount 
//                 ? <img className='add' onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white}/>
//                 : <div className='food-item-counter'>
//                     <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red}  />
//                     <p>{itemCount}</p>
//                      <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green}  />
//                   </div>
//                 } */}
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p>
//                     <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{description}</p>
//                 <p className="food-item-price">${price}</p>
//             </div>
//         </div>
//     )
// }

// export default FoodItem
import React, { useContext } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
    
    return (
        <div className='group w-full bg-[#e0e5ec] rounded-[2rem] shadow-[10px_10px_20px_#bebebe,-10px_-10px_20px_#ffffff] transition-all duration-300 hover:shadow-[15px_15px_30px_#bebebe,-15px_-15px_30px_#ffffff] flex flex-col pb-5'>
            
            {/* Image & Cart Controls Container */}
            <div className='relative w-full aspect-square p-4 pb-2'>
                {/* Image */}
                <div className='w-full h-full overflow-hidden rounded-2xl shadow-sm'>
                    <img 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                        src={url + "/images/" + image} 
                        alt={name} 
                    />
                </div>
                
                {/* --- FLOATING CART CONTROLS (KBAR W BAYNIN DABA) --- */}
                <div className='absolute bottom-6 right-6'>
                    {!cartItems[id]
                        ? (
                            // INITIAL ADD BUTTON: Kbir (w-12 h-12) + Glowing Shadow
                            <div 
                                onClick={() => addToCart(id)} 
                                className='w-12 h-12 flex items-center justify-center bg-indigo-600 rounded-full cursor-pointer shadow-[0_10px_20px_rgba(79,70,229,0.5)] hover:bg-indigo-500 hover:scale-110 transition-all duration-300 active:scale-95'
                            >
                                <img className='w-6' src={assets.add_icon_white} alt="Add" />
                            </div>
                        )
                        : (
                            // COUNTER PILL: Kbert l-paddings w l-icons
                            <div className='flex items-center gap-3 bg-[#e0e5ec] p-2 rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] border border-white/50'>
                                
                                {/* Remove Button (-) */}
                                <div 
                                    onClick={() => removeFromCart(id)}
                                    className='w-9 h-9 flex items-center justify-center bg-[#e0e5ec] rounded-full cursor-pointer shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] hover:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all'
                                >
                                    <img className='w-4' src={assets.remove_icon_red} alt="Remove" /> 
                                </div>
                                
                                {/* Quantity Text */}
                                <p className='font-black text-indigo-600 w-5 text-center text-lg'>{cartItems[id]}</p>
                                
                                {/* Add Button (+) */}
                                <div 
                                    onClick={() => addToCart(id)}
                                    className='w-9 h-9 flex items-center justify-center bg-[#e0e5ec] rounded-full cursor-pointer shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff] hover:shadow-[3px_3px_6px_#bebebe,-3px_-3px_6px_#ffffff] transition-all'
                                >
                                    <img className='w-4' src={assets.add_icon_green} alt="Add" />
                                </div>
                            </div>
                        )
                    } 
                </div>
            </div>

            {/* Product Information */}
            <div className="px-5 pt-3 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-2">
                    <p className="text-lg font-black text-gray-800 leading-tight">{name}</p>
                    <img className="h-3.5 mt-1 object-contain" src={assets.rating_starts} alt="Rating" />
                </div>
                
                <p className="text-xs font-bold tracking-wider text-gray-400 uppercase line-clamp-2">
                    {description}
                </p>
                
                <p className="text-xl font-black text-indigo-600 mt-1">{price} DH</p>
            </div>
            
        </div>
    )
}

export default FoodItem