import { ITaskCreateApi } from '../interfaces/task';
import { post } from './api.service';

export async function createTask(
  data: ITaskCreateApi,
  { params, headers }: any = {},
) {
  return post(`task`, { data });
}
