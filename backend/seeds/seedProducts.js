import mongoose from "mongoose";
import foodModel from "../models/foodModel.js";
import dotenv from "dotenv";

dotenv.config();

const seedProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb+srv://dejamae77_db_user:o2IhiME8zRKVYCCF@cluster0.5qulph5.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0");

    console.log("Connected to MongoDB");

    // Clear existing products
    await foodModel.deleteMany({});
    console.log("Cleared existing products");

    // Define the 6 products - using the correct product images
    const products = [
      {
        name: "Fes Emerald Star",
        description: "Hand-crafted emerald green star pattern with intricate geometric details. Perfect for accent walls and traditional architectural displays.",
        price: 240,
        image: "image1.png",
        category: "Zellige Fassi",
        size: "10x10cm",
        color: "Emerald"
      },
      {
        name: "Royal Atlas Square",
        description: "Stunning royal blue square tiles featuring traditional Moroccan patterns. Ideal for flooring and decorative wall applications.",
        price: 185,
        image: "image2.png",
        category: "Bejmat",
        size: "5x5cm",
        color: "Royal Blue"
      },
      {
        name: "Kasbah Hexagon",
        description: "Warm terracotta hexagonal tiles with classic geometric patterns. Perfect for creating warm, inviting spaces with authentic Moroccan character.",
        price: 210,
        image: "image3.png",
        category: "Khatam",
        size: "10x10cm",
        color: "Terracotta"
      },
      {
        name: "Medina Pearl",
        description: "Delicate antique white tiles with subtle ivory undertones. Versatile for both contemporary and traditional interior designs.",
        price: 190,
        image: "image4.png",
        category: "Darj W Ktaf",
        size: "5x15cm",
        color: "Antique White"
      },
      {
        name: "Forest Glaze",
        description: "Deep forest emerald with a premium glaze finish. Creates stunning visual depth and reflects light beautifully.",
        price: 260,
        image: "image5.png",
        category: "Mseddes",
        size: "10x10cm",
        color: "Emerald"
      },
      {
        name: "Majorelle Pattern",
        description: "Intricate composite pattern inspired by the famous Majorelle gardens. A premium piece for luxury architectural projects.",
        price: 320,
        image: "image6.png",
        category: "Zellige Tetouani",
        size: "15x15cm",
        color: "Royal Blue"
      }
    ];

    // Insert products
    const result = await foodModel.insertMany(products);
    console.log(`✅ Successfully seeded ${result.length} products!`);

    // Display inserted products
    const allProducts = await foodModel.find({});
    console.log(`\nTotal products in database: ${allProducts.length}`);
    console.log("Products:", JSON.stringify(allProducts.map(p => ({ name: p.name, category: p.category, price: p.price })), null, 2));

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
