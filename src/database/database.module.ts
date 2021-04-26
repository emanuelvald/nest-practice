import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { env } from 'node:process';
import { FileParser } from '../file-parser/file-parser.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'nest_practice',
      models: [FileParser],
      autoLoadModels: true,
    }),
  ],
})
export class DatabaseModule {}
