export function colorConversionToPortugueseRecord(
  color: string,
): 'Vermelho' | 'Verde' | 'Azul' | 'Amarelo' | 'Cinza' | 'Lilás' | undefined {
  const colorObject: Record<
    string,
    'Vermelho' | 'Verde' | 'Azul' | 'Amarelo' | 'Cinza' | 'Lilás'
  > = {
    red: 'Vermelho',
    green: 'Verde',
    blue: 'Azul',
    yellow: 'Amarelo',
    gray: 'Cinza',
    purple: 'Lilás',
  };

  return colorObject[color] || undefined;
}
