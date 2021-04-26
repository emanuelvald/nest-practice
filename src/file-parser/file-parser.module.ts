import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { FileParserController } from './file-parser.controller';
import { FileParser } from './file-parser.model';
import { FileParserService } from './file-parser.service';

@Module({
  imports: [SequelizeModule.forFeature([FileParser])],
  controllers: [FileParserController],
  providers: [FileParserService],
})
export class FileParserModule {}
