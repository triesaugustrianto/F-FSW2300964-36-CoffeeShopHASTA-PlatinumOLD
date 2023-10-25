// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  //development

  // development: {
  //   client: "postgresql",
  //   connection: {
  //     database: "db_HastaCoffeeShop",
  //     user: "admin",
  //     password: "admin",
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  //===================================================
  //production
  development: {
    client: "postgresql",
    connection: {
      database: "learning",
      user: "postgres",
      password: "admin",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
