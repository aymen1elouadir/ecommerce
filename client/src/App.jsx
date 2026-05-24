// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import Footer from './components/Footer/Footer'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import { useState } from 'react'
// import Login from './components/Login/Login'
// import AddTest from './Test'


// const App = () => {

//   const [showLogin,setShowLogin] = useState(false)
//   return (
//     <>
//       {showLogin ? <Login setShowLogin={setShowLogin}/> : <></>}
//       <div className='app'>
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />
//           <Route path='/order' element={<PlaceOrder />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App

// import Navbar from './components/Navbar/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Cart/Cart'
// import Footer from './components/Footer/Footer'
// import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import { useState } from 'react'
// import Login from './components/Login/Login'

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false)

//   return (
//     <div className="min-h-screen bg-[#e0e5ec] font-sans text-gray-800 selection:bg-indigo-200 overflow-x-hidden">
      
//       {showLogin && <Login setShowLogin={setShowLogin} />}
      
//       {/* Changed here: w-full and adjusted padding instead of max-w */}
//       <div className="w-full pt-[120px] pb-10 px-4 sm:px-10 lg:px-16">
//         <Navbar setShowLogin={setShowLogin} />
        
//         <main className="min-h-[60vh]">
//           <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/order' element={<PlaceOrder />} />
//           </Routes>
//         </main>
//       </div>
      
//       <Footer />
//     </div>
//   )
// }

// export default App
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { useState } from 'react'
import Login from './components/Login/Login'
import CollectionPage from './components/CollectionPage/CollectionPage'

// 1. Zidna les imports dyal Toastify hna
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 2. Zidna les imports dyal les pages jdad (khass tkon mssaybhom f dossier pages)
import Verify from './pages/Verify/Verify';
import MyOrders from './pages/MyOrders/MyOrders';
import ContactPage from './components/ContactPage/ContactPage'
import AboutUs from './pages/AboutUs/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import MobileApp from './pages/MobileApp/MobileApp';

const App = () => {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="min-h-screen bg-[#e0e5ec] font-sans text-gray-800 selection:bg-indigo-200 overflow-x-hidden">
      
      {/* 3. 7tina ToastContainer hna bach ykhdm f ga3 l'application */}
      <ToastContainer />
      
      {showLogin && <Login setShowLogin={setShowLogin} />}
      
      {/* Changed here: w-full and adjusted padding instead of max-w */}
      <div className="w-full pt-[120px] pb-10 px-4 sm:px-10 lg:px-16">
        <Navbar setShowLogin={setShowLogin} />
        
        <main className="min-h-[60vh]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<PlaceOrder />} />
            <Route path='/collection' element={<CollectionPage />} />
            <Route path='/products' element={<CollectionPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/mobile-app' element={<MobileApp />} />
            
            {/* 4. Zidna les routes dyal l'paiement w les commandes hna */}
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrders />} />
            
            {/* About Us and Privacy Policy routes */}
            <Route path='/about' element={<AboutUs />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
          </Routes>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}

export default App