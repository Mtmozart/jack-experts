import { CreateTaskDto } from './dto/createTaskDto';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/updateTaskDto';
import { SearchDto } from './dto/requestSearchDto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTask: CreateTaskDto): Promise<import("./entity/task.entity").Task>;
    findOne(id: string): Promise<import("./entity/task.entity").Task>;
    findAll(id: string): Promise<import("./entity/task.entity").Task[]>;
    update(id: string, updates: UpdateTaskDto): Promise<import("./entity/task.entity").Task>;
    delete(id: string): Promise<void>;
    favorite(id: string): Promise<boolean>;
    search(userId: string, query: SearchDto): Promise<import("./entity/task.entity").Task[]>;
}
