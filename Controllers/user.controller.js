const { Router } = require("express");
const { v4: uuid } = require("uuid");

let users = [
  {
    id: 1,
    username: "findiq",
    email: "findiq@gmail.com",
  },

  {
    id: 2,
    username: "Ferid",
    email: "ferid@gmail.com",
  },

  {
    id: 3,
    username: "Mamed",
    email: "mamed@gmail.com",
  },
];

exports.getUser = (req, res) => {
  return res.json(users);
};

exports.getUsers = (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  if (user) {
    return res.status(200).json(user);
  } else {
    return res.status(400).json("User not found");
  }
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  return res.json("User deleted");
};

exports.createUsers = (req, res) => {
  const { username, email } = req.body;
  const newUser = {
    id: uuid(),
    username,
    email,
  };
  users.push(newUser);
  return res.json("User Added!");
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  const user = users.find((u) => u.id == id);
  if (user) {
    user.username = username;
    user.email = email;
    return res.json("User updated!");
  } else {
    return res.json("User not found");
  }
};
module.exports = router;
