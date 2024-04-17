import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PuntoEvaluacionService } from './punto-evaluacion.service';
import { CreatePuntoEvaluacionDto } from './dto/create-punto-evaluacion.dto';
import { UpdatePuntoEvaluacionDto } from './dto/update-punto-evaluacion.dto';

@Controller('punto-evaluacion')
export class PuntoEvaluacionController {
  constructor(private readonly puntoEvaluacionService: PuntoEvaluacionService) {}

  @Post()
  create(@Body() createPuntoEvaluacionDto: CreatePuntoEvaluacionDto) {
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
  update(@Param('id') id: string, @Body() updatePuntoEvaluacionDto: UpdatePuntoEvaluacionDto) {
    return this.puntoEvaluacionService.update(+id, updatePuntoEvaluacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.puntoEvaluacionService.remove(+id);
  }
}
