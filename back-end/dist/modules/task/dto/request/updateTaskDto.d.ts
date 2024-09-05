import { TaskStatus } from '../../enum/taskStatus';
import { EnumColors } from '../../enum/colorEnum';
export declare class UpdateTaskDto {
    title: string;
    description: string;
    limitDate: string;
    status: TaskStatus;
    color: EnumColors;
}
