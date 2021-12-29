module.exports = ({ env }) => {
  const [, user, password, host, port, database] = env('DATABASE_URL').match('postgres://(.*):(.*)@(.*):([0-9]{4})/(.*)');

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: { rejectUnauthorized: false },
      },
      // host: env("DATABASE_HOST"),
      // port: env.int("DATABASE_PORT"),
      // database: env("DATABASE_NAME"),
      // username: env("DATABASE_USER"),
      // password: env("DATABASE_PASSWORD"),
      // schema: env("DATABASE_SCHEMA", "public"),
      // connection: {
      //   filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      // },
      // useNullAsDefault: true,
    },
  }
};
