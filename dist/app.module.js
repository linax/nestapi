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
const evaluation_pin_module_1 = require("./evaluation-pin/evaluation-pin.module");
const building_module_1 = require("./building/building.module");
const typeorm_1 = require("@nestjs/typeorm");
const building_entity_1 = require("./building/entities/building.entity");
const config_1 = require("@nestjs/config");
const evaluation_pin_entity_1 = require("./evaluation-pin/entities/evaluation-pin.entity");
const type_entity_1 = require("./evaluation-pin/entities/type.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [evaluation_pin_module_1.EvaluationPinModule, building_module_1.BuildingModule, config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                schema: 'public',
                ssl: { rejectUnauthorized: true },
                entities: [building_entity_1.Building, evaluation_pin_entity_1.EvaluationPin, type_entity_1.EvaluationPinType],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map