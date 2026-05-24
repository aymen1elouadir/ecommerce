import express from 'express';
import authMiddleware from '../middleware/auth.js';
import { placeOrder, verifyOrder, userOrders, listOrders, updateStatus } from '../controllers/orderController.js';

const orderRouter = express.Router();

// Route for placing an order from the frontend (requires user authentication)
orderRouter.post("/place", authMiddleware, placeOrder);

// Route for verifying the Stripe payment
orderRouter.post("/verify", verifyOrder);

// Route for fetching orders for a specific logged-in user
orderRouter.post("/userorders", authMiddleware, userOrders);

// Route for the admin panel to list ALL orders
orderRouter.get("/list", listOrders);

// Route for the admin panel to update the status of an order
orderRouter.post("/status", updateStatus);

export default orderRouter;