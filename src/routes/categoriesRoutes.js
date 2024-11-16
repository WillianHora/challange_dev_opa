const express = require('express');
const { createCategory,  editCategory, seeAllCategory, seeCategory, seeCatPro } = require('../controllers/categoriesController');

const router = express.Router();


router.post('/', createCategory); //Create a category
router.put('/edit/:id', editCategory); // Edit a category
router.get('/all', seeAllCategory); // Get all the categories 
router.get('/one/:id', seeCategory); // Get only one of the categories
router.get('/catpro/:id', seeCatPro) // Get all products in one category


module.exports = router;
