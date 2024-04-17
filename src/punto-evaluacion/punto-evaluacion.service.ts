import { Injectable } from '@nestjs/common';
import { CreatePuntoEvaluacionDto } from './dto/create-punto-evaluacion.dto';
import { UpdatePuntoEvaluacionDto } from './dto/update-punto-evaluacion.dto';

@Injectable()
export class PuntoEvaluacionService {
  create(createPuntoEvaluacionDto: CreatePuntoEvaluacionDto) {
    return 'This action adds a new puntoEvaluacion';
  }

  findAll() {
    return `This action returns all puntoEvaluacion test if works`;
  }

  findOne(id: number) {
    return `This action returns a #${id} puntoEvaluacion`;
  }

  update(id: number, updatePuntoEvaluacionDto: UpdatePuntoEvaluacionDto) {
    return `This action updates a #${id} puntoEvaluacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} puntoEvaluacion`;
  }
}
