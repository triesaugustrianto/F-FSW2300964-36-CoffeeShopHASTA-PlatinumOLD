/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("checkout", (table) => {
    table.increments("id").primary();
    table.string("product").notNullable();
    table.integer("id_product").notNullable();
    table.bigInteger("price").notNullable();
    table.integer("qty").notNullable();
    table.string("size").notNullable();
    table.string("sweet").notNullable();
    table.string("availble").notNullable();
    table.string("toping");
    table.string("owner");
    table.boolean("isPay").defaultTo(false);
    table.timestamp("createdAt").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("checkout");
};
