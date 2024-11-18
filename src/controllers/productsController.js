const Products = require('../db/models/ProductsModel');
const mongoose = require('mongoose')

const createProduct = async (req, res) => {
  try {
      const product = new Products({
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        price: req.body.price,
        categories: req.body.categories,
      });
      await product.save();
      res.status(200).json({
        message: "Sucesso!",
        product: product,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


const editProduct = async (req,res) => {
  const id = req.params.id;
  const product = await Products.findOne({ _id: id });
  
  if (!product) {
    return res.status(404).json({ message: "Desculpe o produto não foi encontrado :/" });
} 
      const UpdateProduct = await Products.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      description: req.body.description,
      amount: req.body.amount,
      price: req.body.price,
      categories: req.body.categories,
  })
     return res.status(201).json({
      message:"Sucesso!",
      Updatecategory: UpdateProduct
     })
  
}


const seeAllProduct = async (req,res) => {
  const product = await Products.find();
  res.status(200).json({
    product
  })

}


const seeProduct = async (req,res) => {

  try {
    const id = req.params.id;
    const product = await Products.findOne({ _id: id });

    if (!product) {
        return res.status(404).json({ message: "Desculpe, produto não encontrado :/" });
    }

    res.status(200).json({ product });
} catch (error) {
    res.status(500).json({ message: "ID Inválido!", error });
}


}

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
    createProduct,
    editProduct,
    seeProduct,
    seeAllProduct,
    seeCatPro,
  };

