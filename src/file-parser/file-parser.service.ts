import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

@Injectable()
export class FileParserService {
  queueFile(file: Express.Multer.File): XLSX.WorkSheet {
    console.log('ñam');
    const book: XLSX.WorkBook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = book?.SheetNames[0]; //sheet names of file
    const sheet: XLSX.WorkSheet = book.Sheets[sheetName]; //entire sheet information asigned to sheet variable

    return sheet;
  }
}
