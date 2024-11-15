const express = require('express');
const { createCategory, deleteCategory, editCategory, seeCategory } = require('../controllers/categoriesController');

const router = express.Router();


router.post('/', createCategory);
router.delete('/', deleteCategory);
router.put('/', editCategory);
router.get('/', seeCategory);


module.exports = router;
