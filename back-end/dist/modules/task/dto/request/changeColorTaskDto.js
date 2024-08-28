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
exports.ChangeColorTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const colorEnum_1 = require("../../enum/colorEnum");
class ChangeColorTaskDto {
}
exports.ChangeColorTaskDto = ChangeColorTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: `
    Cores disponíveis:
    - **Red**: '#FF6F6F'
    - **Green**: '#9CCC65'
    - **Blue**: '#64B5F6'
    - **Yellow**: '#FFF176'
    - **Gray**: '#E0E0E0'
    - **Lilac**: '#CE93D8'
    
    A cor deve ser um dos valores listados acima.
  `,
        enum: colorEnum_1.EnumColors,
        default: colorEnum_1.EnumColors.Yellow,
    }),
    (0, class_validator_1.IsEnum)(colorEnum_1.EnumColors, {
        message: 'A cor deve ser um tipo válido.',
    }),
    __metadata("design:type", String)
], ChangeColorTaskDto.prototype, "color", void 0);
//# sourceMappingURL=changeColorTaskDto.js.map