import Router from "express";
import {  deleteUser, getUserById, getUsers, updateUser  } from "../controllers/usuario.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/user', getUsers)
router.get('/user/:id', getUserById)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

export default router