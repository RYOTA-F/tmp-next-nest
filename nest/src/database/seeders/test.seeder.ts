import { Connection } from 'typeorm'
import { Factory, Seeder, useRefreshDatabase } from 'typeorm-seeding'
import { Tests } from '../../entity/test.entity'
import { tests } from '../seeds/test.seed'

export class CreateTest implements Seeder {
  public async run(_: Factory, connection: Connection): Promise<void> {
    await useRefreshDatabase()

    await connection
      .createQueryBuilder()
      .insert()
      .into(Tests)
      .values(tests)
      .execute()
  }
}
