// import { useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = ({category}) => {

//   const {food_list} = useContext(StoreContext)

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item, index) => {
//           if(category==="All" || category === item.category) {
//             return  <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
//           }
//         })}
//       </div>
//     </div>
//   )
// }

// export default FoodDisplay

// import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.6 }}
//       className="w-full mt-10 py-8" 
//       id="food-display"
//     >
//       {/* Section Heading */}
//       <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight mb-10">
//         Top dishes near <span className="text-indigo-600">you</span>
//       </h2>

//       {/* Responsive Grid Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {food_list.map((item, index) => {
//           // Filtering logic based on selected category
//           if (category === "All" || category === item.category) {
//             return (
//               <FoodItem 
//                 key={index} 
//                 id={item._id} 
//                 name={item.name} 
//                 description={item.description} 
//                 price={item.price} 
//                 image={item.image} 
//               />
//             );
//           }
//           // Always return null when the condition isn't met to avoid React warnings
//           return null; 
//         })}
//       </div>
//     </motion.div>
//   );
// };

// export default FoodDisplay;
// import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
// import { StoreContext } from '../../context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodDisplay = ({ category }) => {
//   // 1. Tss7i7 hna (foodList machi food_list)
//   const { foodList } = useContext(StoreContext);

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       transition={{ duration: 0.6 }}
//       className="w-full mt-10 py-8" 
//       id="food-display"
//     >
//       {/* Section Heading */}
//       <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight mb-10">
//         Top dishes near <span className="text-indigo-600">you</span>
//       </h2>

//       {/* Responsive Grid Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
//         {/* 2. Tss7i7 hna (foodList?.map) */}
//         {foodList?.map((item, index) => {
//           // Filtering logic based on selected category
//           if (category === "All" || category === item.category) {
//             return (
//               <FoodItem 
//                 key={index} 
//                 id={item._id} 
//                 name={item.name} 
//                 description={item.description} 
//                 price={item.price} 
//                 image={item.image} 
//               />
//             );
//           }
//           return null; 
//         })}

//       </div>
//     </motion.div>
//   );
// };

// export default FoodDisplay;
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category, limit }) => {
  // Keeping 'foodList' so it doesn't break your StoreContext
  const { foodList } = useContext(StoreContext);

  // Get filtered products
  const filteredProducts = foodList?.filter(item => {
    if (category === "All" || !category) return true;
    return category === item.category;
  }) || [];

  // Limit items if specified
  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full mt-10 py-8" 
      id="product-display"
    >
      {/* Section Heading (Updated for Zellige) */}
      <h2 className="text-3xl md:text-4xl font-black text-gray-800 tracking-tight mb-10">
        Top designs for <span className="text-indigo-600">your space</span>
      </h2>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* Mapping through the filtered products */}
        {displayedProducts.map((item, index) => (
          <FoodItem 
            key={index} 
            id={item._id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
            image={item.image} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default FoodDisplay;