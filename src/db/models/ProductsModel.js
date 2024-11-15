const mongoose = require('mongoose');


 const Products = mongoose.model('Products',{
    name: String,
    description: String,
    amount: Number,
    price: Number,
 })




module.exports = Products;