import { Task } from '../../entity/task.entity';
import { EnumColors } from '../../enum/colorEnum';
import { TaskStatus } from '../../enum/taskStatus';

export default class DefaultResponseTaskDto {
  id: string;
  title: string;
  description: string;
  limitDate: Date;
  color: EnumColors;
  favorite: boolean;
  status: TaskStatus;
  createdAt: Date;
  updateAt?: Date;

  constructor(task: Task) {
    this.id = task.id;
    this.title = task.title;
    this.description = task.description;
    this.favorite = task.favorite;
    this.limitDate = task.limitDate;
    this.status = task.status;
    this.color = task.color;
    this.createdAt = task.createdAt;
    this.updateAt = task.updatedAt;
  }
}
