const express = require("express");
const app = express();
const port = 3000;
const db = require("./src/db/db");
const router = require("./src/routers/routerProducts");

const logger = (req, res, next) => {
  next();
};

//midleware
console.log(logger);
app.use(logger);
app.use(express.json());
app.use(express.urlencoded(false));
//app.use('/api/products', router)
app.use(router);

//error handling

app.use("/", (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "not found",
  });
});

app.use("/error", (req, res) => {
  error;
});

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
