import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserClientDto } from './dto/request/createUserClientDto';
import { JwtPayload } from '../auth/payload/jwt.payload';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UpdateUserDto } from './dto/request/updateUserDto';
import { CreateUserAdminDto } from './dto/request/createUserAdminDto';
export declare class UserService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    validateUser(payload: JwtPayload): Promise<User>;
    create(createUserDto: CreateUserAdminDto | CreateUserClientDto): Promise<any>;
    profile(req: Request): Promise<User>;
    update(req: Request, updates: Partial<UpdateUserDto>): Promise<User>;
    delete(req: Request): Promise<void>;
    findByID(id: string): Promise<User>;
    private findByEmailValidation;
    private findByUsernameValidation;
}
