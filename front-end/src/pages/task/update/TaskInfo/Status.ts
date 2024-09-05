export const TaskStatus = [
  'Nenhum',
  'Criado',
  'Pendente',
  'Progresso',
  'Completa',
  'Cancelada',
] as const;

export type typeTaskStatusEnum = (typeof TaskStatus)[number];
