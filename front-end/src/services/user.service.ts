import { IUserCreate } from '../interfaces/user';
import { post } from './api.service';

export async function userRegister(data: IUserCreate) {
  return post('user', { data });
}
