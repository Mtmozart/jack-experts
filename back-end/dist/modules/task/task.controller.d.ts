import { CreateTaskDto } from './dto/request/createTaskDto';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/request/updateTaskDto';
import { SearchDto } from './dto/request/requestSearchDto';
import { ChangeColorTaskDto } from './dto/request/changeColorTaskDto';
import DefaultResponseTaskDto from './dto/response/defaultResponseTaskDto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTask: CreateTaskDto): Promise<DefaultResponseTaskDto>;
    findOne(id: string): Promise<import("./entity/task.entity").Task>;
    findAll(id: string): Promise<DefaultResponseTaskDto[]>;
    update(id: string, updates: UpdateTaskDto): Promise<import("./entity/task.entity").Task>;
    delete(id: string): Promise<void>;
    favorite(id: string): Promise<boolean>;
    changeColor(id: string, color: ChangeColorTaskDto): Promise<boolean>;
    search(userId: string, query: SearchDto): Promise<DefaultResponseTaskDto[]>;
}
