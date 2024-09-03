import z from 'zod';
import { States, StatesEnum } from './States';

export interface PersonalInfosUpdateInterface {
  nome?: string;
  username?: string;
  email?: string;
  senha?: string;
  cep?: string;
  estado?: string;
  país?: string;
  município?: string;
  bairro?: string;
  logradouro?: string;
  número?: string;
  complemento?: string;
}

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
      .max(50, { message: 'Sua senha deve conter no máximo 50 caracteres' })
      .optional(),
    confirmação: z.string().min(1, { message: 'Confirmação vazia' }).optional(),
    logradouro: z
      .string()
      .min(1, { message: 'Rua vazia' })
      .max(500, { message: 'caracteres demais para este campo' }),
    número: z.string().min(1, { message: 'Rua vazia' }),
    bairro: z
      .string()
      .max(500, { message: 'caracteres demais para este campo' })
      .min(1, { message: 'Bairro vazio' }),
    município: z
      .string()
      .min(1, { message: 'O campo do município está vazio' }),
    estado: z.enum(States, { message: 'Valor inválido' }),
    país: z.string().min(1, { message: 'O campo do município está vazio' }),
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
