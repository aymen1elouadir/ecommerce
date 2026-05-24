import foodModel from "../models/foodModel.js"
import fs from 'fs'

// add food item

const addFood = async (req, res) => {

    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Image is required"
        });
    }

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        size: req.body.size,
        color: req.body.color,
        image: image_filename
    })

    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}


// All food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        // Delete image from uploads folder
        fs.unlink(`uploads/${food.image}`, () => {})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

// Update food item
const updateFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        
        if (!food) {
            return res.json({ success: false, message: "Food not found" });
        }

        // Update fields
        if (req.body.name) food.name = req.body.name;
        if (req.body.description) food.description = req.body.description;
        if (req.body.price) food.price = req.body.price;
        if (req.body.category) food.category = req.body.category;
        if (req.body.size) food.size = req.body.size;
        if (req.body.color) food.color = req.body.color;

        await food.save();
        res.json({ success: true, message: "Food Updated" })
    } catch (error) {
        console.log("Update error:", error);
        res.json({ success: false, message: error.message || "Error updating food" })
    }
}


export { addFood, listFood, removeFood, updateFood }