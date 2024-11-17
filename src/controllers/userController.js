const User = require('../db/models/UserModel');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
  const findUser = await User.findOne({ username: req.body.username });
    
  if (findUser) {
    return res.status(400).json({ message: 'Usuário já existe!' }); }
    
    const password = req.body.password
    const harder = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, harder)

    try {
      const user = new User({
        username: req.body.username,
        password: hash,
      });
      
      await user.save();
      res.status(201).json({
        message: 'Sucesso!',
        user: user,});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = {
    createUser
  };

