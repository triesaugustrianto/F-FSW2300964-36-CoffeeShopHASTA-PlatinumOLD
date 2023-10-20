const express = require("express");
const {
  createCheckout,
  getAllcheckout,
  deleteCheckout,
} = require("../controllers/checkout");
const routeCheckout = express.Router();
routeCheckout.post("/api/checkout", createCheckout);
routeCheckout.get("/api/checkout", getAllcheckout);
routeCheckout.get("/:id");
routeCheckout.put("/:id");
routeCheckout.delete("/api/checkout/:id", deleteCheckout);
module.exports = routeCheckout;
