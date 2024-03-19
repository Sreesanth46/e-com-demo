import express from 'express';
import auth from "./auth/index.js"
import product from "./app/product.js"
const router = express.Router();

router.use('/auth', auth)

router.use('/products', product)

export default router