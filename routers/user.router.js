const express = require("express");
const { getUser, getUsers, deleteUser, createUsers, updateUser} = require("../Controllers/user.controller");
const router = express.router();
router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.delete("/users/:id", deleteUser);
router.post("/users", createUsers);
router.patch("/users/:id", updateUser);


module.exports = router