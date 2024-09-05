export function referenceConversion(status: string) {
  const statusObject = {
    favorita: 'Favorite',
    status: 'Status',
  };

  if (status in statusObject) {
    return statusObject[status as keyof typeof statusObject];
  }
  return '';
}
