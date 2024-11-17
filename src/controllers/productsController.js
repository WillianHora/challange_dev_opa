const Products = require('../db/models/ProductsModel');

const createProduct = async (req, res) => {
  try {
      const product = new Products({
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        price: req.body.amount,
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
      price: req.body.amount,
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
        return res.status(404).json({ message: "Desculpe, produtro não encontrado :/" });
    }

    res.status(200).json({ product });
} catch (error) {
    res.status(500).json({ message: "ID Inválido!", error });
}


}

module.exports = {
    createProduct,
    editProduct,
    seeProduct,
    seeAllProduct,
  };

