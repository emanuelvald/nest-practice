import { PartialType } from '@nestjs/mapped-types';
import { CreateFileParserDto } from './create-file-parser.dto';

export class UpdateFileParserDto extends PartialType(CreateFileParserDto) {}
