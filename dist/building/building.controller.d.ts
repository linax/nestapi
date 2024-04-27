import { BuildingService } from './building.service';
import { CreateEdificacionDto } from './dto/create-edificacion.dto';
import { UpdateEdificacionDto } from './dto/update-edificacion.dto';
export declare class BuildingController {
    private readonly edificacionService;
    constructor(edificacionService: BuildingService);
    create(createEdificacionDto: CreateEdificacionDto): string;
    findAll(): Promise<import("./entities/building.entity").Building[]>;
    findOne(id: string): string;
    update(id: string, updateEdificacionDto: UpdateEdificacionDto): string;
    remove(id: string): string;
}
