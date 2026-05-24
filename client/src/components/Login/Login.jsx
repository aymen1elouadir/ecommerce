// import { useContext, useEffect, useState } from 'react'
// import './Login.css'
// import { assets } from '../../assets/frontend_assets/assets'
// import { StoreContext } from '../../context/StoreContext'
// import axios from "axios"

// const Login = ({setShowLogin}) => {

//   const {url,setToken} = useContext(StoreContext)

//   const [currState, setCurrState] = useState("Login")
//   const [data, setData] = useState({
//     name:"",
//     email:"",
//     password:""
//   })

//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setData(data => ({...data,[name]:value}))
//   }

// //   useEffect(() => {
// //     console.log(data)
// //   }, [data])

//   const onLogin = async (e) => {
//     e.preventDefault()
//     let newUrl = url;
//     if(currState === "Login"){
//       newUrl += "/api/user/login"
//     }
//     else{
//       newUrl += "/api/user/register"
//     }

//     const response = await axios.post(newUrl, data);

//     if(response.data.success){
//        setToken(response.data.token);
//        localStorage.setItem("token",response.data.token);
//        setShowLogin(false)
//     }
//     else {
//       alert(response.data.message)
//     }
//   }


//   return (
//     <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">

//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
//                     <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//                     <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//                 </div>
//                 <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                 </div>
//                 {currState === "Login"
//                     ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                     : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                 }
//             </form>
//     </div>
//   )
// }

// export default Login
// import React, { useState, useContext } from 'react'
// import { assets } from '../../assets/frontend_assets/assets'
// import { StoreContext } from '../../context/StoreContext'
// import axios from "axios"

// const Login = ({ setShowLogin }) => {

//     const { url, setToken } = useContext(StoreContext)
//     const [currState, setCurrState] = useState("Login")
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         password: ""
//     })

//     const onChangeHandler = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setData(data => ({ ...data, [name]: value }))
//     }

//     const onLogin = async (event) => {
//         event.preventDefault()
//         let newUrl = url;
//         if (currState === "Login") {
//             newUrl += "/api/user/login"
//         } else {
//             newUrl += "/api/user/register"
//         }

//         const response = await axios.post(newUrl, data);

//         if (response.data.success) {
//             setToken(response.data.token);
//             localStorage.setItem("token", response.data.token);
//             setShowLogin(false)
//         } else {
//             alert(response.data.message)
//         }
//     }

//     return (
//         <div className='login-popup'>
//             <form onSubmit={onLogin} className="login-popup-container">
//                 <div className="login-popup-title">
//                     <h2>{currState}</h2>
//                     <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
//                 </div>
//                 <div className="login-popup-inputs">
//                     {currState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
//                     <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
//                     <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
//                 </div>
//                 <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>
//                 <div className="login-popup-condition">
//                     <input type="checkbox" required />
//                     <p>By continuing, I agree to the terms of use & privacy policy.</p>
//                 </div>
//                 {currState === "Login"
//                     ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
//                     : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
//                 }
//             </form>
//         </div>
//     )
// }

// export default Login

// import React, { useState, useContext } from 'react';
// import { motion } from 'framer-motion';
// import { assets } from '../../assets/frontend_assets/assets';
// import { StoreContext } from '../../context/StoreContext';
// import axios from "axios";

