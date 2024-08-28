"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModule = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("./entity/task.entity");
const task_controller_1 = require("./task.controller");
const task_service_1 = require("./task.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/entities/user.entity");
const address_entity_1 = require("../user/entities/address.entity");
const jwt_1 = require("@nestjs/jwt");
const mail_module_1 = require("../mail/mail.module");
let TaskModule = class TaskModule {
};
exports.TaskModule = TaskModule;
exports.TaskModule = TaskModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task, user_entity_1.User, address_entity_1.Address]), mail_module_1.SendEmailModule],
        controllers: [task_controller_1.TaskController],
        providers: [task_service_1.TaskService, user_service_1.UserService, jwt_1.JwtService],
    })
], TaskModule);
//# sourceMappingURL=task.module.js.map