const db = require("../db/db");
const { request, response } = require("express");

//create checkout
const createCheckout = async (req = request, res = response) => {
  try {
    const { product, id_product, price, qty } = await req.body;
    const createData = await db("checkout");
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
