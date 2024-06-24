import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use('/auth', authRoutes)
app.use(userRoutes)

export default app