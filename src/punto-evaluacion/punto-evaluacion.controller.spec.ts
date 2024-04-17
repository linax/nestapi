import { Test, TestingModule } from '@nestjs/testing';
import { PuntoEvaluacionController } from './punto-evaluacion.controller';
import { PuntoEvaluacionService } from './punto-evaluacion.service';

describe('PuntoEvaluacionController', () => {
  let controller: PuntoEvaluacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntoEvaluacionController],
      providers: [PuntoEvaluacionService],
    }).compile();

    controller = module.get<PuntoEvaluacionController>(PuntoEvaluacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
