import { TypeUser } from '../../enum/typeUserEnum';
import { CreateAddressDto } from './createAddressDto';
export declare class CreateUserClientDto {
    name: string;
    email: string;
    username: string;
    password: string;
    address: CreateAddressDto;
    type: TypeUser;
}
