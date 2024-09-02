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
  cep: string;
  state: string;
  country: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
  roles: string[];
  typeUser: typeUser;
}
