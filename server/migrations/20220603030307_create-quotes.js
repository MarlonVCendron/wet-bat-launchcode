/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.createTable('quotes', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('UUID()'));
    table.string('name');
    table.string('departure_loc');
    table.string('destination_loc');
    table.dateTime('departure_date');
    table.dateTime('return_date');
    table.integer('people');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.dropTable('quotes');
};
