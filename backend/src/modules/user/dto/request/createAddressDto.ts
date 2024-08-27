import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O CEP não pode estar vazio.' })
  cep: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O estado não pode estar vazio.' })
  state: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O país não pode estar vazio.' })
  country: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A cidade não pode estar vazia.' })
  city: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O bairro não pode estar vazio.' })
  neighborhood: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'A rua não pode estar vazia.' })
  street: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O número não pode estar vazio.' })
  number: string;

  @ApiProperty()
  @IsOptional()
  complement: string;
}
