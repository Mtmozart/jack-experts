import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  IsDateString,
} from 'class-validator';
import { TaskStatus } from '../../enum/taskStatus';
import { EnumColors } from '../../enum/colorEnum';

export class UpdateTaskDto {
  @ApiProperty({
    description: 'Título da tarefa',
    example: 'Título da Tarefa',
  })
  @IsString({ message: 'O título deve ser uma string.' })
  @MaxLength(100, { message: 'O título não pode passar de 100 caracteres.' })
  @IsOptional()
  title: string;

  @ApiProperty({
    description: 'Descrição da tarefa',
    example: 'Descrição detalhada da tarefa.',
  })
  @IsString({ message: 'A descrição deve ser uma string.' })
  @MaxLength(250, { message: 'A descrição não pode passar de 250 caracteres.' })
  @IsOptional()
  description: string;

  @ApiProperty({
    description: 'Data limite para a tarefa no formato ISO 8601',
    example: '2024-08-11T14:37:00.204Z',
  })
  @IsDateString()
  @IsOptional()
  limitDate: string;

  @ApiProperty({
    description: 'Status da tarefa [created, pending, in_progress, cancelled]',
    enum: TaskStatus,
    default: TaskStatus.CREATED,
  })
  @IsEnum(TaskStatus, {
    message: 'O status deve ser um valor válido de TaskStatus.',
  })
  @IsOptional()
  status: TaskStatus;

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
  @IsOptional()
  color: EnumColors;
}
