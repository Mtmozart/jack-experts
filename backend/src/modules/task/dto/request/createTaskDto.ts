import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';
import { TaskStatus } from '../../enum/taskStatus';
import { EnumColors } from '../../enum/colorEnum';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Usuário',
  })
  @IsString()
  @IsNotEmpty({ message: 'O id não pode estar vazio.' })
  @IsUUID('4', { message: 'ID deve ser um UUID válido' })
  userId: string;

  @ApiProperty({
    description: 'Título da tarefa',
  })
  @IsString()
  @IsNotEmpty({ message: 'O título não pode estar vazio.' })
  @MaxLength(100, { message: 'A o título não pode passar de 100 caracteres' })
  title: string;

  @ApiProperty({
    description: 'Descrição da tarefa',
  })
  @IsString()
  @IsNotEmpty({ message: 'A descrição não pode estar vazia.' })
  @MaxLength(250, { message: 'A descrição não pode passar de 250 caracteres' })
  description: string;

  @ApiProperty({
    description: 'Data limite para a tarefa',
  })
  @IsString()
  @IsNotEmpty({ message: 'A data limite não pode estar vazia.' })
  limitDate: Date;

  @ApiProperty({
    description:
      'Status da tarefa [created, pending, in_progress, in_progress e cancelled]',
    enum: TaskStatus,
    default: TaskStatus.CREATED,
  })
  @IsEnum(TaskStatus, {
    message: 'O status deve ser um valor válido de TaskStatus.',
  })
  @IsNotEmpty({ message: 'O status não pode estar vazio.' })
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
