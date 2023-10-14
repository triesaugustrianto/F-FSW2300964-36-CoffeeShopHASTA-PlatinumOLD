const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
//? ===  MODUL ====
const port = 2000;
const router = require("./src/routers/routerProducts");
const routeUser = require("./src/routers/routeUser");
const routeProduct = require("./src/routers/routeProduct");

//midleware
const logger = (req, res, next) => {
  next();
};
console.log(logger);
app.use(logger);
app.use(express.json());
app.use(express.urlencoded(false));
app.use(cors());
app.use(morgan("tiny"));

//ROUTING
app.use(router);
app.use(routeUser);
app.use(routeProduct);

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
