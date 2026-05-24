import express from "express";
import { addFood, listFood, removeFood, updateFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`);
    }
});

// Only accept image files (jpeg, jpg, png, webp)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG and WebP images are allowed.'), false);
    }
};

const upload = multer({ 
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB max
});

// API Endpoints
foodRouter.post("/add", upload.single("image"), addFood); // Add food item 
foodRouter.get("/list", listFood); // Get all food list 
foodRouter.post("/remove", removeFood); // Remove food item 
foodRouter.post("/update", updateFood); // Update food item

export default foodRouter;