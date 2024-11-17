const express = require('express');
require('dotenv').config()
const { tokenValid } = require('../middlewares/tokenValid')
const { createProduct, editProduct, seeAllProduct, seeProduct } = require('../controllers/productsController');
const router = express.Router();


router.post('/', tokenValid, createProduct); //Criar um produto
router.put('/edit/:id', tokenValid,editProduct); // Editar um produto
router.get('/all', tokenValid, seeAllProduct); // Ver todos os produtos
router.get('/one/:id', tokenValid, seeProduct); // Ver um produto por ID


module.exports = router;
