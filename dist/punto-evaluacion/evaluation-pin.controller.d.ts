import { EvaluationPinService } from './evaluation-pin.service';
import { CreateEvaluationPinDto } from './dto/create-evaluation-pin.dto';
import { UpdateEvaluationPinDto } from './dto/update-evaluation-pin.dto';
export declare class EvaluationPinController {
    private readonly puntoEvaluacionService;
    constructor(puntoEvaluacionService: EvaluationPinService);
    create(createPuntoEvaluacionDto: CreateEvaluationPinDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePuntoEvaluacionDto: UpdateEvaluationPinDto): string;
    remove(id: string): string;
}
