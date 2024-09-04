import { z } from 'zod';

export const taskSchema = z.object({
  título: z
    .string({ required_error: 'O do título é obrigatório.' })
    .min(1, 'O do título é obrigatório.')
    .max(50, 'O limite de caracteres para o título é de 50.'),
  descrição: z
    .string({ required_error: 'O campo da descrição é obrigatório.' })
    .min(1, 'O campo da descrição é obrigatório.')
    .max(250, 'O limite de caracteres para a descrição é de 250.'),
  data: z.string({ required_error: 'O campo da data é obrigatório.' }),
  status: z
    .string({ required_error: 'O campo do status é obrigatório.' })
    .min(1, 'O campo do status é obrigatório.'),
  cor: z
    .string({ required_error: 'O campo da cor é obrigatório.' })
    .min(1, 'O campo da cor é obrigatório.'),
});

export const taskSchemaSearch = z.object({
  título: z.string().optional(),
  favorita: z.boolean(),
  status: z.string().optional(),
  referência: z.string().optional(),
  ordenar: z.string().optional(),
});
