const express = require('express');
const { createUser } = require('../controllers/userController');
const router = express.Router();


router.post('/', createUser ); //Create a user


module.exports = router;
