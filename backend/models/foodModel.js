import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type:String, required: true},
    price: {type:Number, required: true},
    image: {type:String, required: true},
    category: {type:String, required: true},
    size: {type: String, default: "10x10cm"},
    color: {type: String, default: "Multi-color"}
})


const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;