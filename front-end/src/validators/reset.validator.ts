import { z } from 'zod';

export const ResetSchema = z.object({
  email: z
    .string({ required_error: 'O campo Email é obrigatório.' })
    .email('Email inválido'),
});
