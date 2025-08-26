import { Router } from "express";
import upload from "../uploads/fileUpload.js"; // your Multer setup
import { addCandidate, getCandidates, updateCandidate, deleteCandidate } from "../controllers/candidateApi/candidateBarrel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const candidateRouter = Router();

// Add Multer middleware for form-data (photo upload)
candidateRouter.post('/add', authMiddleware, upload.single("photo"), addCandidate);

candidateRouter.get('/view', authMiddleware, getCandidates);
candidateRouter.put('/update/:candidateId', authMiddleware, upload.single("photo"), updateCandidate); // optional if updating photo
candidateRouter.delete('/delete/:candidateId', authMiddleware, deleteCandidate);

export default candidateRouter;
