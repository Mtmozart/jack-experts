import { ILoginApi } from '../interfaces/auth';
import { get, post } from './api.service';

export function login(data: ILoginApi) {
  return post(`auth`, { data });
}
