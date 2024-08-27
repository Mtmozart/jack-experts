import { CreateTaskDto } from './dto/createTaskDto';
import { Task } from './entity/task.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { UpdateTaskDto } from './dto/updateTaskDto';
import { SearchDto } from './dto/requestSearchDto';
export declare class TaskService {
    private readonly taskRepository;
    private readonly userService;
    constructor(taskRepository: Repository<Task>, userService: UserService);
    create(createTask: CreateTaskDto): Promise<Task>;
    findAllTasks(userId: string): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    update(id: string, updates: UpdateTaskDto): Promise<Task>;
    delete(id: string): Promise<void>;
    favorite(id: string): Promise<boolean>;
    search(userId: string, query: SearchDto): Promise<Task[]>;
}
