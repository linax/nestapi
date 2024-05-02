import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationPinService } from './evaluation-pin.service';

describe('PuntoEvaluacionService', () => {
  let service: EvaluationPinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluationPinService],
    }).compile();

    service = module.get<EvaluationPinService>(EvaluationPinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
