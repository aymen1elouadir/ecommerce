// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// // import { food_list } from "../assets/frontend_assets/assets";


// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {


//     const [cartItems, setCartItems] = useState({});
//     const url = "http://localhost:4000"; 
//     const [token, setToken] = useState("");
//     const [food_list, setFoodList] = useState([])

//     const addToCart = (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
//         }
//         else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
//         }
//     }


//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//     }

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;

//         for (const itemId in cartItems) {
//             const itemInfo = food_list.find(
//                 (product) => product._id === itemId
//             );

//             if (itemInfo) {
//                 totalAmount += itemInfo.price * cartItems[itemId];
//             }
//         }

//         return totalAmount;
//     };

//     const fetchFoodList = async () => {
//         const response = await axios.get(`${url}/api/food/list`);
//         setFoodList(response.data.data)
//     }

//     useEffect(() => {
//         async function loadData() {
//                 await fetchFoodList(); // كنجيبو الماكلة هي الأولى
                
//                 if (localStorage.getItem("token")) {
//                     setToken(localStorage.getItem("token"));
//                 }
//         }
//         loadData();
//     }, [])

//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     }

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     )
// }
// export default StoreContextProvider;

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// // Create the context
// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});
//     const [token, setToken] = useState("");
//     const [foodList, setFoodList] = useState([]);
    
//     // Define the backend URL
//     const url = "http://localhost:4000";

//     // Add item to cart
//     const addToCart = async (itemId) => {
//         // Update UI state first for a snappy user experience
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         }
        
//         // If the user is logged in, sync the cart with the database
//         if (token) {
//             await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
//         }
//     };

//     // Remove item from cart
//     const removeFromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        
//         if (token) {
//             await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
//         }
//     };

//     // Calculate total amount in the cart
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 // Find the product details from the food list using the ID
//                 let itemInfo = foodList.find((product) => product._id === item);
//                 // Multiply price by quantity
//                 totalAmount += itemInfo.price * cartItems[item];
//             }
//         }
//         return totalAmount;
//     };

//     // Fetch the list of all food items from the backend
//     const fetchFoodList = async () => {
//         const response = await axios.get(url + "/api/food/list");
//         setFoodList(response.data.data);
//     };

//     // Load the saved cart data from the backend when a user logs in
//     const loadCartData = async (token) => {
//         const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
//         setCartItems(response.data.cartData);
//     };

//     // Run when the app initially loads
//     useEffect(() => {
//         async function loadData() {
//             // Always fetch the latest food items from the database
//             await fetchFoodList();
            
//             // Check if a token exists in local storage to keep the user logged in upon refresh
//             if (localStorage.getItem("token")) {
//                 setToken(localStorage.getItem("token"));
//                 await loadCartData(localStorage.getItem("token"));
//             }
//         }
//         loadData();
//     }, []);

//     // The data and functions we want to expose to our components
//     const contextValue = {
//         foodList,
//         cartItems,
//         setCartItems,
//         addToCart,
//         removeFromCart,
//         getTotalCartAmount,
//         url,
//         token,
//         setToken
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;
import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("");
    const [foodList, setFoodList] = useState([]);
    
    // Define the backend URL
    const url = "http://localhost:4000";

    // --- ADD TO CART ---
    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    };

    // --- REMOVE FROM CART ---
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    };

    // --- GET TOTAL AMOUNT (FIXED VERSION) ---
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Find the product details using ID
                let itemInfo = foodList.find((product) => product._id === item);
                
                // CRITICAL FIX: Check if itemInfo is defined before accessing .price
                if (itemInfo && itemInfo.price) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // --- FETCH PRODUCT LIST ---
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    // --- LOAD CART DATA ---
    const loadCartData = async (token) => {
        try {
            const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
            setCartItems(response.data.cartData || {});
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    };

    // --- INITIAL LOAD ---
    useEffect(() => {
        async function loadData() {
            // 1. Fetch products first
            await fetchFoodList();
            
            // 2. Check for token and load cart
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        }
        loadData();
    }, []);

    const contextValue = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;