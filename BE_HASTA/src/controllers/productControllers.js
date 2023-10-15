const db = require("../db/db");
const productModels = require("../models/productModels");

module.exports = {
  //show all data
  showAll: async (req, res) => {
    try {
      const data = await productModels.showAll();
      res.status(200).json({
        status: 200,
        query: data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
  //show detail data
  showById: async (req, res) => {
    const id = req.params.id;

    try {
      const data = await productModels.showById(id);

      if (!data) {
        res.json({
          status: 404,
          message: "Product Not Found",
        });
      } else {
        res.status(200).json({
          status: 200,
          query: data,
        });
      }
    } catch (error) {
      res.json({
        status: 500,
        message: error.message,
      });
    }
  },
  //create data
  create: async (req, res) => {
    try {
      const { name, price, stock, category, image, description } = req.body;
      const data = await productModels.create(
        name,
        price,
        stock,
        category,
        image,
        description
      );
      res.status(201).json({
        status: 201,
        message: "Product Successfully Added",
        query: data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  },
  //update data
  update: async (req, res) => {
    try {
      const { name, price, stock, category, image, description } = req.body;
      const { id } = req.params;
      const data = await productModels.update(
        id,
        name,
        price,
        stock,
        category,
        image,
        description
      );
      res.status(201).json({
        status: 201,
        message: "Product Successfully Update",
        query: data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.stack,
      });
    }
  },
  //delete data
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const data = await productModels.delete(id);
      res.status(201).json({
        status: 201,
        message: "Product Successfully Deleted",
        query: data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.stack,
      });
    }
  },
};
