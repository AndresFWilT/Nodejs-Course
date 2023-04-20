// nodejs dependencies
// third party dependencies
const { response } = require("express");
/* own dependencies */
// models
const User = require('../models/user');
// helpers
const {encryptPassword} = require('../helpers/pass-crypt')

// user http petitions

const getUsers = async(req, res = response) => {

  // to always response the status activate from users
  const query = {status: true};

  // query from http get (limit of users 5, start int 0 (since))
  const { limit = 5, since = 0 } = req.query;

  // to response different callbacks at the same time (not using await individually)
  const [total, users] = await Promise.all([
    User.countDocuments(query),
    User.find(query).limit(Number(limit)).skip(Number(since))
  ]);

  res.json({
    msg: "get API - controller",
    total,
    users
  });
};

const postUsers = async(req, res = response) => {
    
    const {name, email, password, role} = req.body;
    const user = new User({name, email, password, role});

    // encrypt password
    user.password = await encryptPassword(password);

    // save
    await user.save();
  res.json({
    msg: "post API - controller",
    user
  });
};

const putUsers = async (req, res = response) => {

  const {id} = req.params;
  const { _id, password, google, email, ...other} = req.body;

  if (password){
    other.password = await encryptPassword(password);
  }

  const user = await User.findByIdAndUpdate(id, other);

  res.json(user);
};

const deleteUsers = async(req, res) => {

const { id } = req.params;

// fisically deleting (not recommended)
/* const user = await User.findByIdAndDelete(id); */

const user = await User.findByIdAndUpdate(id, {status: false});


  res.json({
    msg: "delete API - controller",
    user
  });
};

//exports

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers
};
