export function orderConversion(status: string) {
  const statusObject = {
    Crescente: 'ASC',
    Decrescente: 'DESC',
  };

  if (status in statusObject) {
    return statusObject[status as keyof typeof statusObject];
  }

  return '';
}
