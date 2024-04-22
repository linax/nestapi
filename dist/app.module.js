"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const punto_evaluacion_module_1 = require("./punto-evaluacion/punto-evaluacion.module");
const edificacion_module_1 = require("./edificacion/edificacion.module");
const typeorm_1 = require("@nestjs/typeorm");
const edificacion_entity_1 = require("./edificacion/entities/edificacion.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [punto_evaluacion_module_1.PuntoEvaluacionModule, edificacion_module_1.EdificacionModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'ep-odd-meadow-71171534.us-east-1.aws.neon.tech',
                port: 5432,
                username: 'default',
                password: '4dBjz2nbrYFJ',
                database: 'verceldb',
                ssl: { rejectUnauthorized: true },
                entities: [edificacion_entity_1.Edificacion],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map