import { Controller, Post, UploadedFile } from '@nestjs/common';
import { FileParserService } from './file-parser.service';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file-parser')
export class FileParserController {
  constructor(private readonly fileParserService: FileParserService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  UploadExcelFile(@UploadedFile() file: Express.Multer.File) {
    return this.fileParserService.queueFile(file);
  }
}
