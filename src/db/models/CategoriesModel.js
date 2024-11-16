const mongoose = require('mongoose');


const Categories = mongoose.model('Categories',{
    name: { type: String, required: true },
    description: { type: String, required: true }
 })



 module.exports = Categories;