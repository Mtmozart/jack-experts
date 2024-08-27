import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Address } from '../user/entities/address.entity';
import { SendEmailModule } from '../mail/mail.module';
import AuthController from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { SendEmailService } from '../mail/mail.service';
import { SendEmailProvider } from '../mail/mail.provider';
import { EnvConfig } from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Address]),
    JwtModule.register({
      secret: EnvConfig.secret,
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    SendEmailModule,
  ],
  controllers: [AuthController],
  providers: [
    UserService,
    AuthService,
    JwtStrategy,
    SendEmailService,
    SendEmailProvider,
  ],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
