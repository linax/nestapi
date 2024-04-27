import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationPinController } from './evaluation-pin.controller';
import { EvaluationPinService } from './evaluation-pin.service';

describe('PuntoEvaluacionController', () => {
  let controller: EvaluationPinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluationPinController],
      providers: [EvaluationPinService],
    }).compile();

    controller = module.get<EvaluationPinController>(EvaluationPinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
