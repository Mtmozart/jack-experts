import { AuthService } from './auth.service';
import { EmailDto } from './dto/loginDto';
import { ResetPasswordDto } from './dto/resetDto';
export default class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(data: EmailDto): Promise<{
        token: string;
    }>;
    resetPassword(data: ResetPasswordDto): Promise<{
        message: string;
    }>;
}
