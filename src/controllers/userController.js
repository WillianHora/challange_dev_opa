const User = require('../db/models/UserModel');

const createUser = async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        password: req.body.password,
      });
      await user.save();
      res.status(201).json({
        message: 'Your user has been created successfully',
        user: user,});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


module.exports = {
    createUser
  };

