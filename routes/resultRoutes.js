import { Router } from "express";

import { viewResults } from "../controllers/resultsApi/resultsBarrel.js"
import authMiddleware from "../middleware/authMiddleware.js"

const resultRouter = Router()

resultRouter
.get('/results', authMiddleware, viewResults)


export default resultRouter