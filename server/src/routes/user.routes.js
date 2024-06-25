import Router from "express";
import {  getUserById, getUsers  } from "../controllers/usuario.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router()

router.get('/user', getUsers)
router.get('/user/:id', getUserById)

export default router