import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserClientDto } from './dto/request/createUserClientDto';
import { HttpException, HttpStatus } from '@nestjs/common';

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
          new HttpException('Erro ao criar usuário.', HttpStatus.BAD_REQUEST),
        );

      await expect(userController.create(createUserDto)).rejects.toThrow(
        new HttpException('Erro ao criar usuário.', HttpStatus.BAD_REQUEST),
      );
    });
  });
});
