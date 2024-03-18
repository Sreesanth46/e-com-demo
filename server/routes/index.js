const router = require('express').Router();

router.use('/auth', require('./auth/index.js'))

module.exports = router