const Category = require('../db/models/CategoriesModel');
const Products = require('../db/models/ProductsModel');
const mongoose = require('mongoose')

const createCategory = async (req, res) => {
    try {
      const categories = new Category({
        name: req.body.name,
        description: req.body.description
      });
      await categories.save();
      res.status(201).json({
        message: "Sucesso!",
        categories:categories
        
      });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }};


  const editCategory = async (req, res) => {
    const id = req.params.id;
    const category = await Category.findOne({ _id: id });
    
    if (!category) {
      return res.status(404).json({ message: "Categoria não encontrada :/" });
  } 
        const Updatecategory = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description
    })
       return res.status(200).json({
        message:"Sucesso!",
        Updatecategory: Updatecategory
       })
  };

  const seeAllCategory = async (req, res) => {
    const category = await Category.find();
    
    res.send(category);
  };


  const seeCategory = async (req, res) => {
    try {
      const id = req.params.id;
      const category = await Category.findOne({ _id: id });

      if (!category) {
          return res.status(404).json({ message: "Categoria não encontrada :/" });
      };

      res.status(200).json({ category });
  }   catch (error) {
         res.status(500).json({ message: "ID Inválido! ", error });
  }};


  const seeCatPro = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Id Inválido!" });
    }

    try {
        const products = await Products.find({
            categories: { $in: [new mongoose.Types.ObjectId(id)] }
        }).populate('categories');

        if (products.length === 0) {
            return res.status(404).json({ message: "Desculpe, a categoria não foi encontrada :/" });
        }

        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: "Erro interno", error: error.message });
    }
};

  


module.exports = {
    createCategory,
    editCategory,
    seeAllCategory,
    seeCategory,
    seeCatPro,
  };

