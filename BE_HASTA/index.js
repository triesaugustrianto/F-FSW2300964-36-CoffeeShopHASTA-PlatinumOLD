const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const swaggerJS = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const apidocs = require("./apidocs.json");
require("dotenv").config();
//? ===  MODUL ====
const port = process.env.PORT || 2000;
const router = require("./src/routers/routerProducts");
const routeUser = require("./src/routers/routeUser");
const routeProduct = require("./src/routers/routeProduct");
const routeCheckout = require("./src/routers/checkout");
const routeTransaksi = require("./src/routers/transaksi");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apidocs));
//ROUTING
app.use(router);
app.use(routeUser);
app.use(routeProduct);
app.use(routeCheckout);
app.use(routeTransaksi);
//error handling
app.use("/", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "not found",
  });
});
//! ===
app.use("/error", (req, res) => {
  error;
});
//! ===
app.use((err, req, res, next) => {
  console.log("server error");
  res.status(500).json({
    status: "Error 500",
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
