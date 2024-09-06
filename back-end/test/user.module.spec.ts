import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import { User } from 'src/modules/user/entities/user.entity';
import { SendEmailQueueService } from 'src/modules/mail/job/send-email-queue/sendEmailQueueService.service';
import { CreateUserAdminDto } from 'src/modules/user/dto/request/createUserAdminDto';
import genSaltPassword from 'src/modules/user/utils/genSaltPassword';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { TypeUser } from 'src/modules/user/enum/typeUserEnum';

jest.mock('src/modules/user/utils/genSaltPassword', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('UserService', () => {
  let service: UserService;
  let usersRepository: Repository<User>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let jwtService: JwtService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let sendEmailQueueService: SendEmailQueueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOne: jest.fn(),
            save: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {},
        },
        {
          provide: SendEmailQueueService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    usersRepository = module.get<Repository<User>>(getRepositoryToken(User));
    jwtService = module.get<JwtService>(JwtService);
    sendEmailQueueService = module.get<SendEmailQueueService>(
      SendEmailQueueService,
    );
  });

  describe('create', () => {
    it('should create a user successfully', async () => {
      const user: User = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        password: 'password123',
        type: TypeUser.ADMIN,
        address: {
          cep: '12345-678',
          state: 'SP',
          country: 'Brasil',
          city: 'São Paulo',
          neighborhood: 'Centro',
          street: 'Rua Principal',
          number: '123',
          complement: 'Apto 456',
        },
        id: '',
        roles: [],
        tasks: [],
        createdAt: undefined,
      };

      jest.spyOn(usersRepository, 'findOne').mockResolvedValueOnce(null);
      (genSaltPassword as jest.Mock).mockResolvedValue('hashedPassword');
      jest
        .spyOn(usersRepository, 'save')
        .mockResolvedValue({ ...user, password: 'hashedPassword' });

      const result = await service.create(user);
      expect(result).toEqual({ message: 'Usuário criado com sucesso' });
    });

    it('should throw ConflictException if user already exists', async () => {
      const createUserDto: CreateUserAdminDto = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        password: 'password123',
        type: TypeUser.ADMIN,
        address: {
          cep: '12345-678',
          state: 'SP',
          country: 'Brasil',
          city: 'São Paulo',
          neighborhood: 'Centro',
          street: 'Rua Principal',
          number: '123',
          complement: 'Apto 456',
        },
      };

      await expect(service.create(createUserDto)).rejects.toThrow(
        ConflictException,
      );
    });

    it('should throw BadRequestException for invalid user type', async () => {
      const createUserDto: CreateUserAdminDto = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'john@example.com',
        password: 'password123',
        type: 'invalid' as any, // Tipo inválido propositalmente para testar
        address: {
          cep: '12345-678',
          state: 'SP',
          country: 'Brasil',
          city: 'São Paulo',
          neighborhood: 'Centro',
          street: 'Rua Principal',
          number: '123',
          complement: 'Apto 456',
        },
      };

      jest.spyOn(usersRepository, 'findOne').mockResolvedValueOnce(null);

      await expect(service.create(createUserDto)).rejects.toThrow(
        BadRequestException,
      );
    });
  });
});
