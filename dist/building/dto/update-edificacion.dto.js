"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEdificacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_edificacion_dto_1 = require("./create-edificacion.dto");
class UpdateEdificacionDto extends (0, mapped_types_1.PartialType)(create_edificacion_dto_1.CreateEdificacionDto) {
}
exports.UpdateEdificacionDto = UpdateEdificacionDto;
//# sourceMappingURL=update-edificacion.dto.js.map