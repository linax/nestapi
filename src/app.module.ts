import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvaluationPinModule } from './punto-evaluacion/evaluation-pin.module';
import { BuildingModule } from './building/building.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './building/entities/building.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EvaluationPinModule, BuildingModule, ConfigModule.forRoot(),

      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password:  process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        schema:'public',
        ssl: { rejectUnauthorized: true },   // Habilita SSL y rechaza certificados no autorizados (opcional)
        entities: [Building],


      }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
