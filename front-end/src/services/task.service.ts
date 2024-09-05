import {
  ITaskCreateApi,
  ITaskSearch,
  ITaskSearchApi,
  ITaskUpdateApi,
} from '../interfaces/task';
import { formatterQueryParams } from '../utils/formateQuery';
import { get, post, put } from './api.service';

export async function createTask(
  data: ITaskCreateApi,
  { params, headers }: any = {},
) {
  return post(`task`, { data });
}

export async function searchTask(
  data: ITaskSearchApi,
  userId: string | undefined,
  { params, headers }: any = {},
) {
  const queryParams = formatterQueryParams(data);
  return get(`task/search/${userId}?${queryParams}`, { params, headers });
}

export async function updateTask(
  id: string,
  data: ITaskUpdateApi,
  { params, headers }: any = {},
) {
  return put(`task/${id}`, { data, params, headers });
}

export async function findTask(id: string, { params, headers }: any = {}) {
  return get(`task/${id}`, { params, headers });
}
