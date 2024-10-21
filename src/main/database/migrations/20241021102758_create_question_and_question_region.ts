import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Create question_region first
  await knex.schema.createTable('question_region', (table) => {
    table.increments('id'); // Primary key
    table.string('region_name').notNullable();
  });

  // Create question with foreign key to question_region
  await knex.schema.createTable('question', (table) => {
    table.increments('id'); // Primary key
    table.integer('id_region').unsigned().notNullable();
    table.text('text').nullable();
    table.integer('days_cycle').notNullable();
    table.date('date_start_cycle').notNullable();
    table.foreign('id_region').references('id').inTable('question_region'); // Foreign key
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('question');
  await knex.schema.dropTable('question_region');
}
