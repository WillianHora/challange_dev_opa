const express = require('express');
const createUser  = require('../controllers/userController');
const deleteUser  = require('../controllers/userController');
const editUser  = require('../controllers/userController');
const seeUser  = require('../controllers/userController');
const router = express.Router();


router.post('/', createUser);
router.delete('/', deleteUser);
router.put('/', editUser);
router.get('/', seeUser);


module.exports = router;
