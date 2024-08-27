import { Request } from 'express';
import { CreateUserClientDto } from './dto/request/createUserClientDto';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/request/updateUserDto';
import { CreateUserAdminDto } from './dto/request/createUserAdminDto';
import { DefaultUserClientDto } from './dto/response/DefaultUserDto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserClientDto: CreateUserClientDto): Promise<any>;
    createAdmin(createUserAdmin: CreateUserAdminDto): Promise<DefaultUserClientDto>;
    profile(request: Request): Promise<DefaultUserClientDto>;
    update(req: Request, update: UpdateUserDto): Promise<DefaultUserClientDto>;
    delete(request: Request): Promise<void>;
}
