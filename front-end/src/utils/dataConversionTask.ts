import { TaskInfosSearchInterface } from '../components/pages/search/step/taskInfo';
import {
  ITaskCreateApi,
  ITaskSearch,
  ITaskSearchApi,
} from '../interfaces/task';
import { TaskInfosInterface } from '../pages/task/create/TaskInfo/taskInfos.zod';
import { colorConversion } from './colorConversion';
import { orderConversion } from './orderConversion';
import { referenceConversion } from './referenceConversion';
import { statusConversion } from './statusConversion';

export function conversionToCreateTaskDataApi(
  data: TaskInfosInterface,
  userId: string | undefined,
): ITaskCreateApi {
  const color = colorConversion(data.cor);
  const status = statusConversion(data.status);
  let dataApi: Date;

  if (data.data == '' || data.data == null) {
    dataApi = new Date();
  } else {
    dataApi = new Date(data.data);
  }

  return {
    userId: userId,
    title: data.título,
    description: data.descrição,
    status: status,
    limitDate: dataApi,
    color: color,
  };
}

export function conversionToSearchTaskDataApi(
  data: TaskInfosSearchInterface,
): ITaskSearchApi {
  let status = '';
  if (data.status == null) {
    status = statusConversion('');
  } else {
    status = statusConversion(data.status);
  }
  let order = '';
  if (data.ordenar == null) {
    order = orderConversion('');
  } else {
    order = orderConversion(data.ordenar);
  }

  let sortBy = '';
  if (data.referência == null) {
    sortBy = referenceConversion('');
  } else {
    sortBy = referenceConversion(data.referência);
  }

  return {
    title: data.título,
    status: status,
    favorite: data.favorita,
    sortOrder: order,
    sortBy: sortBy,
  };
}
