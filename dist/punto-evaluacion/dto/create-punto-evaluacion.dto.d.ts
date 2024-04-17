import { CreateItemEvaluacionDto } from "./create-item-evaluacion.dto";
export declare class CreatePuntoEvaluacionDto {
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
    pevEvaluacionItems: CreateItemEvaluacionDto;
    usuarioId: number;
    comunaId: number;
}
