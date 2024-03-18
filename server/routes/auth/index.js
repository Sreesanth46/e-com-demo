import express from 'express';
const router = express.Router();
import { signUp } from "../../controllers/SignUpController.js"
import { login } from "../../controllers/LoginController.js"

router.post('/register', signUp)

router.post('/login', login)

export default router