import { z } from 'zod';
import { TaskColor, typeTaskColorEnum } from './Color';
import { TaskStatus, typeTaskStatusEnum } from './Status';

export type TaskInfosInterface = {
  título: string;
  descrição: string;
  data: string;
  status: typeTaskStatusEnum;
  cor: typeTaskColorEnum;
};


export const TaskInfosSchema = z.object({
  título: z
    .string()
    .min(1, { message: 'Título não pode ser vazio' })
    .max(50, { message: 'Título não pode ter mais de 50 caracteres' }),
  descrição: z
    .string()
    .min(1, { message: 'Descrição não pode ser vazia' })
    .max(250, { message: 'Descrição não pode ter mais de 250 caracteres' }),
  data: z.string().min(1, { message: 'Data não pode ser vazia' }),
  status: z.enum(TaskStatus, { message: 'Status inválido' }),
  cor: z.enum(TaskColor, { message: 'Cor inválida' }),
});
