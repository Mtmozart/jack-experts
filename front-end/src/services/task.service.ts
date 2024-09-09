import {
  ITaskCreateApi,
  ITaskSearchApi,
  ITaskSearchStatusCount,
  ITaskUpdateApi,
} from '../interfaces/task';
import { formatterQueryParams } from '../utils/formateQuery';
import { del, get, patch, post, put } from './api.service';

export async function createTask(data: ITaskCreateApi) {
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

export async function favoriteTask(id: string, { params, headers }: any = {}) {
  return patch(`task/favorite/${id}`, { params, headers });
}

export async function deleteTask(id: string, { params, headers }: any = {}) {
  return del(`task/${id}`, { params, headers });
}

export async function findTaskByFavorite(
  id: string,
  { params, headers }: any = {},
) {
  return get(`task/find-favorite/${id}`, { params, headers });
}

export async function findTaskByStatus(
  status: string,
  id: string,
  { params, headers }: any = {},
) {
  const queryParams = new URLSearchParams();
  queryParams.append('status', status);
  return get(`task/find-status/${id}?${queryParams.toString()}`, {
    params,
    headers,
  });
}

export async function findTaskAllCount(
  id: string,
  { params, headers }: any = {},
) {
  return get(`task/find-all-count/${id}`, { params, headers });
}
