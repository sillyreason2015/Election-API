import { Router  } from "express";
import authMiddleware from "../middleware/authMiddleware.js";


import { loginUser } from "../controllers/authApi/authBarrel.js";
import { logoutUser } from "../controllers/authApi/authBarrel.js";

const authRouter = Router()

authRouter
.post('/login',loginUser)
.post('/logout', authMiddleware, logoutUser)


export default authRouter
