import {
  TaskColor,
  typeTaskColorEnum,
} from '../pages/task/create/TaskInfo/Color';
import { typeTaskStatusEnum } from '../pages/task/create/TaskInfo/Status';
import { typeTaskStatus } from './typeTaskStatus';

export interface ITaskCreate {
  título: string;
  descrição: string;
  data: string;
  status: typeTaskStatusEnum;
  cor: typeTaskColorEnum;
}

export interface ITaskCreateApi {
  userId: string | undefined;
  title: string;
  description: string;
  limitDate: Date;
  status: string;
  color: string;
}
