import { typeTaskSearchByEnum } from '../components/pages/search/util/TaskSearchBy';
import { typeTaskSearchOrderEnum } from '../components/pages/search/util/TaskSearchOrder';
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

export interface ITask {
  id: string;
  title: string;
  description: string;
  limitDate: Date;
  status: string;
  favorite: boolean;
  color: string;
}

export interface ITaskUpdateApi {
  title?: string;
  description?: string;
  limitDate?: Date;
  status?: string;
  favorite?: string;
  color?: string;
}

export interface ITaskSearch {
  título?: string;
  status?: typeTaskStatusEnum;
  favorita?: boolean;
  ordenar?: typeTaskSearchOrderEnum;
  referência?: typeTaskSearchByEnum;
}

export interface ITaskSearchApi {
  title?: string;
  status?: string;
  favorite?: string;
  sortOrder?: string;
  sortBy?: string;
}

export interface ITaskSearchStatusCount {
  status?: typeTaskStatusEnum;
}
