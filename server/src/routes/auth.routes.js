import { Router } from 'express'
import { verifyToken, isAdmin } from '../middlewares/auth.middleware.js'
import { Login, logout, Register } from '../controllers/auth.controller.js'

const router = Router()

router.post('/login', Login)
router.post('/register', Register)
router.post('/logout', logout)

export default router 