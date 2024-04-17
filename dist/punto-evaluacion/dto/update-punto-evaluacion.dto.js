"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePuntoEvaluacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_punto_evaluacion_dto_1 = require("./create-punto-evaluacion.dto");
class UpdatePuntoEvaluacionDto extends (0, mapped_types_1.PartialType)(create_punto_evaluacion_dto_1.CreatePuntoEvaluacionDto) {
}
exports.UpdatePuntoEvaluacionDto = UpdatePuntoEvaluacionDto;
//# sourceMappingURL=update-punto-evaluacion.dto.js.map