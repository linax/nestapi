import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuntoEvaluacionModule } from './punto-evaluacion/punto-evaluacion.module';
import { EdificacionModule } from './edificacion/edificacion.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edificacion } from './edificacion/entities/edificacion.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PuntoEvaluacionModule, EdificacionModule, ConfigModule.forRoot(),

      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password:  process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema:'public',
        ssl: { rejectUnauthorized: true },   // Habilita SSL y rechaza certificados no autorizados (opcional)
        entities: [Edificacion],


      }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
