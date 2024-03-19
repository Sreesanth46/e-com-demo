import { createError } from "../error/error.js"
import { productValidation } from "../middlewares/validation.js"
import Products from "../models/Products.js"

export const create = async (req, res, next) => {
    try {
        const { error, value } = productValidation(req.body)
        if (error) return next(createError(400, error.details[0].message))

        const product = await Products.create(value)
        return res.status(201).json(product._doc);
    } catch (error) {
        next(error)
    }
}

export const get = async (req, res, next) => {
    try {
        const { id } = req.params
        const product = await Products.findById(id)
        if (!product) return next(createError(404, "Product not found"))

        return res.status(200).json(product);
    } catch (error) {
        next(error)
    }
}

export const list = async (req, res, next) => {
    try {
        const products = await Products.find({})
        return res.status(200).json(products);
    } catch (error) {
        next(error)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params
        const products = await Products.deleteOne({ _id: id })
        return res.status(200).json(products);
    } catch (error) {
        next(error)
    }
}