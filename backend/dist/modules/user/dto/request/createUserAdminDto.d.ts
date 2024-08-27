import { TypeUser } from '../../enum/typeUserEnum';
import { CreateAddressDto } from './createAddressDto';
export declare class CreateUserAdminDto {
    name: string;
    email: string;
    username: string;
    password: string;
    address: CreateAddressDto;
    type: TypeUser;
}
