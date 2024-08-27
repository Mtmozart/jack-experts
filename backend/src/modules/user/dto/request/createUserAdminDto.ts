import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { TypeUser } from '../../enum/typeUserEnum';
import { CreateAddressDto } from './createAddressDto';

export class CreateUserAdminDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;

  @ApiProperty()
  @IsEmail({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' })
  @IsNotEmpty({ message: 'O e-mail não pode estar vazio.' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'O nome de usuário não pode estar vazio.' })
  username: string;

  @ApiProperty()
  @IsString()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
  password: string;

  @ApiProperty({ type: () => CreateAddressDto })
  @IsNotEmpty({ message: 'O endereço não pode estar vazio.' })
  address: CreateAddressDto;

  @ApiHideProperty()
  type: TypeUser = TypeUser.ADMIN;
}
