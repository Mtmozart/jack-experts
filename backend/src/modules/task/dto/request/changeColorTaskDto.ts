import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

import { EnumColors } from '../../enum/colorEnum';

export class ChangeColorTaskDto {
  @ApiProperty({
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
    enum: EnumColors,
    default: EnumColors.Yellow,
  })
  @IsEnum(EnumColors, {
    message: 'A cor deve ser um tipo válido.',
  })
  color: EnumColors;
}
