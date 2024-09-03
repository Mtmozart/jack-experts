export const TaskStatus = [
  'Criado',
  'Pendente',
  'Progresso',
  'Completa',
  'Cancelada',
] as const;

export type typeTaskStatusEnum = (typeof TaskStatus)[number];
