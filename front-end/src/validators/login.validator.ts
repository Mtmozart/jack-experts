import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string().min(1, { message: 'username vazio.' }),
  senha: z
    .string()
    .min(1, { message: 'Senha vazia.' })
    .min(8, { message: 'Sua senha deve conter no mínimo 8 caracteres.' })
    .max(50, { message: 'Sua senha deve conter no máximo 50 caracteres.' }),
});
