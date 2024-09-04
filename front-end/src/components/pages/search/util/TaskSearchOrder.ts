export const TaskSearchOrder = ['Nenhuma', 'Crescente', 'Decrescente'] as const;

export type typeTaskSearchOrderEnum = (typeof TaskSearchOrder)[number];
