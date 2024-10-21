import { Knex  } from 'knex';

const config: Knex.Config = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'admin',
    password: 'adminpassword',
    database: 'admin-stroll'
  },
  migrations: {
    directory: 'src/main/database/migrations',
    extension: 'ts'
  },
  seeds: {
    directory: 'src/main/database/seeds'
  }
};

export default config;