import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  return knex.schema.createTable('quotes', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('name');
    table.string('departure_loc');
    table.string('destination_loc');
    table.dateTime('departure_date');
    table.dateTime('return_date');
    table.integer('people');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('quotes');
}
