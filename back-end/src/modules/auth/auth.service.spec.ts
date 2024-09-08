import { JwtService } from '@nestjs/jwt';
import { SendEmailService } from '../mail/mail.service';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EmailDto } from './dto/loginDto';
import { AuthService } from './auth.service';
import genSaltPassword from '../user/utils/genSaltPassword';
import { NotFoundException } from '@nestjs/common';
import { hash } from 'bcrypt';

describe('AuthService', () => {
  let jwtService: JwtService;
  let userRepository: Repository<User>;
  let emailService: SendEmailService;
  let authService: AuthService;

  const mockUserRepository = {
    findOne: jest.fn(),
    save: jest.fn(),
    findOneOrFail: jest.fn(),
    remove: jest.fn(),
  };

  const mockJwtService = {
    sign: jest.fn().mockReturnValue('mockToken'),
    verify: jest.fn(),
  };

  const mockSendEmailProvider = {
    sendMail: jest.fn().mockResolvedValue(true),
    resetPasswordEmail: jest.fn().mockResolvedValue(true),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: getRepositoryToken(User), useValue: mockUserRepository },
        { provide: JwtService, useValue: mockJwtService },
        { provide: SendEmailService, useValue: mockSendEmailProvider },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    emailService = module.get<SendEmailService>(SendEmailService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
    expect(emailService).toBeDefined();
  });

  it('should return a valid JWT token', async () => {
    const emailDto = new EmailDto();
    emailDto.username = 'johnDoe';
    emailDto.password = 'JohnDoe@123';

    const mockUser = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'John Doe',
      username: 'johnDoe',
      email: 'johndoe@example.com',
      password: 'JohnDoe@123',
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
      type: 'CLIENT',
      tasks: [
        {
          id: 'task-id-1',
          title: 'Task 1',
          description: 'Description for Task 1',
          completed: false,
        },
        {
          id: 'task-id-2',
          title: 'Task 2',
          description: 'Description for Task 2',
          completed: true,
        },
      ],
      createdAt: new Date('2023-08-15T10:00:00Z'),
      updatedAt: new Date('2023-08-20T10:00:00Z'),
    };

    mockUserRepository.findOne.mockResolvedValue(mockUser);
    mockUser.password = await genSaltPassword(mockUser.password);
    const result = await authService.authenticate(emailDto);

    const expectedPayload = {
      username: mockUser.username,
      sub: mockUser.id,
      roles: mockUser.roles,
    };
    expect(mockJwtService.sign).toHaveBeenCalledWith(expectedPayload);
    expect(result).toEqual({ token: 'mockToken' });
  });

  it('should return an invalid credentials error with username', async () => {
    const emailDto = new EmailDto();
    emailDto.username = 'johnDoe2asf';
    emailDto.password = 'JohnDoe@1234';

    mockUserRepository.findOne.mockResolvedValue(null);

    await expect(authService.authenticate(emailDto)).rejects.toThrow(
      'Credenciais inválidas',
    );
  });

  it('should return an invalid credentials error with password', async () => {
    const emailDto = new EmailDto();
    emailDto.username = 'johnDoe2asf';
    emailDto.password = 'JohnDoe@1234';

    const mockUser = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'John Doe',
      username: 'johnDoe',
      email: 'johndoe@example.com',
      password: 'JohnDoe@123',
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
      type: 'CLIENT',
      tasks: [
        {
          id: 'task-id-1',
          title: 'Task 1',
          description: 'Description for Task 1',
          completed: false,
        },
        {
          id: 'task-id-2',
          title: 'Task 2',
          description: 'Description for Task 2',
          completed: true,
        },
      ],
      createdAt: new Date('2023-08-15T10:00:00Z'),
      updatedAt: new Date('2023-08-20T10:00:00Z'),
    };

    mockUserRepository.findOne.mockResolvedValue(mockUser);

    await expect(authService.authenticate(emailDto)).rejects.toThrow(
      'Erro nas credenciais de acesso.',
    );
  });

  it('should reset password', async () => {
    const mockUser = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'John Doe',
      username: 'johnDoe',
      email: 'johndoe@example.com',
      password: '$2b$10$6pYmRSRpkC0gHpku/Tu9jeFOwiTYAAmroFnHmOD1FOuQOwo.e69dC',
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
      type: 'CLIENT',
      tasks: [
        {
          id: 'task-id-1',
          title: 'Task 1',
          description: 'Description for Task 1',
          completed: false,
        },
        {
          id: 'task-id-2',
          title: 'Task 2',
          description: 'Description for Task 2',
          completed: true,
        },
      ],
      createdAt: new Date('2023-08-15T10:00:00Z'),
      updatedAt: new Date('2023-08-20T10:00:00Z'),
    };

    const email = 'johndoe@example.com';

    mockUserRepository.findOne.mockResolvedValue(mockUser);
    mockUserRepository.save.mockResolvedValue(mockUser);

    const generateRandomCodeSpy = jest
      .spyOn(authService as any, 'generateRandomCode')
      .mockReturnValue('resetPassword');

    const result = await authService.resetPassword(email);

    expect(result).toEqual({ message: 'Senha redefinida com sucesso' });
  });
  it('should return a error with email', async () => {
    const email: string = 'matheus@gmail.com';

    mockUserRepository.findOne.mockResolvedValue(null);

    await expect(authService.resetPassword(email)).rejects.toThrow(
      'Usuário não encontrado',
    );
  });

  it('should generate a random code of specified length', () => {
    const length = 8;
    const code = (authService as any).generateRandomCode(length);

    expect(code).toHaveLength(length);

    expect(code).toMatch(/^[A-Za-z0-9]+$/);
  });
});
