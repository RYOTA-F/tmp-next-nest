import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions'
import Configuration from '../config/configuration'
const configuration = Configuration()

const options: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'db',
  port: configuration.database.port,
  username: configuration.database.user,
  password: configuration.database.pass,
  database: configuration.database.name,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['migration/*.migration{.ts,.js}'],
  cli: {
    migrationsDir: 'migration',
  },
}

export default options
