const jwt = require('jsonwebtoken')
const { createError } = require('../error/error')

exports.signUp = async (req, res, next) => {
    return res.status(201).json({ message: "user registered successfully", user })
}