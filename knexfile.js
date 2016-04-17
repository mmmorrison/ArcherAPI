module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/archer'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
