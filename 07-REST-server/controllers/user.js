const { response } = require("express");

const getUsers = (req, res = response) => {
  res.json({
    msg: "get API - controller",
  });
};

const postUsers = (req, res = response) => {

    const body = req.body;

  res.json({
    msg: "post API - controller",
  });
};

const putUsers = (req, res = response) => {
  res.json({
    msg: "put API - controller",
  });
};

const deleteUsers = (req, res) => {
  res.json({
    msg: "delete API - controller",
  });
};

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers
};
