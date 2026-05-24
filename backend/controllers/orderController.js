import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

// Initialize Stripe with the secret key from environment variables
let stripe;
try {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2024-04-10"
    });
} catch (error) {
    console.error("Stripe initialization warning:", error.message);
}

// Placing user order from frontend
const placeOrder = async (req, res) => {
    // Client app URL for Stripe redirects — points to the customer-facing app, NOT the admin
    const frontend_url = "http://localhost:5173";

    try {
        // Extract userId from authMiddleware (attached to req.body)
        const { userId, items, amount, address } = req.body;

        // Validate required fields
        if (!userId) {
            return res.json({ success: false, message: "User not authenticated" });
        }
        if (!items || items.length === 0) {
            return res.json({ success: false, message: "No items in order" });
        }
        if (!address) {
            return res.json({ success: false, message: "Delivery address is required" });
        }

        console.log("Place Order - userId:", userId, "amount:", amount, "items count:", items.length);

        // 1. Create a new order in the database
        const newOrder = new orderModel({
            userId: userId,
            items: items,
            amount: amount,
            address: address
        });
        await newOrder.save();
        console.log("Order saved:", newOrder._id);

        // 2. Clear the user's cart after placing the order
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        // 3. Structure line items for Stripe
        const line_items = items.map((item) => ({
            price_data: {
                currency: "usd", // Stripe uses USD, we convert from DH
                product_data: { 
                    name: item.name,
                    description: item.description || ""
                },
                // Stripe expects amounts in cents; convert DH to USD (1 USD ≈ 10 DH)
                unit_amount: Math.round((item.price / 10) * 100)
            },
            quantity: item.quantity
        }));

        // 4. Add delivery charges in USD
        line_items.push({
            price_data: {
                currency: "usd",
                product_data: { name: "Delivery Charges" },
                unit_amount: 200 // $2 USD (≈ 20 DH)
            },
            quantity: 1
        });

        // 5. Create Stripe session
        let session;
        try {
            session = await stripe.checkout.sessions.create({
                line_items: line_items,
                mode: 'payment',
                success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`
            });
            console.log("Stripe session created:", session.id);

            // 6. Update the order with Stripe session ID
            await orderModel.findByIdAndUpdate(newOrder._id, { stripeSessionId: session.id });
            console.log("Order updated with Stripe session ID");
        } catch (stripeError) {
            console.error("Stripe session creation error:", stripeError.message);
            // Delete the order if Stripe session creation fails
            await orderModel.findByIdAndDelete(newOrder._id);
            return res.json({ success: false, message: "Payment system error. Please try again." });
        }

        // Send the session URL back to redirect the user
        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log("Place order error:", error);
        res.json({ success: false, message: error.message || "Failed to place order. Please try again." });
    }
}

// Verifying order payment status
const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body;
    try {
        if (success === "true") {
            // Mark order as paid
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" });
        } else {
            // Payment was cancelled — keep the order but mark it unpaid
            // (do NOT delete: user should be able to see and retry their order)
            await orderModel.findByIdAndUpdate(orderId, { payment: false, status: "Payment Cancelled" });
            res.json({ success: false, message: "Payment was cancelled" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error verifying payment" });
    }
}

// User orders for frontend
const userOrders = async (req, res) => {
    try {
        // Find all orders belonging to the user
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// Listing orders for admin panel
const listOrders = async (req, res) => {
    try {
        // Fetch all orders from all users
        const orders = await orderModel.find({});
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

// API for updating order status (Admin Panel)
const updateStatus = async (req, res) => {
    try {
        // Find order by ID and update its status (e.g., "Food Processing", "Delivered")
        await orderModel.findByIdAndUpdate(req.body.orderId, { status: req.body.status });
        res.json({ success: true, message: "Status Updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };