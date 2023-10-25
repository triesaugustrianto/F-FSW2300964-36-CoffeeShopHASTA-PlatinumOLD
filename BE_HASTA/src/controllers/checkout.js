const db = require("../db/db");
const { request, response } = require("express");

//create checkout
const createCheckout = async (req = request, res = response) => {
  try {
    const { name, ID, price, qty, size, sweet, available, img, toping } =
      await req.body;

    //FIND DATA
    const findCheckout = await db("checkout")
      .where("id_product", ID)
      .andWhere("isPay", false)
      .andWhere("size", size)
      .andWhere("available", available)
      .andWhere("sweet", sweet)
      .andWhere("toping", toping)
      .first();

    if (findCheckout === undefined) {
      const createData = await db("checkout")
        .insert({
          id_product: parseInt(ID),
          product: name,
          price: parseInt(price),
          qty: parseInt(qty),
          size: size,
          sweet: sweet,
          available: available,
          toping: toping,
        })
        .returning([
          "product",
          "price",
          "qty",
          "size",
          "sweet",
          "available",
          "toping",
        ]);
      res.status(201).json({
        status: true,
        message: "success checkout",
        query: createData,
      });
    } else {
      const updateCheckout = await db("checkout")
        .where("id", findCheckout.id)
        .update({
          qty: findCheckout.qty + parseInt(qty),
          price: parseInt(findCheckout.price) + parseInt(price),
        })
        .returning(["product", "price", "qty", "size", "sweet", "available"]);
      res.status(201).json({
        status: true,
        message: "success checkout",
        query: updateCheckout,
      });
    }
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//get all checkout
const getAllcheckout = async (req = request, res = response) => {
  try {
    const getData = await db("checkout").where("isPay", false);
    const sumPrice = await db("checkout").where("isPay", false).sum("price");

    res.status(200).json({
      status: true,
      message: "data success",
      query: getData,
      totalPrice: sumPrice,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
//delete checkout
const deleteCheckout = async (req = request, res = response) => {
  try {
    const { id } = await req.params;
    const deleteData = await db("checkout").where("id", id).del();
    res.status(200).json({
      status: true,
      message: "data succes deleted",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      error: error.message,
    });
  }
};
module.exports = { createCheckout, getAllcheckout, deleteCheckout };
