const { request, response } = require("express");
const db = require("../db/db");

//get all product
const getAllProduct = async (req = request, res = response) => {
  try {
    const { categories } = await req.query;

    //find category
    const productCategory = await db("products").select("*");
    const category = productCategory.map((e) => e.category);
    const resultProduct = [...new Set(category)];

    //find data
    const resultData =
      categories === "all"
        ? await db("products").whereIn("category", resultProduct)
        : await db("products").where("category", categories);
    res.status(200).json({
      succes: true,
      query: resultData,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};

module.exports = { getAllProduct };
