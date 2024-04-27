import { Test, TestingModule } from '@nestjs/testing';
import { EdificacionService } from './edificacion.service';
import { Edificacion } from './entities/edificacion.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('EdificacionService', () => {
  let service: EdificacionService;
  let repository: Repository<Edificacion>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EdificacionService,
        {
          provide: getRepositoryToken(Edificacion),
          useValue: {
            find: jest.fn().mockResolvedValue([
              { pev_id: 1, nombre: 'Edificio 1' },
              { pev_id: 2, nombre: 'Edificio 2' },
            ]),
          },
        },
      ],
    }).compile();

    service = module.get<EdificacionService>(EdificacionService);
    repository = module.get(getRepositoryToken(Edificacion));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  it('should return a list of buildings', async () => {
    const buildings = await service.findAll();
    expect(buildings).toEqual([
      { pev_id: 1, nombre: 'Edificio 1' },
      { pev_id: 2, nombre: 'Edificio 2' },
    ]);
  });
});