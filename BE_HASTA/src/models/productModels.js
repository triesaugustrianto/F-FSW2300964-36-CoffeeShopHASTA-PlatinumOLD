const db = require("../db/db");

module.exports = {
  //get all
  showAll: () => {
    return db.select("*").from("products").where("statusProduct", true);
  },
  // detail
  showById: (id) => {
    return db.select("*").from("products").where("id", id);
  },
  //create data
  create: (name, price, stock, category, image, description) => {
    return db("products").insert({
      name: name,
      price: price,
      stock: stock,
      category: category,
      image: image,
      description: description,
    });
  },
  //update data
  update: (id, name, price, stock, category, image, description) => {
    return db("products")
      .where("id", id)
      .update({
        name: name,
        price: price,
        stock: stock,
        category: category,
        image: image,
        description: description,
      })
      .returning([
        "name",
        "price",
        "stock",
        "category",
        "image",
        "description",
      ]);
  },
  //delete
  delete: (id) => {
    return db("products").where("id", id).update({
      statusProduct: false,
    });
  },
};
