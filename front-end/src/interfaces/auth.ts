import { StatesEnum } from '../pages/user/register/step/PersonalInfos/utils/States';

export interface IRegister {
  nome: string;
  email: string;
  username: string;
  senha: string;
  confirmação: string;
  logradouro: string;
  número: string;
  bairro: string;
  município: string;
  estado: StatesEnum;
  país: string;
  cep: string;
  complemento?: string;
}

export interface IUpdate {
  nome?: string;
  email?: string;
  username?: string;
  senha?: string;
  confirmação?: string;
  logradouro?: string;
  número?: string;
  bairro?: string;
  município?: string;
  estado?: StatesEnum;
  país?: string;
  cep?: string;
  complemento?: string;
}

export interface ILogin {
  username: string;
  senha: string;
}

export interface ILoginApi {
  username: string;
  password: string;
}

export interface IResetPassword {
  email: string;
}
