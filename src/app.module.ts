import { FileParser } from './file-parser/file-parser.model';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileParserModule } from './file-parser/file-parser.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    /*SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: 'root',
      database: 'nest_practice',
      models: [FileParser],
      autoLoadModels: true,
    }),*/
    DatabaseModule,
    FileParserModule,
  ] /*,
  controllers: [AppController],
  providers: [AppService],*/,
})
export class AppModule {}
