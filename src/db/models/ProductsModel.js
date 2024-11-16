const mongoose = require('mongoose');


 const Products = mongoose.model('Products',{
   name: { type: String, required: true },
   description: { type: String },
   amount: { type: Number, required: true },
   price: { type: Number, required: true },
   categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }]

 })




module.exports = Products;