import { ILoginApi, IResetPassword } from '../interfaces/auth';
import { get, post, put } from './api.service';

export function login(data: ILoginApi) {
  return post(`auth`, { data });
}
export function resetPassword(data: IResetPassword) {
  return put(`auth/reset-password`, { data });
}
