import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { EmailDto } from './dto/loginDto';
import { JwtService } from '@nestjs/jwt';
import { SendEmailService } from '../mail/mail.service';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    private readonly emailService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService, emailService: SendEmailService);
    authenticate(data: EmailDto): Promise<{
        token: string;
    }>;
    resetPassword(email: string): Promise<{
        message: string;
    }>;
    private generateRandomCode;
}
