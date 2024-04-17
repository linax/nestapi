import { Module } from '@nestjs/common';
import { PuntoEvaluacionService } from './punto-evaluacion.service';
import { PuntoEvaluacionController } from './punto-evaluacion.controller';

@Module({
  controllers: [PuntoEvaluacionController],
  providers: [PuntoEvaluacionService],
})
export class PuntoEvaluacionModule {}
