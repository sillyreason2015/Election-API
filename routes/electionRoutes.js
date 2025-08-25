import { Router } from "express";

import { createElection } from "../controllers/electionApi/electionBarrel.js";
import { viewElections } from "../controllers/electionApi/electionBarrel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const electionRouter = Router()

electionRouter
.post('/create', authMiddleware, createElection)
.get('/view', authMiddleware, viewElections)


export default electionRouter