var dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

module.exports = {
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: '../data/migrations' },
//     seeds: { directory: '../data/seeds' },
//     pool: {
//       min: 2,
//       max: 10,
//     },
//   },

//   test: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: '../data/migrations' },
//     seeds: { directory: '../data/seeds' },
//   },

//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: { directory: '../data/migrations' },
//     seeds: { directory: '../data/seeds' },
//   },
development: {
  client: "postgresql",
  connection: {
    user: "postgres",
    password: ""
  },
  migrations: {
    directory: '../data/migrations',
    tableName: "knex_migrations"
  }
},
};