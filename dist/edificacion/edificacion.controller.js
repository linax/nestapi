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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdificacionController = void 0;
const common_1 = require("@nestjs/common");
const edificacion_service_1 = require("./edificacion.service");
const create_edificacion_dto_1 = require("./dto/create-edificacion.dto");
const update_edificacion_dto_1 = require("./dto/update-edificacion.dto");
let EdificacionController = class EdificacionController {
    constructor(edificacionService) {
        this.edificacionService = edificacionService;
    }
    create(createEdificacionDto) {
        return this.edificacionService.create(createEdificacionDto);
    }
    async findAll() {
        return this.edificacionService.findAll();
    }
    findOne(id) {
        return this.edificacionService.findOne(+id);
    }
    update(id, updateEdificacionDto) {
        return this.edificacionService.update(+id, updateEdificacionDto);
    }
    remove(id) {
        return this.edificacionService.remove(+id);
    }
};
exports.EdificacionController = EdificacionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_edificacion_dto_1.CreateEdificacionDto]),
    __metadata("design:returntype", void 0)
], EdificacionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EdificacionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EdificacionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_edificacion_dto_1.UpdateEdificacionDto]),
    __metadata("design:returntype", void 0)
], EdificacionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EdificacionController.prototype, "remove", null);
exports.EdificacionController = EdificacionController = __decorate([
    (0, common_1.Controller)('edificacion'),
    __metadata("design:paramtypes", [edificacion_service_1.EdificacionService])
], EdificacionController);
//# sourceMappingURL=edificacion.controller.js.map