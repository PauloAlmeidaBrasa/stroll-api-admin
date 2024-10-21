import { Knex } from "knex";
import bcrypt from "bcryptjs"

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Hash the passwords
  const hashedPassword1 = await bcrypt.hash('password123', 10);
  const hashedPassword2 = await bcrypt.hash('secret456', 10);

  // Inserts seed entries
  await knex('users').insert([
    { id: 1, username: 'user1', email: 'user1@example.com', password: hashedPassword1 },
    { id: 2, username: 'user2', email: 'user2@example.com', password: hashedPassword2 }
  ]);
};
