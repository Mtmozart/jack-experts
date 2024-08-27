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
exports.SearchDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const taskStatus_1 = require("../enum/taskStatus");
const class_transformer_1 = require("class-transformer");
class SearchDto {
}
exports.SearchDto = SearchDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ description: 'title' }),
    __metadata("design:type", String)
], SearchDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: true }),
    (0, class_transformer_1.Transform)(({ value }) => value === 'true', { toClassOnly: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], SearchDto.prototype, "favorite", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Status da tarefa [created, pending, in_progress, cancelled]',
        enum: taskStatus_1.TaskStatus,
        default: taskStatus_1.TaskStatus.CREATED,
    }),
    (0, class_validator_1.IsEnum)(taskStatus_1.TaskStatus, {
        message: 'O status deve ser um valor válido de TaskStatus.',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({ enum: ['favorite', 'status'] }),
    __metadata("design:type", String)
], SearchDto.prototype, "sortBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['ASC', 'DESC']),
    (0, swagger_1.ApiPropertyOptional)({ description: "'DESC' or 'ASC'" }),
    __metadata("design:type", String)
], SearchDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=requestSearchDto.js.map