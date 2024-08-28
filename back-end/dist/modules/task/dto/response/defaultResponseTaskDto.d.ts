import { Task } from '../../entity/task.entity';
import { EnumColors } from '../../enum/colorEnum';
import { TaskStatus } from '../../enum/taskStatus';
export default class DefaultResponseTaskDto {
    id: string;
    title: string;
    description: string;
    limitDate: Date;
    color: EnumColors;
    favorite: boolean;
    status: TaskStatus;
    createdAt: Date;
    updateAt?: Date;
    constructor(task: Task);
}
