import express from "express"
import { loginUser, registerUser } from "../controllers/userController.js"

const userRouter = express.Router();

// رابط إنشاء حساب جديد
userRouter.post("/register", registerUser);

// رابط تسجيل الدخول
userRouter.post("/login", loginUser);

export default userRouter;