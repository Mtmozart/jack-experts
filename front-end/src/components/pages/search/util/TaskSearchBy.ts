export const TaskSearchBy = ['Nenhuma', 'Favorita', 'Status'] as const;

export type typeTaskSearchByEnum = (typeof TaskSearchBy)[number];
