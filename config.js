const env = process.env;

const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'kandula.db.elephantsql.com',
    port: env.DB_PORT || '5432',
    user: env.DB_USER || 'audbbjfi',
    password: env.DB_PASSWORD || 'FhEY4Jp8z4iR7tQcTi0HTwlPKtxWRgiM',
    database: env.DB_NAME || 'audbbjfi',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;