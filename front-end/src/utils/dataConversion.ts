import { ILogin, ILoginApi } from '../interfaces/auth';
import { IUserCreate } from '../interfaces/user';
import { PersonalInfosInterface } from '../pages/auth/register/step/PersonalInfos/utils/personalInfos.zod.interface';

export function conversionToCreateDataApi(
  data: PersonalInfosInterface,
): IUserCreate {
  return {
    name: data.nome,
    username: data.username,
    email: data.email,
    password: data.senha,
    address: {
      cep: data.cep,
      state: data.estado,
      country: data.país,
      city: data.município,
      neighborhood: data.bairro,
      street: data.logradouro,
      number: data.número,
      complement: data.complemento,
    },
  };
}

export function conversionToLoginDataApi(
  data: ILogin,
): ILoginApi {
  return {    
    username: data.username,
    password: data.senha    
  };
}
