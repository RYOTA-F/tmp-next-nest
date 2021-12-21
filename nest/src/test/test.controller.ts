import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('tests')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTests(): any {
    return this.testService.getTests();
  }
}
