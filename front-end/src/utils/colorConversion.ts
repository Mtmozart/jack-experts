export function colorConversion(color: string) {
  const colors = {
    Vermelho: '#FF6F6F',
    Verde: '#9CCC65',
    Azul: '#64B5F6',
    Amarelo: '#FFF176',
    Cinza: '#E0E0E0',
    Lilás: '#CE93D8',
  };

  if (color in colors) {
    return colors[color as keyof typeof colors];
  }

  return colors.Vermelho;
}
