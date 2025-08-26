import { Router } from "express";

import { createElection } from "../controllers/electionApi/electionBarrel.js";
import { viewElections } from "../controllers/electionApi/electionBarrel.js";
import { deleteElection } from "../controllers/electionApi/deleteElection.js";
import authMiddleware from "../middleware/authMiddleware.js";

const electionRouter = Router()

electionRouter
.post('/create', authMiddleware, createElection)
.get('/view', authMiddleware, viewElections)
.delete('/delete/:electionId', authMiddleware, deleteElection)


export default electionRouter