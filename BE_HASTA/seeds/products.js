/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();
  await knex("products").insert([
    {
      name: "gula aren",
      price: 18000,
      stock: 100,
      category: "coffe",
      image: "https://source.unsplash.com/random/300×300/?drink?coffe",
      description: "kopi gula aren dengan susu yang fresh",
    },
    {
      name: "latte",
      price: 18000,
      stock: 100,
      category: "coffe",
      image: "https://source.unsplash.com/random/300×300/?drink?coffe",
      description: "kopi latte dengan susu yang fresh",
    },
    {
      name: "mocca",
      price: 18000,
      stock: 100,
      category: "coffe",
      image: "https://source.unsplash.com/random/300×300/?drink?coffe",
      description: "kopi mocca dengan susu yang fresh",
    },
    {
      name: "juice alamaho",
      price: 18000,
      stock: 100,
      category: "juice",
      image: "https://source.unsplash.com/random/300%C3%97300/?drink?fruit",
      description: "buah segar dengan susu yang fresh",
    },
    {
      name: "juice caciagoe",
      price: 18000,
      stock: 100,
      category: "juice",
      image: "https://source.unsplash.com/random/300%C3%97300/?drink?fruit",
      description: "buah segar dengan susu yang fresh",
    },
    {
      name: "tea dilmah",
      price: 18000,
      stock: 100,
      category: "tea",
      image: "https://source.unsplash.com/random/300%C3%97300/?drink?tea",
      description: "daun teh alami",
    },
    {
      name: "tea tongjie",
      price: 18000,
      stock: 100,
      category: "tea",
      image: "https://source.unsplash.com/random/300%C3%97300/?drink?tea",
      description: "daun teh alami",
    },
  ]);
};
