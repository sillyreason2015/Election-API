import { Router } from "express";


import {requestPassword} from '../controllers/passwordApi/passwordBarrel.js'
import { resetPassword } from "../controllers/passwordApi/passwordBarrel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const passwordRouter = Router()

passwordRouter
.post('/request', authMiddleware, requestPassword)
.post('/reset', authMiddleware, resetPassword)

export default passwordRouter

