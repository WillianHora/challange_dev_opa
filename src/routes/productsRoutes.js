const express = require('express');
const { createProduct, editProduct, seeAllProduct, seeProduct } = require('../controllers/productsController');
const router = express.Router();


router.post('/', createProduct); //Create a product
router.put('/edit/:id', editProduct); // Edit a product
router.get('/all', seeAllProduct); // Get all the products 
router.get('/one/:id', seeProduct); // Get only one product 


module.exports = router;
