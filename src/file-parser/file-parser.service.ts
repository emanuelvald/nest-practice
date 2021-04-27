import * as moment from 'moment';
import * as XLSX from 'xlsx';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { FilePaserDTO } from './file-parser.dto';
import { FileParser } from './file-parser.model';

@Injectable()
export class FileParserService {
  constructor(
    @InjectModel(FileParser) private filerParserModel: typeof FileParser,
  ) {}

  processFile(file: Express.Multer.File): void {
    const workBook: XLSX.WorkBook = XLSX.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
      cellNF: false,
    });
    const sheetName = workBook?.SheetNames[1]; // asigne first sheet name of file
    const sheet: XLSX.WorkSheet = workBook.Sheets[sheetName]; // entire sheet information asigned to sheet variable
    //const createdDate: Date = workBook.rops.CreatedDate; // file created date information
    const jsonData: XLSX.WorkSheet = XLSX.utils.sheet_to_json(sheet, {
      dateNF: 'YYYY-MM-DD',
    });

    this.prepareFile(jsonData);
  }

  private prepareFile(file: XLSX.WorkSheet): void {
    let fileQueue: Array<FilePaserDTO> = [];

    for (let index = 0; index < file.length; index++) {
      const fileDTO = new FilePaserDTO();
      fileDTO.cmpNumeroLegal = file[index].CMP_NUMERO_LEGAL;
      fileDTO.proCodigo = file[index].PRO_CODIGO;
      fileDTO.cmpFechaEmision = moment(file[index].CMP_FECHA_EMISION).format(
        'DD/MM/YYYY',
      );

      fileQueue.push(fileDTO);
    }

    this.insertFile(fileQueue);
  }

  private insertFile(bulk: FilePaserDTO[]): void {
    this.filerParserModel.bulkCreate(bulk, {
      fields: ['cmpNumeroLegal', 'proCodigo', 'cmpFechaEmision'],
    }); // add after create options
  }
}
