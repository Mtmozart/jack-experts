import { StatesEnum } from '../pages/auth/register/step/PersonalInfos/utils/States';

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
export interface ILogin {
  username: string;
  senha: string;
}

export interface ILoginApi {
  username: string;
  password: string;
}