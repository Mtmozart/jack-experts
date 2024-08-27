import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TypeUser } from '../../enum/typeUserEnum';
import { CreateAddressDto } from './createAddressDto';

export class CreateUserClientDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O nome não pode estar vazio.' })
  name: string;

  @ApiProperty()
  @IsEmail({}, { message: 'O e-mail deve ser um endereço de e-mail válido.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O nome de usuário não pode estar vazio.' })
  username: string;

  @ApiProperty()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia.' })
  password: string;

  @ApiProperty({ type: () => CreateAddressDto })
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  @ApiHideProperty()
  type: TypeUser = TypeUser.CLIENT;
}
