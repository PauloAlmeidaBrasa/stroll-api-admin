import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("question").del();

    // Inserts seed entries
    await knex("question").insert([
        { id: 1, text: "good morning", id_region: 1, days_cycle: 7, date_start_cycle: '2024-10-21' },
        { id: 2, text: "to chill", id_region: 2, days_cycle: 7, date_start_cycle: '2024-10-21'  },
        { id: 3, text: "love", id_region: 3, days_cycle: 7, date_start_cycle: '2024-10-21'  }
    ]);
};
