import { FileParser } from './file-parser.model';
import { FilePaserDTO } from './file-parser.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as XLSX from 'xlsx';
import * as moment from 'moment';

@Injectable()
export class FileParserService {
  constructor(
    @InjectModel(FileParser) private filerParserModel: typeof FileParser,
  ) {}

  private fileQueue: Array<FilePaserDTO> = [];

  queueFile(file: Express.Multer.File): XLSX.WorkSheet {
    const workBook: XLSX.WorkBook = XLSX.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
      cellNF: false,
    });
    const sheetName = workBook?.SheetNames[1]; // asigne first sheet name of file
    const sheet: XLSX.WorkSheet = workBook.Sheets[sheetName]; // entire sheet information asigned to sheet variable
    //const createdDate: Date = workBook.Props.CreatedDate; // file created date information
    const jsonData: XLSX.WorkSheet = XLSX.utils.sheet_to_json(sheet, {
      dateNF: 'YYYY-MM-DD',
    });

    for (let index = 0; index < jsonData.length; index++) {
      const f = new FilePaserDTO();
      f.cmpNumeroLegal = jsonData[index].CMP_NUMERO_LEGAL;
      f.proCodigo = jsonData[index].PRO_CODIGO;
      f.cmpFechaEmision = moment(jsonData[index].CMP_FECHA_EMISION).format(
        'DD/MM/YYYY',
      );

      this.fileQueue.push(f);
    }

    for (let index = 0; index < this.fileQueue.length; index++) {
      console.log(this.fileQueue[index]);
    }

    this.filerParserModel.bulkCreate(this.fileQueue);

    return jsonData;
  }

  private insertFile(file: FileParser[]) {
    this.filerParserModel.create(file);
  }
}
