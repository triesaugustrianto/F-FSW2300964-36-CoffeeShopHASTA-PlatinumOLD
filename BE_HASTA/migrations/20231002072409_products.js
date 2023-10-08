/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (table) => {
    table.increments("id").primary();
    table.string("name", 150).notNullable();
    table.integer("price").notNullable();
    table.integer("stock");
    table.string("category", 150);
    table.string("image", 255);
    table.boolean("statusStock").defaultTo(true);
    table.boolean("statusProduct").defaultTo(true);
    table.string("description");
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("products");
};
