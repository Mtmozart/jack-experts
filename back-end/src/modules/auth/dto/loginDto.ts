import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class EmailDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O username é obrigatória para o login' })
  username: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A senha é obrigatória para o login' })
  @MinLength(8, { message: 'A senha deve ter no mínimo oito caracteres' })
  password: string;
}
