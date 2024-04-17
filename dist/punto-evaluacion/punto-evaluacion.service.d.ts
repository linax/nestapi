import { CreatePuntoEvaluacionDto } from './dto/create-punto-evaluacion.dto';
import { UpdatePuntoEvaluacionDto } from './dto/update-punto-evaluacion.dto';
export declare class PuntoEvaluacionService {
    create(createPuntoEvaluacionDto: CreatePuntoEvaluacionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePuntoEvaluacionDto: UpdatePuntoEvaluacionDto): string;
    remove(id: number): string;
}
