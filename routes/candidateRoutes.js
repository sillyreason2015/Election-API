import { Router } from "express";


import { addCandidate } from "../controllers/candidateApi/candidateBarrel.js";
import { getCandidates } from "../controllers/candidateApi/candidateBarrel.js";
import { updateCandidate } from "../controllers/candidateApi/candidateBarrel.js";
import { deleteCandidate } from "../controllers/candidateApi/candidateBarrel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const candidateRouter = Router()

candidateRouter
.post('/add', authMiddleware, addCandidate)
.get('/view', authMiddleware, getCandidates)
.put('/update/:candidateId', authMiddleware, updateCandidate)
.delete('/delete/:candidateId', authMiddleware, deleteCandidate)

export default candidateRouter