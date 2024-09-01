import { z } from 'zod';

export const userSchema = z.object({
  nome: z
    .string({ required_error: 'O campo Nome é obrigatório.' })
    .min(1, 'O campo do nome é obrigatório.'),
  email: z
    .string({ required_error: 'O campo Email é obrigatório.' })
    .email('Email inválido'),
  username: z
    .string({ required_error: 'O campo Usuário é obrigatório.' })
    .min(1, 'O campo username é obrigatório.'),
  senha: z
    .string({ required_error: 'O campo Senha é obrigatório.' })
    .min(8, 'A senha deve ter pelo menos 8 caracteres'),
  confirmação: z
    .string({ required_error: 'O campo confirmação é obrigatório.' })
    .min(1, 'A confirmação da senha é obrigatório'),
  cep: z
    .string({ required_error: 'O campo CEP é obrigatório.' })
    .length(8, 'CEP deve ter exatamente 8 caracteres'),
  estado: z
    .string({ required_error: 'O campo Estado é obrigatório.' })
    .min(1, 'O campo Estado é obrigatório.'),
  país: z
    .string({ required_error: 'O campo País é obrigatório.' })
    .min(1, 'O campo País é obrigatório.'),
  cidade: z
    .string({ required_error: 'O campo Município é obrigatório.' })
    .min(1, 'O campo Município é obrigatório.'),
  bairro: z
    .string({ required_error: 'O campo Bairro é obrigatório.' })
    .min(1, 'O campo Bairro é obrigatório.'),
  logradouro: z
    .string({ required_error: 'O campo Logradouro é obrigatório.' })
    .min(1, 'O campo Logradouro é obrigatório.'),
  número: z
    .string({ required_error: 'O campo Número é obrigatório.' })
    .min(1, 'O campo Número é obrigatório.'),
  complemento: z.string().optional(),
});
