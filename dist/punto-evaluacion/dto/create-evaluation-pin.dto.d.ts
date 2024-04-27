import { CreateEvaluationItemDto } from "./create-evaluation-item.dto";
export declare class CreateEvaluationPinDto {
    pevId: number;
    pevTitulo: string;
    pevTipo: number;
    usuId: number;
    comId: number;
    pevLatitud: number;
    pevLongitud: number;
    pevImagen: string | null;
    pevVotosPositivos: number;
    pevVotosNegativos: number;
    pevEvaluacionPonderada: number | null;
    pevEvaluacionItems: CreateEvaluationItemDto;
    usuarioId: number;
    comunaId: number;
}
