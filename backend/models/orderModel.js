import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Design Preparation" },
    date: { type: Date, default: Date.now },
    payment: { type: Boolean, default: false },
    stripeSessionId: { 
        type: String, 
        sparse: true,  // Sparse index: ignores null values, allows multiple null
        unique: true   // Only non-null values must be unique
    }
});

// Use the existing model if it exists, otherwise create a new one
const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;