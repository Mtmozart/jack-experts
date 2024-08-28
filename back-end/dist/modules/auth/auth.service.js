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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(usersRepository, jwtService, emailService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.emailService = emailService;
    }
    async authenticate(data) {
        const user = await this.usersRepository.findOne({
            where: { username: data.username },
        });
        if (!user) {
            throw new common_1.BadRequestException('Credenciais inválidas');
        }
        const passwordMatches = await (0, bcrypt_1.compare)(data.password, user.password);
        if (!passwordMatches) {
            throw new common_1.ForbiddenException('Erro nas credenciais de acesso.');
        }
        const payload = {
            username: user.username,
            sub: user.id,
            roles: user.roles,
        };
        const token = this.jwtService.sign(payload);
        return { token };
    }
    async resetPassword(email) {
        try {
            const user = await this.usersRepository.findOne({
                where: { email: email },
            });
            if (!user) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            const newPassword = this.generateRandomCode(8);
            user.password = await (0, bcrypt_1.hash)(newPassword, 10);
            await this.usersRepository.save(user);
            await this.emailService.resetPasswordEmail(user.email, user.username, newPassword);
            return { message: 'Senha redefinida com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
    generateRandomCode(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        mail_service_1.SendEmailService])
], AuthService);
//# sourceMappingURL=auth.service.js.map