import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuntoEvaluacionModule } from './punto-evaluacion/punto-evaluacion.module';

@Module({
  imports: [PuntoEvaluacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
