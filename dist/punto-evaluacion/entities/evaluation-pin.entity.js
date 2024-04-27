"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuntoEvaluacion = void 0;
const typeorm_1 = require("typeorm");
let PuntoEvaluacion = class PuntoEvaluacion {
};
exports.PuntoEvaluacion = PuntoEvaluacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PuntoEvaluacion.prototype, "pev_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PuntoEvaluacion.prototype, "pev_titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PuntoEvaluacion.prototype, "pev_tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PuntoEvaluacion.prototype, "pev_latitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PuntoEvaluacion.prototype, "pev_longitud", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PuntoEvaluacion.prototype, "pev_votos_positivos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PuntoEvaluacion.prototype, "pev_votos_negativos", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], PuntoEvaluacion.prototype, "pev_evaluacion_ponderada", void 0);
exports.PuntoEvaluacion = PuntoEvaluacion = __decorate([
    (0, typeorm_1.Entity)('punto_evaluacion')
], PuntoEvaluacion);
//# sourceMappingURL=evaluation-pin.entity.js.map