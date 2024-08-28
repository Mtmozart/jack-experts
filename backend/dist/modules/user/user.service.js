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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const address_entity_1 = require("./entities/address.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const sendEmailQueueService_service_1 = require("../mail/job/send-email-queue/sendEmailQueueService.service");
const getToken_1 = require("./utils/getToken");
const genSaltPassword_1 = require("./utils/genSaltPassword");
let UserService = class UserService {
    constructor(usersRepository, addressRepository, jwtService, sendEmailQueueService) {
        this.usersRepository = usersRepository;
        this.addressRepository = addressRepository;
        this.jwtService = jwtService;
        this.sendEmailQueueService = sendEmailQueueService;
    }
    async validateUser(payload) {
        const user = await this.usersRepository.findOne({
            where: { id: payload.sub },
        });
        if (!user || user.username !== payload.username) {
            throw new common_1.UnauthorizedException('Acesso negado');
        }
        return user;
    }
    async create(createUserDto) {
        try {
            const existingUserByUsername = await this.usersRepository.findOne({
                where: { username: createUserDto.username },
            });
            const existingUserByEmail = await this.usersRepository.findOne({
                where: { email: createUserDto.email },
            });
            if (existingUserByUsername || existingUserByEmail) {
                throw new common_1.ConflictException('E-mail ou username já cadastrado');
            }
            const user = new user_entity_1.User();
            Object.assign(user, createUserDto);
            user.password = await (0, genSaltPassword_1.default)(createUserDto.password);
            user.roles = [];
            if (createUserDto.type == 'client') {
                user.roles.push('client');
            }
            else if (createUserDto.type == 'admin') {
                user.roles.push('admin');
            }
            else {
                throw new common_1.BadRequestException('Tipo de usuário inválido');
            }
            await this.usersRepository.save(user);
            return { message: 'Usuário criado com sucesso' };
        }
        catch (error) {
            throw error;
        }
    }
    async profile(req) {
        try {
            const token = (0, getToken_1.getToken)(req);
            const decoded = this.jwtService.verify(token);
            const user = await this.usersRepository.findOneOrFail({
                where: { id: decoded.sub },
            });
            if (!user) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async update(req, updates) {
        const user = await this.profile(req);
        if (updates.password) {
            updates.password = await (0, genSaltPassword_1.default)(updates.password);
        }
        if (updates.email && updates.email != user.email) {
            await this.findByEmailValidation(updates.email);
        }
        if (updates.username && updates.username != user.username) {
            await this.findByUsernameValidation(updates.username);
        }
        const updatedUser = await this.usersRepository.save({
            ...user,
            ...updates,
        });
        return updatedUser;
    }
    async delete(req) {
        try {
            const user = await this.profile(req);
            await this.usersRepository.remove(user);
        }
        catch (error) {
            throw error;
        }
    }
    async findByID(id) {
        try {
            const user = await this.usersRepository.findOneOrFail({
                where: { id: id },
            });
            if (!user) {
                throw new common_1.NotFoundException('Usuário não encontrado');
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmailValidation(email) {
        const user = await this.usersRepository.findOne({
            where: { email: email },
        });
        if (user) {
            throw new common_1.ConflictException('E-mail já cadastrado.');
        }
    }
    async findByUsernameValidation(username) {
        const user = await this.usersRepository.findOne({
            where: { username: username },
        });
        if (user) {
            throw new common_1.ConflictException('Username já cadastrado.');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(address_entity_1.Address)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService,
        sendEmailQueueService_service_1.SendEmailQueueService])
], UserService);
//# sourceMappingURL=user.service.js.map