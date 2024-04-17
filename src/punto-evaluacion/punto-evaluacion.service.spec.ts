import { Test, TestingModule } from '@nestjs/testing';
import { PuntoEvaluacionService } from './punto-evaluacion.service';

describe('PuntoEvaluacionService', () => {
  let service: PuntoEvaluacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuntoEvaluacionService],
    }).compile();

    service = module.get<PuntoEvaluacionService>(PuntoEvaluacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
