const mongoose = require('mongoose');


 const Products = mongoose.model('Products',{
    name: String,
    description: String,
    amount: Number,
    price: Number,
    categories: Object,
 })




module.exports = Products;