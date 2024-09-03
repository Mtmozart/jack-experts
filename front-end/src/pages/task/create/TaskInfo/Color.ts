export const TaskColor = [
  'Vermelho',
  'Verde',
  'Azul',
  'Amarelo',
  'Cinza',
  'Lilás',
] as const;

export type typeTaskColorEnum = (typeof TaskColor)[number];
