import { ILogin, ILoginApi } from '../interfaces/auth';
import { IUserCreate, IUserUpdate } from '../interfaces/user';
import { PersonalInfosInterface } from '../pages/user/register/step/PersonalInfos/utils/personalInfos.zod.interface';
import { PersonalInfosUpdateInterface } from '../pages/user/update/step/PersonalInfos/utils/personalInfos.zod.interface';
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

export function conversionToUpdateDataApi(
  data: PersonalInfosUpdateInterface,
): IUserUpdate {
  return {
    name: data.nome || '',
    username: data.username || '',
    email: data.email || '',
    password: data.senha || '',
    address: {
      cep: data.cep || '',
      state: data.estado || '',
      country: data.país || '',
      city: data.município || '',
      neighborhood: data.bairro || '',
      street: data.logradouro || '',
      number: data.número || '',
      complement: data.complemento || '',
    },
  };
}

export function conversionToLoginDataApi(data: ILogin): ILoginApi {
  return {
    username: data.username,
    password: data.senha,
  };
}
