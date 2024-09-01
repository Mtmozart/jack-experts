import z from 'zod';
import { States, StatesEnum } from './States';

export type PersonalInfosInterface = {
  nome: string;
  username: string;
  email: string;
  senha: string;
  confirmação: string;
  logradouro: string;
  número: number;
  bairro: string;
  localidade: string;
  estado: StatesEnum;
  cep: string;
  complemento: string;
};

export const PersonalInfosSchema = z
  .object({
    nome: z.string().min(2, { message: 'Nome não pode ser vazio' }),
    email: z
      .string()
      .min(1, { message: 'Email vazio' })
      .email({ message: 'Email inválido' }),
    username: z.string().min(1, { message: 'Username vazio' }),
    senha: z
      .string()
      .min(1, { message: 'Senha vazia' })
      .min(8, { message: 'Sua senha deve conter no mínimo 8 caracteres' })
      .max(50, { message: 'Sua senha deve conter no máximo 50 caracteres' }),
    confirmação: z.string().min(1, { message: 'Confirmação vazia' }),
    logradouro: z
      .string()
      .min(1, { message: 'Rua vazia' })
      .max(500, { message: 'caracteres demais para este campo' }),
    número: z.string().min(1, { message: 'Rua vazia' }),
    bairro: z
      .string()
      .max(500, { message: 'caracteres demais para este campo' })
      .min(1, { message: 'Bairro vazio' }),
    localidade: z.string().min(1, { message: 'Bairro vazio' }),
    estado: z.enum(States, { message: 'Valor inválido' }),
    CEP: z
      .string()
      .min(1, { message: 'CEP vazio' })
      .min(8, { message: 'CEP inválido' })
      .max(9, { message: 'CEP inválido' }),
    complemento: z.string().optional(),
  })
  .refine(
    ({ senha, confirmação }) => {
      return senha === confirmação;
    },
    {
      message: 'As senhas não coincidem',
      path: ['confirm'],
    },
  );
