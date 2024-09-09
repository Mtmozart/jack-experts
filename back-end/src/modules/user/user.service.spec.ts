/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from '../task/entity/task.entity';
import { CreateUserClientDto } from './dto/request/createUserClientDto';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { JwtPayload } from '../auth/payload/jwt.payload';
import genSaltPassword from './utils/genSaltPassword';
import { UpdateUserDto } from './dto/request/updateUserDto';
import { SendEmailQueue } from '../mail/types/sendEmailQueue.types';
import { SendEmailQueueService } from '../mail/job/send-email-queue/sendEmailQueueService.service';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<User>;
  let taskRepository: Repository<Task>;
  let jwtService: JwtService;
  let sendEmailQueueService: SendEmailQueueService;

  const mockUserRepository = {
    findOne: jest.fn(),
    save: jest.fn(),
    findOneOrFail: jest.fn(),
    remove: jest.fn(),
  };

  const mockTaskRepository = {
    find: jest.fn(),
  };

  const mockJwtService = {
    send: jest.fn(),
  };
  const mockSendEmailQueueService = {
    execute: jest.fn().mockResolvedValue(undefined),
  };

  jest.mock('./utils/genSaltPassword');

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: getRepositoryToken(User), useValue: mockUserRepository },
        { provide: getRepositoryToken(Task), useValue: mockTaskRepository },
        { provide: JwtService, useValue: mockJwtService },
        { provide: SendEmailQueueService, useValue: mockSendEmailQueueService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
    taskRepository = module.get<Repository<Task>>(getRepositoryToken(Task));
    jwtService = module.get<JwtService>(JwtService);
    sendEmailQueueService = module.get<SendEmailQueueService>(
      SendEmailQueueService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be create client', async () => {
    const clientDto = new CreateUserClientDto();
    clientDto.name = 'John Doe';
    clientDto.email = 'johndoe@example.com';
    clientDto.username = 'johndoe123';
    clientDto.password = 'securePassword123';
    clientDto.address = {
      cep: '12345-678',
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      neighborhood: 'Centro',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apto 45',
    };

    const result = await service.create(clientDto);
    expect(result).toEqual({ message: 'Usuário criado com sucesso' });
  });

  it('should throw a ConflictException if username or email already exists', async () => {
    const clientDto = new CreateUserClientDto();
    clientDto.name = 'John Doe';
    clientDto.email = 'existinguser@example.com';
    clientDto.username = 'existingUser';
    clientDto.password = 'securePassword123';
    clientDto.address = {
      cep: '12345-678',
      state: 'SP',
      country: 'Brasil',
      city: 'São Paulo',
      neighborhood: 'Centro',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apto 45',
    };

    mockUserRepository.findOne.mockResolvedValueOnce({
      id: 1,
      username: 'existingUser',
    });

    await expect(service.create(clientDto)).rejects.toThrow(ConflictException);

    expect(userRepository.findOne).toHaveBeenCalledWith({
      where: { username: 'existingUser' },
    });

    mockUserRepository.findOne.mockResolvedValueOnce({
      id: 1,
      email: 'existinguser@example.com',
    });

    await expect(service.create(clientDto)).rejects.toThrow(ConflictException);

    expect(userRepository.findOne).toHaveBeenCalledWith({
      where: { email: 'existinguser@example.com' },
    });
  });

  it('should to return the user by id', async () => {
    const mockUser = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'John Doe',
      username: 'johndoe123',
      email: 'johndoe@example.com',
      password: 'hashedPassword123',
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

    mockUserRepository.findOneOrFail.mockResolvedValueOnce(mockUser);

    const result = await service.findByID(
      'd290f1ee-6c54-4b01-90e6-d701748f0851',
    );

    expect(mockUserRepository.findOneOrFail).toHaveBeenCalledWith({
      where: { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
    });
    expect(result).toEqual(mockUser);
  });

  it('should throw NotFoundException if user is not found', async () => {
    mockUserRepository.findOneOrFail.mockRejectedValueOnce(
      new NotFoundException('Usuário não encontrado'),
    );

    await expect(
      service.findByID('d290f1ee-6c54-4b01-90e6-d701748f0851'),
    ).rejects.toThrow(new NotFoundException('Usuário não encontrado'));

    expect(mockUserRepository.findOneOrFail).toHaveBeenCalledWith({
      where: { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
    });
  });

  it('should throw NotFoundException if user is not found', async () => {
    mockUserRepository.findOneOrFail.mockRejectedValueOnce(
      new NotFoundException('Usuário não encontrado'),
    );

    await expect(
      service.findByID('d290f1ee-6c54-4b01-90e6-d701748f0851'),
    ).rejects.toThrow(new NotFoundException('Usuário não encontrado'));

    expect(mockUserRepository.findOneOrFail).toHaveBeenCalledWith({
      where: { id: 'd290f1ee-6c54-4b01-90e6-d701748f0851' },
    });
  });

  it('should return a user when the token is valid and the user is found', async () => {
    const token = 'valid.token';
    const decodedPayload: JwtPayload = {
      username: 'johndoe123',
      sub: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      roles: ['user'],
      iat: Math.floor(Date.now() / 1000) - 1000,
      exp: Math.floor(Date.now() / 1000) + 3600,
    };
    const user = new User();
    user.id = 'd290f1ee-6c54-4b01-90e6-d701748f0851';

    jwtService.verify = jest.fn().mockReturnValue(decodedPayload);
    mockUserRepository.findOneOrFail = jest.fn().mockResolvedValue(user);

    const req = { headers: { authorization: `Bearer ${token}` } } as any;
    const result = await service.profile(req);

    expect(result).toBe(user);
    expect(jwtService.verify).toHaveBeenCalledWith(token);
    expect(mockUserRepository.findOneOrFail).toHaveBeenCalledWith({
      where: { id: decodedPayload.sub },
    });
  });

  it('should delete the user successfully', async () => {
    const req = { headers: { authorization: 'Bearer valid.token' } } as any;
    const user = new User();
    user.id = 'd290f1ee-6c54-4b01-90e6-d701748f0851';

    service.profile = jest.fn().mockResolvedValue(user);

    mockUserRepository.remove = jest.fn().mockResolvedValue(undefined);

    await service.delete(req);

    expect(service.profile).toHaveBeenCalledWith(req);
    expect(mockUserRepository.remove).toHaveBeenCalledWith(user);
  });

  it('should update the user successfully', async () => {
    const token = 'valid.token';
    const decodedPayload: JwtPayload = {
      username: 'johndoe123',
      sub: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      roles: ['user'],
      iat: Math.floor(Date.now() / 1000) - 1000,
      exp: Math.floor(Date.now() / 1000) + 3600,
    };
    const user = new User();
    user.id = 'd290f1ee-6c54-4b01-90e6-d701748f0851';

    jwtService.verify = jest.fn().mockReturnValue(decodedPayload);
    mockUserRepository.findOneOrFail = jest.fn().mockResolvedValue(user);

    const req = { headers: { authorization: `Bearer ${token}` } } as any;

    const updates: Partial<UpdateUserDto> = {
      email: 'newemail@example.com',
      password: 'newPassword123',
    };

    const mockUser = {
      id: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
      name: 'John Doe',
      username: 'johndoe123',
      email: 'johndoe@example.com',
      password: 'hashedPassword123',
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
      roles: ['client'],
      type: 'client',
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

    const updatedUser = {
      id: mockUser.id,
      email: updates.email,
      password: expect.any(String),
      username: mockUser.username,
      name: mockUser.name,
      address: mockUser.address,
      roles: mockUser.roles,
      type: mockUser.type,
      tasks: mockUser.tasks,
      createdAt: mockUser.createdAt,
      updatedAt: expect.any(Date),
    };

    mockUserRepository.save = jest.fn().mockResolvedValue(updatedUser);

    const result = await service.update(req, updates);

    expect(result).toEqual(updatedUser);
  });
});
