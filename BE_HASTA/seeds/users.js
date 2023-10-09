/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: "ffbf266b-2193-4426-9e10-c883c995ea49",
      name: "dea",
      phone: 628,
      email: "dea@gmail.com",
      address: "kemayoran jakarta pusat",
      password: "knfioashfnasnjk",
      role: "user",
    },
    {
      id: "ffbf266b-2193-4426-9e10-c883c995ea52",
      name: "dani",
      phone: 66064,
      email: "dani@gmail.com",
      address: "kemayoran jakarta pusat",
      password: "knfioashfnasnjk",
      role: "admin",
    },
    {
      id: "ffbf266b-2193-4426-9e10-c883c995ea12",
      name: "agus",
      phone: 66064,
      email: "agus@gmail.com",
      address: "kemayoran jakarta pusat",
      password: "knfioashfnasnjk",
      role: "user",
    },
  ]);
};
