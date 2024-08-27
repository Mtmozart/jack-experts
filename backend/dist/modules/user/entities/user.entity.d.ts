import { Address } from './address.entity';
import { TypeUser } from '../enum/typeUserEnum';
import { Task } from 'src/modules/task/entity/task.entity';
export declare class User {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    address: Address;
    roles: string[];
    type: TypeUser;
    tasks: Task[];
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
