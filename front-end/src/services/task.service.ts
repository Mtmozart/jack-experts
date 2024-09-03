import { ITaskCreate } from '../interfaces/task';
import { post } from './api.service';

export async function createTask(data: ITaskCreate) {
  return post(`user`, { data });
}
