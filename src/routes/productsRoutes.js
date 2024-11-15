const express = require('express');
const { createProduct, deleteProduct, editProduct, seeProduct } = require('../controllers/productsController');
const router = express.Router();


router.post('/', createProduct);
router.delete('/', deleteProduct);
router.put('/', editProduct);
router.get('/', seeProduct);


module.exports = router;
