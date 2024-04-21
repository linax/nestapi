"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdificacionService = void 0;
const common_1 = require("@nestjs/common");
let EdificacionService = class EdificacionService {
    create(createEdificacionDto) {
        return 'This action adds a new edificacion';
    }
    findAll() {
        return `This action returns all edificacion`;
    }
    findOne(id) {
        return `This action returns a #${id} edificacion`;
    }
    update(id, updateEdificacionDto) {
        return `This action updates a #${id} edificacion`;
    }
    remove(id) {
        return `This action removes a #${id} edificacion`;
    }
};
exports.EdificacionService = EdificacionService;
exports.EdificacionService = EdificacionService = __decorate([
    (0, common_1.Injectable)()
], EdificacionService);
//# sourceMappingURL=edificacion.service.js.map