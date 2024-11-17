const express = require('express');
const { createCategory,  editCategory, seeAllCategory, seeCategory, seeCatPro } = require('../controllers/categoriesController');
const { tokenValid } = require('../middlewares/tokenValid')
const router = express.Router();


router.post('/', tokenValid, createCategory); //Criar uma categoria
router.put('/edit/:id', tokenValid, editCategory); // Editar uma categoria
router.get('/all', tokenValid, seeAllCategory); // Ver todas as categorias
router.get('/one/:id', tokenValid, seeCategory); // Ver apenas uma categoria por ID
router.get('/catpro/:id', tokenValid,seeCatPro) // Ver todos os produtos que tem uma ID de categoria vinculado


module.exports = router;
