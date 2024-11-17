const jwt = require('jsonwebtoken');
require('dotenv').config();

function tokenValid(req,res,next){
    const header = req.headers['authorization']
    const token = header && header.split(' ')[1]
  
    if(!token){
        return res.status(401).json({message: 'Acesso negado'})
    }
  
    try {
        const secret = process.env.SECRET
        jwt.verify(token,secret)
        next()
    } catch (error) {
        return res.status(401).json({messsge:'Token inválido'})
    }
  
  }
  

  module.exports = {tokenValid}