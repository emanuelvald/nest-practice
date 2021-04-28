import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { FileParserController } from './file-parser.controller';
import { FileParser } from './file-parser.model';
import { FileParserService } from './file-parser.service';
import { Student } from './student-model';

@Module({
  imports: [SequelizeModule.forFeature([FileParser, Student])],
  controllers: [FileParserController],
  providers: [FileParserService],
})
export class FileParserModule {}
