import { JwtPayload } from '../payload/jwt.payload';
import { UserService } from '../../user/user.service';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: JwtPayload): Promise<import("../../user/entities/user.entity").User>;
}
export {};
