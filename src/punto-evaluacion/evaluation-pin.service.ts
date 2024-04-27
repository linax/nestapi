import { Injectable } from '@nestjs/common';
import { CreateEvaluationPinDto } from './dto/create-evaluation-pin.dto';
import { UpdateEvaluationPinDto } from './dto/update-evaluation-pin.dto';

@Injectable()
export class EvaluationPinService {
  create(createPuntoEvaluacionDto: CreateEvaluationPinDto) {
    return 'This action adds a new puntoEvaluacion';
  }

  findAll() {
    return `This action returns all puntoEvaluacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} puntoEvaluacion`;
  }

  update(id: number, updatePuntoEvaluacionDto: UpdateEvaluationPinDto) {
    return `This action updates a #${id} puntoEvaluacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} puntoEvaluacion`;
  }
}
