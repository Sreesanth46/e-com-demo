import dotenv from "dotenv"
dotenv.config()
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { createError } from "../error/error.js"
import User from "../models/User.js"

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "AccessSecretKey"
const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY || '1d'
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "RefreshSecretKey"
const refreshTokenExpiry = process.env.REFRESH_TOKEN_EXPIRY || '7d'

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return next(createError(400, 'Invalid username or password'))

        const isEqual = await bcrypt.compare(password, user.password)
        if (!isEqual) return next(createError(400, 'Invalid username or password'))

        const userData = { email: user.email, name: user.name }
        const accessToken = jwt.sign({ ...userData }, accessTokenSecret, { expiresIn: `${accessTokenExpiry}` })
        const refreshToken = jwt.sign({ ...userData }, refreshTokenSecret, { expiresIn: `${refreshTokenExpiry}` })

        return res.status(200).json({ ...userData, accessToken, refreshToken })
    } catch (error) {
        next(err)
    }
}
