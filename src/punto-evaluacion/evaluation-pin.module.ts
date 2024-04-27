import { Module } from '@nestjs/common';
import { EvaluationPinService } from './evaluation-pin.service';
import { EvaluationPinController } from './evaluation-pin.controller';

@Module({
  controllers: [EvaluationPinController],
  providers: [EvaluationPinService],
})
export class EvaluationPinModule {}
