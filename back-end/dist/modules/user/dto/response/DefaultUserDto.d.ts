import { User } from '../../entities/user.entity';
export declare class DefaultUserClientDto {
    id: string;
    name: string;
    email: string;
    username: string;
    cep: string;
    state: string;
    country: string;
    city: string;
    neighborhood: string;
    street: string;
    number: string;
    complement?: string;
    constructor(user: User);
}
