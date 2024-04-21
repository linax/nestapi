import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuntoEvaluacionModule } from './punto-evaluacion/punto-evaluacion.module';
import { EdificacionModule } from './edificacion/edificacion.module';

@Module({
  imports: [PuntoEvaluacionModule, EdificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
