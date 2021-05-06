const { response, request  } = require('express');

const usersGet = (req = request, res = response) => {

  const { q, name = 'noname', apikey } = req.query;

  res.json({
    "msg": "get API - controller",
    q,
    name,
    apikey
  });
}

const userPost = (req, res = response) => {
  const { name, age  } = req.body;

  res.json({
    "msg": "post API - controller",
    name,
    age
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