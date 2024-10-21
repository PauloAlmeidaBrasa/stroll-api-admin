import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', function (table) {
        table.increments('id');           // Primary key
        table.string('username', 50);     // Username field
        table.string('email', 100);       // Email field
        table.string('password', 255);    // Password field
        table.timestamps(true, true);     // Created at and updated at fields
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

