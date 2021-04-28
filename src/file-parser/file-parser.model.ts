import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'file_parser' })
export class FileParser extends Model {
  @Column({ field: 'fpa_numero', primaryKey: true, autoIncrement: true })
  fpaNumero: number;

  @Column({ field: 'cmp_numero_legal' })
  cmpNumeroLegal: string;

  @Column({ field: 'pro_codigo' })
  proCodigo: string;

  @Column({ field: 'cmp_fecha_emision' })
  cmpFechaEmision: string;
}
