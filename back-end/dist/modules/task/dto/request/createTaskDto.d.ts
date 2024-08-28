import { TaskStatus } from '../../enum/taskStatus';
import { EnumColors } from '../../enum/colorEnum';
export declare class CreateTaskDto {
    userId: string;
    title: string;
    description: string;
    limitDate: Date;
    status: TaskStatus;
    color: EnumColors;
}
