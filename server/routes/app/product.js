import express from 'express';
import { create, deleteProduct, get, list } from '../../controllers/ProductController.js';
const router = express.Router();
import { verifyToken } from "../../middlewares/verifyToken.js"

router.post('/', verifyToken, create)

router.get('/', list)

router.get('/:id', get)

router.delete('/:id', verifyToken, deleteProduct)

export default router