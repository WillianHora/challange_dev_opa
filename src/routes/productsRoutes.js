const express = require('express');
require('dotenv').config()
const { tokenValid } = require('../middleware/tokenValid')
const { createProduct, editProduct, seeAllProduct, seeProduct, seeCatPro, seeProCat } = require('../controllers/productsController');
const router = express.Router();


router.post('/', tokenValid, createProduct); //Criar um produto
router.put('/edit/:id', tokenValid,editProduct); // Editar um produto
router.get('/all', tokenValid, seeAllProduct); // Ver todos os produtos
router.get('/one/:id', tokenValid, seeProduct); // Ver um produto por ID
router.get('/catpro/:id', tokenValid,seeCatPro); // Buscar todos os produtos de uma categoria especifica
router.get('/probcat/:id', seeProCat); // Buscar todos os produtos vinculados a uma categoria

module.exports = router;
