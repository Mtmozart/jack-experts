import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';

import { CreateUserClientDto } from './dto/request/createUserClientDto';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/request/updateUserDto';
import { CreateUserAdminDto } from './dto/request/createUserAdminDto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { TypeUser } from './enum/typeUserEnum';
import { DefaultUserClientDto } from './dto/response/DefaultUserDto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserClientDto: CreateUserClientDto): Promise<any> {
    try {
      createUserClientDto.type = TypeUser.CLIENT;
      return await this.userService.create(createUserClientDto);
    } catch (error) {
      throw new HttpException(
        'Erro ao criar usuário. Verifique os dados e tente novamente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('create-admin')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @ApiBearerAuth('JWT-auth')
  async createAdmin(
    @Body() createUserAdmin: CreateUserAdminDto,
  ): Promise<DefaultUserClientDto> {
    try {
      createUserAdmin.type = TypeUser.ADMIN;
      const user = await this.userService.create(createUserAdmin);
      return new DefaultUserClientDto(user);
    } catch (error) {
      throw new HttpException(
        'Erro ao criar admin. Verifique os dados e tente novamente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-auth')
  @Get()
  async profile(@Req() request: Request): Promise<DefaultUserClientDto> {
    try {
      const user = await this.userService.profile(request);
      return new DefaultUserClientDto(user);
    } catch (error) {
      throw new HttpException(
        'Erro ao obter o perfil do usuário. Verifique os dados e tente novamente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-auth')
  @Put()
  async update(
    @Req() req: Request,
    @Body() update: UpdateUserDto,
  ): Promise<DefaultUserClientDto> {
    try {
      const user = await this.userService.update(req, update);
      return new DefaultUserClientDto(user);
    } catch (error) {
      throw new HttpException(
        'Erro ao atualizar usuário. Verifique os dados e tente novamente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('JWT-auth')
  @Delete()
  async delete(@Req() request: Request): Promise<void> {
    try {
      await this.userService.delete(request);
    } catch (error) {
      throw new HttpException(
        'Erro ao deletar usuário. Verifique os dados e tente novamente.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
