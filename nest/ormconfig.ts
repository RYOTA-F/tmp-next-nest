import Configuration from './config/configuration'
const configuration = Configuration()

const config = {
  type: 'mysql',
  host: 'db',
  port: configuration.database.port,
  username: configuration.database.user,
  password: configuration.database.pass,
  database: configuration.database.name,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/database/migration/**/*.ts'],
  seeds: ['src/database/seeders/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/database/migration',
    subscribersDir: 'src/subscriber',
  },
}

export default config
