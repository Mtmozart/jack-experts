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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserAdminDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const typeUserEnum_1 = require("../../enum/typeUserEnum");
const createAddressDto_1 = require("./createAddressDto");
class CreateUserAdminDto {
    constructor() {
        this.type = typeUserEnum_1.TypeUser.ADMIN;
    }
}
exports.CreateUserAdminDto = CreateUserAdminDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode estar vazio.' }),
    __metadata("design:type", String)
], CreateUserAdminDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsEmail)({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O e-mail não pode estar vazio.' }),
    __metadata("design:type", String)
], CreateUserAdminDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome de usuário não pode estar vazio.' }),
    __metadata("design:type", String)
], CreateUserAdminDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, { message: 'A senha deve ter pelo menos 8 caracteres.' }),
    __metadata("design:type", String)
], CreateUserAdminDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => createAddressDto_1.CreateAddressDto }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O endereço não pode estar vazio.' }),
    __metadata("design:type", createAddressDto_1.CreateAddressDto)
], CreateUserAdminDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiHideProperty)(),
    __metadata("design:type", String)
], CreateUserAdminDto.prototype, "type", void 0);
//# sourceMappingURL=createUserAdminDto.js.map