import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingService } from './building.service';
import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';

@Controller('building')
export class BuildingController {
  constructor(private readonly edificacionService: BuildingService) {}

  @Post()
  create(@Body() createEdificacionDto: CreateEdificacionDto) {
    return this.edificacionService.create(createEdificacionDto);
  }

  @Get()
  async findAll() {
    return this.edificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return  this.edificacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEdificacionDto: UpdateEdificacionDto) {
    return this.edificacionService.update(+id, updateEdificacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.edificacionService.remove(+id);
  }
}
