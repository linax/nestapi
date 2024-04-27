import { Injectable } from '@nestjs/common';
import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Building } from './entities/building.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BuildingService {
  constructor(
    @InjectRepository(Building)
    private edificacionRepository: Repository<Building>,
  ) {}
  create(createEdificacionDto: CreateEdificacionDto) {
    return 'This action adds a new edificacion';
  }

  async findAll(): Promise<Building[]> {
    return this.edificacionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} edificacion`;
  }

  update(id: number, updateEdificacionDto: UpdateEdificacionDto) {
    return `This action updates a #${id} edificacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} edificacion`;
  }
}
