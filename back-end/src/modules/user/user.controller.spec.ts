import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserClientDto } from './dto/request/createUserClientDto';
import { HttpException, HttpStatus } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeUser } from './enum/typeUserEnum';
import { DefaultUserClientDto } from './dto/response/DefaultUserDto';
import { UpdateUserDto } from './dto/request/updateUserDto';

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn().mockResolvedValue([]),
            profile: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('create', () => {
    it('should return the result from userService.create', async () => {
      const createUserDto = new CreateUserClientDto();
      createUserDto.name = 'John Doe';
      createUserDto.email = 'johndoe@example.com';
      createUserDto.username = 'johndoe123';
      createUserDto.password = 'securePassword123';
      createUserDto.address = {
        cep: '12345-678',
        state: 'SP',
        country: 'Brasil',
        city: 'São Paulo',
        neighborhood: 'Centro',
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 45',
      };
      const result = {
        message: 'Usuário criado com sucesso',
      };

      jest.spyOn(userService, 'create').mockResolvedValue(result);

      const response = await userController.create(createUserDto);

      expect(response).toBe(result);
    });
  });

  describe('create', () => {
    it('should throw an HttpException when userService.create fails', async () => {
      const createUserDto = new CreateUserClientDto();
      createUserDto.name = 'John Doe';
      createUserDto.email = 'johndoe@example.com';
      createUserDto.username = 'johndoe123';
      createUserDto.password = 'securePassword123';
      createUserDto.address = {
        cep: '12345-678',
        state: 'SP',
        country: 'Brasil',
        city: 'São Paulo',
        neighborhood: 'Centro',
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 45',
      };

      jest
        .spyOn(userService, 'create')
        .mockRejectedValue(
          new HttpException(
            'Erro ao criar usuário. Verifique os dados e tente novamente.',
            HttpStatus.BAD_REQUEST,
          ),
        );

      await expect(userController.create(createUserDto)).rejects.toThrow(
        new HttpException(
          'Erro ao criar usuário. Verifique os dados e tente novamente.',
          HttpStatus.BAD_REQUEST,
        ),
      );
    });
  });

  it('should return the user profile from userService.profile', async () => {
    const mockRequest = {} as any;

    const mockUser: User = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'John Doe',
      username: 'johndoe123',
      email: 'johndoe@example.com',
      password: 'hashedPassword123',
      type: TypeUser.CLIENT,
      address: {
        cep: '12345-678',
        state: 'SP',
        country: 'Brasil',
        city: 'São Paulo',
        neighborhood: 'Centro',
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 45',
      },
      roles: ['user', 'admin'],
      tasks: [],
      createdAt: new Date('2023-08-15T10:00:00Z'),
      updatedAt: new Date('2023-08-20T10:00:00Z'),
    };

    const userDto = new DefaultUserClientDto(mockUser);

    jest.spyOn(userService, 'profile').mockResolvedValue(mockUser);

    const response = await userController.profile(mockRequest);

    expect(response).toEqual(userDto);
  });
  it('should handle exceptions when userService.profile fails', async () => {
    const mockRequest = {} as any;

    jest
      .spyOn(userService, 'profile')
      .mockRejectedValue(new Error('Erro interno do servidor'));

    try {
      await userController.profile(mockRequest);

      fail('Expected an exception, but none was thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.response).toBe(
        'Erro ao obter o perfil do usuário. Verifique os dados e tente novamente.',
      );
      expect(error.getStatus()).toBe(HttpStatus.BAD_REQUEST);
    }
  });

  it('should return the updated user from userService.update', async () => {
    const mockRequest = {} as any;
    const updateUserDto = new UpdateUserDto();
    updateUserDto.name = 'Jane Doe';
    updateUserDto.email = 'janedoe@example.com';

    const updatedUser: User = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'Jane Doe',
      username: 'johndoe123',
      email: 'janedoe@example.com',
      password: 'hashedPassword123',
      type: TypeUser.CLIENT,
      address: {
        cep: '12345-678',
        state: 'SP',
        country: 'Brasil',
        city: 'São Paulo',
        neighborhood: 'Centro',
        street: 'Rua das Flores',
        number: '123',
        complement: 'Apto 45',
      },
      roles: ['user', 'admin'],
      tasks: [],
      createdAt: new Date('2023-08-15T10:00:00Z'),
      updatedAt: new Date('2023-08-20T10:00:00Z'),
    };

    const userDto = new DefaultUserClientDto(updatedUser);

    jest.spyOn(userService, 'update').mockResolvedValue(updatedUser);

    const response = await userController.update(mockRequest, updateUserDto);

    expect(response).toEqual(userDto);
  });

  it('should handle exceptions when userService.update fails', async () => {
    const mockRequest = {} as any;
    const updateUserDto = new UpdateUserDto();
    updateUserDto.name = 'Jane Doe';
    updateUserDto.email = 'janedoe@example.com';

    jest
      .spyOn(userService, 'update')
      .mockRejectedValue(new Error('Erro interno do servidor'));

    try {
      await userController.update(mockRequest, updateUserDto);
      fail('Expected an exception, but none was thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.response).toBe(
        'Erro ao atualizar usuário. Verifique os dados e tente novamente.',
      );
      expect(error.getStatus()).toBe(HttpStatus.BAD_REQUEST);
    }
  });

  it('should successfully delete a user', async () => {
    const mockRequest = {
      user: { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
    } as any; // Ajuste o mockRequest para refletir o formato esperado
    jest.spyOn(userService, 'delete').mockResolvedValue();

    await expect(userController.delete(mockRequest)).resolves.toBeUndefined();
    expect(userService.delete).toHaveBeenCalledWith(mockRequest);
  });

  // Teste de exceção
  it('should handle exceptions when userService.delete fails', async () => {
    const mockRequest = {
      user: { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
    } as any; // Ajuste o mockRequest para refletir o formato esperado

    jest
      .spyOn(userService, 'delete')
      .mockRejectedValue(new Error('Erro interno do servidor'));

    try {
      await userController.delete(mockRequest);
      fail('Expected an exception, but none was thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(HttpException);
      expect(error.response).toBe(
        'Erro ao deletar usuário. Verifique os dados e tente novamente.',
      );
      expect(error.getStatus()).toBe(HttpStatus.BAD_REQUEST);
    }
  });
});
