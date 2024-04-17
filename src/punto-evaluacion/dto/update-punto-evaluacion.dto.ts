import { PartialType } from '@nestjs/mapped-types';
import { CreatePuntoEvaluacionDto } from './create-punto-evaluacion.dto';

export class UpdatePuntoEvaluacionDto extends PartialType(CreatePuntoEvaluacionDto) {}
