import { z } from 'zod';
import {
  TaskStatus,
  typeTaskStatusEnum,
} from '../../../../pages/task/create/TaskInfo/Status';
import {
  TaskSearchOrder,
  typeTaskSearchOrderEnum,
} from '../util/TaskSearchOrder';
import { TaskSearchBy, typeTaskSearchByEnum } from '../util/TaskSearchBy';

export type TaskInfosSearchInterface = {
  título?: string;
  status?: typeTaskStatusEnum;
  favorita?: string;
  ordenar?: typeTaskSearchOrderEnum;
  referência?: typeTaskSearchByEnum;
};

export const taskSchemaSearch = z.object({
  título: z.string().optional(),
  status: z.enum(TaskStatus).optional(),
  favorita: z.boolean().optional(),
  ordenar: z.enum(TaskSearchOrder).optional(),
  referência: z.enum(TaskSearchBy).optional(),
});
