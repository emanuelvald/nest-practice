import { Module } from '@nestjs/common';
import { FileParserService } from './file-parser.service';
import { FileParserController } from './file-parser.controller';

@Module({
  controllers: [FileParserController],
  providers: [FileParserService]
})
export class FileParserModule {}
