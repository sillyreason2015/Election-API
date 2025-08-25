import { Router } from "express";

import { createUser } from "../controllers/userApi/userBarrel.js";
import { viewUser, viewUsers } from "../controllers/userApi/userBarrel.js";
import { updateUser } from "../controllers/userApi/userBarrel.js";
import { deleteUser } from "../controllers/userApi/userBarrel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const userRouter = Router()

userRouter
.post('/register', createUser)
.get('/:id', authMiddleware, viewUser)
.get('/all', authMiddleware, viewUsers)
.put('/update', authMiddleware, updateUser)
.delete('/delete', authMiddleware, deleteUser)

export default userRouter