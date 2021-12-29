module.exports = ({ env }) => {
  const [, user, password, host, port, database] = env('DATABASE_URL', 'postgres://user:password@host:5432/database').match('postgres://(.*):(.*)@(.*):([0-9]{4})/(.*)');

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
    },
  }
};
