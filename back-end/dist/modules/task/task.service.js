"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const task_entity_1 = require("./entity/task.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
let TaskService = class TaskService {
    constructor(taskRepository, userService) {
        this.taskRepository = taskRepository;
        this.userService = userService;
    }
    async create(createTask) {
        try {
            const user = await this.userService.findByID(createTask.userId);
            const task = new task_entity_1.Task();
            task.user = user;
            return await this.taskRepository.save({ ...task, ...createTask });
        }
        catch (error) {
            throw error;
        }
    }
    async findAllTasks(userId) {
        try {
            return this.taskRepository.find({
                where: { user: { id: userId } },
                relations: ['user'],
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const task = this.taskRepository.findOne({
                where: { id: id },
            });
            if (!task) {
                throw new common_1.NotFoundException('Task não encontrada');
            }
            return task;
        }
        catch (error) { }
    }
    async update(id, updates) {
        try {
            const task = await this.findOne(id);
            Object.assign(task, updates);
            return await this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            await this.findOne(id);
            await this.taskRepository.delete(id);
        }
        catch (error) {
            throw error;
        }
    }
    async favorite(id) {
        try {
            const task = await this.findOne(id);
            task.favorite = !task.favorite;
            await this.taskRepository.save(task);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async changeColor(id, color) {
        try {
            const task = await this.findOne(id);
            task.color = color.color;
            await this.taskRepository.save(task);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async search(userId, query) {
        try {
            const { title, status, favorite, sortBy, sortOrder } = query;
            const queryBuilder = this.taskRepository
                .createQueryBuilder('t')
                .leftJoinAndSelect('t.user', 'user')
                .where('t.userId = :userId', { userId });
            if (title) {
                queryBuilder.andWhere('t.title LIKE :title', { title: `%${title}%` });
            }
            if (status) {
                queryBuilder.andWhere('t.status = :status', { status });
            }
            if (favorite !== undefined) {
                queryBuilder.andWhere('t.favorite = :favorite', { favorite });
            }
            if (sortBy) {
                queryBuilder.orderBy(`t.${sortBy}`, sortOrder === 'DESC' ? 'DESC' : 'ASC');
            }
            return await queryBuilder.getMany();
        }
        catch (error) {
            throw error;
        }
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        user_service_1.UserService])
], TaskService);
//# sourceMappingURL=task.service.js.map