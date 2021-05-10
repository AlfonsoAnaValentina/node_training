const { response, request  } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const usersGet = (req = request, res = response) => {

  const { q, name = 'noname', apikey } = req.query;

  res.json({
    "msg": "get API - controller",
    q,
    name,
    apikey
  });
}

const userPost = async (req, res = response) => {
  const { name, mail, password, role  } = req.body;
  const user = new User({ name, mail, password, role });

  //Verify mail

  //Encrypt password
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  //Save User

  await user.save();

  res.json({
    "msg": "post API - controller uzsser",
    user
  });
};

const userPut = (req, res = response) => {
  const id = req.params.id;

  res.json({
    "msg": "put API - controller",
    id
  });
};

const userPatch = (req, res = response) => {
  res.json({
    "msg": "patch API - controller"
  });
};

const userDelete = (req, res = response) => {
  res.json({
    "msg": "delete API - controller"
  });
};

module.exports = {
  usersGet,
  userPost,
  userPut,
  userPatch,
  userDelete,
};