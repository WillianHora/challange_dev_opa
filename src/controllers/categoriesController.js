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
        message: "Your category has been created successfull",
        categories:categories
        
      });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }};


  const editCategory = async (req, res) => {
    const id = req.params.id;
    const category = await Category.findOne({ _id: id });
    
    if (!category) {
      return res.status(404).json({ message: "Sorry, this category not found" });
  } 
        const Updatecategory = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description
    })
       return res.status(200).json({
        message:"Your category has been edited",
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
          return res.status(404).json({ message: "Sorry, this category not found" });
      };

      res.status(200).json({ category });
  }   catch (error) {
         res.status(500).json({ message: "Your id it's not valid value!", error });
  }};


  const seeCatPro = async (req, res) => {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid category ID" });
    }

    try {
        const products = await Products.find({
            categories: { $in: [new mongoose.Types.ObjectId(id)] }
        }).populate('categories');

        if (products.length === 0) {
            return res.status(404).json({ message: "Sorry, this category not found or has no products" });
        }

        return res.status(200).json({ products });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

  


module.exports = {
    createCategory,
    editCategory,
    seeAllCategory,
    seeCategory,
    seeCatPro,
  };

