export function colorConversionToPortugueseByHex(
  hexColor: string,
): 'Vermelho' | 'Verde' | 'Azul' | 'Amarelo' | 'Cinza' | 'Lilás' | undefined {
  const colors: Record<
    string,
    'Vermelho' | 'Verde' | 'Azul' | 'Amarelo' | 'Cinza' | 'Lilás'
  > = {
    '#FF6F6F': 'Vermelho',
    '#9CCC65': 'Verde',
    '#64B5F6': 'Azul',
    '#FFF176': 'Amarelo',
    '#E0E0E0': 'Cinza',
    '#CE93D8': 'Lilás',
  };
  const normalizedHexColor = hexColor.toUpperCase();

  return colors[normalizedHexColor] || undefined;
}
