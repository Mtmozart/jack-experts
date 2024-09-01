import { z } from 'zod';

export const addressSchema = z.object({
  cep: z
    .string({ required_error: 'O campo CEP é obrigatório.' })
    .min(1, 'O campo CEP é obrigatório.')
    .min(8, { message: 'CEP inválido' })
    .max(9, { message: 'CEP inválido' }),
  state: z
    .string({ required_error: 'O campo Estado é obrigatório.' })
    .min(1, 'O campo Estado é obrigatório.'),
  country: z
    .string({ required_error: 'O campo País é obrigatório.' })
    .min(1, 'O campo País é obrigatório.'),
  city: z
    .string({ required_error: 'O campo Município é obrigatório.' })
    .min(1, 'O campo Município é obrigatório.'),
  neighborhood: z
    .string({ required_error: 'O campo Bairro é obrigatório.' })
    .min(1, 'O campo Bairro é obrigatório.'),
  street: z
    .string({ required_error: 'O campo Logradouro é obrigatório.' })
    .min(1, 'O campo Logradouro é obrigatório.'),
  number: z
    .string({ required_error: 'O campo Número é obrigatório.' })
    .min(1, 'O campo Número é obrigatório.'),
  complement: z.string().optional(),
});
