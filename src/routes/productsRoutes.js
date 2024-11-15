const express = require('express');
const { createProduct, editProduct, seeAllProduct, seeProduct } = require('../controllers/productsController');
const router = express.Router();


router.post('/', createProduct);
router.put('/edit', editProduct);
router.get('/all', seeAllProduct);
router.get('/one/:id', seeProduct);


module.exports = router;
