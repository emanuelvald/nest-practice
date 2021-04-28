import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'students' })
export class Student extends Model {
  @Column({ field: 'id', primaryKey: true, autoIncrement: true })
  id: number;

  @Column({
    field: 'student_code',
    type: DataType.STRING(25),
    allowNull: false,
  })
  studentCode: string;

  @Column({ field: 'cau_code', type: DataType.STRING(25), allowNull: false })
  cauCode: string;

  @Column({ field: 'cau_segment', type: DataType.STRING(1), allowNull: false })
  cauSegment: string;

  @Column({ field: 'cau_name', type: DataType.STRING(255) })
  cauName: string;

  @Column({ field: 'modality', type: DataType.STRING(50) })
  modality: string;

  @Column({ field: 'shift', type: DataType.STRING(50) })
  shift: string;

  @Column({ field: 'level', type: DataType.STRING(25) })
  level: string;

  @Column({ field: 'ri_period', type: DataType.STRING(25) })
  riPeriod: string;

  @Column({ field: 'list_price_mm', type: DataType.DOUBLE })
  listPriceMm: number;

  @Column({ field: 'list_price_ab', type: DataType.DOUBLE })
  listPriceAb: number;

  @Column({ field: 'diff_list_price_grade', type: DataType.DOUBLE })
  diffListPriceGrade: number;

  @Column({ field: 'current_prom_mm', type: DataType.DOUBLE })
  currentPromMm: number;

  @Column({ field: 'ticket_a_prom', type: DataType.DOUBLE })
  ticketAProm: number;

  @Column({ field: 'ticket_b_prom', type: DataType.DOUBLE })
  ticketBProm: number;

  @Column({ field: 'ticket_d_prom', type: DataType.DOUBLE })
  ticketDProm: number;

  @Column({ field: 'list_price_1_course', type: DataType.DOUBLE })
  listPrice1Course: number;

  @Column({ field: 'list_price_3_course', type: DataType.DOUBLE })
  listPrice3Course: number;

  @Column({ field: 'list_price_4_course', type: DataType.DOUBLE })
  listPrice4Course: number;

  @Column({ field: 'list_price_6_course', type: DataType.DOUBLE })
  listPrice6Course: number;

  @Column({ field: 'additional_prom', type: DataType.DOUBLE })
  additionalProm: number;

  @Column({ field: 'p_fee_prom', type: DataType.DOUBLE })
  pFeeProm: number;

  @Column({ field: 'mm_total', type: DataType.DOUBLE })
  mmTotal: number;

  @Column({ field: 'ticket_a_total', type: DataType.DOUBLE })
  ticketATotal: number;

  @Column({ field: 'ticket_b_total', type: DataType.DOUBLE })
  ticketBTotal: number;

  @Column({ field: 'ticket_d_total', type: DataType.DOUBLE })
  ticketDTotal: number;
}
