import { PuntoEvaluacionService } from './punto-evaluacion.service';
import { CreatePuntoEvaluacionDto } from './dto/create-punto-evaluacion.dto';
import { UpdatePuntoEvaluacionDto } from './dto/update-punto-evaluacion.dto';
export declare class PuntoEvaluacionController {
    private readonly puntoEvaluacionService;
    constructor(puntoEvaluacionService: PuntoEvaluacionService);
    create(createPuntoEvaluacionDto: CreatePuntoEvaluacionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePuntoEvaluacionDto: UpdatePuntoEvaluacionDto): string;
    remove(id: string): string;
}
