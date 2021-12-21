export default () => ({
  database: {
    name: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    pass: process.env.MYSQL_PASSWORD,
    port: process.env.DB_PORT,
  },
});
