import { IAddress } from './address';
import { typeRoles } from './typeRoles';
import { typeUser } from './typeUser';

export interface IUserCreate {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  address: IAddress;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  address: IAddress;
  isCoordinator: boolean;
  roles: typeRoles[];
  typeUser: typeUser;
}
