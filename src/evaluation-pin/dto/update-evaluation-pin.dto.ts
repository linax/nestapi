import { PartialType } from '@nestjs/mapped-types';
import { CreateEvaluationPinDto } from './create-evaluation-pin.dto';

export class UpdateEvaluationPinDto extends PartialType(CreateEvaluationPinDto) {}
