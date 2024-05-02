"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationPinModule = void 0;
const common_1 = require("@nestjs/common");
const evaluation_pin_service_1 = require("./evaluation-pin.service");
const evaluation_pin_controller_1 = require("./evaluation-pin.controller");
let EvaluationPinModule = class EvaluationPinModule {
};
exports.EvaluationPinModule = EvaluationPinModule;
exports.EvaluationPinModule = EvaluationPinModule = __decorate([
    (0, common_1.Module)({
        controllers: [evaluation_pin_controller_1.EvaluationPinController],
        providers: [evaluation_pin_service_1.EvaluationPinService],
    })
], EvaluationPinModule);
//# sourceMappingURL=evaluation-pin.module.js.map