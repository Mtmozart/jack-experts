import { TaskStatus } from '../enum/taskStatus';
export declare class CreateTaskDto {
    userId: string;
    title: string;
    description: string;
    limitDate: Date;
    status: TaskStatus;
}
