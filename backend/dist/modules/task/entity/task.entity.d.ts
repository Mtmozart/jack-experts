import { TaskStatus } from '../enum/taskStatus';
import { User } from 'src/modules/user/entities/user.entity';
export declare class Task {
    id: string;
    title: string;
    description: string;
    limitDate: Date;
    status: TaskStatus;
    favorite: boolean;
    user: User;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
