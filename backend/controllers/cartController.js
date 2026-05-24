import userModel from "../models/userModel.js";

// Add items to user cart
const addToCart = async (req, res) => {
    try {
        // Find the user by their ID (provided by the auth middleware)
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        // If the item doesn't exist in the cart, add it with a quantity of 1
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } 
        // If it already exists, increment the quantity
        else {
            cartData[req.body.itemId] += 1;
        }

        // Update the user's cartData in the database
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        // Guard: only decrement if the item exists and quantity > 0
        if (cartData[req.body.itemId] && cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
            // Clean up the key entirely when it reaches 0
            if (cartData[req.body.itemId] === 0) {
                delete cartData[req.body.itemId];
            }
        }

        // Update the database with the decremented cart data
        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed from cart" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to remove item from cart" });
    }
}

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        
        // Return the user's cart object
        res.json({ success: true, cartData });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { addToCart, removeFromCart, getCart };