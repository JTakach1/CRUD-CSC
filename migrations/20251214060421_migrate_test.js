exports.up = async function(knex) {
  await knex.raw('CREATE SCHEMA IF NOT EXISTS molloyeats;');
  await knex.schema.createTable('molloyeats.menu', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('description').nullable();
    table.decimal('price');
  }).catch(console.error);
};


exports.down = async function(knex) {
  await knex.schema.dropTable('molloyeats.menu').catch(console.error);
};
