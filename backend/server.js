import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import promoRouter from "./routes/promoRoute.js"
import orderModel from "./models/orderModel.js"
import 'dotenv/config'
import dns from "dns"

// Set the DNS server to use for resolving hostnames
dns.setServers(["1.1.1.1","8.8.8.8"]);


// app config
const app = express()
const port = 4000

// middleware 
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// Fix the stripeSessionId index (drop the old one if it exists and recreate it as sparse)
setTimeout(async () => {
  try {
    const collection = orderModel.collection;
    const indexes = await collection.getIndexes();
    if (indexes.stripeSessionId_1) {
      console.log("Dropping old stripeSessionId index...");
      await collection.dropIndex("stripeSessionId_1");
      console.log("Old index dropped");
    }
    // Create new sparse unique index
    await collection.createIndex({ stripeSessionId: 1 }, { sparse: true, unique: true });
    console.log("Sparse unique index on stripeSessionId created");
  } catch (error) {
    console.log("Index management note:", error.message);
  }
}, 1000);

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/promo", promoRouter)

app.get("/", (req,res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Succes Work Api ${port}`)
})

//mongodb+srv://meedyoup_db_user:p8XU6MxdnopTjvpI@cluster0.cvvjhwv.mongodb.net/?appName=Cluster0


//t09KXVHZ1kCHchgF
//mongodb+srv://aymenelouadir1_db_user:t09KXVHZ1kCHchgF@cluster0.nyyvqq6.mongodb.net/?appName=Cluster0