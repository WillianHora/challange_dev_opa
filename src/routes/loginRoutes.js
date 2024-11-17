const express = require('express');
const { loginAuth } = require('../controllers/loginController');
const router = express.Router();


router.post('/', loginAuth ); 


module.exports = router;
