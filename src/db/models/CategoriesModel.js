const mongoose = require('mongoose');


const Categories = mongoose.model('Categories',{
    name: String,
    description: String,
 })



 module.exports = Categories;