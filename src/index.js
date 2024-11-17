const express = require('express');
const dataBase = require('./db/db_connection');
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const productRoutes = require('./routes/productsRoutes');
const categoriesRoutes = require('./routes/categoriesRoutes');



const app = express()
const port = 3000
app.use(express.json())


// rotas públicas
app.get('/', (req, res) => {
  res.send('Bem vindo a nossa API!')
})

app.use('/user', userRoutes);
app.use('/login', loginRoutes);


// rotas privadas
app.use('/products', productRoutes);

app.use('/categories', categoriesRoutes);


app.listen(port, () => {
  console.log(`Server start in port ${port}`)
})
