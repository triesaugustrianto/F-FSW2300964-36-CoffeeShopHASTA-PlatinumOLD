const { request, response } = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkToken = async (req = request, res = response, next) => {
  try {
    const authToken = await req.headers["authorization"];

    const token = await authToken.split(" ")[1];

    //check token
    const verify = await jwt.verify(token, process.env.SECRET);

    if (!verify) {
      return res.redirect("http://localhost:5173");
    }

    // req body
    req.body = { ...req.body, ...verify };

    next();
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

module.exports = checkToken;
