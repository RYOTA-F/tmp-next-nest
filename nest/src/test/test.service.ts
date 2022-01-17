import { Injectable } from '@nestjs/common'
import { getRepository } from 'typeorm'
import { Tests } from '../entity/test.entity'

@Injectable()
export class TestService {
  getTests(): Promise<any> {
    return getRepository(Tests).find()
  }
}
