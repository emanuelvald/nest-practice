import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { FileParserModule } from './file-parser/file-parser.module';

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
