import { Router } from "express";

import {verifyOtp} from '../controllers/otpApi/otpBarrel.js'
import { resendOtp } from "../controllers/otpApi/otpBarrel.js";

const otpRouter = Router()

otpRouter
.post('/verify', verifyOtp)
.post('/resend', resendOtp)

export default otpRouter