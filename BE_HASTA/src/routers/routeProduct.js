const express = require("express");
const { getAllProduct } = require("../controllers/productController");
const routeProduct = express.Router();
routeProduct.post("/");
routeProduct.get("/api/product", getAllProduct);
routeProduct.get("/:id");
routeProduct.put("/:id");
routeProduct.delete("/:id");
module.exports = routeProduct;
