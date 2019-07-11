"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var back_service_1 = require("./back.service");
var back_controller_1 = require("./back.controller");
var mongoose_1 = require("@nestjs/mongoose");
var back_schema_1 = require("./schemas/back.schema");
var BackModule = /** @class */ (function () {
    function BackModule() {
    }
    BackModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Order', schema: back_schema_1.OrdersSchema }])
            ],
            providers: [back_service_1.BackService],
            controllers: [back_controller_1.BackController]
        })
    ], BackModule);
    return BackModule;
}());
exports.BackModule = BackModule;
//# sourceMappingURL=back.module.js.map