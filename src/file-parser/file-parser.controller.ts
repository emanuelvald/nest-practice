import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FileParserService } from './file-parser.service';

@Controller('file-parser')
export class FileParserController {
  constructor(private readonly fileParserService: FileParserService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  UploadExcelFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileParserService.queueFile(file);
  }
}
