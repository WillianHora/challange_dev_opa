const Categories = require('../db/models/CategoriesModel');

const createCategory = async (req, res) => {
    try {
      const categories = new Categories({
        name: req.body.name,
        description: req.body.description
      });
      await user.save();
      res.status(201).json({
        
      });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  const editCategory = async (req, res) => {
    
  };

  const seeCategory = async (req, res) => {
    
  };

  const deleteCategory = async (req, res) => {
    
  };



module.exports = {
    createCategory,
    editCategory,
    deleteCategory,
    seeCategory
  };

