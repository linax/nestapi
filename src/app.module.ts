import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuntoEvaluacionModule } from './punto-evaluacion/punto-evaluacion.module';
import { EdificacionModule } from './edificacion/edificacion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edificacion } from './edificacion/entities/edificacion.entity';

@Module({
  imports: [PuntoEvaluacionModule, EdificacionModule,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 5432,
      username: 'default',
      password: '',
      database: 'verceldb',
      ssl: { rejectUnauthorized: true },   // Habilita SSL y rechaza certificados no autorizados (opcional)
      entities: [Edificacion],

    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
