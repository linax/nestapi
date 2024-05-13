import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvaluationPinModule } from './evaluation-pin/evaluation-pin.module';
import { BuildingModule } from './building/building.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Building } from './building/entities/building.entity';
import { ConfigModule } from '@nestjs/config';
import { EvaluationPin } from './evaluation-pin/entities/evaluation-pin.entity';
import { EvaluationPinType } from './evaluation-pin/entities/type.entity';



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
        ssl: { rejectUnauthorized: true },   //SSL certificates
        entities: [Building, EvaluationPin, EvaluationPinType],


      }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
