import { FileParser } from './file-parser.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { FileParserService } from './file-parser.service';
import { FileParserController } from './file-parser.controller';

@Module({
  imports: [SequelizeModule.forFeature([FileParser])],
  controllers: [FileParserController],
  providers: [FileParserService],
})
export class FileParserModule {}
