import { CreateEvaluationPinDto } from './dto/create-evaluation-pin.dto';
import { UpdateEvaluationPinDto } from './dto/update-evaluation-pin.dto';
export declare class EvaluationPinService {
    create(createPuntoEvaluacionDto: CreateEvaluationPinDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePuntoEvaluacionDto: UpdateEvaluationPinDto): string;
    remove(id: number): string;
}
