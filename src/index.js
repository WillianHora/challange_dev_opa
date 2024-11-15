const express = require('express');
const dataBase = require('./db/db_connection');
const userRoutes = require('./routes/userRoutes');


const app = express()
const port = 3000
dataBase()
app.use(express.json())


app.get('/', (req, res) => {
  res.send('Welcome to our API!')
})

app.use('/users', userRoutes);


app.listen(port, () => {
  console.log(`Server start in port ${port}`)
})

