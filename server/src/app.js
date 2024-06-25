import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import roleRoutes from "./routes/role.routes.js";
import { FRONTEND_URL } from "./config.js";

const app = express()

app.use(
    cors({
      origin: '*',
      methods: ['GET', 'POST', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())
app.use('/auth', authRoutes)
app.use(userRoutes)
app.use('/role', roleRoutes)

export default app