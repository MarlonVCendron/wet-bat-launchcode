import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table('quotes', (table) => {
    table.string('transportation');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.table('quotes', (table) => {
    table.dropColumn('transportation');
  });
}
