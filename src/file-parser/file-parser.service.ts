import * as moment from 'moment';
import * as XLSX from 'xlsx';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { FilePaserDTO } from './file-parser.dto';
import { FileParser } from './file-parser.model';
import { Student } from './student-model';
import { StudentDTO } from './student.dto';

@Injectable()
export class FileParserService {
  constructor(
    @InjectModel(FileParser) private filerParserModel: typeof FileParser,
    @InjectModel(Student) private studentModel: typeof Student,
  ) {}

  processFile(file: Express.Multer.File): void {
    const workBook: XLSX.WorkBook = XLSX.read(file.buffer, {
      type: 'buffer',
      cellDates: true,
      cellNF: false,
    });
    const sheetName = workBook?.SheetNames[0]; // asigne first sheet name of file
    const sheet: XLSX.WorkSheet = workBook.Sheets[sheetName]; // entire sheet information asigned to sheet variable
    //const createdDate: Date = workBook.rops.CreatedDate; // file created date information
    const jsonData: XLSX.WorkSheet = XLSX.utils.sheet_to_json(sheet, {
      dateNF: 'YYYY-MM-DD',
    });

    this.prepareFile(jsonData);
  }

  private prepareFile(file: XLSX.WorkSheet): void {
    let fileQueue: Array<StudentDTO> = [];

    for (let index = 0; index < file.length; index++) {
      const fileDTO = new StudentDTO();
      /* fileDTO.cmpNumeroLegal = file[index].CMP_NUMERO_LEGAL;
      fileDTO.proCodigo = file[index].PRO_CODIGO;
      fileDTO.cmpFechaEmision = moment(file[index].CMP_FECHA_EMISION).format(
        'DD/MM/YYYY',
      ); */
      // validar tipos de datos y que not null esten llenos y que exista el nombre de la columna en excel
      // si hay un error que devuelva el mismo archivo con un log de errores
      fileDTO.studentCode = file[index]['Legajo'];
      fileDTO.cauCode = file[index]['Cau Codigo'];
      fileDTO.cauSegment = file[index]['SEGMENTO CAU'];
      fileDTO.cauName = file[index]['NOMBRE CAU'];
      fileDTO.modality = file[index]['Modalidad'];
      fileDTO.shift = file[index]['Turno'];
      fileDTO.level = file[index]['Nivel '];
      fileDTO.riPeriod = file[index]['Periodo de RI'];
      fileDTO.listPriceMm = file[index]['Precio de Lista MM'];
      fileDTO.listPriceAb = file[index]['Precio de Lista Ticket A/B'];
      fileDTO.diffListPriceGrade =
        file[index]['Precio de Lista Diferenciado Solo Grado'];
      fileDTO.currentPromMm =
        file[index]['Promo Vigente MM(aplica a todas las modalidades)'];
      fileDTO.ticketAProm = file[index]['PROMO TICKET A'];
      fileDTO.ticketBProm = file[index]['PROMO  TICKET B'];
      fileDTO.ticketDProm = file[index]['PROMO TICKET D'];
      fileDTO.listPrice1Course = file[index]['Precio Lista Arancel 1 Materia'];
      fileDTO.listPrice3Course = file[index]['Precio Lista Arancel 3 Materia'];
      fileDTO.listPrice4Course = file[index]['Precio Lista Arancel 4 Materia'];
      fileDTO.cauCode = file[index]['Precio Lista Arancel 6 Materias'];
      fileDTO.cauCode = file[index]['PROMO ADICIONAL'];
      fileDTO.cauCode = file[index]['PROMO ARANCEL P.'];
      fileDTO.cauCode = file[index]['Precio de Total MM'];
      fileDTO.cauCode = file[index]['Precio de Total TicketA'];
      fileDTO.cauCode = file[index]['Precio de Total TicketB'];
      fileDTO.cauCode = file[index]['Precio de Total TicketD'];

      fileQueue.push(fileDTO);
    }

    //this.insertSingleRecordFile(fileQueue);
    //return fileQueue

    console.log(fileQueue);
  }

  // Insertar registros de a 50 por vez.

  private insertBulkFile(bulk: StudentDTO[]): void {
    this.studentModel.bulkCreate(bulk); // add after create options
  }

  private insertSingleRecordFile(file: StudentDTO[]): void {
    this.studentModel.create(file);
  }
}
