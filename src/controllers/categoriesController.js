const Category = require('../db/models/CategoriesModel');
const Products = require('../db/models/ProductsModel');


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


  

  


module.exports = {
    createCategory,
    editCategory,
    seeAllCategory,
    seeCategory,
    
  };

