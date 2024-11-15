const Products = require('../db/models/ProductsModel');

const createProduct = async (req, res) => {
    try {
      const product = new Products({
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        price: req.body.amount,
      });
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



const deleteProduct = async (req,res) => {


}


const editProduct = async (req,res) => {


}


const seeProduct = async (req,res) => {


}

module.exports = {
    createProduct,
    deleteProduct,
    editProduct,
    seeProduct,
  };

