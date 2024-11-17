const mongoose = require('mongoose');

async function dataBase() {
  await mongoose.connect('mongodb://127.0.0.1:27017/opa-dev');
  console.log('Mongodb connected!')
}

dataBase().catch(err => console.log(err));



module.exports = dataBase;

