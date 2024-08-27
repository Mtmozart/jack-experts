import { TaskStatus } from '../enum/taskStatus';
export declare class UpdateTaskDto {
    title: string;
    description: string;
    limitDate: string;
    status: TaskStatus;
}
