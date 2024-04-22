import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
import { Edificacion } from './entities/edificacion.entity';
import { Repository } from 'typeorm';
export declare class EdificacionService {
    private edificacionRepository;
    constructor(edificacionRepository: Repository<Edificacion>);
    create(createEdificacionDto: CreateEdificacionDto): string;
    findAll(): Promise<Edificacion[]>;
    findOne(id: number): string;
    update(id: number, updateEdificacionDto: UpdateEdificacionDto): string;
    remove(id: number): string;
}
