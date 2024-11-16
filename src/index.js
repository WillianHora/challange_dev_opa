const express = require('express');
const dataBase = require('./db/db_connection');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');


const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.use('/users', userRoutes);

app.use('/products', productRoutes);

app.use('/categories', categoriesRoutes);


app.listen(port, () => {
  console.log(`Server start in port ${port}`)
})
