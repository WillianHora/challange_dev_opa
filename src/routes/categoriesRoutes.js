const express = require('express');
const { createCategory,  editCategory, seeAllCategory, seeCategory } = require('../controllers/categoriesController');

const router = express.Router();


router.post('/', createCategory);
router.put('/edit/:id', editCategory);
router.get('/all', seeAllCategory);
router.get('/one/:id', seeCategory);


module.exports = router;
