const router = require('express').Router();
const signUpController = require('../../controllers/SignUpController')
const loginController = require('../../controllers/LoginController')


router.post('/register', signUpController.signUp)

router.get('/login', loginController.login)

module.exports = router