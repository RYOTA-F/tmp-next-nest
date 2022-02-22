import Configuration from './config/configuration'
const configuration = Configuration()

module.exports = {
  type: 'mysql',
  host: 'db',
  port: configuration.database.port,
  username: configuration.database.user,
  password: configuration.database.pass,
  database: configuration.database.name,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}
