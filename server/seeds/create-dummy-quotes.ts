import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('quotes').del();

  // Inserts seed entries
  await knex('quotes').insert([
    {
      name: 'Marlon',
      departure_loc: 'Brazil',
      destination_loc: 'Canada',
      departure_date: '2022-06-03T22:17:10',
      return_date: '2024-06-03T22:17:10',
      people: 1,
    },
  ]);
}
