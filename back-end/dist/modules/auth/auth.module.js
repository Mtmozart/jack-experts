"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/entities/user.entity");
const address_entity_1 = require("../user/entities/address.entity");
const mail_module_1 = require("../mail/mail.module");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./strategy/jwt.strategy");
const mail_service_1 = require("../mail/mail.service");
const mail_provider_1 = require("../mail/mail.provider");
const config_1 = require("../../config");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, address_entity_1.Address]),
            jwt_1.JwtModule.register({
                secret: config_1.EnvConfig.secret,
                signOptions: { expiresIn: '1h' },
            }),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            mail_module_1.SendEmailModule,
        ],
        controllers: [auth_controller_1.default],
        providers: [
            user_service_1.UserService,
            auth_service_1.AuthService,
            jwt_strategy_1.JwtStrategy,
            mail_service_1.SendEmailService,
            mail_provider_1.SendEmailProvider,
        ],
        exports: [passport_1.PassportModule, jwt_1.JwtModule],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map