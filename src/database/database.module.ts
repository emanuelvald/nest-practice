import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { FileParser } from '../file-parser/file-parser.model';
import { Student } from '../file-parser/student-model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'nest_practice',
      models: [FileParser, Student],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
