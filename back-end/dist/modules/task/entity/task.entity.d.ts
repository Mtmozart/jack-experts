import { TaskStatus } from '../enum/taskStatus';
import { User } from 'src/modules/user/entities/user.entity';
import { EnumColors } from '../enum/colorEnum';
export declare class Task {
    id: string;
    title: string;
    description: string;
    limitDate: Date;
    color: EnumColors;
    status: TaskStatus;
    favorite: boolean;
    user: User;
    createdAt: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
