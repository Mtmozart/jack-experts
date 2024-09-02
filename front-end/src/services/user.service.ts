import { IUserCreate } from '../interfaces/user';
import { get, post } from './api.service';

export async function userRegister(data: IUserCreate) {
  return post('user', { data });
}

export function getUser({ params, headers }: any = {}) {
  console.log(params, headers)
  return get(`user`, { params, headers });
}
