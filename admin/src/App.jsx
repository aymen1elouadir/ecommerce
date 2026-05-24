
// import Navbar from './components/Navbar/Navbar'
// import Sidebar from './components/Sidebar/Sidebar'
// import { Routes, Route } from 'react-router-dom'
// import Add from './pages/Add/Add'
// import List from './pages/List/List'
// import Orders from './pages/Orders/Orders'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {

//   // هذا هو الرابط الأساسي للباكيند، ستحتاجه في كل الصفحات
//   const url = "http://localhost:4000"

//   return (
//     <div>
//       <ToastContainer/>
//       <Navbar />
//       <hr />
//       <div className="app-content">
//         <Sidebar />
//         <Routes>
//           <Route path="/add" element={<Add url={url} />} />
//           <Route path="/list" element={<List url={url}  />} />
//           <Route path="/orders" element={<Orders  />} />
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import Analytics from './pages/Analytics/Analytics'
import Promo from './pages/Promo/Promo'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";

  return (
    // Global Neumorphic Background
    <div className="h-full bg-[#E0E5EC] font-sans text-gray-800 selection:bg-orange-200">
      <ToastContainer />
      <Navbar />
      
      <div className="flex w-[95%] max-w-[1440px] mx-auto gap-8 pb-10">
        <Sidebar />
        
        <div className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Navigate to="/add" replace />} />
            <Route path="/add" element={<Add url={url} />} />
            <Route path="/list" element={<List url={url} />} />
            <Route path="/orders" element={<Orders url={url} />} /> 
            <Route path='/analytics' element={<Analytics url={url}/>}/>
            <Route path='/promo' element={<Promo url={url}/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;