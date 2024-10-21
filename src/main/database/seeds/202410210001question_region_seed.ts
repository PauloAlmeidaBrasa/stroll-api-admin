import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("question_region").del();

    // Inserts seed entries
    await knex("question_region").insert([
        { id: 1, region_name: "USA" },
        { id: 2, region_name: "Singapore" },
        { id: 3, region_name: "Brazil" }
    ]);
};
