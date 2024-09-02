import { IAddress, IAddressCreate } from './address';
import { typeRoles } from './typeRoles';
import { typeUser } from './typeUser';

export interface IUserCreate {
  name: string;
  username: string;
  email: string;
  password: string;
  address: IAddressCreate;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  address: IAddress;
  roles: string[];
  typeUser: typeUser;
}
