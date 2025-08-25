import { Router } from "express";

import { castVote } from "../controllers/voteApi/voteBarrel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const voteRouter = Router()

voteRouter
.post('/cast', authMiddleware, castVote)


export default voteRouter