import Router from "express";
import { createUser } from "../controllers/usuario.controller.js";

const router = Router()

router.post('/user', createUser)

export default router