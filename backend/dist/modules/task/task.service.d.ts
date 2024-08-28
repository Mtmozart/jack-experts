import { CreateTaskDto } from './dto/request/createTaskDto';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { UpdateTaskDto } from './dto/request/updateTaskDto';
import { SearchDto } from './dto/request/requestSearchDto';
import { ChangeColorTaskDto } from './dto/request/changeColorTaskDto';
export declare class TaskService {
    private readonly taskRepository;
    private readonly userService;
    constructor(taskRepository: Repository<Task>, userService: UserService);
    create(createTask: CreateTaskDto): Promise<{
        userId: string;
        title: string;
        description: string;
        limitDate: Date;
        status: import("./enum/taskStatus").TaskStatus;
        color: import("./enum/colorEnum").EnumColors;
        id: string;
        favorite: boolean;
        user: import("../user/entities/user.entity").User;
        createdAt: Date;
        updatedAt?: Date;
        deletedAt?: Date;
    } & Task>;
    findAllTasks(userId: string): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, updates: UpdateTaskDto): Promise<Task>;
    delete(id: string): Promise<void>;
    favorite(id: string): Promise<boolean>;
    changeColor(id: string, color: ChangeColorTaskDto): Promise<boolean>;
    search(userId: string, query: SearchDto): Promise<Task[]>;
}
