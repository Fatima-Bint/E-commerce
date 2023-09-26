/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

exports.up = function(knex) {
    return knex.schema.createTable('products', table => {
      table.increments('id').primary();
      table.string('name');
      table.text('description');
      table.float('price');
      table.string('image');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('products');
  };
  
