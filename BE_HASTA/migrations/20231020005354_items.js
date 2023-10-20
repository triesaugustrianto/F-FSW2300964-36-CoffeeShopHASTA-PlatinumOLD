/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments("id");
    table.string("name");
    table.string("qty");
    table.string("keterangan");
    table.integer("id_transaksi").unsigned().notNullable();
    table
      .foreign("id_transaksi")
      .references("id")
      .inTable("transaction")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("items");
};
