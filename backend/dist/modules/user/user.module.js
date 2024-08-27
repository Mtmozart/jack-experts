"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const address_entity_1 = require("./entities/address.entity");
const jwt_1 = require("@nestjs/jwt");
const mail_module_1 = require("../mail/mail.module");
const mail_service_1 = require("../mail/mail.service");
const mail_provider_1 = require("../mail/mail.provider");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const config_1 = require("../../config");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, address_entity_1.Address]),
            jwt_1.JwtModule.register({
                secret: config_1.EnvConfig.secret,
                signOptions: { expiresIn: '1d' },
            }),
            mail_module_1.SendEmailModule,
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService, mail_service_1.SendEmailService, mail_provider_1.SendEmailProvider],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map