import { config } from "dotenv";

config()

export const PORT = process.env.PORT 
export const NODE_ENV = process.env.NODE_ENV
export const SECRET = process.env.TOKEN_SECRET
export const USER_DB = process.env.USER_DB
export const PASSWORD_DB = process.env.PASSWORD_DB
export const DATABASE = process.env.DATABASE
export const FRONTEND_URL = process.env.FRONTEND_URL