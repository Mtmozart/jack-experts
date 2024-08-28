import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class ResetPasswordDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo do e-mail é obrigatório.' })
  @IsEmail({}, { message: 'Formato do e-mail inválido.' })
  email: string;
}
