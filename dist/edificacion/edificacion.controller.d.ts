import { EdificacionService } from './edificacion.service';
import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
export declare class EdificacionController {
    private readonly edificacionService;
    constructor(edificacionService: EdificacionService);
    create(createEdificacionDto: CreateEdificacionDto): string;
    findAll(): Promise<import("./entities/edificacion.entity").Edificacion[]>;
    findOne(id: string): string;
    update(id: string, updateEdificacionDto: UpdateEdificacionDto): string;
    remove(id: string): string;
}
