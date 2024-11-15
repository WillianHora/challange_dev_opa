const Categories = require('../db/models/CategoriesModel');

const createCategory = async (req, res) => {
    try {
      const categories = new Categories({
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
    const category = await Categories.findOne({ _id: id });
    
    if (!category) {
      return res.status(404).json({ message: "Sorry, this category not found" });
  } 
        const Updatecategory = await Categories.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description
    })
       return res.status(201).json({
        message:"Your category has been edited",
        Updatecategory: Updatecategory
       })
  };

  const seeAllCategory = async (req, res) => {
    const category = await Categories.find();
    
    res.send(category);};


  const seeCategory = async (req, res) => {
    try {
      const id = req.params.id;
      const category = await Categories.findOne({ _id: id });

      if (!category) {
          return res.status(404).json({ message: "Sorry, this category not found" });
      };

      res.status(200).json({ category });
  }   catch (error) {
         res.status(500).json({ message: "Your id it's not valid value!", error });
  }};


module.exports = {
    createCategory,
    editCategory,
    seeAllCategory,
    seeCategory,
  };

