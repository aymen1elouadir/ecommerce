import promoModel from "../models/promoModel.js";

// Validate promo code
export const validatePromo = async (req, res) => {
  try {
    const { code, userId } = req.body;

    if (!code) {
      return res.json({ success: false, message: "Promo code required" });
    }

    const promo = await promoModel.findOne({ code: code.toUpperCase() });

    // Check if promo exists
    if (!promo) {
      return res.json({ success: false, message: "Invalid promo code" });
    }

    // Check if promo is active
    if (!promo.isActive) {
      return res.json({ success: false, message: "This promo code is no longer active" });
    }

    // Check if promo has expired
    const now = new Date();
    if (promo.expiryDate < now) {
      return res.json({ success: false, message: "Promo code has expired" });
    }

    // Check if promo has reached max uses
    if (promo.usedCount >= promo.maxUses) {
      return res.json({ success: false, message: "Promo code has reached maximum uses" });
    }

    // Check if user has already used this promo
    const userUsage = promo.usedBy.find(use => use.userId.toString() === userId);
    if (userUsage) {
      return res.json({ success: false, message: "You have already used this promo code" });
    }

    // Promo is valid
    return res.json({ 
      success: true, 
      discount: promo.discount,
      message: `Promo code applied! ${promo.discount}% discount`
    });
  } catch (error) {
    console.error("Error validating promo:", error);
    res.json({ success: false, message: "Error validating promo code" });
  }
};

// Get all promo codes (Admin)
export const getAllPromos = async (req, res) => {
  try {
    const promos = await promoModel.find({}).select("-usedBy");
    res.json({ success: true, data: promos });
  } catch (error) {
    console.error("Error fetching promos:", error);
    res.json({ success: false, message: "Error fetching promo codes" });
  }
};

// Create new promo code (Admin)
export const createPromo = async (req, res) => {
  try {
    const { code, discount, maxUses, expiryDate } = req.body;

    if (!code || discount === undefined || !maxUses || !expiryDate) {
      return res.json({ success: false, message: "All fields required" });
    }

    // Convert to proper types
    const discountNum = Number(discount);
    const maxUsesNum = Number(maxUses);

    if (discountNum < 0 || discountNum > 100) {
      return res.json({ success: false, message: "Discount must be between 0-100" });
    }

    if (maxUsesNum <= 0) {
      return res.json({ success: false, message: "Max uses must be greater than 0" });
    }

    // Check if code already exists
    const existingPromo = await promoModel.findOne({ code: code.toUpperCase() });
    if (existingPromo) {
      return res.json({ success: false, message: "Promo code already exists" });
    }

    // Validate expiry date is in future
    const expiry = new Date(expiryDate);
    if (expiry <= new Date()) {
      return res.json({ success: false, message: "Expiry date must be in the future" });
    }

    const newPromo = new promoModel({
      code: code.toUpperCase(),
      discount: discountNum,
      maxUses: maxUsesNum,
      expiryDate: expiry,
      isActive: true
    });

    await newPromo.save();
    res.json({ success: true, message: "Promo code created successfully", data: newPromo });
  } catch (error) {
    console.error("Error creating promo:", error);
    res.json({ success: false, message: "Error creating promo code: " + error.message });
  }
};

// Update promo code (Admin)
export const updatePromo = async (req, res) => {
  try {
    const { promoId } = req.params;
    const { discount, maxUses, expiryDate, isActive } = req.body;

    const promo = await promoModel.findById(promoId);
    if (!promo) {
      return res.json({ success: false, message: "Promo code not found" });
    }

    if (discount !== undefined) {
      const discountNum = Number(discount);
      if (discountNum < 0 || discountNum > 100) {
        return res.json({ success: false, message: "Discount must be between 0-100" });
      }
      promo.discount = discountNum;
    }

    if (maxUses !== undefined) {
      const maxUsesNum = Number(maxUses);
      if (maxUsesNum <= 0) {
        return res.json({ success: false, message: "Max uses must be greater than 0" });
      }
      promo.maxUses = maxUsesNum;
    }

    if (expiryDate !== undefined) {
      const expiry = new Date(expiryDate);
      if (expiry <= new Date()) {
        return res.json({ success: false, message: "Expiry date must be in the future" });
      }
      promo.expiryDate = expiry;
    }

    if (isActive !== undefined) promo.isActive = isActive;

    await promo.save();
    res.json({ success: true, message: "Promo code updated successfully", data: promo });
  } catch (error) {
    console.error("Error updating promo:", error);
    res.json({ success: false, message: "Error updating promo code: " + error.message });
  }
};

// Delete promo code (Admin)
export const deletePromo = async (req, res) => {
  try {
    const { promoId } = req.params;

    const result = await promoModel.findByIdAndDelete(promoId);
    if (!result) {
      return res.json({ success: false, message: "Promo code not found" });
    }

    res.json({ success: true, message: "Promo code deleted successfully" });
  } catch (error) {
    console.error("Error deleting promo:", error);
    res.json({ success: false, message: "Error deleting promo code" });
  }
};

// Mark promo as used (called after successful order)
export const markPromoUsed = async (req, res) => {
  try {
    const { code, userId } = req.body;

    const promo = await promoModel.findOne({ code: code.toUpperCase() });
    if (!promo) {
      return res.json({ success: false, message: "Promo code not found" });
    }

    promo.usedCount += 1;
    promo.usedBy.push({ userId });

    await promo.save();
    res.json({ success: true, message: "Promo marked as used" });
  } catch (error) {
    console.error("Error marking promo as used:", error);
    res.json({ success: false, message: "Error marking promo as used" });
  }
};
