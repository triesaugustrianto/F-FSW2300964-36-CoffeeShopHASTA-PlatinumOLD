const express = require("express");
const {
  createCheckout,
  getAllcheckout,
  deleteCheckout,
  getCheckoutUser,
} = require("../controllers/checkout");
const checkToken = require("../middleware/checkToken");
const routeCheckout = express.Router();
routeCheckout.post("/api/checkout", checkToken, createCheckout);
routeCheckout.get("/api/checkout", getAllcheckout);
routeCheckout.get("/api/checkout-user", checkToken, getCheckoutUser);
routeCheckout.put("/:id");
routeCheckout.delete("/api/checkout/:id", deleteCheckout);
module.exports = routeCheckout;
