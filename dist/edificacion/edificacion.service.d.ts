import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
export declare class EdificacionService {
    create(createEdificacionDto: CreateEdificacionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEdificacionDto: UpdateEdificacionDto): string;
    remove(id: number): string;
}
