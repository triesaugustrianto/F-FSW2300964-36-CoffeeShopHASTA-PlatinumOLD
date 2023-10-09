const express = require("express");
const {
  createUsers,
  confirmUsers,
  resetPassword,
  updatePassword,
  getDetailUser,
  getAllUsers,
} = require("../controllers/userController");
const routeUser = express.Router();
routeUser.post("/api/users", createUsers);
routeUser.post("/api/users/reset-password", resetPassword);
routeUser.get("/api/users", getAllUsers);
routeUser.get("/api/user/:id", getDetailUser);
routeUser.put("/api/users/update-password/:id", updatePassword);
routeUser.put("/api/users/confirm/:id", confirmUsers);
routeUser.delete("/:id");
module.exports = routeUser;