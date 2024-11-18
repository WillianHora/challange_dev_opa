const express = require('express');
const { createCategory,  editCategory, seeAllCategory, seeCategory, allWpro} = require('../controllers/categoriesController');
const { tokenValid } = require('../middleware/tokenValid')
const router = express.Router();


router.post('/', tokenValid, createCategory); //Criar uma categoria
router.put('/edit/:id', tokenValid, editCategory); // Editar uma categoria
router.get('/all', tokenValid, seeAllCategory); // Ver todas as categorias
router.get('/one/:id', tokenValid, seeCategory); // Ver apenas uma categoria por ID
router.get('/allwpro', tokenValid,allWpro); //Ver todas as categorias com seus respectivos produtos

module.exports = router;
