const User = require('../db/models/UserModel');

const createUser = async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        password: req.body.password
      });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



const deleteUser = async (req,res) => {


}


const editUser = async (req,res) => {


}


const seeUser = async (req,res) => {


}


module.exports = editUser;
module.exports = deleteUser;
module.exports = createUser;
module.exports = seeUser;


