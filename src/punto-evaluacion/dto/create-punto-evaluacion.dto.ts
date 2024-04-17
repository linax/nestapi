import { CreateItemEvaluacionDto } from "./create-item-evaluacion.dto";

export class CreatePuntoEvaluacionDto {
          // tipoPuntoLiteral?: string; // Tipo de punto de evaluación en texto (opcional)
        //accesibilidadLiteral?: string; // Accesibilidad en texto (opcional)

        pevId: number;
        pevTitulo: string;  // Tipo de punto de evaluación (referencia a tabla externa)
        pevTipo: number;
        usuId: number;
        comId: number;
        pevLatitud: number;
        pevLongitud: number;
        pevImagen: string | null;  // URL de la imagen (opcional)
        pevVotosPositivos: number;
        pevVotosNegativos: number;
        pevEvaluacionPonderada: number | null; // Ponderación final (opcional)
        pevEvaluacionItems: CreateItemEvaluacionDto;  // Colección de evaluaciones por item (opcional)
        usuarioId: number; // ID de usuario relacionado
        comunaId: number; // ID de comuna relacionada
      
}
