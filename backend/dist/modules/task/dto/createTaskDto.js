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
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const taskStatus_1 = require("../enum/taskStatus");
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Usuário',
    }),
    (0, class_validator_1.IsString)({ message: 'O id deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O id não pode estar vazio.' }),
    (0, class_validator_1.IsUUID)('4', { message: 'ID deve ser um UUID válido' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Título da tarefa',
    }),
    (0, class_validator_1.IsString)({ message: 'O título deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O título não pode estar vazio.' }),
    (0, class_validator_1.MaxLength)(100, { message: 'A o título não pode passar de 100 caracteres' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Descrição da tarefa',
    }),
    (0, class_validator_1.IsString)({ message: 'A descrição deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A descrição não pode estar vazia.' }),
    (0, class_validator_1.MaxLength)(250, { message: 'A descrição não pode passar de 250 caracteres' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Data limite para a tarefa',
    }),
    (0, class_validator_1.IsString)({ message: 'A data limite deve ser uma string.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'A data limite não pode estar vazia.' }),
    __metadata("design:type", Date)
], CreateTaskDto.prototype, "limitDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status da tarefa [created, pending, in_progress, in_progress e cancelled]',
        enum: taskStatus_1.TaskStatus,
        default: taskStatus_1.TaskStatus.CREATED,
    }),
    (0, class_validator_1.IsEnum)(taskStatus_1.TaskStatus, {
        message: 'O status deve ser um valor válido de TaskStatus.',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O status não pode estar vazio.' }),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "status", void 0);
//# sourceMappingURL=createTaskDto.js.map