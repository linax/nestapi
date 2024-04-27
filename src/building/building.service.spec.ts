import { Test, TestingModule } from '@nestjs/testing';
import { BuildingService } from './building.service';
import { Building } from './entities/building.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('BuildingService', () => {
  let service: BuildingService;
  let repository: Repository<Building>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BuildingService,
        {
          provide: getRepositoryToken(Building),
          useValue: {
            find: jest.fn().mockResolvedValue([
              { pev_id: 1, nombre: 'Edificio 1' },
              { pev_id: 2, nombre: 'Edificio 2' },
            ]),
          },
        },
      ],
    }).compile();

    service = module.get<BuildingService>(BuildingService);
    repository = module.get(getRepositoryToken(Building));
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