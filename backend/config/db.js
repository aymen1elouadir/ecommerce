import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aymenelouadir1_db_user:t09KXVHZ1kCHchgF@cluster0.nyyvqq6.mongodb.net/?appName=Cluster0').then(() => console.log("DB Connected"));
}