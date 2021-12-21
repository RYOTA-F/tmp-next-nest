import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const options: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'ryota',
  password: 'test',
  database: 'tmp_nest_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['migration/*.migration{.ts,.js}'],
  cli: {
    migrationsDir: 'migration',
  },
};

export default options;
