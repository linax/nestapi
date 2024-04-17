"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuntoEvaluacionModule = void 0;
const common_1 = require("@nestjs/common");
const punto_evaluacion_service_1 = require("./punto-evaluacion.service");
const punto_evaluacion_controller_1 = require("./punto-evaluacion.controller");
let PuntoEvaluacionModule = class PuntoEvaluacionModule {
};
exports.PuntoEvaluacionModule = PuntoEvaluacionModule;
exports.PuntoEvaluacionModule = PuntoEvaluacionModule = __decorate([
    (0, common_1.Module)({
        controllers: [punto_evaluacion_controller_1.PuntoEvaluacionController],
        providers: [punto_evaluacion_service_1.PuntoEvaluacionService],
    })
], PuntoEvaluacionModule);
//# sourceMappingURL=punto-evaluacion.module.js.map