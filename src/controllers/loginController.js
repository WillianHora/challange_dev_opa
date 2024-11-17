const User = require('../db/models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const loginAuth = async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if(!username){
        return res.status(422).json({ message: 'Usuário é obrigatório'})
    }

    if(!password){
        return res.status(422).json({ message: 'Senha é obrigatória'})
    }

    try {
        
        const userExist = await User.findOne({ username });
    
        if (!userExist) {
          return res.status(422).json({ message: 'Usuário não encontrado' });
        }

        const matchPass = await bcrypt.compare(password, userExist.password);
    
        if (!matchPass) {
          return res.status(401).json({ message: 'Senha incorreta' });
        }
            // res.status(200).json({ message: 'Login realizado com sucesso!' });
             try {
                const secret = process.env.SECRET
                const token = jwt.sign({
                    id: username._id,
                },
                secret,
            )
                
                return res.status(200).json({
                    message: "Sucesso", token
                })

             } catch (error) {
                
            }



      } catch (error) {
        
        res.status(500).json({ message: 'Erro no servidor', error: error.message });
      }

}



module.exports = {
    loginAuth
}