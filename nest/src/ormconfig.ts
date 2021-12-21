import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const options: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'db',
  port: Number(process.env.DB_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['migration/*.migration{.ts,.js}'],
  cli: {
    migrationsDir: 'migration',
  },
};

export default options;
