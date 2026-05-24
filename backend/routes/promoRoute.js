import express from "express";
import { 
  validatePromo, 
  getAllPromos, 
  createPromo, 
  updatePromo, 
  deletePromo,
  markPromoUsed 
} from "../controllers/promoController.js";

const promoRouter = express.Router();

// Public routes
promoRouter.post("/validate", validatePromo);
promoRouter.post("/mark-used", markPromoUsed);

// Admin routes
promoRouter.get("/list", getAllPromos);
promoRouter.post("/create", createPromo);
promoRouter.put("/update/:promoId", updatePromo);
promoRouter.delete("/delete/:promoId", deletePromo);

export default promoRouter;
