import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import options from './ormconfig';
import configuration from '../config/configuration';

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
