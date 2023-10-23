/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.string("id").primary();
    table.string("name").notNullable();
    table.string("phone");
    table.string("email").unique().notNullable();
    table.string("address");
    table.string("password").notNullable();
    table.enum("role", ["admin", "user"]).notNullable;
    table.boolean("isConfirm").defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
