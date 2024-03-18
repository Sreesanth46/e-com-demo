import bcrypt from "bcrypt"
import User from "../models/User.js"
import { createError } from "../error/error.js"
import { registerValidation } from "../middlewares/validation.js"

export const signUp = async (req, res, next) => {
    try {
        const { error, value } = registerValidation(req.body)
        if (error) next(createError(400, error.details[0].message))

        const { email, password } = value
        const userAlreadyExists = await User.findOne({ email })
        if (userAlreadyExists) next(createError(400, 'User with email already exists'))

        const encryptedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({ ...value, email, password: encryptedPassword })
        const { password: pwd, ...rest } = user._doc

        return res.status(201).json({ message: "User registered successfully", ...rest });
    } catch (error) {
        next(error)
    }
}