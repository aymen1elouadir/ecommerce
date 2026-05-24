// import Header from '../../components/Header/Header'
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
// import { useState } from 'react'
// import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
// import AppDownload from '../../components/AppDownload/AppDownload'

// const Home = () => {

//   const [category, setCategory] = useState("All");
//   return (
//     <div>
//       <Header />
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <FoodDisplay category={category}/>
//       <AppDownload/>
//     </div>
//   )
// }

// export default Home

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/Header/Header';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';
import MapSection from '../../components/MapSection/MapSection';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    // A subtle page-level fade-in, with flex-col and gaps to keep sections spaced perfectly
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col w-full gap-8 md:gap-16"
    >
      <Header />
      <FoodDisplay category={category} limit={3} />
      <AppDownload />
      <MapSection />
    </motion.div>
  );
};

export default Home;