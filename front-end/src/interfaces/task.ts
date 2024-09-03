import { typeTaskColor } from './typeTaskColor';
import { typeTaskStatus } from './typeTaskStatus';

export interface ITaskCreate {
  userId: string;
  title: string;
  description: string;
  limitDate: string;
  status: typeTaskStatus;
  color: typeTaskColor;
}
