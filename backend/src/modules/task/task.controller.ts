import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CreateTaskDto } from './dto/request/createTaskDto';
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/request/updateTaskDto';
import { SearchDto } from './dto/request/requestSearchDto';
import { ChangeColorTaskDto } from './dto/request/changeColorTaskDto';
import DefaultResponseTaskDto from './dto/response/defaultResponseTaskDto';

@ApiTags('task')
@Controller('task')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@ApiBearerAuth('JWT-auth')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Post()
  @Roles('client')
  async create(@Body() createTask: CreateTaskDto) {
    return new DefaultResponseTaskDto(
      await this.taskService.create(createTask),
    );
  }
  @Get(':id')
  @Roles('client')
  async findOne(@Param('id') id: string) {
    return await this.taskService.findOne(id);
  }
  @Get('findAll/:userId')
  @Roles('client')
  async findAll(@Param('userId') id: string) {
    const tasks = await this.taskService.findAllTasks(id);
    return tasks.map((t) => new DefaultResponseTaskDto(t));
  }

  @Put(':id')
  @Roles('client')
  async update(@Param('id') id: string, @Body() updates: UpdateTaskDto) {
    return await this.taskService.update(id, updates);
  }
  @Delete(':id')
  @Roles('client')
  async delete(@Param('id') id: string) {
    return await this.taskService.delete(id);
  }

  @Patch('favorite/:id')
  @Roles('client')
  async favorite(@Param('id') id: string) {
    return await this.taskService.favorite(id);
  }
  @Patch('change-color/:id')
  @Roles('client')
  async changeColor(@Param('id') id: string, color: ChangeColorTaskDto) {
    return await this.taskService.changeColor(id, color);
  }

  @Get('search/:userId')
  @Roles('client')
  async search(@Param('userId') userId: string, @Query() query: SearchDto) {
    const tasks = await this.taskService.search(userId, query);
    if (tasks.length > 0) {
      return tasks.map((t) => new DefaultResponseTaskDto(t));
    }
    return;
  }
}
