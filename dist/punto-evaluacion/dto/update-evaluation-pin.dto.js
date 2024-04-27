"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEvaluationPinDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_evaluation_pin_dto_1 = require("./create-evaluation-pin.dto");
class UpdateEvaluationPinDto extends (0, mapped_types_1.PartialType)(create_evaluation_pin_dto_1.CreateEvaluationPinDto) {
}
exports.UpdateEvaluationPinDto = UpdateEvaluationPinDto;
//# sourceMappingURL=update-evaluation-pin.dto.js.map