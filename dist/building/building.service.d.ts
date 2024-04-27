import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
import { Building } from './entities/building.entity';
import { Repository } from 'typeorm';
export declare class BuildingService {
    private edificacionRepository;
    constructor(edificacionRepository: Repository<Building>);
    create(createEdificacionDto: CreateEdificacionDto): string;
    findAll(): Promise<Building[]>;
    findOne(id: number): string;
    update(id: number, updateEdificacionDto: UpdateEdificacionDto): string;
    remove(id: number): string;
}
