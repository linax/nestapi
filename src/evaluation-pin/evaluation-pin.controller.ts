import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationPinService } from './evaluation-pin.service';
import { CreateEvaluationPinDto } from './dto/create-evaluation-pin.dto';
import { UpdateEvaluationPinDto } from './dto/update-evaluation-pin.dto';

@Controller('punto-evaluacion')
export class EvaluationPinController {
  constructor(private readonly puntoEvaluacionService: EvaluationPinService) {}

  @Post()
  create(@Body() createPuntoEvaluacionDto: CreateEvaluationPinDto) {
    return this.puntoEvaluacionService.create(createPuntoEvaluacionDto);
  }

  @Get()
  findAll() {
    return this.puntoEvaluacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.puntoEvaluacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePuntoEvaluacionDto: UpdateEvaluationPinDto) {
    return this.puntoEvaluacionService.update(+id, updatePuntoEvaluacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puntoEvaluacionService.remove(+id);
  }
}