// const Login = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currState, setCurrState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: ""
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData(data => ({ ...data, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currState === "Login") {
//       newUrl += "/api/user/login";
//     } else {
//       newUrl += "/api/user/register";
//     }

//     try {
//       const response = await axios.post(newUrl, data);
//       if (response.data.success) {
//         setToken(response.data.token);
//         localStorage.setItem("token", response.data.token);
//         setShowLogin(false);
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };

//   return (
//     // Blurred Overlay Background
//     <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      
//       {/* Neomorphic Popup Card */}
//       <motion.form 
//         initial={{ opacity: 0, scale: 0.8, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 0.8, y: 20 }}
//         transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
//         onSubmit={onLogin} 
//         className="relative bg-[#e0e5ec] w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col gap-6"
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center mb-2">
//           <h2 className="text-3xl font-black text-gray-800 tracking-tight">{currState}</h2>
          
//           {/* Neomorphic Close Button */}
//           <motion.div 
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setShowLogin(false)} 
//             className="cursor-pointer p-2 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all"
//           >
//             <img src={assets.cross_icon} alt="Close" className="w-4 h-4 opacity-70" />
//           </motion.div>
//         </div>

//         {/* Inputs Section */}
//         <div className="flex flex-col gap-4">
//           {currState === "Sign Up" && (
//             <input 
//               name='name' 
//               onChange={onChangeHandler} 
//               value={data.name} 
//               type="text" 
//               placeholder='Your name' 
//               required 
//               className="w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
//             />
//           )}
//           <input 
//             name='email' 
//             onChange={onChangeHandler} 
//             value={data.email} 
//             type="email" 
//             placeholder='Your email' 
//             required 
//             className="w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
//           />
//           <input 
//             name='password' 
//             onChange={onChangeHandler} 
//             value={data.password} 
//             type="password" 
//             placeholder='Password' 
//             required 
//             className="w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
//           />
//         </div>

//         {/* Submit Button */}
//         <motion.button 
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type='submit'
//           className="w-full py-4 mt-2 bg-indigo-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition-colors"
//         >
//           {currState === "Sign Up" ? "Create account" : "Login"}
//         </motion.button>

//         {/* Terms Condition */}
//         <div className="flex items-start gap-3 mt-2 text-sm text-gray-500 font-medium">
//           <input 
//             type="checkbox" 
//             required 
//             className="mt-1 w-4 h-4 text-indigo-600 bg-[#e0e5ec] border-gray-300 rounded focus:ring-indigo-500 cursor-pointer shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]"
//           />
//           <p className="leading-tight">By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {/* Toggle State Links */}
//         <div className="text-center text-gray-500 font-medium mt-2">
//           {currState === "Login" ? (
//             <p>
//               Create a new account?{' '}
//               <span 
//                 onClick={() => setCurrState("Sign Up")} 
//                 className="text-indigo-600 font-bold cursor-pointer hover:underline"
//               >
//                 Click here
//               </span>
//             </p>
//           ) : (
//             <p>
//               Already have an account?{' '}
//               <span 
//                 onClick={() => setCurrState("Login")} 
//                 className="text-indigo-600 font-bold cursor-pointer hover:underline"
//               >
//                 Login here
//               </span>
//             </p>
//           )}
//         </div>
//       </motion.form>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";
import { toast } from 'react-toastify'; // 1. Zidna l'import hna

const Login = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        
        // 2. Zidna message d naja7 (Success)
        toast.success(currState === "Login" ? "Welcome back!" : "Account created successfully!");
        
      } else {
        // 3. Bdelna alert b toast.error
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Login Error:", error);
      // 4. Bdelna alert b toast.error f l'catch
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    // Blurred Overlay Background
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      
      {/* Neomorphic Popup Card */}
      <motion.form 
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
        onSubmit={onLogin} 
        className="relative bg-[#e0e5ec] w-full max-w-md p-8 sm:p-10 rounded-3xl shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">{currState}</h2>
          
          {/* Neomorphic Close Button */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowLogin(false)} 
            className="cursor-pointer p-2 rounded-full bg-[#e0e5ec] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff] transition-all"
          >
            <img src={assets.cross_icon} alt="Close" className="w-4 h-4 opacity-70" />
          </motion.div>
        </div>

        {/* Inputs Section */}
        <div className="flex flex-col gap-4">
          {currState === "Sign Up" && (
            <input 
              name='name' 
              onChange={onChangeHandler} 
              value={data.name} 
              type="text" 
              placeholder='Your name' 
              required 
              className="w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
            />
          )}
          <input 
            name='email' 
            onChange={onChangeHandler} 
            value={data.email} 
            type="email" 
            placeholder='Your email' 
            required 
            className="w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
          />
          <input 
            name='password' 
            onChange={onChangeHandler} 
            value={data.password} 
            type="password" 
            placeholder='Password' 
            required 
            className="w-full bg-[#e0e5ec] text-gray-700 placeholder-gray-400 font-medium px-5 py-3 rounded-xl outline-none shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] focus:ring-2 focus:ring-indigo-400 transition-all"
          />
        </div>

        {/* Submit Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type='submit'
          className="w-full py-4 mt-2 bg-indigo-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-indigo-300 hover:bg-indigo-700 transition-colors"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </motion.button>

        {/* Terms Condition */}
        <div className="flex items-start gap-3 mt-2 text-sm text-gray-500 font-medium">
          <input 
            type="checkbox" 
            required 
            className="mt-1 w-4 h-4 text-indigo-600 bg-[#e0e5ec] border-gray-300 rounded focus:ring-indigo-500 cursor-pointer shadow-[inset_2px_2px_4px_#bebebe,inset_-2px_-2px_4px_#ffffff]"
          />
          <p className="leading-tight">By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {/* Toggle State Links */}
        <div className="text-center text-gray-500 font-medium mt-2">
          {currState === "Login" ? (
            <p>
              Create a new account?{' '}
              <span 
                onClick={() => setCurrState("Sign Up")} 
                className="text-indigo-600 font-bold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span 
                onClick={() => setCurrState("Login")} 
                className="text-indigo-600 font-bold cursor-pointer hover:underline"
              >
                Login here
              </span>
            </p>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Login;