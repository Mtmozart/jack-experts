import { ILoginApi } from "../interfaces/auth";
import { post } from "./api.service";

export function login(data: ILoginApi) {
  return post(`auth`, { data });
}
