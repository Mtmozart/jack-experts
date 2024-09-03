import { IUserCreate, IUserUpdate } from '../interfaces/user';
import { get, post, del, put } from './api.service';

export async function userRegister(data: IUserCreate) {
  return post('user', { data });
}

export function getUser({ params, headers }: any = {}) {
  return get(`user`, { params, headers });
}

export async function deleteUser({ params, headers }: any = {}) {
  return del(`user`, { params, headers });
}
export async function userUpdate(
  data: IUserUpdate,
  { params, headers }: any = {},
) {
  return put('user', { data, params, headers });
}
