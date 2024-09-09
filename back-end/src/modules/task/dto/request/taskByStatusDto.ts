import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../../enum/taskStatus';

export class TaskByStatusDto {
  @ApiProperty({
    description:
      'Status da tarefa [created, pending, in_progress, in_progress e cancelled]',
    enum: TaskStatus,
  })
  @IsEnum(TaskStatus, {
    message: 'O status deve ser um valor válido de TaskStatus.',
  })
  @IsNotEmpty({ message: 'O status não pode estar vazio.' })
  status: TaskStatus;
}
