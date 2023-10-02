/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.increments('id');
        table.string('nama', 150);
        table.integer('price');
        table.integer('stock');
        table.string('category', 150);
        table.string('image', 255);
        table.boolean('statusStock');
        table.boolean('statusProduct');
        table.string('description');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
