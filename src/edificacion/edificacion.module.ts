import { Module } from '@nestjs/common';
import { EdificacionService } from './edificacion.service';
import { EdificacionController } from './edificacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Edificacion } from './entities/edificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Edificacion])],
  controllers: [EdificacionController],
  providers: [EdificacionService],
})
export class EdificacionModule {}
