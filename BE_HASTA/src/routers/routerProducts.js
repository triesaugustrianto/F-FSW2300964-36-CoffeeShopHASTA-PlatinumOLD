const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");
const { createUsers } = require("../controllers/userController");
// const logger = (req, res, next) => {
//   next();
// };
// app.use(logger);
//Route PRODUCT
router.get("/api/products", productControllers.showAll);
router.get("/api/products/:id", productControllers.showById);
router.post("/api/products", productControllers.create);
router.put("/api/products/:id", productControllers.update);
router.delete("/api/products/:id", productControllers.delete);

module.exports = router;
