import { IUserCreate } from '../interfaces/user';
import { get, post, remove } from './api.service';

export async function userRegister(data: IUserCreate) {
  return post('user', { data });
}

export function getUser({ params, headers }: any = {}) {
  return get(`user`, { params, headers });
}

export function deleteUser({ params, headers }: any = {}) {
  return remove(`user`, { params, headers });
}
