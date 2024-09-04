import {
  ITaskCreateApi,
  ITaskSearch,
  ITaskSearchApi,
} from '../interfaces/task';
import { formatterQueryParams } from '../utils/formateQuery';
import { get, post } from './api.service';

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
